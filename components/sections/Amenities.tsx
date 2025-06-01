import { Wifi, UtensilsCrossed, Dumbbell, Car, Coffee, PawPrint, Globe, Utensils, LucideWaves, ParkingSquare, AirVent, Flower, ShieldCheck, LucideSunset } from "lucide-react";

const amenities = [
  {
    icon: <Wifi className="h-16 w-16 text-brand-teal" />,
    title: "Free WiFi",
    description: "Complimentary high-speed internet access available throughout the property"
  },
  {
    icon: <Utensils className="h-16 w-16 text-brand-teal" />,
    title: "Fully Equipped Kitchen",
    description: "Complete with microwave, toaster, refrigerator, coffee machine and kitchenware"
  },
  {
    icon: <LucideWaves className="h-16 w-16 text-brand-teal" />,
    title: "Rooftop Swimming Pool",
    description: "Enjoy scenic views from the rooftop pool area with shallow end and pool towels provided"
  },
  {
    icon: <LucideSunset className="h-16 w-16 text-brand-teal" />,
    title: "Beachfront Location",
    description: "Property provides beachfront accommodations just minutes from Kamala Beach"
  },
  {
    icon: <ParkingSquare className="h-16 w-16 text-brand-teal" />,
    title: "Free On-Site Parking",
    description: "Convenient parking available directly at the property for guests"
  },
  {
    icon: <AirVent className="h-16 w-16 text-brand-teal" />,
    title: "Air Conditioning",
    description: "Climate control available in all units for your comfort"
  },
  {
    icon: <Flower className="h-16 w-16 text-brand-teal" />,
    title: "Garden & Sun Terrace",
    description: "Relax in the beautifully maintained garden or sunbathe on the terrace"
  },
  {
    icon: <ShieldCheck className="h-16 w-16 text-brand-teal" />,
    title: "24-Hour Security",
    description: "CCTV in common areas and outside property with around-the-clock security personnel"
  }
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h2 className="section-heading font-bold font-serif mb-4 text-brand-charcoal">Amenities & Attractions</h2>
          <p className="body-text text-brand-charcoal/80 max-w-2xl mx-auto">Enjoy our comprehensive range of facilities and services</p>
        </div>

        {/* 4-column grid (desktop), 2-column (tablet), 1-column (mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center group">
              {/* Circular background (80px diameter) with 64px icon */}
              <div className="mx-auto mb-5 w-20 h-20 flex items-center justify-center rounded-full bg-brand-teal/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:bg-brand-teal/20">
                {amenity.icon}
              </div>
              <h3 className="font-medium text-base text-brand-charcoal leading-tight">{amenity.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;