import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Help from '@/components/layout/help';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Everest Appliance Repair',
  description: 'Your fridge gave up? We don’t. Fast, affordable repairs done right.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster
          position="top-center"
          toastOptions={{
            style: { fontSize: '1rem' },
            success: { className: 'bg-green-600 text-white' },
            error: { className: 'bg-red-600 text-white' },
          }}
        />
        {children}
        <Help />
      </body>
    </html>
  );
}
