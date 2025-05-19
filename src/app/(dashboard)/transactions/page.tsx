'use client';

import { motion } from 'framer-motion';
import TransactionsTable from '../../../components/TransactionsTable';
import { mockData } from '../../../lib/mockData';

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <TransactionsTable transactions={mockData.transactions} />
      </motion.div>
    </div>
  );
}