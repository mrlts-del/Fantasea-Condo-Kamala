'use client';

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Rooms from "@/components/sections/Rooms";
import Amenities from "@/components/sections/Amenities";
import Benefits from "@/components/sections/Benefits";
import Reviews from "@/components/sections/Reviews";
import Location from "@/components/sections/Location";
import Footer from "@/components/layout/Footer";
import BookingBar from "@/components/sections/BookingBar";
import BookingBarPopup from "@/components/sections/BookingBarPopup";
import { ThemeProvider } from "next-themes";

export default function Home() {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();
  const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);

  const handleBookNowClick = () => {
    setIsBookingPopupOpen(true);
  };
  
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen relative">
        <Navbar />
        
        {/* Hero Section with Booking Bar Container */}
        <div className="relative overflow-visible">
          <Hero onBookNowClick={handleBookNowClick} />
          <BookingBar
            checkInDate={checkInDate}
            setCheckInDate={setCheckInDate}
            checkOutDate={checkOutDate}
            setCheckOutDate={setCheckOutDate}
          />
        </div>
        
        <Rooms />
        <Amenities />
        <Benefits />
        <Reviews />
        <Location />
        <Footer />
        
        <BookingBarPopup 
          checkInDate={checkInDate}
          setCheckInDate={setCheckInDate}
          checkOutDate={checkOutDate}
          setCheckOutDate={setCheckOutDate}
          isOpen={isBookingPopupOpen}
          setIsOpen={setIsBookingPopupOpen}
        />
      </main>
    </ThemeProvider>
  );
}