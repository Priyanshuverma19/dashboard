'use client';

import { useState } from 'react';
import FinancialCard from './FinancialCard';

interface FinancialOverviewProps {
  financials: {
    totalBalance: number;
    monthlyIncome: number;
    monthlyExpenses: number;
    savingsRatio: number;
  };
}

export default function FinancialOverview({ financials }: FinancialOverviewProps) {
  const [view, setView] = useState('Monthly');

  return (
    <div className="p-4 glass rounded-xl">
      <div className="flex gap-2 mb-4">
        {['Monthly', 'Quarterly', 'Year-to-date'].map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-3 py-1 rounded-full transition-colors ${
              view === v
                ? 'bg-[var(--primary)] text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-[var(--primary-hover)] hover:text-white'
            }`}
          >
            {v}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <FinancialCard title="Total Balance" value={financials.totalBalance} />
        <FinancialCard title="Monthly Income" value={financials.monthlyIncome} change={10} />
        <FinancialCard title="Monthly Expenses" value={financials.monthlyExpenses} change={-15} />
        <FinancialCard title="Savings Ratio" value={financials.savingsRatio} />
      </div>
    </div>
  );
}