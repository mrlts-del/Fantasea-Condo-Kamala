import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const nearbyAttractions = [
  {
    name: "Kamala Beach",
    distance: "11-minute walk"
  },
  {
    name: "Patong Boxing Stadium",
    distance: "6.6 miles"
  },
  {
    name: "Jungceylon Shopping Center",
    distance: "6.8 miles"
  },
  {
    name: "Laem Sing Beach",
    distance: "1.8 miles"
  },
  {
    name: "Phuket International Airport",
    distance: "16 miles"
  }
];

const Location = () => {
  return (
    <section id="location" className="py-12 sm:py-16 lg:py-20 bg-brand-cream dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h2 className="section-heading font-bold font-serif mb-4 text-brand-charcoal">Location & Nearby</h2>
          <p className="body-text text-brand-charcoal/80 max-w-2xl mx-auto">Find us in the heart of Kamala Beach, Phuket</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-brand-teal/10">
              <h3 className="subheading font-semibold mb-6 text-brand-charcoal font-serif">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-teal mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-charcoal">Address</p>
                    <p className="text-sm text-brand-charcoal/80">Fantasea Condo Kamala<br />Kamala Beach, Phuket, Thailand</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-brand-teal mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-charcoal">Phone</p>
                    <p className="text-sm text-brand-charcoal/80">+66 76 123 456</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-brand-teal mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-charcoal">Email</p>
                    <p className="text-sm text-brand-charcoal/80">info@kamalahotel.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-brand-teal mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-brand-charcoal">Check-in / Check-out</p>
                    <p className="text-sm text-brand-charcoal/80">3:00 PM / 11:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-brand-teal/10">
              <h3 className="subheading font-semibold mb-6 text-brand-charcoal font-serif">Nearby Attractions</h3>
              <div className="space-y-4">
                {nearbyAttractions.map((attraction, index) => (
                  <div key={index} className="flex items-start">
                    <Navigation className="h-4 w-4 text-brand-teal mt-1 mr-3 flex-shrink-0" />
                    <div>
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

          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-brand-teal/10 aspect-video min-h-[250px] sm:min-h-[300px] h-full relative max-w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63222.7365072801!2d98.290603!3d7.955367799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503b0071e1491d%3A0x4a8cbf25f6f4981!2sFantasea%20Condo%20Kamala!5e0!3m2!1sen!2sus!4v1747804530096!5m2!1sen!2sus" 
                className="w-full h-full max-w-full" 
                style={{ border: 0, maxWidth: '100%' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Location - Interactive Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;