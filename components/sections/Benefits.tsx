import { Star, Tag, ScanText, MessageSquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: <Tag className="h-16 w-16 text-brand-teal" />,
    title: "Direct booking discount",
    description: ""
  },
  {
    icon: <ScanText className="h-16 w-16 text-brand-teal" />,
    title: "Contactless check-in/out option",
    description: ""
  },
  {
    icon: <MessageSquarePlus className="h-16 w-16 text-brand-teal" />,
    title: "Special requests can be accommodated upon request",
    description: ""
  }
];

const Benefits = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-brand-cream dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
        <h2 className="section-heading font-bold font-serif mb-4 text-brand-charcoal">Direct Booking Benefits</h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-card p-4 sm:p-6 lg:p-8 rounded-lg shadow-md text-center flex flex-col h-full hover:shadow-lg transition-shadow"
            >
              <div className="mx-auto mb-5 w-20 h-20 flex items-center justify-center rounded-full bg-brand-teal/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:bg-brand-teal/20">
                {benefit.icon}
              </div>
              <h3 className="font-medium text-base text-brand-charcoal leading-tight">{benefit.title}</h3>
              
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          
        </div>
      </div>
    </section>
  );
};

export default Benefits;