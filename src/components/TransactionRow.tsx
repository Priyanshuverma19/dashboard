interface TransactionRowProps {
  transaction: {
    date: string;
    description: string;
    type: string;
    category: string;
    amount: number;
  };
}

export default function TransactionRow({ transaction }: TransactionRowProps) {
  return (
    <tr className="border-b border-[var(--card-border)]">
      <td className="py-3 px-4 text-[var(--foreground)]">{transaction.date}</td>
      <td className="py-3 px-4 text-[var(--foreground)]">{transaction.description}</td>
      <td className="py-3 px-4 text-[var(--foreground)]">{transaction.category}</td>
      <td
        className={`py-3 px-4 ${
          transaction.type === 'Credit' ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {transaction.type === 'Credit' ? '+' : '-'}$
        {Math.abs(transaction.amount).toLocaleString()}
      </td>
    </tr>
  );
}