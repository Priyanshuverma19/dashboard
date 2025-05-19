'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ExpenseVsIncomeChartProps {
  data: {
    labels: string[];
    income: number[];
    expenses: number[];
  };
}

export default function ExpenseVsIncomeChart({ data }: ExpenseVsIncomeChartProps) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Income',
        data: data.income,
        borderColor: 'var(--primary)',
        fill: true,
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
      },
      {
        label: 'Expenses',
        data: data.expenses,
        borderColor: '#f87171',
        fill: true,
        backgroundColor: 'rgba(248, 113, 113, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const, labels: { color: 'var(--foreground)' } },
    },
    scales: {
      y: { beginAtZero: true, ticks: { color: 'var(--foreground)' } },
      x: { ticks: { color: 'var(--foreground)' } },
    },
  };

  return (
    <div className="p-4 rounded-xl glass">
      <h2 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
        Expense vs Income
      </h2>
      <Line data={chartData} options={options} />
    </div>
  );
}