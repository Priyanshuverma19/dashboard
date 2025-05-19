'use client';

import { motion } from 'framer-motion';
import FinancialOverview from '../../../components/FinancialOverview';
import CalendarTracker from '../../../components/CalendarTracker';
import { mockData } from '../../../lib/mockData';

export default function CalendarPage() {
  return (
    <div className="space-y-8">
    
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <CalendarTracker dailySpending={mockData.dailySpending} />
      </motion.div>
    </div>
  );
}