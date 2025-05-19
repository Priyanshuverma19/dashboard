'use client';

import FinancialOverview from '@/components/FinancialOverview';
import { motion } from 'framer-motion';


interface DashboardLayoutProps {
  financials: any; // Replace 'any' with the proper type for financials if you have a type definition
  children: React.ReactNode;
}

export default function DashboardLayout({ financials, children }: DashboardLayoutProps) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FinancialOverview financials={financials} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}