import NavBar from '@/components/Common/NavBar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import getCurrentUser from './actions/getCurrentUser';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <html>
      <body className={inter.className}>
        <NavBar currentUser={currentUser} />
        {children}
        <Script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=37bf86c6166b05ff61f6b28568142442&libraries=services,clusterer&autoload=false" />
      </body>
    </html>
  );
}
