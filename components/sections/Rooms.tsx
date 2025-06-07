import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ROOM_TYPES = [
  {
    name: "One-BR Apartment",
    description: "This 27 m² apartment features a pool with a view. The air-conditioned apartment has 1 bedroom and 1 bathroom with a shower and a hairdryer. Guests can make meals in the kitchen that has a refrigerator, kitchenware, a microwave and a toaster. Boasting a balcony with garden views, this apartment also features a coffee machine and a flat-screen TV with cable channels. The unit has 1 bed.",
    images: [
       "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment2.jpg",
       "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment6.jpg", 
       "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment3.jpg",
       "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment4.jpg",
       "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment5.jpg",
       "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment.jpg"
    ]
  },
  {
    name: "Studio w/ Balcony",
    description: "This 34 m² studio's special feature is the pool with a view. The fully equipped kitchen features a refrigerator, kitchenware, a microwave and a toaster. This air-conditioned studio includes a flat-screen TV with cable channels, a private bathroom as well as a balcony with mountain views. The unit offers 1 bed.",
    images: [
       "/Fantasea_Condo_Images/Rooms/Studio_with_Balcony/Studio_with_Balcony4.jpg",
       "/Fantasea_Condo_Images/Rooms/Studio_with_Balcony/Studio_with_Balcony.jpg",
       "/Fantasea_Condo_Images/Rooms/Studio_with_Balcony/Studio_with_Balcony2.jpg",
       "/Fantasea_Condo_Images/Rooms/Studio_with_Balcony/Studio_with_Balcony3.jpg",
    ]
  },
  {
    name: "Two-BR Apartment w/ Balcony",
    description: "This 47 m² apartment's standout feature is the pool with a view. This air-conditioned apartment is consisted of of 1 living room, 2 separate bedrooms and 2 bathrooms with a shower. In the kitchen, guests will find a refrigerator, kitchenware, a microwave and a toaster. Featuring a balcony with mountain views, this apartment also offers a coffee machine and a flat-screen TV with cable channels. The unit offers 2 beds.",
    images: [
       "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony.jpg",
       "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony2.jpg",
       "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony3.jpg",
       "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony4.jpg",
       "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony5.jpg"
    ]
  }
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-12 sm:py-16 lg:py-20 bg-brand-cream dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-center mb-2 text-brand-charcoal">Our Rooms</h1>
        <p className="body-text text-center text-brand-charcoal/70 mb-12 max-w-2xl mx-auto">Discover our carefully designed accommodations, each offering comfort and elegance for your perfect stay.</p>
        
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
                    {room.images.map((image, imgIndex) => (
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

export default Rooms;