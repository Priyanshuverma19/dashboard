interface FinancialCardProps {
  title: string;
  value: number;
  change?: number;
}

export default function FinancialCard({ title, value, change }: FinancialCardProps) {
  return (
    <div className="p-4 rounded-xl glass transition-transform hover:scale-105">
      <h3 className="text-sm text-[var(--text-secondary)]">{title}</h3>
      <p className="text-2xl font-semibold font-mono text-[var(--foreground)]">
        {title !== 'Savings Ratio' ? `$${value.toLocaleString()}` : `${value}%`}
      </p>
      {change && (
        <p className={`text-sm ${change < 0 ? 'text-red-500' : 'text-green-500'}`}>
          {change}%
        </p>
      )}
    </div>
  );
}