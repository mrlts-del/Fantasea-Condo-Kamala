'use client';

import { Button } from "@/components/ui/button";
import Image from 'next/image';

interface HeroProps {
  // Removed onBookNowClick since Book Now button is now in navbar
}

const Hero = ({}: HeroProps) => {
  return (
    <section className="relative h-[calc(100vh-100px)] pb-24">
      <Image
        src="/Fantasea_Condo_Images/Hero/Hero.jpg"
        alt="Fantasea Condo Kamala - Beachfront View"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      {/* Updated dark overlay to 30% opacity as per Phase 2A */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Left-aligned hero text as per Phase 2A */}
      <div className="relative h-full flex flex-col justify-center items-start text-left px-4 sm:px-6 lg:px-8 text-white max-w-7xl mx-auto z-20">
        <h1 className="hero-heading font-bold mb-4 sm:mb-6 font-serif text-white max-w-4xl">
          Beachfront Accommodations in Phuket
        </h1>
        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
          Experience Japanese-style living just an 11-minute walk from Kamala Beach with mountain views and resort amenities
        </p>
        {/* Book Now button moved to navbar */}
      </div>
    </section>
  );
};

export default Hero;