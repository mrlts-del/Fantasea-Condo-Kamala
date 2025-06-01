"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { QuoteIcon, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Function to get country flag emoji
const getCountryFlag = (country: string): string => {
  const countryFlags: { [key: string]: string } = {
    "United Kingdom": "🇬🇧",
    "Kazakhstan": "🇰🇿",
    "Thailand": "🇹🇭",
    "United States": "🇺🇸",
    "Canada": "🇨🇦",
    "Australia": "🇦🇺",
    "Germany": "🇩🇪",
    "France": "🇫🇷",
    "Japan": "🇯🇵",
    "Singapore": "🇸🇬",
    "Malaysia": "🇲🇾",
    "Indonesia": "🇮🇩",
    "Philippines": "🇵🇭",
    "Vietnam": "🇻🇳",
    "South Korea": "🇰🇷",
    "China": "🇨🇳",
    "India": "🇮🇳",
    "Russia": "🇷🇺",
    "Brazil": "🇧🇷",
    "Mexico": "🇲🇽",
    "Spain": "🇪🇸",
    "Italy": "🇮🇹",
    "Netherlands": "🇳🇱",
    "Sweden": "🇸🇪",
    "Norway": "🇳🇴",
    "Denmark": "🇩🇰",
    "Finland": "🇫🇮",
    "Switzerland": "🇨🇭",
    "Austria": "🇦🇹",
    "Belgium": "🇧🇪",
    "Ireland": "🇮🇪",
    "New Zealand": "🇳🇿",
    "South Africa": "🇿🇦",
    "UAE": "🇦🇪",
    "Saudi Arabia": "🇸🇦",
    "Israel": "🇮🇱",
    "Turkey": "🇹🇷",
    "Greece": "🇬🇷",
    "Portugal": "🇵🇹",
    "Poland": "🇵🇱",
    "Czech Republic": "🇨🇿",
    "Hungary": "🇭🇺",
    "Romania": "🇷🇴",
    "Bulgaria": "🇧🇬",
    "Croatia": "🇭🇷",
    "Slovenia": "🇸🇮",
    "Slovakia": "🇸🇰",
    "Estonia": "🇪🇪",
    "Latvia": "🇱🇻",
    "Lithuania": "🇱🇹",
    "Ukraine": "🇺🇦",
    "Belarus": "🇧🇾",
    "Moldova": "🇲🇩",
    "Georgia": "🇬🇪",
    "Armenia": "🇦🇲",
    "Azerbaijan": "🇦🇿",
    "Uzbekistan": "🇺🇿",
    "Kyrgyzstan": "🇰🇬",
    "Tajikistan": "🇹🇯",
    "Turkmenistan": "🇹🇲",
    "Mongolia": "🇲🇳",
    "Nepal": "🇳🇵",
    "Bangladesh": "🇧🇩",
    "Sri Lanka": "🇱🇰",
    "Myanmar": "🇲🇲",
    "Cambodia": "🇰🇭",
    "Laos": "🇱🇦",
    "Brunei": "🇧🇳",
    "Taiwan": "🇹🇼",
    "Hong Kong": "🇭🇰",
    "Macau": "🇲🇴"
  };
  return countryFlags[country] || "🏳️";
};

// Review data organized by platform
const reviewData = {
  all: [
    {
      quote: "The apartment was brand new, spacious, comfortable and very stylish. It came fully equipped with kitchen, dining area, sofa, really comfy bed and great shower room. It had a small balcony and was the best place we have stayed in in Thailand.",
      author: "Caroline, United Kingdom",
      platform: "Booking.com",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "Прекрасные апартаменты, все опции, все новое, чистота. Отличный бассейн на крыше, вечером нереальный вид с бассейна, пляж р15 минут. Мы до Вы довольны своим выбором",
      author: "Gulnar, Kazakhstan",
      platform: "Booking.com",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "Very nice design and clean throughout the property",
      author: "Shae, United Kingdom",
      platform: "Booking.com",
      rating: 4,
      avatar: "/api/placeholder/60/60"
    }
  ],
  booking: [
    {
      quote: "The apartment was brand new, spacious, comfortable and very stylish. It came fully equipped with kitchen, dining area, sofa, really comfy bed and great shower room. It had a small balcony and was the best place we have stayed in in Thailand.",
      author: "Caroline, United Kingdom",
      platform: "Booking.com",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "Прекрасные апартаменты, все опции, все новое, чистота. Отличный бассейн на крыше, вечером нереальный вид с бассейна, пляж р15 минут. Мы до Вы довольны своим выбором",
      author: "Gulnar, Kazakhstan",
      platform: "Booking.com",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "Very nice design and clean throughout the property",
      author: "Shae, United Kingdom",
      platform: "Booking.com",
      rating: 4,
      avatar: "/api/placeholder/60/60"
    }
  ]
};

const Reviews = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = reviewData[activeTab as keyof typeof reviewData];
  
  // Show 3 reviews at a time on desktop, 1 on mobile
  const visibleReviews = 3;
  
  // Calculate total pages based on visible reviews
  const totalPages = Math.ceil(reviews.length / visibleReviews);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentIndex(0); // Reset index when changing tabs
  };
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h2 className="section-heading font-bold font-serif mb-4 text-brand-charcoal">Customer Reviews</h2>
          <p className="body-text text-brand-charcoal/80 max-w-2xl mx-auto">See what our guests are saying about their experience</p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="w-auto max-w-auto mx-auto">
          <TabsList className="mb-8 sm:mb-12 justify-center h-10 sm:h-12 p-1 gap-2 bg-white border border-brand-teal/20">
            <TabsTrigger value="all" className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 data-[state=active]:bg-brand-teal data-[state=active]:text-white">ALL</TabsTrigger>
            <TabsTrigger value="booking" className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 data-[state=active]:bg-brand-teal data-[state=active]:text-white">Booking.com</TabsTrigger>
          </TabsList>

          {Object.keys(reviewData).map((platform) => (
            <TabsContent key={platform} value={platform} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {reviews
                  .slice(
                    currentIndex * visibleReviews,
                    Math.min((currentIndex + 1) * visibleReviews, reviews.length)
                  )
                  .map((review, idx) => (
                    <div
                      key={idx}
                      className="p-6 sm:p-8 bg-white dark:bg-muted/10 rounded-2xl shadow-lg border border-brand-teal/10 relative flex flex-col hover:shadow-xl transition-shadow duration-300"
                    >
                      <QuoteIcon className="h-10 w-10 sm:h-12 sm:w-12 text-brand-teal/30 mb-4 sm:mb-6" />
                      
                      {/* Star Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className={`h-5 w-5 ${
                              starIdx < review.rating
                                ? 'text-brand-coral fill-brand-coral'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <p className="italic text-brand-charcoal/90 mb-6 flex-grow text-base sm:text-lg leading-relaxed">"{review.quote}"</p>
                      
                      {/* Author info with country flag */}
                      <div className="flex items-center mt-auto">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-2xl">
                        {getCountryFlag(review.author.split(', ')[1])}
                      </div>
                        <div>
                          <p className="font-semibold text-brand-charcoal text-base">
                            {review.author}
                          </p>
                          <p className="text-sm text-brand-charcoal/60">{review.platform}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Dots for pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8 sm:mt-12 space-x-2 sm:space-x-3">
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDotClick(idx)}
                      className={cn(
                        "w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300",
                        currentIndex === idx
                          ? "bg-brand-teal scale-110"
                          : "bg-brand-teal/30 hover:bg-brand-teal/50"
                      )}
                      aria-label={`Go to page ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Reviews;