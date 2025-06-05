import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import { HotelSchema } from '@/components/StructuredData';
import SkipNavigation from '@/components/SkipNavigation';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Fantasea Condo Kamala | Luxury Beachfront Accommodation Phuket',
  description: 'Experience luxury at Fantasea Condo Kamala. Premium beachfront accommodation with stunning ocean views and modern amenities in Kamala Beach, Phuket.',
  openGraph: {
    title: 'Fantasea Condo Kamala | Luxury Beachfront Accommodation',
    description: 'Experience luxury at Fantasea Condo Kamala. Premium beachfront accommodation with stunning ocean views.',
    url: 'https://fantasea-condo-kamala.com',
    siteName: 'Fantasea Condo Kamala',
    images: ['/Fantasea_Condo_Images/Hero/Hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fantasea Condo Kamala | Luxury Beachfront Accommodation',
    description: 'Experience luxury at Fantasea Condo Kamala.',
    images: ['/Fantasea_Condo_Images/Hero/Hero.jpg'],
  },
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
        <SkipNavigation />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <HotelSchema />
      </body>
    </html>
  );
}