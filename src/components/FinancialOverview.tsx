import FinancialCard from './FinancialCard';
import { Financials } from '../lib/mockData';

interface FinancialOverviewProps {
  financials: Financials; // Type matches the Financials interface
}

export default function FinancialOverview({ financials }: FinancialOverviewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <FinancialCard title="Total Balance" value={financials.totalBalance} />
      <FinancialCard title="Monthly Income" value={financials.monthlyIncome} />
      <FinancialCard title="Monthly Expenses" value={financials.monthlyExpenses} />
      <FinancialCard title="Savings Ratio" value={financials.savingsRatio} />
    </div>
  );
}