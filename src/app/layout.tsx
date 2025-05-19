'use client';


import { Poppins } from 'next/font/google';
import { ThemeProvider } from '../lib/ThemeContext';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased font-sans min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 flex`}
      >
        <ThemeProvider>
          <Sidebar />
          <div className="flex-1 ml-16 lg:ml-64">
            <Navbar />
            <main className="max-w-7xl mx-auto p-6 pt-24 space-y-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}