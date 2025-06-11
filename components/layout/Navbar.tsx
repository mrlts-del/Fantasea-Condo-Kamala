'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import getConfig from "@/lib/config";
import { NavigationConfig } from "@/config/types";

const Navbar = () => {
  const config = getConfig();
  const navigationConfig = config.navigation;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar background color logic
  const navbarBg = isScrolled
    ? "bg-white/95 dark:bg-background/95"
    : "bg-background/95 dark:bg-background/95";

  // Overlay background color (remove transparency for solid color)
  const overlayBg = isScrolled
    ? "bg-white dark:bg-background"
    : "bg-background dark:bg-background";

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-brand-teal/20 bg-white/95 backdrop-blur-sm dark:border-brand-teal/30 dark:bg-background/95">
      <div className="max-w-7xl mx-auto flex h-16 sm:h-18 md:h-22 lg:h-26 items-center px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand - moved to left */}
        <div className="flex items-center">
          <Link href="/" className="cursor-pointer">
            <Image 
              src={navigationConfig?.logoPath || "/logo.png"} 
              alt={navigationConfig?.siteName || "Fantasea Condo Kamala"} 
              width={280} 
              height={92} 
              className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 w-auto"
            />
          </Link>
        </div>
        
        {/* Spacer to push content to sides */}
        <div className="flex-1"></div>
        
        {/* Book Now Button - moved to right */}
        <div className="flex items-center space-x-4">
          <Link href={navigationConfig?.bookingUrl || "https://live.ipms247.com/booking/book-rooms-sebastianchentest"} target="_blank" rel="noopener noreferrer">
            <Button className="bg-coral-primary hover:bg-coral-dark text-white px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300">
              Book Now
            </Button>
          </Link>
          {/* Hamburger Menu - moved to right */}
          <button
            className="flex items-center justify-center rounded-md p-2 sm:p-3 text-brand-teal hover:text-brand-deep-teal hover:bg-brand-teal/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>
        </div>
      </div>
      {/* Full-Screen Overlay Menu */}
      <div
        className={cn(
          "fixed inset-0 z-[1001] flex items-center justify-center transition-opacity duration-300 h-screen",
          overlayBg,
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{ minHeight: "100vh" }}
        aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10 text-center w-full px-4">
          {navigationConfig?.navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          )) || []}
        </nav>
        {/* Close button in the top-right corner */}
        <button
          aria-label="Close menu"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-[1002]"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;