# Hotel Website Template - Deployment Guide

This guide provides step-by-step instructions for deploying your customized hotel website to various hosting platforms.

## 🚀 Pre-Deployment Checklist

### 1. Content Verification
- [ ] All configuration files in `extracted-content/` are complete
- [ ] All placeholder images replaced with actual hotel images
- [ ] Contact information is accurate
- [ ] Room pricing and availability are current
- [ ] SEO metadata is optimized
- [ ] Social media links are working

### 2. Technical Verification
- [ ] Development server runs without errors (`npm run dev`)
- [ ] Production build completes successfully (`npm run build`)
- [ ] All images load correctly
- [ ] Navigation links work properly
- [ ] Mobile responsiveness tested
- [ ] Cross-browser compatibility verified

### 3. Performance Optimization
- [ ] Images optimized for web (WebP format recommended)
- [ ] Large images compressed
- [ ] Unused configuration files removed
- [ ] Console errors resolved

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

Vercel provides the best experience for Next.js applications with automatic deployments and global CDN.

#### Step 1: Prepare Repository
```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial hotel website setup"

# Push to GitHub
git remote add origin https://github.com/yourusername/your-hotel-website.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy to Vercel
1. **Visit [vercel.com](https://vercel.com)** and sign up/login
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure project settings:**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
5. **Click "Deploy"**

#### Step 3: Custom Domain (Optional)
1. **Go to Project Settings → Domains**
2. **Add your custom domain** (e.g., `www.yourhotel.com`)
3. **Configure DNS records** as instructed by Vercel
4. **Wait for SSL certificate** to be automatically provisioned

#### Environment Variables (if needed)
```bash
# In Vercel dashboard, go to Settings → Environment Variables
NEXT_PUBLIC_BOOKING_URL=https://your-booking-system.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Option 2: Netlify

Netlify offers excellent static site hosting with continuous deployment.

#### Step 1: Build Configuration
Create `netlify.toml` in your project root:
```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Step 2: Configure Static Export
Update `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

#### Step 3: Deploy to Netlify
1. **Visit [netlify.com](https://netlify.com)** and sign up/login
2. **Click "New site from Git"**
3. **Connect your GitHub repository**
4. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `out`
5. **Click "Deploy site"**

### Option 3: Traditional Web Hosting

For shared hosting or VPS deployment.

#### Step 1: Static Export
```bash
# Configure for static export
npm run build

# The 'out' directory contains your static website
```

#### Step 2: Upload Files
1. **Compress the `out` directory** to a ZIP file
2. **Upload to your web hosting** via FTP/cPanel
3. **Extract files** to your domain's public directory
4. **Configure .htaccess** (for Apache servers):

```apache
# .htaccess
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### Option 4: Docker Deployment

For containerized deployment on cloud platforms.

#### Step 1: Create Dockerfile
```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### Step 2: Build and Deploy
```bash
# Build Docker image
docker build -t hotel-website .

# Run locally
docker run -p 3000:3000 hotel-website

# Deploy to cloud platform (AWS, Google Cloud, etc.)
```

## 🔧 Post-Deployment Configuration

### 1. Domain and SSL Setup

#### Custom Domain Configuration
1. **Purchase domain** from registrar (GoDaddy, Namecheap, etc.)
2. **Configure DNS records:**
   ```
   Type: A
   Name: @
   Value: [Your hosting IP]
   
   Type: CNAME
   Name: www
   Value: yourdomain.com
   ```
3. **Enable SSL certificate** (usually automatic with modern hosts)

### 2. Analytics Setup

#### Google Analytics 4
1. **Create GA4 property** at [analytics.google.com](https://analytics.google.com)
2. **Add tracking code** to your site configuration:

```json
// In site-content.json
{
  "analytics": {
    "googleAnalyticsId": "G-XXXXXXXXXX"
  }
}
```

3. **Update layout.tsx** to include analytics:

```tsx
// In app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${config.analytics.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.analytics.googleAnalyticsId}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 3. Search Engine Optimization

#### Google Search Console
1. **Verify ownership** at [search.google.com/search-console](https://search.google.com/search-console)
2. **Submit sitemap:** `https://yourdomain.com/sitemap.xml`
3. **Monitor indexing** and search performance

#### Sitemap Generation
Create `app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://yourdomain.com/rooms',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://yourdomain.com/gallery',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://yourdomain.com/location',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
```

### 4. Performance Monitoring

#### Core Web Vitals
1. **Monitor with PageSpeed Insights**
2. **Use Lighthouse** for performance audits
3. **Optimize images** and loading times

#### Error Monitoring
Consider integrating error tracking:
- Sentry
- LogRocket
- Bugsnag

## 🔄 Continuous Deployment

### Automatic Deployments
Most platforms support automatic deployments when you push to your main branch:

1. **Vercel:** Automatically deploys on git push
2. **Netlify:** Automatically builds and deploys
3. **GitHub Pages:** Use GitHub Actions for deployment

### Content Updates
For content-only updates:
1. **Edit configuration files** in `extracted-content/`
2. **Commit and push changes**
3. **Deployment happens automatically**

## 🛡️ Security Considerations

### Environment Variables
Never commit sensitive data to your repository:
```bash
# Use environment variables for:
- API keys
- Database credentials
- Third-party service tokens
```

### Content Security Policy
Add CSP headers for security:
```javascript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-eval' 'unsafe-inline';"
          }
        ]
      }
    ]
  }
}
```

## 📊 Monitoring and Maintenance

### Regular Tasks
- [ ] **Monthly:** Update content and pricing
- [ ] **Quarterly:** Review analytics and performance
- [ ] **Annually:** Update dependencies and security patches

### Backup Strategy
1. **Repository backup:** GitHub/GitLab provides automatic backups
2. **Content backup:** Regular exports of configuration files
3. **Image backup:** Cloud storage for media assets

## 🆘 Troubleshooting Deployment Issues

### Common Problems

**Build Failures:**
```bash
# Check for TypeScript errors
npm run build

# Fix missing dependencies
npm install

# Clear cache
rm -rf .next
npm run build
```

**Image Loading Issues:**
- Verify image paths in configuration
- Check file extensions and naming
- Ensure images are in the `public/` directory

**Performance Issues:**
- Optimize images (use WebP format)
- Enable compression
- Use CDN for static assets

### Getting Help
1. **Check platform documentation** (Vercel, Netlify, etc.)
2. **Review build logs** for specific error messages
3. **Test locally** before deploying
4. **Use browser developer tools** to debug issues

---

**Ready to go live! 🚀**

Your hotel website is now ready for the world. Remember to regularly update content and monitor performance for the best guest experience.