import { promises as fs } from 'fs';
import path from 'path';
import type { HotelConfig, HeroConfig, RoomsConfig, AmenitiesConfig, BenefitsConfig, LocationConfig, NavigationConfig, ReviewsConfig, PagesConfig, GalleryConfig, SiteConfig } from './types';

// Base path for extracted content
const EXTRACTED_CONTENT_PATH = path.join(process.cwd(), 'extracted-content');

/**
 * Load and parse a JSON configuration file
 */
async function loadJsonFile<T>(filename: string): Promise<T> {
  try {
    const filePath = path.join(EXTRACTED_CONTENT_PATH, filename);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent) as T;
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    throw new Error(`Failed to load configuration file: ${filename}`);
  }
}

/**
 * Load hero configuration
 */
export async function loadHeroConfig(): Promise<HeroConfig> {
  const heroData = await loadJsonFile<any>('hero-content.json');
  
  // Transform flat structure to nested structure for backgroundImage
  return {
    title: heroData.title,
    subtitle: heroData.subtitle,
    backgroundImage: {
      src: heroData.backgroundImage,
      alt: heroData.backgroundImageAlt
    },
    overlayOpacity: heroData.overlayOpacity
  };
}

/**
 * Load rooms configuration
 */
export async function loadRoomsConfig(): Promise<RoomsConfig> {
  return loadJsonFile<RoomsConfig>('rooms-content.json');
}

/**
 * Load amenities configuration
 */
export async function loadAmenitiesConfig(): Promise<AmenitiesConfig> {
  return loadJsonFile<AmenitiesConfig>('amenities-content.json');
}

/**
 * Load benefits configuration
 */
export async function loadBenefitsConfig(): Promise<BenefitsConfig> {
  return loadJsonFile<BenefitsConfig>('benefits-content.json');
}

/**
 * Load location configuration
 */
export async function loadLocationConfig(): Promise<LocationConfig> {
  return loadJsonFile<LocationConfig>('location-content.json');
}

/**
 * Load navigation configuration
 */
export async function loadNavigationConfig(): Promise<NavigationConfig> {
  return loadJsonFile<NavigationConfig>('navigation-content.json');
}

/**
 * Load reviews configuration
 */
export async function loadReviewsConfig(): Promise<ReviewsConfig> {
  return loadJsonFile<ReviewsConfig>('reviews-content.json');
}

/**
 * Load pages configuration
 */
export async function loadPagesConfig(): Promise<PagesConfig> {
  return loadJsonFile<PagesConfig>('pages-content.json');
}

/**
 * Load gallery configuration
 */
export async function loadGalleryConfig(): Promise<GalleryConfig> {
  return loadJsonFile<GalleryConfig>('gallery-content.json');
}

/**
 * Load site configuration
 */
export async function loadSiteConfig(): Promise<SiteConfig> {
  return loadJsonFile<SiteConfig>('site-content.json');
}

/**
 * Load complete hotel configuration
 */
export async function loadHotelConfig(): Promise<HotelConfig> {
  try {
    const [hero, rooms, amenities, benefits, location, navigation, reviews, pages, gallery, site] = await Promise.all([
      loadHeroConfig(),
      loadRoomsConfig(),
      loadAmenitiesConfig(),
      loadBenefitsConfig(),
      loadLocationConfig(),
      loadNavigationConfig(),
      loadReviewsConfig(),
      loadPagesConfig(),
      loadGalleryConfig(),
      loadSiteConfig()
    ]);

    return {
      hero,
      rooms,
      amenities,
      benefits,
      location,
      reviews,
      navigation,
      pages,
      gallery,
      site
    };
  } catch (error) {
    console.error('Error loading hotel configuration:', error);
    throw new Error('Failed to load complete hotel configuration');
  }
}

/**
 * Validate configuration object structure
 */
export function validateConfig(config: any): config is HotelConfig {
  const requiredSections = ['hero', 'rooms', 'amenities', 'benefits', 'location', 'reviews', 'navigation', 'pages', 'gallery', 'site'];
  
  for (const section of requiredSections) {
    if (!config[section]) {
      console.error(`Missing required configuration section: ${section}`);
      return false;
    }
  }
  
  return true;
}

/**
 * Load configuration with fallback to default values
 */
export async function loadConfigWithFallback(): Promise<HotelConfig> {
  try {
    const config = await loadHotelConfig();
    
    if (!validateConfig(config)) {
      throw new Error('Invalid configuration structure');
    }
    
    return config;
  } catch (error) {
    console.warn('Failed to load configuration, using fallback:', error);
    
    // Return minimal fallback configuration
    return {
      hero: {
        title: "Hotel Template",
        subtitle: "Configure your hotel website",
        backgroundImage: {
          src: "/placeholder-hero.jpg",
          alt: "Hotel exterior"
        },
        overlayOpacity: 0.4
      },
      rooms: {
        sectionTitle: "Our Rooms",
        sectionDescription: "Choose from our selection of rooms",
        roomTypes: []
      },
      amenities: {
        sectionTitle: "Amenities",
        sectionDescription: "Enjoy our facilities",
        amenities: []
      },
      benefits: {
        sectionTitle: "Why Choose Us",
        sectionDescription: "Experience the difference",
        benefits: []
      },
      location: {
        sectionTitle: "Location",
        sectionDescription: "Find us here",
        contactInfo: {
          address: "123 Hotel Street",
          phone: "+1 234 567 8900",
          email: "info@hotel.com",
          checkIn: "3:00 PM",
          checkOut: "11:00 AM"
        },
        mapEmbedUrl: "",
        nearbyAttractions: []
      },
      reviews: {
        sectionTitle: "Reviews",
        sectionDescription: "What our guests say",
        reviews: {
          google: [],
          booking: [],
          tripadvisor: []
        }
      },
      navigation: {
        siteName: "Hotel Template",
        logo: {
          src: "/logo.png",
          alt: "Hotel Logo"
        },
        bookingUrl: "#",
        navigationLinks: [],
        footerLinks: [],
        contactInfo: {
          address: "123 Hotel Street",
          phone: "+1 234 567 8900",
          email: "info@hotel.com",
          checkIn: "3:00 PM",
          checkOut: "11:00 AM"
        },
        socialLinks: [],
        copyright: "© 2024 Hotel Template. All rights reserved."
      },
      pages: {
        pages: {
          home: {
            title: "Home",
            metaDescription: "Hotel template homepage",
            keywords: ["hotel", "accommodation", "booking"]
          },
          rooms: {
            title: "Rooms",
            description: "Our accommodations",
            metaDescription: "Hotel rooms and suites",
            roomTypes: []
          },
          location: {
            title: "Location",
            description: "Find us",
            metaDescription: "Hotel location and contact",
            categories: [],
            locations: []
          },
          gallery: {
            title: "Gallery",
            description: "Photo gallery",
            metaDescription: "Hotel photo gallery",
            categories: [],
            viewModes: [],
            features: {
              autoPlay: false,
              slideshow: true,
              fullscreen: true,
              imageInfo: true
            }
          }
        }
      },
      gallery: {
        gallery: {
          title: "Gallery",
          description: "Explore our hotel",
          categories: [],
          images: [],
          settings: {
            autoPlay: false,
            autoPlayInterval: 5000,
            showInfo: true,
            enableFullscreen: true,
            enableSlideshow: true,
            viewModes: ["grid", "masonry"]
          }
        }
      },
      site: {
        seo: {
          title: "Hotel Template",
          description: "A beautiful hotel website template",
          keywords: ["hotel", "accommodation", "booking"],
          openGraph: {
            title: "Hotel Template",
            description: "A beautiful hotel website template",
            url: "https://example.com",
            siteName: "Hotel Template",
            images: []
          },
          twitter: {
            card: "summary_large_image",
            title: "Hotel Template",
            description: "A beautiful hotel website template",
            images: []
          }
        },
        site: {
          name: "Hotel Template",
          url: "https://hotel-template.com",
          language: "en",
          locale: "en-US",
          timezone: "UTC",
          currency: "USD",
          country: "US"
        },
        fonts: {
          primary: "Inter",
          secondary: "Playfair Display",
          variables: {
            sans: "var(--font-inter)",
            serif: "var(--font-playfair)"
          }
        },
        accessibility: {
          skipNavigation: true,
          structuredData: true,
          suppressHydrationWarning: false
        }
      }
    };
  }
}