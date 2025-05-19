'use client';

import { motion } from 'framer-motion';
import CategorySpendingChart from '../../../components/CategorySpendingChart';
import BudgetingAssistant from '../../../components/BudgetingAssistant';
import { mockData } from '../../../lib/mockData';

export default function BudgetPage() {
  return (
    <div className="space-y-8">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
         className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <CategorySpendingChart data={mockData.categorySpending} />
        <BudgetingAssistant budgets={mockData.budgets} />
      </motion.div>
     
    </div>
  );
}