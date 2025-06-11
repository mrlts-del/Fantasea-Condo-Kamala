import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import { HotelSchema } from '@/components/StructuredData';
import SkipNavigation from '@/components/SkipNavigation';
import getConfig from '@/lib/config';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
});

// Generate metadata dynamically from configuration
export async function generateMetadata(): Promise<Metadata> {
  try {
    const config = getConfig();
    const siteConfig = config.site;
    
    return {
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      keywords: siteConfig.seo.keywords,
      openGraph: {
        title: siteConfig.seo.openGraph.title,
        description: siteConfig.seo.openGraph.description,
        url: siteConfig.seo.openGraph.url,
        siteName: siteConfig.seo.openGraph.siteName,
        images: siteConfig.seo.openGraph.images,
      },
      twitter: {
        card: siteConfig.seo.twitter.card as 'summary_large_image',
        title: siteConfig.seo.twitter.title,
        description: siteConfig.seo.twitter.description,
        images: siteConfig.seo.twitter.images,
      },
    };
  } catch (error) {
    console.error('Error loading site configuration for metadata:', error);
    // Fallback metadata
    return {
      title: 'Hotel Template | Luxury Accommodation',
      description: 'Experience luxury accommodation with stunning views and modern amenities.',
    };
  }
}

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