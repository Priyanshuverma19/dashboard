'use client';

import { motion } from 'framer-motion';
import FinancialOverview from '../components/FinancialOverview';
import ExpenseVsIncomeChart from '../components/ExpenseVsIncomeChart';
import CategorySpendingChart from '../components/CategorySpendingChart';
import Notifications from '../components/Notifications';
import { mockData } from '../lib/mockData';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FinancialOverview financials={mockData.financials} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <ExpenseVsIncomeChart data={mockData.expenseVsIncome} />
        <CategorySpendingChart data={mockData.categorySpending} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Notifications notifications={mockData.notifications} />
      </motion.div>
    </div>
  );
}