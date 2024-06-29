import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { MotionDiv } from '@/components/MotionDiv';

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
      <body className={inter.className}>
        <Header />
        <MotionDiv>{children}</MotionDiv>
      </body>
    </html>
  );
}
