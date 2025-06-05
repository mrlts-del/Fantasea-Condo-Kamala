"use client";

import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Maximize, Utensils, Bath, Mountain, Eye, LucideWaves, Sun, AirVent, Tv, Coffee, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ThemeProvider } from "next-themes";

const amenityIconMap: { [key: string]: React.ElementType } = {
  "m²": Maximize,
  "Kitchen": Utensils,
  "kitchen": Utensils,
  "Bathroom": Bath,
  "bathroom": Bath,
  "Balcony": Mountain,
  "View": Eye,
  "Rooftop Pool": LucideWaves,
  "Rooftop pool": LucideWaves,
  "Air conditioning": AirVent,
  "Flat-screen TV": Tv,
  "Coffee machine": Coffee,
  "Free Wifi": Wifi,
};

const getAmenityIcon = (amenity: string) => {
  for (const key in amenityIconMap) {
    if (amenity.includes(key)) {
      return amenityIconMap[key];
    }
  }
  return Star; // Default icon if no match is found
};

const ROOM_TYPES = [
  {
    name: "One-BR Apartment",
    description: "This 27 m² apartment features a pool with a view. The air-conditioned apartment has 1 bedroom and 1 bathroom with a shower and a hairdryer. Guests can make meals in the kitchen that has a refrigerator, kitchenware, a microwave and a toaster. Boasting a balcony with garden views, this apartment also features a coffee machine and a flat-screen TV with cable channels. The unit has 1 bed.",
    images: [
       "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment2.jpg",
       "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment6.jpg", 
       "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment3.jpg",
       "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment4.jpg",
       "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment5.jpg",
       "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment.jpg"
    ],
    amenities: ["27 m²", "Private kitchen", "Private bathroom", "Balcony", "Rooftop Pool", "Air conditioning", "Flat-screen TV", "Coffee machine", "Free Wifi"]
  },
  {
    name: "Studio w/ Balcony",
    description: "This 34 m² studio's special feature is the pool with a view. The fully equipped kitchen features a refrigerator, kitchenware, a microwave and a toaster. This air-conditioned studio includes a flat-screen TV with cable channels, a private bathroom as well as a balcony with mountain views. The unit offers 1 bed.",
    images: [
       "/Fantasea_Condo_Images/Rooms/Studio_with_Balcony/Studio_with_Balcony4.jpg",
       "/Fantasea_Condo_Images/Rooms/Studio_with_Balcony/Studio_with_Balcony.jpg",
       "/Fantasea_Condo_Images/Rooms/Studio_with_Balcony/Studio_with_Balcony2.jpg",
       "/Fantasea_Condo_Images/Rooms/Studio_with_Balcony/Studio_with_Balcony3.jpg",
    ],
    amenities: ["34 m²", "Private Kitchen", "Private Bathroom", "View", "Rooftop pool", "Air conditioning", "Flat-screen TV", "Coffee machine", "Free Wifi"]
  },
  {
    name: "Two-BR Apartment w/ Balcony",
    description: "This 47 m² apartment's standout feature is the pool with a view. This air-conditioned apartment is consisted of of 1 living room, 2 separate bedrooms and 2 bathrooms with a shower. In the kitchen, guests will find a refrigerator, kitchenware, a microwave and a toaster. Featuring a balcony with mountain views, this apartment also offers a coffee machine and a flat-screen TV with cable channels. The unit offers 2 beds.",
    images: [
       "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony.jpg",
       "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony2.jpg",
       "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony3.jpg",
       "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony4.jpg",
       "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony5.jpg"
    ],
    amenities: ["47 m²", "Kitchen", "Private bathroom", "View", "Rooftop pool", "Air conditioning", "Flat-screen TV", "Coffee machine", "Free Wifi"]
  }
];

function RoomsContent() {
    const [selectedRoom, setSelectedRoom] = useState(0);
    const searchParams = useSearchParams();
    const room = ROOM_TYPES[selectedRoom];
    
    useEffect(() => {
      const roomParam = searchParams.get('room');
      if (roomParam) {
        const roomIndex = parseInt(roomParam) - 1;
        if (roomIndex >= 0 && roomIndex < ROOM_TYPES.length) {
          setSelectedRoom(roomIndex);
        }
      }
    }, [searchParams]);

    return (
      <>
        <Navbar />
        <div className="bg-brand-cream min-h-screen">
          <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 pt-12 sm:pt-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-center mb-2 text-brand-charcoal">Our Rooms</h1>
            <p className="body-text text-center text-brand-charcoal/70 mb-12 max-w-2xl mx-auto">Discover our carefully designed accommodations, each offering comfort and elegance for your perfect stay.</p>
            
            {/* Unified Room Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-fr">
              {ROOM_TYPES.map((room, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-brand-teal/10 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[650px]">
                  
                  {/* Image Section - Fixed Height */}
                  <div className="relative h-64 flex-shrink-0">
                    <Carousel className="w-full h-full">
                      <CarouselContent>
                        {room.images.map((image, imgIndex) => (
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
                  <div className="flex flex-col flex-grow p-6">
                    
                    {/* Title Section */}
                    <h2 className="subheading mb-3 text-brand-charcoal min-h-[3.5rem] flex items-center">{room.name}</h2>
                    
                    {/* Description Section - Fixed Height with Overflow */}
                    <div className="h-32 overflow-hidden mb-6">
                      <p className="body-text text-brand-charcoal/70 leading-relaxed line-clamp-5">{room.description}</p>
                    </div>
                    
                    {/* Amenities Section - Flexible Growth */}
                    <div className="flex-grow mb-6">
                      <h3 className="text-lg font-semibold mb-4 text-brand-charcoal">Amenities</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {room.amenities.map((amenity, amenityIndex) => {
                          const IconComponent = getAmenityIcon(amenity);
                          return (
                            <div key={amenityIndex} className="flex items-center space-x-2 p-2 rounded-lg bg-brand-cream/50">
                              <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                                <IconComponent className="h-3 w-3 text-brand-teal" />
                              </div>
                              <span className="text-xs text-brand-charcoal font-medium">{amenity}</span>
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
    return (
      <ThemeProvider attribute="class" defaultTheme="light">
        <div className="flex flex-col min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <RoomsContent />
          </Suspense>
        </div>
      </ThemeProvider>
    );
  }