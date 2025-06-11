import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import getConfig from "@/lib/config";
import type { RoomsConfig } from "../../config/types";

function RoomsContent({ config }: { config: RoomsConfig }) {
  const ROOM_TYPES = config.roomTypes;
  return (
    <section id="rooms" className="py-12 sm:py-16 lg:py-20 bg-brand-cream dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-center mb-2 text-brand-charcoal">{config.sectionTitle}</h1>
        <p className="body-text text-center text-brand-charcoal/70 mb-12 max-w-2xl mx-auto">{config.sectionDescription}</p>
        
        {/* Unified Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-fr">
          {ROOM_TYPES.map((room, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-brand-teal/10 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[427px]">
              
              {/* Title Section - Refined Design */}
              <div className="bg-white border-l-4 border-r-4 border-brand-teal px-6 py-4 rounded-t-xl shadow-sm">
                <h2 className="font-serif text-lg sm:text-xl font-semibold text-brand-charcoal text-center tracking-wide leading-tight">{room.name}</h2>
              </div>
              
              {/* Image Section - Fixed Height */}
              <div className="relative h-48 flex-shrink-0">
                <Carousel className="w-full h-full">
                  <CarouselContent>
                    {room.images?.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="relative h-48">
                          <img
                            src={image}
                            alt={`${room.name} - Image ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-brand-teal/20 text-brand-teal" />
                  <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-brand-teal/20 text-brand-teal" />
                </Carousel>
              </div>
              
              {/* Content Section - Flexible Layout */}
              <div className="flex flex-col flex-grow p-6">
                
                {/* Description Section - Flexible Growth */}
                <div className="flex-grow mb-6">
                  <p 
                    className="body-text text-brand-charcoal/70 leading-relaxed text-left overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical' as const
                    }}
                    title={room.description}
                  >
                    {room.description}
                  </p>
                </div>
                
                {/* Button Section - Always at Bottom */}
                <div className="mt-auto flex gap-3">
                  <a href="/rooms" className="flex-1">
                    <Button variant="outline" className="w-full border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white py-3 text-base font-medium">
                      View Details
                    </Button>
                  </a>
                  <a href="https://live.ipms247.com/booking/book-rooms-sebastianchentest" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-coral-primary hover:bg-coral-dark text-white py-3 text-base font-medium">
                      Book Now
                    </Button>
                  </a>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default function Rooms() {
  const config = getConfig();
  return <RoomsContent config={config.rooms} />;
}