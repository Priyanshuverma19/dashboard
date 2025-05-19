'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, DollarSign, Calendar, PieChart } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Transactions', href: '/transactions', icon: DollarSign },
  { name: 'Budget', href: '/budget', icon: PieChart },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 h-full z-30 glass w-16 lg:w-64 transition-all duration-300">
      <div className="p-4">
        <h2 className="text-xl font-bold hidden lg:block text-[var(--foreground)]">
          Finance
        </h2>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center p-2 mx-2 rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--foreground)] hover:bg-[var(--primary-hover)] hover:text-white'
                }`}
              >
                <item.icon size={24} className="min-w-[24px]" />
                <span className="hidden lg:block ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}