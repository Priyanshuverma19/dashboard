import Image from 'next/image';

interface HeaderProps {
  user: { name: string; avatar: string };
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ user, darkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header
      className={`flex justify-between items-center p-4 shadow-sm ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="flex items-center gap-3">
        <Image
          src={user.avatar}
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h1 className="text-lg font-semibold">Good Evening, {user.name}</h1>
          <p className="text-sm">
            Savings Goal: 60% (Current: 56%)
          </p>
        </div>
      </div>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}