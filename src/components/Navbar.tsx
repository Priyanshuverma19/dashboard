'use client';

import Image from 'next/image';
import { Bell, Sun, Moon } from 'lucide-react';
import { mockData } from '../lib/mockData';
import { useTheme } from '../lib/ThemeContext';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center p-4 glass ml-16 sm:ml-16 lg:ml-64">
      <div className="flex items-center gap-4">
      
        <div>
          <h1 className="text-lg font-semibold">Hello, {mockData.user.name}</h1>
          <p className="text-sm text-[var(--text-secondary)]">
            Savings Goal: 60% (Current: {mockData.financials.savingsRatio}%)
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-[var(--primary-hover)] transition-colors">
          <Bell size={24} className="text-[var(--foreground)]" />
        </button>
      {isMounted ? (
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-[var(--primary-hover)] transition-colors"
          >
            {darkMode ? (
              <Sun size={24} className="text-[var(--foreground)]" />
            ) : (
              <Moon size={24} className="text-[var(--foreground)]" />
            )}
          </button>
        ) : null}
          <Image
          src={mockData.user.avatar}
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full border-2 border-[var(--primary)]"
          priority
        />
      </div>
    </nav>
  );
}

