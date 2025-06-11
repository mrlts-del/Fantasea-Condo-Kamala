# Hotel Template Implementation Plan

## Phase 1: Project Setup

### Step 1: Clean Project Cache
```bash
rm -rf .next/ node_modules/ .cache/ package-lock.json
npm install
```

### Step 2: Create Template Structure
```bash
mkdir -p config/ config/templates/ extracted-content/
```

## Phase 2: Content Extraction

### Step 3: Extract Hero Content
**File:** `components/sections/Hero.tsx`
**Extract:** Hero title, subtitle, CTA button text, background image path
**Save to:** `extracted-content/hero-content.json`

### Step 4: Extract Rooms Content  
**File:** `components/sections/Rooms.tsx`
**Extract:** Room names, descriptions, prices, sizes, occupancy, amenities
**Save to:** `extracted-content/rooms-content.json`

### Step 5: Extract Amenities Content
**File:** `components/sections/Amenities.tsx`  
**Extract:** Amenity names, descriptions, icons
**Save to:** `extracted-content/amenities-content.json`

### Step 6: Extract Benefits Content
**File:** `components/sections/Benefits.tsx`
**Extract:** Benefit titles, descriptions, icons
**Save to:** `extracted-content/benefits-content.json`

### Step 7: Extract Location Content
**File:** `components/sections/Location.tsx`
**Extract:** Location title, description, address information
**Save to:** `extracted-content/location-content.json`

### Step 8: Extract Reviews Content
**File:** `components/sections/Reviews.tsx`
**Extract:** Review titles, content, reviewer names, ratings
**Save to:** `extracted-content/reviews-content.json`

### Step 9: Extract Navigation Content
**Files:** `components/layout/Navbar.tsx` and `components/layout/Footer.tsx`
**Extract:** Site name, logo path, contact info, social links, navigation items
**Save to:** `extracted-content/navigation-content.json`

### Step 10: Extract Page Content
**Files:** `app/page.tsx`, `app/rooms/page.tsx`, `app/location/page.tsx`, `app/gallery/page.tsx`
**Extract:** Page titles, meta descriptions, page-specific content
**Save to:** `extracted-content/pages-content.json`

### Step 11: Extract Gallery Structure
**Analyze:** `public/Fantasea_Condo_Images/Gallery/` folder structure
**Extract:** Image paths, categories (Rooms, Facilities, Area), file names
**Save to:** `extracted-content/gallery-content.json`

## Phase 3: Create Template Configuration

### Step 12: Create TypeScript Interfaces
**Create:** `lib/types.ts` based on extracted content structure

### Step 13: Transform to Configuration Files
**Create configuration files using extracted data:**
- `config/site.json` - site info from navigation content
- `config/rooms.json` - room data from rooms content  
- `config/amenities.json` - amenities from extracted data
- `config/content.json` - page content from extracted data
- `config/assets.json` - image paths from existing structure

**Replace actual values with placeholders:** `"Fantasea Condo Kamala"` → `"{{HOTEL_NAME}}"`

### Step 14: Reorganize Assets
```bash
mkdir -p public/assets/template/hero/ public/assets/template/rooms/ public/assets/template/gallery/ public/assets/template/logo/
cp -r public/Fantasea_Condo_Images/* public/assets/template/
```

## Phase 4: Update Components

### Step 15: Create Configuration Loader
**Create:** `lib/config.ts` to import all configuration files

### Step 16: Update Components to Use Config
**Modify these files to use configuration data:**
- `components/sections/Hero.tsx`
- `components/sections/Rooms.tsx` 
- `components/sections/Amenities.tsx`
- `components/sections/Benefits.tsx`
- `components/sections/Location.tsx`
- `components/sections/Reviews.tsx`
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`

**Replace hardcoded content with:** `{config.variableName}`

### Step 17: Update Layout Files
**File:** `app/layout.tsx`
**Update:** SEO metadata to use configuration

## Phase 5: Template Creation

### Step 18: Create Content Template
**Create:** `config/templates/content-template.md`
**Structure based on extracted content categories:**
- Site Information (from navigation extraction)
- Hero Section (from hero extraction)  
- Room Types (from rooms extraction)
- Amenities (from amenities extraction)
- Benefits (from benefits extraction)
- Location Info (from location extraction)
- Asset Paths (from gallery structure analysis)
- SEO Information (from layout extraction)
- Reviews (from reviews extraction)
- And any other relevant content