// Define and export types for each part of the mockData structure
export interface User {
  name: string;
  avatar: string;
}

export interface Financials {
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  savingsRatio: number;
}

export interface Transaction {
  date: string;
  description: string;
  type: 'Credit' | 'Debit';
  category: string;
  amount: number;
}

export interface ExpenseVsIncome {
  labels: string[];
  income: number[];
  expenses: number[];
}

export interface CategorySpending {
  labels: string[];
  data: number[];
  subcategories: Record<string, Record<string, number>>;
  backgroundColor: string[];
}

export interface DailySpendingTransaction {
  description: string;
  amount: number;
  category: string;
}

export interface DailySpending {
  date: string;
  amount: number;
  transactions: DailySpendingTransaction[];
}

export interface Budget {
  category: string;
  budget: number;
  spent: number;
}

export interface Notification {
  id: number;
  message: string;
}

export interface MockData {
  user: User;
  financials: Financials;
  transactions: Transaction[];
  expenseVsIncome: ExpenseVsIncome;
  categorySpending: CategorySpending;
  dailySpending: DailySpending[];
  budgets: Budget[];
  notifications: Notification[];
}

// Export the mockData with proper types
export const mockData: MockData = {
  user: {
    name: 'Priyanshu',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  financials: {
    totalBalance: 12345.67,
    monthlyIncome: 7890.12,
    monthlyExpenses: 3456.78,
    savingsRatio: 56,
  },
  transactions: [
    { date: '2025-05-18', description: 'Paycheck', type: 'Credit', category: 'Income', amount: 2500 },
    { date: '2025-05-17', description: 'Rent', type: 'Debit', category: 'Home', amount: -1500 },
    { date: '2025-05-16', description: 'Groceries', type: 'Debit', category: 'Food', amount: -65 },
    { date: '2025-05-15', description: 'Dinner', type: 'Debit', category: 'Food', amount: -30 },
    { date: '2025-05-14', description: 'Gas', type: 'Debit', category: 'Transport', amount: -40 },
    { date: '2025-05-13', description: 'Freelance', type: 'Credit', category: 'Income', amount: 300 },
    { date: '2025-05-12', description: 'Amazon', type: 'Debit', category: 'Shopping', amount: -50 },
    { date: '2025-05-11', description: 'Coffee', type: 'Debit', category: 'Food', amount: -5 },
    { date: '2025-05-10', description: 'Lunch', type: 'Debit', category: 'Food', amount: -15 },
    { date: '2025-05-09', description: 'Refund', type: 'Credit', category: 'Income', amount: 100 },
  ],
  expenseVsIncome: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    income: [5000, 5200, 4800, 6000, 5500],
    expenses: [3000, 3500, 3200, 4000, 3800],
  },
  categorySpending: {
    labels: ['Food', 'Home', 'Transport', 'Shopping'],
    data: [500, 1500, 300, 400],
    subcategories: {
      Food: { Groceries: 300, Dining: 200 },
      Home: { Rent: 1200, Utilities: 300 },
      Transport: { Gas: 200, Maintenance: 100 },
      Shopping: { Electronics: 200, Clothing: 200 },
    },
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
  },
  dailySpending: [
    { date: '2025-05-01', amount: 0, transactions: [] },
    { date: '2025-05-02', amount: 0, transactions: [] },
    { date: '2025-05-03', amount: 0, transactions: [] },
    { date: '2025-05-04', amount: 0, transactions: [] },
    { date: '2025-05-05', amount: 0, transactions: [] },
    { date: '2025-05-06', amount: 0, transactions: [] },
    { date: '2025-05-07', amount: 0, transactions: [] },
    { date: '2025-05-08', amount: 0, transactions: [] },
    { date: '2025-05-09', amount: 0, transactions: [] },
    { date: '2025-05-10', amount: 15, transactions: [{ description: 'Lunch', amount: -15, category: 'Food' }] },
    { date: '2025-05-11', amount: 5, transactions: [{ description: 'Coffee', amount: -5, category: 'Food' }] },
    { date: '2025-05-12', amount: 50, transactions: [{ description: 'Amazon', amount: -50, category: 'Shopping' }] },
    { date: '2025-05-13', amount: 0, transactions: [] },
    { date: '2025-05-14', amount: 40, transactions: [{ description: 'Gas', amount: -40, category: 'Transport' }] },
    { date: '2025-05-15', amount: 30, transactions: [{ description: 'Dinner', amount: -30, category: 'Food' }] },
    { date: '2025-05-16', amount: 65, transactions: [{ description: 'Groceries', amount: -65, category: 'Food' }] },
    { date: '2025-05-17', amount: 1500, transactions: [{ description: 'Rent', amount: -1500, category: 'Home' }] },
    { date: '2025-05-18', amount: 0, transactions: [] },
    { date: '2025-05-19', amount: 0, transactions: [] },
    { date: '2025-05-20', amount: 0, transactions: [] },
  ],
  budgets: [
    { category: 'Food', budget: 600, spent: 500 },
    { category: 'Home', budget: 2000, spent: 1500 },
    { category: 'Transport', budget: 500, spent: 300 },
    { category: 'Shopping', budget: 600, spent: 400 },
  ],
  notifications: [
    { id: 1, message: 'Overspending on food this month!' },
    { id: 2, message: 'Salary received on May 18.' },
  ],
};