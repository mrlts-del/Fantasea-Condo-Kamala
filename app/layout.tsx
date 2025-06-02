import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Luxury Haven | Premium Hotel Experience',
  description: 'Experience luxury redefined at our premium hotel, where every detail is crafted for your perfect stay.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          inter.className,
          inter.variable,
          playfair.variable,
          "min-h-screen bg-background antialiased"
        )}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}