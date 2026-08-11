import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MXPLEX - মুভি রিভিউ এবং ব্লগ',
  description: 'MXPLEX-এর অফিসিয়াল ব্লগ সাইট। লেটেস্ট মুভি রিভিউ, আপডেট এবং সিনেমার খবরাখবর পড়ুন।',
  metadataBase: new URL('https://mxplex.com'),
  openGraph: {
    title: 'MXPLEX - মুভি রিভিউ',
    description: 'লেটেস্ট মুভি রিভিউ এবং আপডেট।',
    url: 'https://mxplex.com',
    siteName: 'MXPLEX',
    locale: 'bn_BD',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className="bg-gray-950 text-white min-h-screen">{children}</body>
    </html>
  );
}
