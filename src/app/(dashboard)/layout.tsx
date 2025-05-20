'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FinancialOverview from '../../components/FinancialOverview';
import { mockData, Financials } from '../../lib/mockData';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [financials, setFinancials] = useState<Financials | undefined>(undefined);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchFinancials = async () => {
      // Replace this with an actual API call, e.g., fetch('/api/financials')
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
      setFinancials(mockData.financials); // Replace with API response
    };

    fetchFinancials();
  }, []);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {financials ? (
          <FinancialOverview financials={financials} />
        ) : (
          <div className="p-4 rounded-xl glass text-[var(--foreground)]">
            {financials === undefined ? 'Loading financial data...' : 'Financial data is not available.'}
          </div>
        )}
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