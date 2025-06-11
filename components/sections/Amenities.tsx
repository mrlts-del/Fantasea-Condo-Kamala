"use client";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import {
  Wifi,
  Car,
  Waves,
  Coffee,
  Utensils,
  MapPin,
  Plane,
  ShoppingBag,
  LucideWaves,
  LucideSunset,
  ParkingSquare,
  AirVent,
  Flower,
  ShieldCheck,
  Mountain,
} from "lucide-react";
import getConfig from "@/lib/config";
import { AmenitiesConfig } from "@/config/types";

const iconMap = {
  Wifi,
  Car,
  Waves,
  Coffee,
  Utensils,
  MapPin,
  Plane,
  ShoppingBag,
  LucideWaves,
  LucideSunset,
  ParkingSquare,
  AirVent,
  Flower,
  ShieldCheck,
  Mountain,
};

export default function Amenities() {
  const config = getConfig();
  const amenitiesConfig: AmenitiesConfig = config.amenities;

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-heading font-bold font-serif mb-4 text-brand-charcoal">
            {amenitiesConfig.sectionTitle}
          </h2>
          <p className="body-text text-brand-charcoal/80 max-w-2xl mx-auto">
            {amenitiesConfig.sectionDescription}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {amenitiesConfig.amenities.map((amenity, index) => {
            const IconComponent = iconMap[amenity.icon as keyof typeof iconMap];
            return (
              <div key={index} className="group text-center">
                <div className="mx-auto mb-3 sm:mb-5 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-brand-teal/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:bg-brand-teal/20">
                  {IconComponent ? (
                    <IconComponent className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-brand-teal" />
                  ) : (
                    <div className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 bg-brand-teal rounded" />
                  )}
                </div>
                <h3 className="font-medium text-xs sm:text-sm lg:text-base text-brand-charcoal leading-tight">
                  {amenity.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}