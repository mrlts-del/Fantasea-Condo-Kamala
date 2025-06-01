"use client";

import React, { useState, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BLOG_POSTS_DATA = [
  {
    id: 1,
    title: "Why Stay in a Japanese-Style Condo Near Kamala Beach?",
    excerpt: "A look at the unique blend of minimalist Japanese design and tropical comfort offered by condos near Kamala Beach.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895648/646750874_auhhuy.jpg`,
    slug: `why-stay-japanese-style-condo-kamala-beach`
  },
  {
    id: 2,
    title: "Top Amenities at Japanese-Style Condos Close to Kamala Beach",
    excerpt: "An overview of premium amenities such as rooftop pools, fitness centers, and lush gardens available in these condos.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895647/646750870_xwqw0g.jpg`,
    slug: `top-amenities-japanese-style-condos-kamala-beach`
  },
  {
    id: 3,
    title: "A Guide to Kamala Beach: Phuket’s Hidden Gem",
    excerpt: "Information about Kamala Beach as a tranquil, family-friendly destination.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895647/646750870_xwqw0g.jpg`,
    slug: `guide-kamala-beach-phuket-hidden-gem`
  },
  {
    id: 4,
    title: "Japanese Minimalism Meets Phuket Paradise: Interior Design Trends",
    excerpt: "Details on how Japanese-inspired interiors create a calming, stylish atmosphere in Kamala’s condos.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895646/One-Bedroom_Apartment_6_y1y1qt.jpg`,
    slug: `japanese-minimalism-phuket-paradise-interior-design`
  },
  {
    id: 5,
    title: "Family-Friendly Activities Near Kamala Beach Condos",
    excerpt: "A list of family activities located close to Japanese-style condos near Kamala Beach.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895647/646750870_xwqw0g.jpg`,
    slug: `family-friendly-activities-kamala-beach-condos`
  },
  {
    id: 6,
    title: "How to Choose the Best Condo Type for Your Kamala Beach Stay",
    excerpt: "A comparison of one-bedroom, two-bedroom, and studio layouts for different types of stays.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895646/One-Bedroom_Apartment_6_y1y1qt.jpg`,
    slug: `how-to-choose-best-condo-type-kamala-beach`
  },
  {
    id: 7,
    title: "Local Attractions: What’s Within Walking Distance of Kamala Beach Condos?",
    excerpt: "A summary of nearby attractions such as Phuket FantaSea, local markets, and beaches accessible from the condos.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895647/646750870_xwqw0g.jpg`,
    slug: `local-attractions-walking-distance-kamala-beach-condos`
  },
  {
    id: 8,
    title: "The Benefits of Beachfront Living in Kamala",
    excerpt: "Information on direct beachfront access and ocean views from Kamala Beach condos.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895647/646750870_xwqw0g.jpg`,
    slug: `benefits-beachfront-living-kamala`
  },
  {
    id: 9,
    title: "Investing in Japanese-Style Condos: Is Kamala Beach the Right Choice?",
    excerpt: "An analysis of investment potential, rental yields, and lifestyle benefits of owning property in Kamala Beach.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895648/646750874_auhhuy.jpg`,
    slug: `investing-japanese-style-condos-kamala-beach`
  },
  {
    id: 10,
    title: "Dining and Nightlife: Best Spots Near Kamala Beach",
    excerpt: "A guide to restaurants, beach bars, and local eateries near Japanese-style condos.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895647/646750870_xwqw0g.jpg`,
    slug: `dining-nightlife-best-spots-kamala-beach`
  },
  {
    id: 11,
    title: "Wellness and Relaxation: Spa and Fitness Options in Kamala",
    excerpt: "Information on spas, wellness centers, and fitness facilities available to condo residents and visitors.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895647/646750870_xwqw0g.jpg`,
    slug: `wellness-relaxation-spa-fitness-kamala`
  },
  {
    id: 12,
    title: "Getting Around Kamala: Transportation Tips for Condo Guests",
    excerpt: "Details on shuttle services, local taxis, and transportation options for exploring Kamala and Phuket.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895647/646750870_xwqw0g.jpg`,
    slug: `getting-around-kamala-transportation-tips`
  },
  {
    id: 13,
    title: "Safety, Security, and Convenience: What Condo Residents Can Expect",
    excerpt: "A review of security features, contactless check-in, and on-site conveniences at Kamala Beach condos.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895648/646750874_auhhuy.jpg`,
    slug: `safety-security-convenience-condo-residents`
  },
  { id: 14,
    title: "Seasonal Guide: When Is the Best Time to Visit Kamala Beach?",
    excerpt: "Information on Phuket’s weather, high and low seasons, and what to expect throughout the year.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895647/646750870_xwqw0g.jpg`,
    slug: `seasonal-guide-best-time-visit-kamala-beach`
  },

  {
    id: 15,
    title: "A Day in the Life: What It’s Like to Stay in a Kamala Beach Condo",
    excerpt: "A description of a typical day enjoying the pool, gardens, nearby attractions, and the ambiance of Japanese-inspired living.",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895646/One-Bedroom_Apartment_6_y1y1qt.jpg`,
    slug: `day-in-life-stay-kamala-beach-condo`
  }
];

const ITEMS_PER_PAGE = 9;

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);


  const filteredBlogPosts = BLOG_POSTS_DATA.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredBlogPosts.length / ITEMS_PER_PAGE);
  const currentBlogPosts = filteredBlogPosts.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );



  const handlePageChange = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-cream">
      <Navbar />
      <main className="flex-1 w-full px-3 sm:px-4 py-6 sm:py-8 lg:py-10 pt-20 sm:pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-center mb-4 text-brand-charcoal">Our Blog</h1>
          <p className="text-center text-brand-charcoal/70 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto">
            Discover insights, tips, and stories about luxury accommodations and travel experiences.
          </p>

          {/* Search Bar */}
          <div className="mb-8 sm:mb-10 lg:mb-12 max-w-md mx-auto">
            <Input
              type="search"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-sm sm:text-base h-10 sm:h-11 bg-white border-brand-teal/20 focus:border-brand-teal"
            />
          </div>

          {/* Blog Posts Carousel with Pagination */}
          {filteredBlogPosts.length > 0 ? (
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {currentBlogPosts.map(post => (
                  <Card key={post.id} className="flex flex-col h-full bg-white rounded-xl shadow-lg border border-brand-teal/10 hover:shadow-xl transition-shadow">
                    <CardHeader className="p-0">
                      <div className="aspect-square relative w-full">
                        <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="rounded-t-xl" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                      <CardTitle className="mb-2 text-lg sm:text-xl leading-tight text-brand-charcoal font-serif">{post.title}</CardTitle>
                      <CardDescription className="text-xs sm:text-sm mb-3 sm:mb-4 overflow-hidden flex-1 leading-relaxed text-brand-charcoal/70">
                        {post.excerpt.length > 80 ? `${post.excerpt.substring(0, 80)}...` : post.excerpt}
                      </CardDescription>
                      <div className="mt-auto">
                        <Button variant="outline" asChild className="w-full text-xs sm:text-sm h-8 sm:h-10 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white">
                          <a href={`/blog/${post.slug}`}>Read more</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {pageCount > 1 && ( // Only show pagination if there's more than one page
                <div className="flex justify-center items-center mt-8 sm:mt-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 0}
                    className="h-12 w-12 text-brand-teal hover:bg-brand-teal/10 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <div className="flex space-x-2 mx-4">
                    {Array.from({ length: pageCount }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index)}
                        className={`w-4 h-4 rounded-full transition-colors ${currentPage === index ? 'bg-brand-teal hover:bg-brand-teal/90' : 'bg-brand-teal/20 hover:bg-brand-teal/40'}`}
                        aria-label={`Go to page ${index + 1}`}
                      />
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === pageCount - 1}
                    className="h-12 w-12 text-brand-teal hover:bg-brand-teal/10 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 shadow-md border border-brand-teal/10 text-center">
              <p className="text-brand-charcoal/70 mb-6 sm:mb-8 text-sm sm:text-base">No blog posts found.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}