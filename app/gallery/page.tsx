"use client";

import React, { useState, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";

const GALLERY_CATEGORIES = ["ALL", "Rooms", "Facilities", "Area"];

const ALL_IMAGES_DATA = [
  // Same data structure as before, but with additional properties
  { id: 1, src: "/Fantasea_Condo_Images/Gallery/Rooms/One-Bedroom_Apartment.jpg", alt: "One-Bedroom Apartment", category: "Rooms", description: "Spacious one-bedroom apartment with modern amenities", photographer: "Hotel Staff", date: "2024", tags: ["bedroom", "modern", "spacious"] },
  { id: 2, src: "/Fantasea_Condo_Images/Gallery/Rooms/One-Bedroom_Apartment_2.jpg", alt: "One-Bedroom Apartment 2", category: "Rooms", description: "Elegant bedroom with ocean view", photographer: "Hotel Staff", date: "2024", tags: ["bedroom", "ocean view", "elegant"] },
  { id: 3, src: "/Fantasea_Condo_Images/Gallery/Rooms/One-Bedroom_Apartment_3.jpg", alt: "One-Bedroom Apartment 3", category: "Rooms", description: "Modern living space with contemporary design", photographer: "Hotel Staff", date: "2024", tags: ["living room", "contemporary", "modern"] },
  { id: 4, src: "/Fantasea_Condo_Images/Gallery/Rooms/One-Bedroom_Apartment_4.jpg", alt: "One-Bedroom Apartment 4", category: "Rooms", description: "Luxurious bathroom with premium fixtures", photographer: "Hotel Staff", date: "2024", tags: ["bathroom", "luxury", "premium"] },
  { id: 5, src: "/Fantasea_Condo_Images/Gallery/Rooms/One-Bedroom_Apartment_5.jpg", alt: "One-Bedroom Apartment 5", category: "Rooms", description: "Fully equipped kitchen for your convenience", photographer: "Hotel Staff", date: "2024", tags: ["kitchen", "equipped", "convenience"] },
  { id: 6, src: "/Fantasea_Condo_Images/Gallery/Rooms/One-Bedroom_Apartment_6.jpg", alt: "One-Bedroom Apartment 6", category: "Rooms", description: "Private balcony with stunning views", photographer: "Hotel Staff", date: "2024", tags: ["balcony", "private", "views"] },
  { id: 7, src: "/Fantasea_Condo_Images/Gallery/Rooms/Studio_with_Balcony.jpg", alt: "Studio with Balcony", category: "Rooms", description: "Cozy studio apartment with balcony access", photographer: "Hotel Staff", date: "2024", tags: ["studio", "cozy", "balcony"] },
  { id: 8, src: "/Fantasea_Condo_Images/Gallery/Rooms/Studio_with_Balcony_2.jpg", alt: "Studio with Balcony 2", category: "Rooms", description: "Efficient layout maximizing space and comfort", photographer: "Hotel Staff", date: "2024", tags: ["studio", "efficient", "space"] },
  { id: 9, src: "/Fantasea_Condo_Images/Gallery/Rooms/Studio_with_Balcony_3.jpg", alt: "Studio with Balcony 3", category: "Rooms", description: "Bright and airy studio with natural light", photographer: "Hotel Staff", date: "2024", tags: ["studio", "bright", "natural light"] },
  { id: 10, src: "/Fantasea_Condo_Images/Gallery/Rooms/Studio_with_Balcony_4.jpg", alt: "Studio with Balcony 4", category: "Rooms", description: "Modern amenities in a compact design", photographer: "Hotel Staff", date: "2024", tags: ["studio", "modern", "compact"] },
  { id: 11, src: "/Fantasea_Condo_Images/Gallery/Rooms/Two-Bedroom_Apartment_with_Balcony.jpg", alt: "Two-Bedroom Apartment with Balcony", category: "Rooms", description: "Spacious two-bedroom apartment perfect for families", photographer: "Hotel Staff", date: "2024", tags: ["two bedroom", "spacious", "family"] },
  { id: 12, src: "/Fantasea_Condo_Images/Gallery/Rooms/Two-Bedroom_Apartment_with_Balcony_2.jpg", alt: "Two-Bedroom Apartment with Balcony 2", category: "Rooms", description: "Master bedroom with panoramic views", photographer: "Hotel Staff", date: "2024", tags: ["master bedroom", "panoramic", "views"] },
  { id: 13, src: "/Fantasea_Condo_Images/Gallery/Rooms/Two-Bedroom_Apartment_with_Balcony_3.jpg", alt: "Two-Bedroom Apartment with Balcony 3", category: "Rooms", description: "Second bedroom with comfortable furnishing", photographer: "Hotel Staff", date: "2024", tags: ["second bedroom", "comfortable", "furnishing"] },
  { id: 14, src: "/Fantasea_Condo_Images/Gallery/Rooms/Two-Bedroom_Apartment_with_Balcony_4.jpg", alt: "Two-Bedroom Apartment with Balcony 4", category: "Rooms", description: "Open plan living and dining area", photographer: "Hotel Staff", date: "2024", tags: ["open plan", "living", "dining"] },
  { id: 15, src: "/Fantasea_Condo_Images/Gallery/Rooms/Two-Bedroom_Apartment_with_Balcony_5.jpg", alt: "Two-Bedroom Apartment with Balcony 5", category: "Rooms", description: "Premium kitchen with island counter", photographer: "Hotel Staff", date: "2024", tags: ["kitchen", "premium", "island"] },
  { id: 16, src: "/Fantasea_Condo_Images/Gallery/Rooms/Two-Bedroom_Apartment_with_Balcony_6.jpg", alt: "Two-Bedroom Apartment with Balcony 6", category: "Rooms", description: "Expansive balcony for outdoor relaxation", photographer: "Hotel Staff", date: "2024", tags: ["balcony", "expansive", "outdoor"] },
  // Area
  { id: 17, src: "/Fantasea_Condo_Images/Gallery/Area/646752003.jpg", alt: "Area View 1", category: "Area", description: "Beautiful surroundings of Kamala Beach", photographer: "Hotel Staff", date: "2024", tags: ["beach", "surroundings", "beautiful"] },
  { id: 18, src: "/Fantasea_Condo_Images/Gallery/Area/646752014.jpg", alt: "Area View 2", category: "Area", description: "Scenic landscape and tropical paradise", photographer: "Hotel Staff", date: "2024", tags: ["landscape", "scenic", "tropical"] },
  // Facilities
  { id: 19, src: "/Fantasea_Condo_Images/Gallery/Facilities/646750870.jpg", alt: "Facility 1", category: "Facilities", description: "Resort-style swimming pool", photographer: "Hotel Staff", date: "2024", tags: ["pool", "resort style", "swimming"] },
  { id: 20, src: "/Fantasea_Condo_Images/Gallery/Facilities/646750874.jpg", alt: "Facility 2", category: "Facilities", description: "Fitness center with modern equipment", photographer: "Hotel Staff", date: "2024", tags: ["fitness", "modern", "equipment"] },
  { id: 21, src: "/Fantasea_Condo_Images/Gallery/Facilities/646750889.jpg", alt: "Facility 3", category: "Facilities", description: "Relaxing spa and wellness center", photographer: "Hotel Staff", date: "2024", tags: ["spa", "wellness", "relaxing"] },
  { id: 22, src: "/Fantasea_Condo_Images/Gallery/Facilities/646751983.jpg", alt: "Facility 4", category: "Facilities", description: "Rooftop terrace with panoramic views", photographer: "Hotel Staff", date: "2024", tags: ["rooftop", "terrace", "panoramic"] },
  { id: 23, src: "/Fantasea_Condo_Images/Gallery/Facilities/646751989.jpg", alt: "Facility 5", category: "Facilities", description: "Business center and meeting rooms", photographer: "Hotel Staff", date: "2024", tags: ["business", "meeting", "center"] },
  { id: 24, src: "/Fantasea_Condo_Images/Gallery/Facilities/646751992.jpg", alt: "Facility 6", category: "Facilities", description: "Children's play area and family zone", photographer: "Hotel Staff", date: "2024", tags: ["children", "play area", "family"] },
  { id: 25, src: "/Fantasea_Condo_Images/Gallery/Facilities/646752024.jpg", alt: "Facility 7", category: "Facilities", description: "Concierge and reception services", photographer: "Hotel Staff", date: "2024", tags: ["concierge", "reception", "services"] },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('carousel');
  const [showInfo, setShowInfo] = useState(true);

  const filteredImages = activeCategory === "ALL"
    ? ALL_IMAGES_DATA
    : ALL_IMAGES_DATA.filter(image => image.category === activeCategory);

  // Reset selectedIndex when category changes to ensure images load immediately
  useEffect(() => {
    setSelectedIndex(0);
  }, [activeCategory]);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && filteredImages.length > 0) {
      const interval = setInterval(() => {
        setSelectedIndex(prev => (prev + 1) % filteredImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, filteredImages.length]);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSelectedIndex(prev => prev === 0 ? filteredImages.length - 1 : prev - 1);
    } else {
      setSelectedIndex(prev => (prev + 1) % filteredImages.length);
    }
  };

  const currentImage = filteredImages[selectedIndex];

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />
      <main className="flex-1 w-full py-4 sm:py-6 lg:py-8 pt-12 sm:pt-16 bg-brand-cream">
        <Container size="lg">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-2 text-brand-charcoal">
              Photo Gallery
            </h1>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            {/* Category Navigation with Play Button on Mobile */}
            <div className="flex items-center justify-center gap-4 w-full sm:w-auto">
              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="flex-1 sm:flex-none">
                <TabsList className="flex justify-center h-auto p-1 gap-1 bg-white/50 border border-brand-teal/20 rounded-xl">
                  {GALLERY_CATEGORIES.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category} 
                      className="text-sm px-4 py-2 rounded-lg data-[state=active]:bg-brand-teal data-[state=active]:text-white text-brand-charcoal hover:bg-brand-teal/10 transition-all duration-200"
                    >
                      {category === "ALL" ? "All" : category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              
              {/* Play Button - visible on mobile next to tabs */}
              <div className="flex items-center gap-2 sm:hidden">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {/* View Controls - hidden on mobile, visible on larger screens */}
            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Main Gallery Display */}
          <div className="relative mb-8">
            {/* Main Image */}
            <div className="relative w-full mx-auto" style={{ aspectRatio: '16/10' }}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img 
                  src={currentImage?.src || ''} 
                  alt={currentImage?.alt || ''} 
                  className="object-cover w-full h-full transition-opacity duration-300"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Navigation Controls */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>



                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div 
                    className="h-full bg-brand-teal transition-all duration-300"
                    style={{ width: `${((selectedIndex + 1) / filteredImages.length) * 100}%` }}
                  />
                </div>


              </div>
            </div>
          </div>

          {/* Enhanced Thumbnail Strip */}
          <div className="relative">
            <div className="flex overflow-x-auto py-4 px-2 gap-3 scrollbar-hide">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`relative flex-shrink-0 cursor-pointer transition-all duration-200 ${
                    selectedIndex === index 
                      ? "ring-2 ring-brand-teal shadow-lg scale-105" 
                      : "hover:scale-105"
                  }`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {selectedIndex === index && (
                    <div className="absolute inset-0 bg-brand-teal/20 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-brand-teal rounded-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>


        </Container>
      </main>
      <Footer />
    </div>
  );
}