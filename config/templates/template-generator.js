#!/usr/bin/env node

/**
 * Hotel Website Template Generator
 * 
 * This script helps users generate their own configuration files
 * by replacing template placeholders with actual content.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

class TemplateGenerator {
  constructor() {
    this.templatePath = path.join(__dirname, '../../content-template.json');
    this.outputDir = path.join(__dirname, '../../generated-config');
    this.placeholders = {};
  }

  async generateConfig() {
    console.log('🏨 Hotel Website Template Generator');
    console.log('=====================================\n');
    
    // Create output directory if it doesn't exist
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }

    // Load template
    const template = JSON.parse(fs.readFileSync(this.templatePath, 'utf8'));
    
    // Collect user input
    await this.collectBasicInfo();
    await this.collectContactInfo();
    await this.collectContentInfo();
    
    // Generate configuration files
    this.generateSiteConfig(template);
    this.generateHeroConfig(template);
    this.generateRoomsConfig(template);
    this.generateAmenitiesConfig(template);
    this.generateLocationConfig(template);
    this.generateNavigationConfig(template);
    this.generateGalleryConfig(template);
    this.generateReviewsConfig(template);
    this.generateBenefitsConfig(template);
    this.generatePagesConfig(template);
    
    console.log('\n✅ Configuration files generated successfully!');
    console.log(`📁 Output directory: ${this.outputDir}`);
    console.log('\n📋 Next steps:');
    console.log('1. Review the generated configuration files');
    console.log('2. Copy them to your extracted-content/ directory');
    console.log('3. Replace placeholder images in public/ directory');
    console.log('4. Run your development server to see the changes');
  }

  async collectBasicInfo() {
    console.log('📝 Basic Hotel Information');
    console.log('-------------------------');
    
    this.placeholders.HOTEL_NAME = await this.prompt('Hotel Name: ');
    this.placeholders.HOTEL_TAGLINE = await this.prompt('Hotel Tagline: ');
    this.placeholders.HOTEL_DESCRIPTION = await this.prompt('Hotel Description: ');
    this.placeholders.WEBSITE_URL = await this.prompt('Website URL: ');
    console.log('');
  }

  async collectContactInfo() {
    console.log('📞 Contact Information');
    console.log('---------------------');
    
    this.placeholders.HOTEL_ADDRESS = await this.prompt('Hotel Address: ');
    this.placeholders.HOTEL_CITY = await this.prompt('City: ');
    this.placeholders.HOTEL_STATE = await this.prompt('State/Province: ');
    this.placeholders.HOTEL_POSTAL_CODE = await this.prompt('Postal Code: ');
    this.placeholders.HOTEL_COUNTRY = await this.prompt('Country: ');
    this.placeholders.HOTEL_PHONE = await this.prompt('Phone Number: ');
    this.placeholders.HOTEL_EMAIL = await this.prompt('Email Address: ');
    this.placeholders.CHECKIN_TIME = await this.prompt('Check-in Time (e.g., 3:00 PM): ');
    this.placeholders.CHECKOUT_TIME = await this.prompt('Check-out Time (e.g., 11:00 AM): ');
    console.log('');
  }

  async collectContentInfo() {
    console.log('🎨 Content Information');
    console.log('----------------------');
    
    this.placeholders.HERO_TITLE = await this.prompt('Hero Section Title: ');
    this.placeholders.HERO_SUBTITLE = await this.prompt('Hero Section Subtitle: ');
    this.placeholders.HERO_DESCRIPTION = await this.prompt('Hero Section Description: ');
    this.placeholders.HERO_CTA_TEXT = await this.prompt('Hero Call-to-Action Text (e.g., "Book Now"): ');
    this.placeholders.HERO_CTA_LINK = await this.prompt('Hero Call-to-Action Link: ');
    
    // Social media
    this.placeholders.FACEBOOK_URL = await this.prompt('Facebook URL (optional): ') || '';
    this.placeholders.INSTAGRAM_URL = await this.prompt('Instagram URL (optional): ') || '';
    this.placeholders.TWITTER_URL = await this.prompt('Twitter URL (optional): ') || '';
    console.log('');
  }

  generateSiteConfig(template) {
    const siteConfig = {
      name: this.placeholders.HOTEL_NAME,
      tagline: this.placeholders.HOTEL_TAGLINE,
      description: this.placeholders.HOTEL_DESCRIPTION,
      url: this.placeholders.WEBSITE_URL,
      logo: '/images/logo.png',
      contact: {
        address: this.placeholders.HOTEL_ADDRESS,
        city: this.placeholders.HOTEL_CITY,
        state: this.placeholders.HOTEL_STATE,
        postalCode: this.placeholders.HOTEL_POSTAL_CODE,
        country: this.placeholders.HOTEL_COUNTRY,
        phone: this.placeholders.HOTEL_PHONE,
        email: this.placeholders.HOTEL_EMAIL,
        website: this.placeholders.WEBSITE_URL
      },
      hours: {
        checkin: this.placeholders.CHECKIN_TIME,
        checkout: this.placeholders.CHECKOUT_TIME
      },
      social: {
        facebook: this.placeholders.FACEBOOK_URL,
        instagram: this.placeholders.INSTAGRAM_URL,
        twitter: this.placeholders.TWITTER_URL
      },
      seo: {
        title: this.placeholders.HOTEL_NAME,
        description: this.placeholders.HOTEL_DESCRIPTION,
        keywords: `hotel, accommodation, ${this.placeholders.HOTEL_CITY}, ${this.placeholders.HOTEL_NAME}`,
        openGraph: {
          title: this.placeholders.HOTEL_NAME,
          description: this.placeholders.HOTEL_DESCRIPTION,
          image: '/images/og-image.jpg'
        }
      },
      branding: {
        colors: {
          primary: '#1e40af',
          secondary: '#64748b',
          accent: '#f59e0b',
          background: '#ffffff',
          text: '#1f2937'
        },
        typography: {
          primaryFont: 'Inter',
          secondaryFont: 'Playfair Display'
        }
      }
    };

    this.writeConfigFile('site-content.json', siteConfig);
  }

  generateHeroConfig(template) {
    const heroConfig = {
      title: this.placeholders.HERO_TITLE,
      subtitle: this.placeholders.HERO_SUBTITLE,
      description: this.placeholders.HERO_DESCRIPTION,
      cta: {
        text: this.placeholders.HERO_CTA_TEXT,
        link: this.placeholders.HERO_CTA_LINK
      },
      secondaryCta: 'Learn More',
      backgroundImage: '/images/hero-bg.jpg'
    };

    this.writeConfigFile('hero-content.json', heroConfig);
  }

  generateRoomsConfig(template) {
    const roomsConfig = {
      title: 'Our Rooms',
      description: 'Choose from our selection of comfortable and well-appointed rooms',
      roomTypes: [
        {
          id: 'standard-room',
          name: 'Standard Room',
          description: 'Comfortable and well-appointed room perfect for business or leisure travelers.',
          price: '$120',
          size: '25 sqm',
          occupancy: '2 guests',
          bedType: 'Queen bed',
          image: '/images/rooms/standard-room.jpg',
          gallery: ['/images/rooms/standard-1.jpg', '/images/rooms/standard-2.jpg'],
          amenities: ['Free WiFi', 'Air conditioning', 'Flat-screen TV', 'Mini fridge']
        },
        {
          id: 'deluxe-room',
          name: 'Deluxe Room',
          description: 'Spacious room with premium amenities and beautiful city views.',
          price: '$180',
          size: '35 sqm',
          occupancy: '2-3 guests',
          bedType: 'King bed',
          image: '/images/rooms/deluxe-room.jpg',
          gallery: ['/images/rooms/deluxe-1.jpg', '/images/rooms/deluxe-2.jpg'],
          amenities: ['Free WiFi', 'Air conditioning', 'Flat-screen TV', 'Mini bar', 'City view']
        },
        {
          id: 'suite',
          name: 'Executive Suite',
          description: 'Luxurious suite with separate living area and premium amenities.',
          price: '$280',
          size: '55 sqm',
          occupancy: '4 guests',
          bedType: 'King bed + Sofa bed',
          image: '/images/rooms/suite.jpg',
          gallery: ['/images/rooms/suite-1.jpg', '/images/rooms/suite-2.jpg'],
          amenities: ['Free WiFi', 'Air conditioning', 'Flat-screen TV', 'Mini bar', 'Separate living area', 'Premium view']
        }
      ]
    };

    this.writeConfigFile('rooms-content.json', roomsConfig);
  }

  generateAmenitiesConfig(template) {
    const amenitiesConfig = {
      title: 'Hotel Amenities',
      description: 'Enjoy our comprehensive range of facilities and services',
      items: [
        {
          id: 'wifi',
          name: 'Free WiFi',
          description: 'High-speed internet access throughout the property',
          icon: 'wifi'
        },
        {
          id: 'parking',
          name: 'Free Parking',
          description: 'Complimentary parking for all guests',
          icon: 'car'
        },
        {
          id: 'pool',
          name: 'Swimming Pool',
          description: 'Outdoor pool with sun deck and loungers',
          icon: 'waves'
        },
        {
          id: 'gym',
          name: 'Fitness Center',
          description: '24/7 access to modern fitness equipment',
          icon: 'dumbbell'
        },
        {
          id: 'restaurant',
          name: 'Restaurant',
          description: 'On-site dining with local and international cuisine',
          icon: 'utensils'
        },
        {
          id: 'concierge',
          name: 'Concierge Service',
          description: '24/7 concierge to assist with your needs',
          icon: 'bell'
        }
      ]
    };

    this.writeConfigFile('amenities-content.json', amenitiesConfig);
  }

  generateLocationConfig(template) {
    const locationConfig = {
      title: `Visit ${this.placeholders.HOTEL_CITY}`,
      description: `Discover the best of ${this.placeholders.HOTEL_CITY} from our convenient location`,
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
      contact: {
        address: this.placeholders.HOTEL_ADDRESS,
        phone: this.placeholders.HOTEL_PHONE,
        email: this.placeholders.HOTEL_EMAIL,
        checkin: this.placeholders.CHECKIN_TIME,
        checkout: this.placeholders.CHECKOUT_TIME
      },
      attractions: [
        {
          name: 'City Center',
          distance: '0.5 km'
        },
        {
          name: 'Main Shopping District',
          distance: '1.2 km'
        },
        {
          name: 'Airport',
          distance: '15 km'
        },
        {
          name: 'Train Station',
          distance: '2.5 km'
        },
        {
          name: 'Beach',
          distance: '5 km'
        }
      ]
    };

    this.writeConfigFile('location-content.json', locationConfig);
  }

  generateNavigationConfig(template) {
    const navigationConfig = {
      siteName: this.placeholders.HOTEL_NAME,
      logo: '/images/logo.png',
      navigationLinks: [
        {
          name: 'Home',
          href: '/'
        },
        {
          name: 'Rooms',
          href: '/rooms'
        },
        {
          name: 'Gallery',
          href: '/gallery'
        },
        {
          name: 'Location',
          href: '/location'
        }
      ],
      footerLinks: [
        {
          name: 'Privacy Policy',
          href: '/privacy'
        },
        {
          name: 'Terms of Service',
          href: '/terms'
        },
        {
          name: 'Booking Policy',
          href: '/booking-policy'
        },
        {
          name: 'Cancellation Policy',
          href: '/cancellation'
        }
      ],
      contact: {
        address: this.placeholders.HOTEL_ADDRESS,
        phone: this.placeholders.HOTEL_PHONE,
        email: this.placeholders.HOTEL_EMAIL
      },
      social: {
        facebook: this.placeholders.FACEBOOK_URL,
        instagram: this.placeholders.INSTAGRAM_URL,
        twitter: this.placeholders.TWITTER_URL
      }
    };

    this.writeConfigFile('navigation-content.json', navigationConfig);
  }

  generateGalleryConfig(template) {
    const galleryConfig = {
      title: 'Photo Gallery',
      description: 'Explore our beautiful hotel and facilities',
      categories: ['ALL', 'ROOMS', 'FACILITIES', 'DINING', 'EXTERIOR'],
      settings: {
        autoPlayInterval: 5000
      },
      images: [
        {
          id: 'gallery-1',
          src: '/images/gallery/hotel-exterior.jpg',
          alt: 'Hotel exterior view',
          category: 'EXTERIOR'
        },
        {
          id: 'gallery-2',
          src: '/images/gallery/lobby.jpg',
          alt: 'Hotel lobby',
          category: 'FACILITIES'
        },
        {
          id: 'gallery-3',
          src: '/images/gallery/room-1.jpg',
          alt: 'Standard room',
          category: 'ROOMS'
        },
        {
          id: 'gallery-4',
          src: '/images/gallery/restaurant.jpg',
          alt: 'Hotel restaurant',
          category: 'DINING'
        },
        {
          id: 'gallery-5',
          src: '/images/gallery/pool.jpg',
          alt: 'Swimming pool',
          category: 'FACILITIES'
        }
      ]
    };

    this.writeConfigFile('gallery-content.json', galleryConfig);
  }

  generateReviewsConfig(template) {
    const reviewsConfig = {
      title: 'Guest Reviews',
      description: 'See what our guests have to say about their experience',
      sources: {
        google: [
          {
            id: 'review-1',
            name: 'John Smith',
            country: 'United States',
            rating: 5,
            text: 'Excellent hotel with outstanding service. The staff was very friendly and helpful throughout our stay.',
            source: 'Google'
          },
          {
            id: 'review-2',
            name: 'Maria Garcia',
            country: 'Spain',
            rating: 5,
            text: 'Beautiful hotel in a great location. The rooms were clean and comfortable, and the amenities were top-notch.',
            source: 'Google'
          }
        ],
        booking: [
          {
            id: 'review-3',
            name: 'David Wilson',
            country: 'United Kingdom',
            rating: 4,
            text: 'Great value for money. The hotel exceeded our expectations in every way.',
            source: 'Booking.com'
          },
          {
            id: 'review-4',
            name: 'Sophie Chen',
            country: 'Canada',
            rating: 5,
            text: 'Perfect location and excellent facilities. Would definitely stay here again.',
            source: 'Booking.com'
          }
        ],
        tripadvisor: [
          {
            id: 'review-5',
            name: 'Robert Johnson',
            country: 'Australia',
            rating: 5,
            text: 'Outstanding hotel with exceptional service. Highly recommended for both business and leisure travelers.',
            source: 'TripAdvisor'
          },
          {
            id: 'review-6',
            name: 'Emma Thompson',
            country: 'New Zealand',
            rating: 4,
            text: 'Lovely hotel with great amenities. The staff went above and beyond to make our stay memorable.',
            source: 'TripAdvisor'
          }
        ]
      }
    };

    this.writeConfigFile('reviews-content.json', reviewsConfig);
  }

  generateBenefitsConfig(template) {
    const benefitsConfig = {
      title: 'Why Choose Us',
      description: 'Experience the difference with our exceptional service and facilities',
      items: [
        {
          id: 'location',
          title: 'Prime Location',
          description: 'Located in the heart of the city with easy access to major attractions and business districts.',
          icon: 'map-pin'
        },
        {
          id: 'service',
          title: 'Exceptional Service',
          description: 'Our dedicated staff provides personalized service to ensure your stay is memorable.',
          icon: 'star'
        },
        {
          id: 'amenities',
          title: 'Modern Amenities',
          description: 'Enjoy state-of-the-art facilities and amenities designed for your comfort and convenience.',
          icon: 'shield-check'
        },
        {
          id: 'value',
          title: 'Great Value',
          description: 'Competitive rates with no hidden fees, offering excellent value for your money.',
          icon: 'dollar-sign'
        }
      ]
    };

    this.writeConfigFile('benefits-content.json', benefitsConfig);
  }

  generatePagesConfig(template) {
    const pagesConfig = {
      home: {
        title: `${this.placeholders.HOTEL_NAME} - ${this.placeholders.HOTEL_TAGLINE}`,
        description: this.placeholders.HOTEL_DESCRIPTION
      },
      rooms: {
        title: `Rooms & Suites - ${this.placeholders.HOTEL_NAME}`,
        description: `Discover our comfortable and well-appointed rooms at ${this.placeholders.HOTEL_NAME}`
      },
      gallery: {
        title: `Photo Gallery - ${this.placeholders.HOTEL_NAME}`,
        description: `Explore our beautiful hotel facilities and rooms through our photo gallery`
      },
      location: {
        title: `Location & Contact - ${this.placeholders.HOTEL_NAME}`,
        description: `Find us in ${this.placeholders.HOTEL_CITY} and discover nearby attractions`
      }
    };

    this.writeConfigFile('pages-content.json', pagesConfig);
  }

  writeConfigFile(filename, config) {
    const filePath = path.join(this.outputDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(config, null, 2));
    console.log(`✅ Generated: ${filename}`);
  }

  prompt(question) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        rl.close();
        resolve(answer.trim());
      });
    });
  }
}

// Run the generator if this script is executed directly
if (require.main === module) {
  const generator = new TemplateGenerator();
  generator.generateConfig().catch(console.error);
}

module.exports = TemplateGenerator;