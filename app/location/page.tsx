"use client";

import React, { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = ["ALL", "Cafes & Restaurants", "Parks & Nature", "Beaches", "Attractions & Museums", "Transportation"];

const LOCATIONS_DATA = [
  {
    id: 1,
    category: "Cafes & Restaurants",
    name: "Feelings Cafe",
    description: "A beautifully designed cafe in Phuket Town, known for its good atmosphere, spacious layout, and many photo spots. Offers food, drinks, and desserts.",
    distance: "6 km",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747894816/feelingscafe_f0w3bs.jpg`
  },
  {
    id: 4,
    category: "Cafes & Restaurants",
    name: "Chapayom",
    description: "A cafe chain known for Thai tea and beverages, located about 1 km from Kamala Beach.",
    distance: "1 km",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747894818/Chapayom_hnf9dq.png`
  },
  {
    id: 7,
    category: "Parks & Nature",
    name: "Khao Lampi-Hat Thai Muang National Park",
    description: "A national park in Phang Nga Province, famous for waterfalls, a pristine beach, and sea turtle nesting area.",
    distance: "10 km",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747894818/KhaoLampi-HatNationalPark_jnqdcg.png`
  },
  {
    id: 9,
    category: "Parks & Nature",
    name: "Khao Phra Thaeo National Park",
    description: "A large protected area in Phuket, home to rainforest, waterfalls, and wildlife, popular for hiking and nature walks.",
    distance: "17 km",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747894815/phrathaeonationalpark_ixsr3k.jpg`
  },
  {
    id: 10,
    category: "Parks & Nature",
    name: "Kathu Waterfall",
    description: "A scenic waterfall in the Kathu area, popular for hiking and swimming in natural pools.",
    distance: "6 km",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747894815/kathuwaterfall_mnuq5p.jpg`
  },
  {
    id: 11,
    category: "Beaches",
    name: "Kamala Beach",
    description: "A 2 km long, family-friendly beach with soft sand, gentle waves, and a laid-back atmosphere. Offers water sports, beach clubs, and sunset views.",
    distance: "950 m",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747894815/kamala_zjkgi7.jpg`
  },
  {
    id: 12,
    category: "Beaches",
    name: "Laem Sing Beach",
    description: "A small, scenic beach known for its clear water and relaxed vibe, located between Kamala and Surin beaches.",
    distance: "2.6 km",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747894815/LaemSing_o8lvu7.jpg`
  },
  {
    id: 13,
    category: "Beaches",
    name: "Surin Beach",
    description: "A popular beach with white sand and turquoise water, known for its upscale beach clubs and relaxed atmosphere.",
    distance: "3.5 km",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747894816/Surin_pkpaxf.jpg`
  },
  {
    id: 14,
    category: "Beaches",
    name: "Pansea Beach",
    description: "A secluded beach near Surin, known for its tranquility and luxury resorts.",
    distance: "4.6 km",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747894817/Pansea_etrynx.png`
  },
  {
    id: 15,
    category: "Beaches",
    name: "Bang Tao Beach",
    description: "One of Phuket’s longest beaches, famous for its resorts, beach clubs, and family-friendly atmosphere.",
    distance: "5 km",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747894816/BangTao_l98kql.jpg`
  },
  {
    id: 16,
    category: "Attractions & Museums",
    name: "Fantasy Kidzooona",
    description: "Indoor playpark in Jungceylon Shopping Center, Patong Beach, with hands-on activities for kids.",
    distance: "10 km",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747894815/Kidzooona_ukf7ry.jpg`
  },
  {
    id: 18,
    category: "Attractions & Museums",
    name: "Kathu Mining Museum",
    description: "-",
    distance: "11 km",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747894814/miningmuseum_qdbaes.jpg`
  },
  {
    id: 20,
    category: "Attractions & Museums",
    name: "Two Heroines Monument",
    description: "Historic monument commemorating two local heroines of Phuket.",
    distance: "14 km",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747894909/TwoHeroinesMonument_b5knn7.jpg`
  },
  {
    id: 22,
    category: "Transportation",
    name: "Phuket International Airport",
    description: "The main airport serving Phuket, providing domestic and international flights.",
    distance: "25 km",
    image: `https://res.cloudinary.com/dvumjbuwj/image/upload/v1747894817/PhuketAirport_qlnv81.png`
  }
];

const ITEMS_PER_PAGE = 9;

export default function LocationPage() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredLocations = activeTab === "ALL"
    ? LOCATIONS_DATA
    : LOCATIONS_DATA.filter(loc => loc.category === activeTab);

  const pageCount = Math.ceil(filteredLocations.length / ITEMS_PER_PAGE);
  const currentLocations = filteredLocations.slice(
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-center mb-2 text-brand-charcoal">Location & Nearby</h1>
          <p className="text-center text-brand-charcoal/70 mb-8 max-w-2xl mx-auto">Discover the beautiful attractions and destinations surrounding our hotel in Kamala, Phuket.</p>

          {/* Map Section */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-brand-teal/10 aspect-video min-h-[300px] sm:min-h-[400px] h-full mb-10 sm:mb-12 lg:mb-14 bg-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63222.7365072801!2d98.290603!3d7.955367799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503b0071e1491d%3A0x4a8cbf25f6f4981!2sFantasea%20Condo%20Kamala!5e0!3m2!1sen!2sus!4v1747804530096!5m2!1sen!2sus" 
              className="w-full h-full" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Location"
            ></iframe>
          </div>

          {/* Category Navigation */}
          <Tabs value={activeTab} onValueChange={(value) => { setActiveTab(value); setCurrentPage(0); }} className="mb-8 sm:mb-10">
            <TabsList className="flex flex-wrap justify-center gap-1 sm:gap-2 w-full mx-auto max-w-full px-2 sm:px-4 h-auto p-1 bg-white/50 border border-brand-teal/20">
              {CATEGORIES.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category} 
                  className="text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap data-[state=active]:bg-brand-teal data-[state=active]:text-white text-brand-charcoal hover:bg-brand-teal/10 transition-colors"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Locations Grid */}
          {currentLocations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10">
              {currentLocations.map(location => (
                <Card key={location.id} className="bg-white border-brand-teal/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="aspect-video relative w-full">
                       <Image src={location.image} alt={location.name} layout="fill" objectFit="cover" className="rounded-t-xl" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <CardTitle className="mb-3 text-lg sm:text-xl text-brand-charcoal font-serif">{location.name}</CardTitle>
                    <CardDescription className="text-sm sm:text-base mb-3 leading-relaxed text-brand-charcoal/70">{location.description}</CardDescription>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-brand-coral"></div>
                      <p className="text-sm text-brand-teal font-medium">{location.distance}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center bg-white rounded-xl p-8 shadow-md border border-brand-teal/10 mb-8 sm:mb-10">
              <p className="text-brand-charcoal/70 text-base sm:text-lg">No locations found for this category.</p>
            </div>
          )}

          {/* Pagination */}
          {pageCount > 1 && (
            <div className="flex justify-center items-center mb-12">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className={`mr-4 bg-white/90 hover:bg-white border border-brand-teal/20 text-brand-teal h-10 w-10 rounded-full ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2 mx-4">
                {Array.from({ length: pageCount }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index)}
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors ${currentPage === index ? 'bg-brand-teal hover:bg-brand-teal/90' : 'bg-brand-teal/20 hover:bg-brand-teal/40'}`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handlePageChange(Math.min(pageCount - 1, currentPage + 1))}
                disabled={currentPage === pageCount - 1}
                className={`ml-4 bg-white/90 hover:bg-white border border-brand-teal/20 text-brand-teal h-10 w-10 rounded-full ${currentPage === pageCount - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}