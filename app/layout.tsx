import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Foodies App',
  description: 'The perfect app for all the food lovers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={
          inter.className +
          ' w-screen overflow-x-hidden h-screen flex flex-col py-2 px-2 bg-black text-white'
        }
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
