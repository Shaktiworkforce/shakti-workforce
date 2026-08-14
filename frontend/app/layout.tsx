import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shaktiworkforce.com'),
  title: 'Shakti Workforce Private Limited | All Manpower Services Provider',
  description:
    'Shakti Workforce Private Limited – Your trusted all manpower service provider for skilled, non-skilled, industrial, housekeeping, logistics, contract, and security workforce services across India.',
  keywords: ['manpower', 'security', '24/7 rapid response'],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Shakti Workforce Private Limited | All Manpower Services Provider',
    description:
      'Shakti Workforce Private Limited – Your trusted all manpower service provider for skilled, non-skilled, industrial, housekeeping, logistics, contract, and security workforce services across India.',
    url: 'https://www.shaktiworkforce.com',
    siteName: 'Shakti Workforce',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Shakti Workforce Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shakti Workforce Private Limited | All Manpower Services Provider',
    description:
      'Shakti Workforce Private Limited – Your trusted all manpower service provider for skilled, non-skilled, industrial, housekeeping, logistics, contract, and security workforce services across India.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
