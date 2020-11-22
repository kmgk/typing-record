import { FC } from 'react';
import Head from 'next/head';
import { Header } from '@components/Header';

interface LayoutProps {
  title: string;
}

export const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title} | typing-record</title>
      </Head>
      <Header />
      <main>
        <div className='container mx-auto'>{children}</div>
      </main>
    </div>
  );
};
