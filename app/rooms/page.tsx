'use client';

import React, { useState, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Wifi, Car, Coffee, Utensils, Tv, Wind, Users, Bed, Bath, SquareIcon as Square, Maximize, Mountain, Eye, Waves as LucideWaves, AirVent, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import getConfig from '@/lib/config';
import type { PagesConfig } from '@/config/types';
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";


const featureIconMap: { [key: string]: React.ElementType } = {
  "m²": Maximize,
  "Kitchen": Utensils,
  "kitchen": Utensils,
  "Kitchenette": Utensils,
  "Bathroom": Bath,
  "bathroom": Bath,
  "Balcony": Mountain,
  "balcony": Mountain,
  "View": Eye,
  "Rooftop Pool": LucideWaves,
  "Rooftop pool": LucideWaves,
  "Air conditioning": AirVent,
  "Flat-screen TV": Tv,
  "Coffee machine": Coffee,
  "Free Wifi": Wifi,
  "bed": Bed,
  "Queen bed": Bed,
  "King bed": Bed,
  "Private balcony": Mountain,
  "Living area": Users,
  "Full kitchen": Utensils
};

const getFeatureIcon = (feature: string) => {
  for (const key in featureIconMap) {
    if (feature.includes(key)) {
      return featureIconMap[key];
    }
  }
  return Star; // Default icon if no match is found
};



function RoomsContent({ rooms }: { rooms: any }) {
    const [selectedRoom, setSelectedRoom] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const searchParams = useSearchParams();
    const roomType = searchParams.get('type');

    useEffect(() => {
        if (roomType) {
            const roomIndex = rooms.roomTypes.findIndex((room: any) => 
                room.name.toLowerCase().replace(/\s+/g, '-') === roomType
            );
            if (roomIndex !== -1) {
                setSelectedRoom(roomIndex);
            }
        }
    }, [roomType, rooms.roomTypes]);

    const currentRoom = rooms.roomTypes[selectedRoom];

    return (
      <>
        <Navbar />
        <div className="bg-brand-cream min-h-screen">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8 pt-12 sm:pt-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-center mb-2 text-brand-charcoal">{rooms.title}</h1>
            <p className="body-text text-center text-brand-charcoal/70 mb-12 max-w-2xl mx-auto">{rooms.description}</p>
            
            {/* Unified Room Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-fr">
              {rooms.roomTypes.map((room: any, index: number) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-brand-teal/10 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[650px]">
                  
                  {/* Title Section - Refined Design */}
                  <div className="bg-white border-l-4 border-r-4 border-brand-teal px-6 py-4 rounded-t-xl shadow-sm">
  <h2 className="font-serif text-lg sm:text-xl font-semibold text-brand-charcoal text-center tracking-wide leading-tight">{room.name}</h2>
</div>
                  
                  {/* Image Section - Fixed Height */}
                  <div className="relative h-64 flex-shrink-0">
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {room.images.map((image: string, imgIndex: number) => (
                          <CarouselItem key={imgIndex}>
                            <div className="relative h-64">
                              <img
                                src={image}
                                alt={`${room.name} - Image ${imgIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-brand-teal/20 text-brand-teal" />
                      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-brand-teal/20 text-brand-teal" />
                    </Carousel>
                  </div>
                  
                  {/* Content Section - Flexible Layout */}
                  <div className="flex flex-col flex-grow p-6 text-center">
                    
                    {/* Description Section - Fixed Height with Overflow */}
                    <div className="h-32 overflow-hidden mb-6">
                      <p className="body-text text-brand-charcoal/70 leading-relaxed line-clamp-5">{room.description}</p>
                    </div>
                    
                    {/* Features Section - Flexible Growth */}
                    <div className="flex-grow mb-6">
                      <h3 className="text-lg font-semibold mb-4 text-brand-charcoal text-center">Features</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {(room.features || []).map((feature: string, featureIndex: number) => {
                           const IconComponent = getFeatureIcon(feature);
                          return (
                            <div key={featureIndex} className="flex flex-col items-center text-center space-y-1 p-2 rounded-lg bg-brand-cream/50">
                              <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                                <IconComponent className="h-3 w-3 text-brand-teal" />
                              </div>
                              <span className="text-[0.65rem] text-brand-charcoal font-medium leading-tight">{feature}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Button Section - Always at Bottom */}
                    <div className="mt-auto">
                      <a href="https://live.ipms247.com/booking/book-rooms-sebastianchentest" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-coral-primary hover:bg-coral-dark text-white py-3 text-base font-medium">
                          Book Now
                        </Button>
                      </a>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default function RoomsPage() {
  const config = getConfig();
  const rooms = config.rooms;
    return (
        <div className="flex flex-col min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <RoomsContent rooms={rooms} />
          </Suspense>
        </div>
    );
  }