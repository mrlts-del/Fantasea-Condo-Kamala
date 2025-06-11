// TypeScript interfaces for hotel template configuration

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: {
    src: string;
    alt: string;
  };
  overlayOpacity: number;
}

export interface RoomType {
  id: string;
  name: string;
  description: string;
  images: string[];
  features: string[];
  maxGuests: number;
  size: string;
  bedType: string;
}

export interface RoomsConfig {
  sectionTitle: string;
  sectionDescription: string;
  roomTypes: RoomType[];
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}

export interface AmenitiesConfig {
  sectionTitle: string;
  sectionDescription: string;
  amenities: Amenity[];
}

export interface Benefit {
  icon: string;
  title: string;
}

export interface BenefitsConfig {
  sectionTitle: string;
  sectionDescription: string;
  benefits: Benefit[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  description?: string;
}

export interface LocationConfig {
  sectionTitle: string;
  sectionDescription: string;
  contactInfo: ContactInfo;
  mapEmbedUrl: string;
  nearbyAttractions: NearbyAttraction[];
}

export interface Review {
  quote: string;
  author: string;
  platform: string;
  rating: number;
  avatar: string;
  country?: string;
}

export interface ReviewsConfig {
  sectionTitle: string;
  sectionDescription: string;
  reviews: {
    google: Review[];
    booking: Review[];
    tripadvisor: Review[];
  };
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavigationConfig {
  siteName: string;
  logo: {
    src: string;
    alt: string;
  };
  bookingUrl: string;
  navigationLinks: NavigationLink[];
  footerLinks: NavigationLink[];
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  copyright: string;
}

// Main configuration interface
export interface PagesConfig {
  pages: {
    home: {
      title: string;
      metaDescription: string;
      keywords: string[];
    };
    rooms: {
      title: string;
      description: string;
      metaDescription: string;
      roomTypes: RoomType[];
    };
    location: {
      title: string;
      description: string;
      metaDescription: string;
      categories: string[];
      locations: LocationItem[];
    };
    gallery: {
      title: string;
      description: string;
      metaDescription: string;
      categories: string[];
      viewModes: string[];
      features: {
        autoPlay: boolean;
        slideshow: boolean;
        fullscreen: boolean;
        imageInfo: boolean;
      };
    };
  };
}

export interface GalleryConfig {
  gallery: {
    title: string;
    description: string;
    categories: string[];
    images: GalleryImage[];
    settings: {
      autoPlay: boolean;
      autoPlayInterval: number;
      showInfo: boolean;
      enableFullscreen: boolean;
      enableSlideshow: boolean;
      viewModes: string[];
    };
  };
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  description: string;
  photographer: string;
  date: string;
  tags: string[];
}

export interface LocationItem {
  id: number;
  category: string;
  name: string;
  description: string;
  distance: string;
  image: string;
}

export interface SiteConfig {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    openGraph: {
      title: string;
      description: string;
      url: string;
      siteName: string;
      images: string[];
    };
    twitter: {
      card: string;
      title: string;
      description: string;
      images: string[];
    };
  };
  site: {
    name: string;
    url: string;
    language: string;
    locale: string;
    timezone: string;
    currency: string;
    country: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    variables: {
      sans: string;
      serif: string;
    };
  };
  accessibility: {
    skipNavigation: boolean;
    structuredData: boolean;
    suppressHydrationWarning: boolean;
  };
}

export interface HotelConfig {
  hero: HeroConfig;
  rooms: RoomsConfig;
  amenities: AmenitiesConfig;
  benefits: BenefitsConfig;
  location: LocationConfig;
  reviews: ReviewsConfig;
  navigation: NavigationConfig;
  pages: PagesConfig;
  gallery: GalleryConfig;
  site: SiteConfig;
}

// Template metadata interface
export interface TemplateMetadata {
  name: string;
  version: string;
  description: string;
  author: string;
  created: string;
  lastModified: string;
  tags: string[];
}

export interface HotelTemplate {
  metadata: TemplateMetadata;
  config: HotelConfig;
}