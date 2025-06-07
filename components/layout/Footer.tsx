"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto">


          {/* Navigation and Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {/* Navigation Links */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-6 text-lg text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white/70 hover:text-brand-coral transition-colors text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/rooms" className="text-white/70 hover:text-brand-coral transition-colors text-base">
                    Rooms
                  </Link>
                </li>
                <li>
                  <a 
                    href="/#amenities" 
                    className="text-white/70 hover:text-brand-coral transition-colors text-base cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('amenities');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Amenities
                  </a>
                </li>
                <li>
                  <a 
                    href="/#reviews" 
                    className="text-white/70 hover:text-brand-coral transition-colors text-base cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('reviews');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <Link href="/location" className="text-white/70 hover:text-brand-coral transition-colors text-base">
                    Location
                  </Link>
                </li>
              </ul>
            </div>

            {/* Additional Links */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-6 text-lg text-white">More Info</h4>
              <div className="space-y-3">
                <div>
                  <Link href="/gallery" className="text-white/70 hover:text-brand-coral transition-colors text-base block">
                    Photo Gallery
                  </Link>
                </div>
                <div>
                  <Link href="/blog" className="text-white/70 hover:text-brand-coral transition-colors text-base block">
                    Local Guide
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-6 text-lg text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start justify-center md:justify-end">
                  <MapPin className="h-5 w-5 text-brand-teal mt-1 mr-3 flex-shrink-0" />
                  <div className="text-white/70 text-base text-left">
                    <p>Fantasea Condo Kamala</p>
                    <p>Kamala Beach, Phuket</p>
                    <p>Thailand 83120</p>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <Phone className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" />
                  <p className="text-white/70 text-base">+66 76 123 456</p>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <Mail className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" />
                  <p className="text-white/70 text-base">info@fantaseacondo.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo and Brand Section - Centered (Moved) */}
          <div className="text-center -mt-4 mb-8">
            <div className="flex justify-center items-center mb-6">
              <Image
                src="/logo.png"
                alt="Fantasea Condo Kamala"
                width={100}
                height={100}
                className="mr-4"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">Fantasea Condo Kamala</h3>
                <p className="text-brand-coral text-sm mt-1">Your luxury escape in Kamala Beach</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 sm:mb-0">
              &copy; 2025 Fantasea Condo Kamala. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-white/60 hover:text-brand-coral transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-brand-coral transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;