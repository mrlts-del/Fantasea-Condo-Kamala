import siteConfig from '@/config/site.json';
import roomsConfig from '@/config/rooms.json';
import amenitiesConfig from '@/config/amenities.json';
import contentConfig from '@/config/content.json';
import assetsConfig from '@/config/assets.json';
import { HeroConfig } from '@/config/types';

// Import existing extracted content for fallback
import heroContent from '@/extracted-content/hero-content.json';
import roomsContent from '@/extracted-content/rooms-content.json';
import amenitiesContent from '@/extracted-content/amenities-content.json';
import benefitsContent from '@/extracted-content/benefits-content.json';
import locationContent from '@/extracted-content/location-content.json';
import reviewsContent from '@/extracted-content/reviews-content.json';
import navigationContent from '@/extracted-content/navigation-content.json';
import pagesContent from '@/extracted-content/pages-content.json';
import galleryContent from '@/extracted-content/gallery-content.json';
import siteContent from '@/extracted-content/site-content.json';

export interface TemplateConfig {
  site: typeof siteConfig;
  rooms: typeof roomsConfig;
  amenities: typeof amenitiesConfig;
  content: typeof contentConfig;
  assets: typeof assetsConfig;
}

export interface ExtractedContent {
  hero: HeroConfig;
  rooms: typeof roomsContent;
  amenities: typeof amenitiesContent;
  benefits: typeof benefitsContent;
  location: typeof locationContent;
  reviews: typeof reviewsContent;
  navigation: typeof navigationContent;
  pages: typeof pagesContent;
  gallery: typeof galleryContent;
  site: typeof siteContent;
}

// Template configuration with placeholders
export const templateConfig: TemplateConfig = {
  site: siteConfig,
  rooms: roomsConfig,
  amenities: amenitiesConfig,
  content: contentConfig,
  assets: assetsConfig,
};

// Extracted content from existing hotel
export const extractedContent: ExtractedContent = {
  hero: {
    title: heroContent.title,
    subtitle: heroContent.subtitle,
    backgroundImage: {
      src: heroContent.backgroundImage,
      alt: heroContent.backgroundImageAlt
    },
    overlayOpacity: heroContent.overlayOpacity
  },
  rooms: roomsContent,
  amenities: amenitiesContent,
  benefits: benefitsContent,
  location: locationContent,
  reviews: reviewsContent,
  navigation: navigationContent,
  pages: pagesContent,
  gallery: galleryContent,
  site: siteContent,
};

// Helper function to check if a value is a placeholder
export function isPlaceholder(value: string): boolean {
  return typeof value === 'string' && value.startsWith('{{') && value.endsWith('}}');
}

// Helper function to replace placeholders with actual values
export function replacePlaceholders(template: any, values: Record<string, any>): any {
  if (typeof template === 'string') {
    if (isPlaceholder(template)) {
      const key = template.slice(2, -2); // Remove {{ and }}
      return values[key] || template;
    }
    return template;
  }
  
  if (Array.isArray(template)) {
    return template.map(item => replacePlaceholders(item, values));
  }
  
  if (typeof template === 'object' && template !== null) {
    const result: any = {};
    for (const [key, value] of Object.entries(template)) {
      result[key] = replacePlaceholders(value, values);
    }
    return result;
  }
  
  return template;
}

// Function to get configuration with fallback to extracted content
export function getConfig(): ExtractedContent {
  // For now, return the extracted content
  // In a real template, this would merge template config with user values
  return extractedContent;
}

// Function to get template structure
export function getTemplateConfig(): TemplateConfig {
  return templateConfig;
}

export default getConfig;