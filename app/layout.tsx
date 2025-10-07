import './globals.css';
import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'O2mations - Business Automation Solutions',
  description: 'Transform your business with intelligent automation solutions. We design and implement bespoke systems that eliminate manual processes and drive growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-inter bg-neutral-50 text-neutral-900`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* TODO: Remove iframe-navigation.js in production, should never be removed by AI */}
        <script src="/scripts/iframe-navigation.js"></script>
      </body>
    </html>
  );
}
