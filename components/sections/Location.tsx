"use client";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import getConfig from "@/lib/config";
import { LocationConfig } from "@/config/types";

export default function Location() {
  const config = getConfig();
  const locationConfig: LocationConfig = config.location;

  return (
    <section id="location" className="py-12 sm:py-16 lg:py-20 bg-brand-cream dark:bg-gray-900">
      <Container>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-heading font-bold font-serif mb-4 text-brand-charcoal">
            {locationConfig.sectionTitle}
          </h2>
          <p className="body-text text-brand-charcoal/80 max-w-2xl mx-auto">
            {locationConfig.sectionDescription}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Info and Nearby Attractions */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Information */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-brand-teal/10">
              <h3 className="subheading font-semibold mb-6 text-brand-charcoal font-serif">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-teal mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-charcoal">Address</p>
                    <p className="text-sm text-brand-charcoal/80">{locationConfig.contactInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-brand-teal mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-charcoal">Phone</p>
                    <p className="text-sm text-brand-charcoal/80">{locationConfig.contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-brand-teal mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-charcoal">Email</p>
                    <p className="text-sm text-brand-charcoal/80">{locationConfig.contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-brand-teal mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-charcoal">Check-in / Check-out</p>
                    <p className="text-sm text-brand-charcoal/80">{locationConfig.contactInfo.checkIn} / {locationConfig.contactInfo.checkOut}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-brand-teal/10">
              <h3 className="subheading font-semibold mb-6 text-brand-charcoal font-serif">
                Nearby Attractions
              </h3>
              <div className="space-y-3">
                {locationConfig.nearbyAttractions.map((attraction, index) => (
                  <div key={index} className="flex items-start">
                    <Navigation className="h-4 w-4 text-brand-teal mt-1 mr-3 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm text-brand-charcoal">{attraction.name}</h4>
                      <p className="text-xs text-brand-charcoal/60">
                        {attraction.distance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="order-first lg:order-last">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-brand-teal/10 aspect-video min-h-[250px] sm:min-h-[300px] h-full relative max-w-full">
              <iframe
                src={locationConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}