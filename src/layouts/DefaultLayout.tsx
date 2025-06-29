import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 max-w-4xl mx-auto px-6 py-10'>{children}</main>
      <Footer />
    </div>
  );
}
