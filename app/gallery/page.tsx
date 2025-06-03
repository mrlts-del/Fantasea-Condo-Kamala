"use client";

import React, { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselThumbs } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const GALLERY_CATEGORIES = ["ALL", "Rooms", "Facilities", "Area"];

const ALL_IMAGES_DATA = [
  // Rooms
  { id: 1, src: "/Fantasea_Condo_Images/Gallery/Rooms/One-Bedroom_Apartment.jpg", alt: "One-Bedroom Apartment", category: "Rooms" },
  { id: 2, src: "/Fantasea_Condo_Images/Gallery/Rooms/One-Bedroom_Apartment_2.jpg", alt: "One-Bedroom Apartment 2", category: "Rooms" },
  { id: 3, src: "/Fantasea_Condo_Images/Gallery/Rooms/One-Bedroom_Apartment_3.jpg", alt: "One-Bedroom Apartment 3", category: "Rooms" },
  { id: 4, src: "/Fantasea_Condo_Images/Gallery/Rooms/One-Bedroom_Apartment_4.jpg", alt: "One-Bedroom Apartment 4", category: "Rooms" },
  { id: 5, src: "/Fantasea_Condo_Images/Gallery/Rooms/One-Bedroom_Apartment_5.jpg", alt: "One-Bedroom Apartment 5", category: "Rooms" },
  { id: 6, src: "/Fantasea_Condo_Images/Gallery/Rooms/One-Bedroom_Apartment_6.jpg", alt: "One-Bedroom Apartment 6", category: "Rooms" },
  { id: 7, src: "/Fantasea_Condo_Images/Gallery/Rooms/Studio_with_Balcony.jpg", alt: "Studio with Balcony", category: "Rooms" },
  { id: 8, src: "/Fantasea_Condo_Images/Gallery/Rooms/Studio_with_Balcony_2.jpg", alt: "Studio with Balcony 2", category: "Rooms" },
  { id: 9, src: "/Fantasea_Condo_Images/Gallery/Rooms/Studio_with_Balcony_3.jpg", alt: "Studio with Balcony 3", category: "Rooms" },
  { id: 10, src: "/Fantasea_Condo_Images/Gallery/Rooms/Studio_with_Balcony_4.jpg", alt: "Studio with Balcony 4", category: "Rooms" },
  { id: 11, src: "/Fantasea_Condo_Images/Gallery/Rooms/Two-Bedroom_Apartment_with_Balcony.jpg", alt: "Two-Bedroom Apartment with Balcony", category: "Rooms" },
  { id: 12, src: "/Fantasea_Condo_Images/Gallery/Rooms/Two-Bedroom_Apartment_with_Balcony_2.jpg", alt: "Two-Bedroom Apartment with Balcony 2", category: "Rooms" },
  { id: 13, src: "/Fantasea_Condo_Images/Gallery/Rooms/Two-Bedroom_Apartment_with_Balcony_3.jpg", alt: "Two-Bedroom Apartment with Balcony 3", category: "Rooms" },
  { id: 14, src: "/Fantasea_Condo_Images/Gallery/Rooms/Two-Bedroom_Apartment_with_Balcony_4.jpg", alt: "Two-Bedroom Apartment with Balcony 4", category: "Rooms" },
  { id: 15, src: "/Fantasea_Condo_Images/Gallery/Rooms/Two-Bedroom_Apartment_with_Balcony_5.jpg", alt: "Two-Bedroom Apartment with Balcony 5", category: "Rooms" },
  { id: 16, src: "/Fantasea_Condo_Images/Gallery/Rooms/Two-Bedroom_Apartment_with_Balcony_6.jpg", alt: "Two-Bedroom Apartment with Balcony 6", category: "Rooms" },
  // Area
  { id: 17, src: "/Fantasea_Condo_Images/Gallery/Area/646752003.jpg", alt: "Area View 1", category: "Area" },
  { id: 18, src: "/Fantasea_Condo_Images/Gallery/Area/646752014.jpg", alt: "Area View 2", category: "Area" },
  // Facilities
  { id: 19, src: "/Fantasea_Condo_Images/Gallery/Facilities/646750870.jpg", alt: "Facility 1", category: "Facilities" },
  { id: 20, src: "/Fantasea_Condo_Images/Gallery/Facilities/646750874.jpg", alt: "Facility 2", category: "Facilities" },
  { id: 21, src: "/Fantasea_Condo_Images/Gallery/Facilities/646750889.jpg", alt: "Facility 3", category: "Facilities" },
  { id: 22, src: "/Fantasea_Condo_Images/Gallery/Facilities/646751983.jpg", alt: "Facility 4", category: "Facilities" },
  { id: 23, src: "/Fantasea_Condo_Images/Gallery/Facilities/646751989.jpg", alt: "Facility 5", category: "Facilities" },
  { id: 24, src: "/Fantasea_Condo_Images/Gallery/Facilities/646751992.jpg", alt: "Facility 6", category: "Facilities" },
  { id: 25, src: "/Fantasea_Condo_Images/Gallery/Facilities/646752024.jpg", alt: "Facility 7", category: "Facilities" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const filteredImages = activeCategory === "ALL"
    ? ALL_IMAGES_DATA
    : ALL_IMAGES_DATA.filter(image => image.category === activeCategory);

  // Reset selectedIndex when category changes
  React.useEffect(() => {
    setSelectedIndex(0);
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />
      <main className="flex-1 w-full px-3 sm:px-4 py-4 sm:py-6 lg:py-8 pt-12 sm:pt-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-center mb-2 text-brand-charcoal">Photo Gallery</h1>
          <p className="body-text text-center text-brand-charcoal/70 mb-8 max-w-2xl mx-auto">Explore our beautiful spaces and discover the elegance that awaits you at our hotel.</p>

          {/* Category Navigation */}
          <div className="mb-6 sm:mb-8 lg:mb-10 flex justify-center">
            <Tabs value={activeCategory} onValueChange={(category) => {
              setActiveCategory(category);
              setSelectedIndex(0); // Reset to first image when changing category
            }} className="w-full max-w-3xl">
              <TabsList className="flex w-full justify-center h-auto sm:h-12 p-1 gap-1 bg-white/50 border border-brand-teal/20">
                {GALLERY_CATEGORIES.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category} 
                    className="text-xs sm:text-sm px-3 sm:px-4 lg:px-6 py-2 sm:py-3 data-[state=active]:bg-brand-teal data-[state=active]:text-white text-brand-charcoal hover:bg-brand-teal/10 transition-colors"
                  >
                    {category === "ALL" ? "All" : category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Image Display Area */}
          {
            filteredImages.length > 0 ? (
              <div className="w-full mb-6 sm:mb-8 lg:mb-10">
                {/* Main Image Display */}
                <div className="relative w-full mx-auto mb-6 flex justify-center">
                  <div className="relative w-full max-w-4xl" style={{ aspectRatio: '4/3' }}>
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border border-brand-teal/10 bg-white">
                      <Image 
                        src={filteredImages[selectedIndex]?.src || ''} 
                        alt={filteredImages[selectedIndex]?.alt || ''} 
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 90vw, 1000px"
                        priority
                      />
                    </div>
                    {/* Navigation Arrows */}
                    <button
                      onClick={() => setSelectedIndex(selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1)}
                      className="absolute left-2 sm:-left-6 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white border border-brand-teal/30 text-brand-teal shadow-lg h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                    >
                      <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    </button>
                    <button
                      onClick={() => setSelectedIndex(selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1)}
                      className="absolute right-2 sm:-right-6 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white border border-brand-teal/30 text-brand-teal shadow-lg h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                    >
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    </button>
                  </div>
                </div>
                
                {/* Thumbnail Navigation */}
                <div className="w-full mt-4">
                  <div className="flex justify-center space-x-2 overflow-x-auto py-2 px-4 scrollbar-hide">
                    {filteredImages.map((image, index) => (
                      <div
                        key={image.id}
                        className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 hover:scale-105 ${
                          selectedIndex === index 
                            ? "border-brand-teal shadow-lg ring-2 ring-brand-teal/30" 
                            : "border-gray-200 hover:border-brand-teal/50"
                        }`}
                        onClick={() => setSelectedIndex(index)}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center bg-white rounded-xl p-8 shadow-md border border-brand-teal/10 mb-6 sm:mb-8 lg:mb-10">
                <p className="text-brand-charcoal/70 text-base sm:text-lg">No images found for this category.</p>
              </div>
            )
          }


        </div>
      </main>
      <Footer />
    </div>
  );
}