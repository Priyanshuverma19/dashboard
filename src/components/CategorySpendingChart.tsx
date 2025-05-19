'use client';

import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface CategorySpendingChartProps {
  data: {
    labels: string[];
    data: number[];
    subcategories: Record<string, Record<string, number>>;
    backgroundColor: string[];
  };
}

export default function CategorySpendingChart({ data }: CategorySpendingChartProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const mainChartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.data,
        backgroundColor: data.backgroundColor,
      },
    ],
  };

  const subChartData = selectedCategory
    ? {
        labels: Object.keys(data.subcategories[selectedCategory]),
        datasets: [
          {
            data: Object.values(data.subcategories[selectedCategory]),
            backgroundColor: data.backgroundColor,
          },
        ],
      }
    : null;

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'right' as const, labels: { color: 'var(--foreground)' } },
    },
    onClick: (_: any, elements: any[]) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const category = data.labels[index];
        setSelectedCategory(category);
      }
    },
  };

  return (
    <div className="p-4 rounded-xl glass">
      <h2 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
        {selectedCategory ? `${selectedCategory} Spending Breakdown` : 'Category-Wise Spending'}
      </h2>
      {selectedCategory && (
        <button
          onClick={() => setSelectedCategory(null)}
          className="mb-4 px-3 py-1 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--primary-hover)] transition-colors"
        >
          Back to Main Categories
        </button>
      )}
      {selectedCategory && subChartData ? (
        <Pie data={subChartData} options={options} />
      ) : (
        <Pie data={mainChartData} options={options} />
      )}
    </div>
  );
}