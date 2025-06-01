"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import BookingBar from "@/components/sections/BookingBar";
import Rooms from "@/components/sections/Rooms";
import Amenities from "@/components/sections/Amenities";
import Benefits from "@/components/sections/Benefits";
import Reviews from "@/components/sections/Reviews";
import Location from "@/components/sections/Location";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";

export default function Home() {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
  
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Rooms />
        <Amenities />
        <Benefits />
        <Reviews />
        <Location />
        <Footer />
        <BookingBar 
          checkInDate={checkInDate}
          setCheckInDate={setCheckInDate}
          checkOutDate={checkOutDate}
          setCheckOutDate={setCheckOutDate}
        />
      </main>
    </ThemeProvider>
  );
}