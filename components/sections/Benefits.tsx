"use client";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import { Shield, Clock, MapPin, Heart, Tag, ScanText, MessageSquarePlus } from "lucide-react";
import getConfig from "@/lib/config";
import { BenefitsConfig } from "@/config/types";

const iconMap = {
  Shield,
  Clock,
  MapPin,
  Heart,
  Tag,
  ScanText,
  MessageSquarePlus,
};

export default function Benefits() {
  const config = getConfig();
  const benefitsConfig: BenefitsConfig = config.benefits;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-brand-cream dark:bg-gray-900">
      <Container>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-heading font-bold font-serif mb-4 text-brand-charcoal">
            {benefitsConfig.sectionTitle}
          </h2>
          <p className="body-text text-brand-charcoal/80 max-w-2xl mx-auto">
            {benefitsConfig.sectionDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {benefitsConfig.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <div key={index} className="group text-center">
                <div className="mx-auto mb-2 sm:mb-3 lg:mb-5 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-brand-teal/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:bg-brand-teal/20">
                  {IconComponent ? (
                    <IconComponent className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-brand-teal" />
                  ) : (
                    <div className="h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 bg-brand-teal rounded" />
                  )}
                </div>
                <h3 className="font-medium text-xs sm:text-sm lg:text-base text-brand-charcoal leading-tight">
                  {benefit.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}