# Hotel Website Template System

This template system provides a complete, configurable hotel website built with Next.js 14 and Tailwind CSS. The system uses a configuration-driven approach where all content is stored in JSON files and loaded dynamically by React components.

## 🚀 Quick Start

### Option 1: Interactive Template Generator (Recommended)

1. **Run the template generator:**
   ```bash
   node config/templates/template-generator.js
   ```

2. **Follow the prompts** to enter your hotel information:
   - Basic hotel details (name, tagline, description)
   - Contact information (address, phone, email)
   - Content preferences (hero section, social media)

3. **Review generated files** in the `config/generated-config/` directory

4. **Copy configuration files** to your `extracted-content/` directory:
   ```bash
   cp config/generated-config/*.json extracted-content/
   ```

5. **Replace placeholder images** in the `public/` directory with your hotel's images

6. **Start the development server:**
   ```bash
   npm run dev
   ```

### Option 2: Manual Configuration

1. **Copy the content template:**
   ```bash
   cp content-template.json my-hotel-config.json
   ```

2. **Edit the JSON file** and replace all `{{PLACEHOLDER}}` values with your actual content

3. **Split the configuration** into individual files in the `extracted-content/` directory

4. **Update images** and start the development server

## 📁 Project Structure

```
PlaceholderHotel/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── rooms/page.tsx           # Rooms page
│   ├── gallery/page.tsx         # Gallery page
│   └── location/page.tsx        # Location page
├── components/                   # React components
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx          # Navigation bar
│   │   └── Footer.tsx          # Footer
│   ├── sections/               # Page sections
│   └── ui/                     # UI components
├── lib/                         # Utility libraries
│   └── config.ts               # Configuration loader
├── config/                      # Configuration system
│   ├── templates/              # Template files
│   │   ├── template-generator.js
│   │   ├── content-template.md
│   │   └── README.md
│   ├── loader.ts               # Legacy loader (deprecated)
│   └── types.ts                # TypeScript types
├── extracted-content/           # Content configuration files
│   ├── site-content.json      # Site metadata and branding
│   ├── hero-content.json      # Homepage hero section
│   ├── rooms-content.json     # Room types and details
│   ├── amenities-content.json # Hotel amenities
│   ├── location-content.json  # Location and attractions
│   ├── navigation-content.json # Navigation structure
│   ├── gallery-content.json   # Image gallery
│   ├── reviews-content.json   # Guest reviews
│   ├── benefits-content.json  # Key selling points
│   └── pages-content.json     # Page metadata
├── public/                      # Static assets
│   └── images/                 # Image files
└── content-template.json        # Master template file
```

## 🔧 Configuration Files

### Core Configuration Files

| File | Purpose | Key Sections |
|------|---------|-------------|
| `site-content.json` | Global site settings | SEO, branding, contact, social media |
| `hero-content.json` | Homepage hero section | Title, subtitle, CTA buttons, background |
| `rooms-content.json` | Room types and details | Room descriptions, pricing, amenities |
| `amenities-content.json` | Hotel facilities | Services, features, icons |
| `location-content.json` | Location information | Address, map, nearby attractions |
| `navigation-content.json` | Site navigation | Menu items, footer links |
| `gallery-content.json` | Image gallery | Categories, images, settings |
| `reviews-content.json` | Guest testimonials | Reviews from various platforms |
| `benefits-content.json` | Key selling points | Unique features, advantages |
| `pages-content.json` | Page metadata | Titles, descriptions for SEO |

### Configuration Schema

Each configuration file follows a specific TypeScript interface defined in `config/types.ts`. This ensures type safety and consistent data structure.

## 🎨 Customization Guide

### 1. Branding and Colors

Update the branding section in `site-content.json`:

```json
{
  "branding": {
    "colors": {
      "primary": "#1e40af",
      "secondary": "#64748b",
      "accent": "#f59e0b",
      "background": "#ffffff",
      "text": "#1f2937"
    },
    "typography": {
      "primaryFont": "Inter",
      "secondaryFont": "Playfair Display"
    }
  }
}
```

### 2. Room Configuration

Add or modify rooms in `rooms-content.json`:

```json
{
  "roomTypes": [
    {
      "id": "unique-room-id",
      "name": "Room Name",
      "description": "Room description",
      "price": "$150",
      "size": "30 sqm",
      "occupancy": "2 guests",
      "bedType": "Queen bed",
      "image": "/images/rooms/room.jpg",
      "gallery": ["/images/rooms/room-1.jpg"],
      "amenities": ["WiFi", "AC", "TV"]
    }
  ]
}
```

### 3. Gallery Images

Update gallery configuration in `gallery-content.json`:

```json
{
  "images": [
    {
      "id": "unique-image-id",
      "src": "/images/gallery/image.jpg",
      "alt": "Image description",
      "category": "ROOMS"
    }
  ],
  "categories": ["ALL", "ROOMS", "FACILITIES", "DINING"]
}
```

### 4. Navigation Structure

Modify navigation in `navigation-content.json`:

```json
{
  "navigationLinks": [
    {
      "name": "Home",
      "href": "/"
    },
    {
      "name": "Custom Page",
      "href": "/custom"
    }
  ]
}
```

## 🖼️ Image Management

### Image Directory Structure

```
public/images/
├── logo.png                    # Site logo
├── hero-bg.jpg                # Hero background
├── og-image.jpg               # Open Graph image
├── rooms/                     # Room images
│   ├── standard-room.jpg
│   ├── deluxe-room.jpg
│   └── suite.jpg
├── gallery/                   # Gallery images
│   ├── hotel-exterior.jpg
│   ├── lobby.jpg
│   └── pool.jpg
└── amenities/                 # Amenity icons/images
```

### Image Guidelines

- **Hero images**: 1920x1080px (16:9 ratio)
- **Room images**: 800x600px (4:3 ratio)
- **Gallery images**: 1200x800px (3:2 ratio)
- **Logo**: SVG format preferred, or PNG with transparent background
- **File formats**: WebP preferred, JPEG/PNG acceptable
- **File naming**: Use kebab-case (e.g., `deluxe-room.jpg`)

## 🔍 SEO Configuration

The template includes comprehensive SEO features:

### Metadata Configuration

Update SEO settings in `site-content.json`:

```json
{
  "seo": {
    "title": "Hotel Name - Tagline",
    "description": "Hotel description for search engines",
    "keywords": "hotel, accommodation, city, amenities",
    "openGraph": {
      "title": "Hotel Name",
      "description": "Social media description",
      "image": "/images/og-image.jpg"
    }
  }
}
```

### Page-Specific SEO

Configure individual page metadata in `pages-content.json`:

```json
{
  "rooms": {
    "title": "Rooms & Suites - Hotel Name",
    "description": "Discover our comfortable rooms and suites"
  }
}
```

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Configure hotel website"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy

### Netlify Deployment

1. **Build command:** `npm run build`
2. **Publish directory:** `out` (if using static export)

### Custom Server Deployment

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

## 🛠️ Development

### Adding New Sections

1. **Create a new content file** in `extracted-content/`
2. **Define TypeScript interface** in `config/types.ts`
3. **Update the config loader** in `lib/config.ts`
4. **Create React component** in `components/sections/`
5. **Import and use** in your page components

### Extending the Template Generator

1. **Add new prompts** in `template-generator.js`
2. **Create generation methods** for new content types
3. **Update the configuration schema**

## 📋 Checklist for New Hotels

### Content
- [ ] Hotel name, tagline, and description
- [ ] Contact information (address, phone, email)
- [ ] Room types with descriptions and pricing
- [ ] Hotel amenities and facilities
- [ ] Location details and nearby attractions
- [ ] Guest reviews and testimonials
- [ ] Navigation structure
- [ ] SEO metadata

### Images
- [ ] Hotel logo
- [ ] Hero background image
- [ ] Room photos (multiple angles)
- [ ] Facility and amenity images
- [ ] Gallery images (exterior, interior, dining)
- [ ] Open Graph image for social sharing

### Technical
- [ ] Domain name and hosting setup
- [ ] SSL certificate configuration
- [ ] Analytics tracking (Google Analytics)
- [ ] Search console setup
- [ ] Social media integration
- [ ] Booking system integration

## 🆘 Troubleshooting

### Common Issues

**Images not loading:**
- Check file paths in configuration files
- Ensure images exist in the `public/` directory
- Verify image file extensions match configuration

**Configuration not updating:**
- Restart the development server
- Check for JSON syntax errors
- Verify file names match expected patterns

**Build errors:**
- Run `npm run build` to check for TypeScript errors
- Ensure all required configuration fields are present
- Check for missing dependencies

### Getting Help

1. **Check the console** for error messages
2. **Validate JSON files** using an online JSON validator
3. **Review TypeScript types** in `config/types.ts`
4. **Check the Next.js documentation** for framework-specific issues

## 📄 License

This template is provided as-is for hotel website development. Customize and deploy according to your needs.

---

**Happy building! 🏨✨**