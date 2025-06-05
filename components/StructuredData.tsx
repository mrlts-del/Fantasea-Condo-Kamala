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
      { "@type": "LocationFeatureSpecification", "name": "WiFi" },
      { "@type": "LocationFeatureSpecification", "name": "Mountain Views" },
      { "@type": "LocationFeatureSpecification", "name": "Japanese-style Living" },
      { "@type": "LocationFeatureSpecification", "name": "Resort Amenities" }
    ],
    "description": "Experience luxury at Fantasea Condo Kamala. Premium beachfront accommodation with stunning ocean views and modern amenities in Kamala Beach, Phuket.",
    "url": "https://fantasea-condo-kamala.com",
    "telephone": "+66-xxx-xxx-xxxx",
    "priceRange": "$$$",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    }
  }

  return (
    <Script id="hotel-schema" type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  )
}