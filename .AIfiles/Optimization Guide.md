Here's your content formatted in **Markdown** without any added or removed information:

---

# AI Agent Instructions

You are implementing critical fixes for the Fantasea Condo Kamala website based on audit findings. Complete each phase systematically before moving to the next. Test every change immediately after implementation.

---

## Project Context:

* **Next.js 15.3.2 + TypeScript + Tailwind CSS**
* **Frontend-only (static export, no backend)**
* **Focus on production readiness and optimization**

---

## Phase 1: Security Fixes 🔴

### Task 1.1: Create Security Middleware

**Create file:** `middleware.ts` (root directory)

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
```

### Task 1.2: Fix Next.js Configuration

**Edit:** `next.config.js`

```javascript
const nextConfig = {
  images: { unoptimized: true },
  output: 'export',
  // Remove this line: eslint: { ignoreDuringBuilds: true },
}
```

### Task 1.3: Create Environment Files

**Create:** `.env.example`

```bash
NEXT_PUBLIC_SITE_URL=https://fantasea-condo-kamala.com
NEXT_PUBLIC_SITE_NAME="Fantasea Condo Kamala"
```

**Create:** `.env.local` (copy from `.env.example`)

### Task 1.4: Create robots.txt

**Create:** `public/robots.txt`

```text
User-agent: *
Allow: /

Sitemap: https://fantasea-condo-kamala.com/sitemap.xml
```

**Phase 1 Complete:** Test security headers in browser dev tools

---

## Phase 2: Performance Optimization ⚡

### Task 2.1: Enable Image Optimization

**Edit:** `next.config.js`

```javascript
const nextConfig = {
  images: {
    unoptimized: false, // Enable optimization
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  output: 'export',
}
```

### Task 2.2: Optimize Hero Component

**Edit:** `components/sections/Hero.tsx`
Replace background-image with Next.js Image component:

```typescript
import Image from 'next/image'

// Replace the background div with:
<Image
  src="public/logo.png"
  alt="Fantasea Condo Kamala"
  fill
  priority
  className="object-cover"
  sizes="100vw"
  quality={85}
/>
```

### Task 2.3: Add Bundle Analyzer

**Install:**

```bash
npm install --save-dev @next/bundle-analyzer
```

**Update:** `package.json` scripts section

```json
{
  "scripts": {
    "analyze": "ANALYZE=true npm run build"
  }
}
```

**Phase 2 Complete:** Run `npm run analyze` to verify optimization

---

## Phase 3: SEO Implementation 🔍

### Task 3.1: Enhanced Metadata

**Edit:** `app/layout.tsx`

```typescript
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
}
```

### Task 3.2: Add Hotel Schema

**Create:** `components/StructuredData.tsx`

```typescript
import Script from 'next/script'

export function HotelSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Fantasea Condo Kamala",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kamala Beach",
      "addressRegion": "Phuket",
      "addressCountry": "Thailand"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Beach Access" },
      { "@type": "LocationFeatureSpecification", "name": "Swimming Pool" },
      { "@type": "LocationFeatureSpecification", "name": "WiFi" }
    ]
  }

  return (
    <Script id="hotel-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}
```

**Add to `layout.tsx` before closing `</body>` tag:**

```typescript
import { HotelSchema } from '@/components/StructuredData'

// Add before </body>
<HotelSchema />
```

**Phase 3 Complete:** Test with Google Rich Results Test

---

## Phase 4: Code Quality 🏗️

### Task 4.1: Fix TypeScript Configuration

**Edit:** `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es2022",
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    // ... keep existing settings
  }
}
```

### Task 4.2: Add Error Boundary

**Create:** `app/error.tsx`

```typescript
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
```

**Phase 4 Complete:** Build without TypeScript errors

---

## Phase 5: Accessibility ♿

### Task 5.1: Add Skip Navigation

**Create:** `components/SkipNavigation.tsx`

```typescript
export function SkipNavigation() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
    >
      Skip to main content
    </a>
  )
}
```

**Add to `layout.tsx` after `<body>`:**

```typescript
import { SkipNavigation } from '@/components/SkipNavigation'

<body>
  <SkipNavigation />
  {/* rest of content */}
</body>
```

### Task 5.2: Add Main Content ID

**Edit:** Main content wrapper to include `id="main-content"`

**Phase 5 Complete:** Test keyboard navigation (Tab key)

---

## Final Testing 🧪

### Run These Commands:

```bash
npm run build          # Verify build success  
npm run analyze        # Check bundle size  
npm audit              # Security check  
```

### Test These Items:

* Security headers visible in browser dev tools
* Images loading in WebP format
* Skip navigation works with Tab key
* Structured data valid (Google Rich Results Test)
* No TypeScript errors in build
* No ESLint errors

### Save Progress Report:

Document all completed tasks in `.AIfiles/Reports/ImplementationComplete.md`

---

## Success Criteria

After completion, your website should have:

* ✅ Security headers protecting against attacks
* ✅ Optimized images loading 50–70% faster
* ✅ SEO metadata for search visibility
* ✅ Error handling for better user experience
* ✅ Accessibility compliance for all users

---

**Priority:** Complete phases in order
**Testing:** Verify each phase before proceeding

---