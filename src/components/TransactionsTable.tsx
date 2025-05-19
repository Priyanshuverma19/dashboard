'use client';

import { useState } from 'react';
import TransactionRow from './TransactionRow';

interface TransactionsTableProps {
  transactions: {
    date: string;
    description: string;
    type: string;
    category: string;
    amount: number;
  }[];
}

export default function TransactionsTable({ transactions }: TransactionsTableProps) {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredTransactions = transactions.filter((t) => {
    const matchesFilter = filter === 'All' || t.type === filter;
    const matchesSearch = t.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-4 rounded-xl glass">
      <h2 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
        Recent Transactions
      </h2>
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex gap-2">
          {['All', 'Credit', 'Debit'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full transition-colors ${
                filter === f
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-[var(--primary-hover)] hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--glass-bg)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] backdrop-blur-sm"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[var(--text-secondary)]">
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.slice(0, 10).map((transaction, index) => (
              <TransactionRow key={index} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}