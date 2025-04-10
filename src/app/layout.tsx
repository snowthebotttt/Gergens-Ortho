import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Gergen's Orthodontic Lab - Sleep Apnea Solutions & Dental Appliances",
  description: 'Professional dental laboratory specializing in sleep apnea solutions, orthodontic products, and oral appliances.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
