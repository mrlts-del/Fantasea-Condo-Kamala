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
  { id: 1, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895646/One-Bedroom_Apartment_6_y1y1qt.jpg", alt: "Room Image 1", category: "Rooms" },
  { id: 2, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895645/Two-Bedroom_Apartment_with_Balcony_ph4o1q.jpg", alt: "Room Image 2", category: "Rooms" },
  { id: 3, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895645/One-Bedroom_Apartment_5_x0vkx6.jpg", alt: "Room Image 3", category: "Rooms" },
  { id: 4, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895644/Two-Bedroom_Apartment_with_Balcony_2_bvzb8t.jpg", alt: "Room Image 4", category: "Rooms" },
  { id: 5, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895644/One-Bedroom_Apartment_4_xpmuej.jpg", alt: "Room Image 5", category: "Rooms" },
  { id: 6, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895644/Studio_with_Balcony_2_fyjiyt.jpg", alt: "Room Image 6", category: "Rooms" },
  { id: 7, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895643/One-Bedroom_Apartment_2_xrjfy8.jpg", alt: "Room Image 7", category: "Rooms" },
  { id: 8, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895643/Studio_with_Balcony_3_md0u51.jpg", alt: "Room Image 8", category: "Rooms" },
  { id: 9, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895642/Studio_with_Balcony_4_ea9tju.jpg", alt: "Room Image 9", category: "Rooms" },
  { id: 10, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895642/Studio_with_Balcony_mp3rhn.jpg", alt: "Room Image 10", category: "Rooms" },
  { id: 11, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895641/One-Bedroom_Apartment_3_kcowbf.jpg", alt: "Room Image 11", category: "Rooms" },
  { id: 12, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895641/Two-Bedroom_Apartment_with_Balcony_5_xhbsi7.jpg", alt: "Room Image 12", category: "Rooms" },
  { id: 13, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895641/Two-Bedroom_Apartment_with_Balcony_3_yimmwj.jpg", alt: "Room Image 13", category: "Rooms" },
  { id: 14, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895641/Two-Bedroom_Apartment_with_Balcony_4_w7bvn0.jpg", alt: "Room Image 14", category: "Rooms" },
  { id: 15, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895642/One-Bedroom_Apartment_yxmlvu.jpg", alt: "Area Image 1", category: "Area" },
  { id: 16, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895642/Two-Bedroom_Apartment_with_Balcony_6_vqgsyo.jpg", alt: "Area Image 2", category: "Area" },
  { id: 17, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895648/646750874_auhhuy.jpg", alt: "Facility Image 1", category: "Facilities" },
  { id: 18, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895647/646752024_szqm9y.jpg", alt: "Facility Image 2", category: "Facilities" },
  { id: 19, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895648/646750889_auusmw.jpg", alt: "Facility Image 3", category: "Facilities" },
  { id: 20, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895646/646751989_pswejm.jpg", alt: "Facility Image 4", category: "Facilities" },
  { id: 21, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895646/646751983_ibcgui.jpg", alt: "Facility Image 5", category: "Facilities" },
  { id: 22, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895647/646750870_xwqw0g.jpg", alt: "Facility Image 6", category: "Facilities" },
  { id: 23, src: "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747895647/646751992_jmq7em.jpg", alt: "Facility Image 7", category: "Facilities" },
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
                  <div className="relative" style={{ minWidth: '800px', minHeight: '600px', width: 'min(90vw, 1000px)', height: 'min(75vh, 700px)' }}>
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
                      className="absolute -left-6 sm:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white border border-brand-teal/30 text-brand-teal shadow-lg h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                    >
                      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                    <button
                      onClick={() => setSelectedIndex(selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1)}
                      className="absolute -right-6 sm:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white border border-brand-teal/30 text-brand-teal shadow-lg h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                    >
                      <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
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