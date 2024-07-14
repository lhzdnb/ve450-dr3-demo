import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Data Visualizaton Demo',
  description: 'Data Visualization Demo for VE450 DR3',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-950 text-white">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
