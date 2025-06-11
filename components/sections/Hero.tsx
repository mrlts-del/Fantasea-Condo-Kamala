"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import getConfig from "@/lib/config";
import type { HeroConfig } from "../../config/types";

function HeroContent({ config }: { config: HeroConfig }) {
  return (
    <section className="relative h-[calc(100vh-100px)] pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={config.backgroundImage.src}
          alt={config.backgroundImage.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Dark overlay with 30% opacity as per old project */}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Left-aligned hero text as per old project */}
      <div className="relative h-full flex flex-col justify-center items-start text-left px-4 sm:px-6 lg:px-8 text-white max-w-7xl mx-auto z-20">
        <h1 className="hero-heading font-bold mb-4 sm:mb-6 leading-tight font-serif text-white max-w-4xl">
          {config.title}
        </h1>
        <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
          {config.subtitle}
        </p>
      </div>
    </section>
  );
}

export default function Hero() {
  const config = getConfig();
  return <HeroContent config={config.hero} />;
}