import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4 sm:mb-6">
                <Image
                  src="/logo.png"
                  alt="Fantasea Condo Kamala"
                  width={120}
                  height={120}
                  className="mr-3 w-12 h-12 sm:w-15 sm:h-15"
                />
                <h3 className="text-lg sm:text-xl font-bold text-white">Fantasea Condo Kamala</h3>
              </div>
              <p className="text-white/80 mb-6 text-sm sm:text-base leading-relaxed max-w-md">
                Experience luxury and comfort in the heart of Kamala Beach. Our modern apartments offer stunning views and world-class amenities for an unforgettable stay.
              </p>
              

            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg text-white">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/" className="text-white/70 hover:text-brand-coral transition-colors text-sm sm:text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/rooms" className="text-white/70 hover:text-brand-coral transition-colors text-sm sm:text-base">
                    Rooms
                  </Link>
                </li>
                <li>
                  <a href="/#amenities" className="text-white/70 hover:text-brand-coral transition-colors text-sm sm:text-base" style={{scrollBehavior: 'smooth'}}>
                    Amenities
                  </a>
                </li>
                <li>
                  <a href="/#reviews" className="text-white/70 hover:text-brand-coral transition-colors text-sm sm:text-base" style={{scrollBehavior: 'smooth'}}>
                    Reviews
                  </a>
                </li>
                <li>
                  <Link href="/location" className="text-white/70 hover:text-brand-coral transition-colors text-sm sm:text-base">
                    Location
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg text-white">Contact Info</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-teal mt-0.5 mr-3 flex-shrink-0" />
                  <div className="text-white/70 text-sm sm:text-base">
                    <p>Fantasea Condo Kamala</p>
                    <p>Kamala Beach, Phuket</p>
                    <p>Thailand 83120</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" />
                  <p className="text-white/70 text-sm sm:text-base">+66 76 123 456</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" />
                  <p className="text-white/70 text-sm sm:text-base">info@kamalahotel.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Border and Copyright */}
          <div className="border-t border-white/20 pt-6 sm:pt-8 mt-8 sm:mt-12">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-white/60 text-xs sm:text-sm mb-4 sm:mb-0">
                &copy; 2024 Fantasea Condo Kamala. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-white/60 hover:text-brand-coral transition-colors text-xs sm:text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/60 hover:text-brand-coral transition-colors text-xs sm:text-sm">
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