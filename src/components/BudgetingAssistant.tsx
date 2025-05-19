'use client';

import { motion } from 'framer-motion';

interface BudgetingAssistantProps {
  budgets: { category: string; budget: number; spent: number }[];
}

export default function BudgetingAssistant({ budgets }: BudgetingAssistantProps) {
  return (
    <div className="p-4 rounded-xl glass">
      <h2 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
        Monthly Budget
      </h2>
      <div className="space-y-4">
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.budget) * 100;
          return (
            <div key={budget.category}>
              <div className="flex justify-between mb-1">
                <span className="text-[var(--foreground)]">{budget.category}</span>
                <span className="font-mono text-[var(--text-secondary)]">
                  ${budget.spent} / ${budget.budget}
                </span>
              </div>
              <motion.div
                className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1 }}
              >
                <div
                  className={`h-2.5 rounded-full ${
                    percentage > 100 ? 'bg-red-500' : 'bg-green-500'
                  }`}
                  style={{ width: '100%' }}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}