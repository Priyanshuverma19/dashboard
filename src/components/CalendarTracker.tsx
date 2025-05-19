'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CalendarTrackerProps {
  dailySpending: { date: string; amount: number; transactions: { description: string; amount: number; category: string }[] }[];
}

export default function CalendarTracker({ dailySpending }: CalendarTrackerProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const daysInMonth = Array.from({ length: 31 }, (_, i) => {
    const day = (i + 1).toString().padStart(2, '0');
    const date = `2025-05-${day}`;
    const spending = dailySpending.find((d) => d.date === date) || { date, amount: 0, transactions: [] };
    return spending;
  });

  const selectedDay = selectedDate
    ? dailySpending.find((d) => d.date === selectedDate)
    : null;

  return (
    <div className="p-4 rounded-xl glass">
      <h2 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
        Daily Spending (May 2025)
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="text-center font-semibold text-[var(--text-secondary)]">
            {day}
          </div>
        ))}
        {daysInMonth.map((day, index) => {
          const dayNumber = index + 1;
          const dateStr = day.date;
          const isFirstDay = dayNumber === 1;
          const firstDayOffset = (new Date('2025-05-01').getDay() + 6) % 7;
          const gridColumnStart = isFirstDay ? firstDayOffset + 1 : undefined;

          return (
            <motion.div
              key={dateStr}
              className={`p-2 text-center rounded-lg cursor-pointer transition-colors ${
                day.amount > 0
                  ? 'bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
              } ${selectedDate === dateStr ? 'ring-2 ring-[var(--primary)]' : ''}`}
              style={{ gridColumnStart }}
              onClick={() => setSelectedDate(dateStr)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-[var(--foreground)]">{dayNumber}</div>
              {day.amount > 0 && (
                <div className="text-xs font-mono text-red-500">${day.amount}</div>
              )}
            </motion.div>
          );
        })}
      </div>
      {selectedDay && selectedDay.transactions.length > 0 && (
        <div className="mt-4">
          <h3 className="text-md font-semibold text-[var(--foreground)]">
            Transactions on {selectedDay.date}
          </h3>
          <ul className="mt-2 space-y-2">
            {selectedDay.transactions.map((txn, index) => (
              <li key={index} className="p-2 rounded-lg glass">
                {txn.description}: ${txn.amount} ({txn.category})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}