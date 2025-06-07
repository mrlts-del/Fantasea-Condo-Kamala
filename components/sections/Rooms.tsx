import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface RoomWithImages {
  id: number;
  name: string;
  description: string;
  images: string[];
}

interface RoomWithSingleImage {
  id: number;
  name: string;
  description: string;
  image: string;
}

type RoomData = RoomWithImages | RoomWithSingleImage;

const roomsData: RoomData[] = [
  {
    id: 1,
    name: "One-BR Apartment",
    description: "Spacious 27m² apartment featuring a private bathroom, balcony with city/garden/mountain views, fully equipped kitchenette, air conditioning, flat-screen TV with cable channels, and access to the rooftop pool",
    images: [
      "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment5.jpg",
      "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment2.jpg",
      "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment3.jpg",
      "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment4.jpg",
      "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment.jpg",
      "/Fantasea_Condo_Images/Rooms/One_BR_Apartment/One-BR_Apartment6.jpg",
    ],
  },
  {
    id: 2,
    name: "Two-BR Apartment (Balcony)",
    description: "Generous 47m² family-friendly space with balcony/patio offering city and mountain views, private bathroom, fully equipped kitchen, dining area, sitting area with sofa, and flat-screen TV",
    images: [
      "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony2.jpg",
      "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony.jpg",
      "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony3.jpg",
      "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony4.jpg",
      "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony5.jpg",
      "/Fantasea_Condo_Images/Rooms/Two_BR_Apartment_with_balcony/Two_BR_Apartment_with_balcony6.jpg"
    ],        
  },
  {
    id: 3,
    name: "Studio (Balcony)",
    description: "Cozy 34m² studio featuring balcony/patio with mountain views, private bathroom, kitchenette with dining table, sofa bed, flat-screen TV, and access to rooftop pool facilities",
    images: [
            "/Fantasea_Condo_Images/Rooms/Studio_with_Balcony/Studio_with_Balcony4.jpg",
      "/Fantasea_Condo_Images/Rooms/Studio_with_Balcony/Studio_with_Balcony.jpg",
      "/Fantasea_Condo_Images/Rooms/Studio_with_Balcony/Studio_with_Balcony2.jpg",
      "/Fantasea_Condo_Images/Rooms/Studio_with_Balcony/Studio_with_Balcony3.jpg",
    ],
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-12 sm:py-16 lg:py-20 bg-brand-cream dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
          <h2 className="section-heading font-bold font-serif mb-2 text-brand-charcoal">Our Rooms</h2>
          <p className="body-text text-brand-charcoal/80 max-w-2xl mx-auto">Choose from our selection of comfortable accommodations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px]">
          {roomsData.map((room) => (
            <Card key={room.id} className="overflow-hidden group border border-brand-teal/20 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl bg-white flex flex-col">
              
              {/* Room Name Header */}
              <div className="bg-white border-l-4 border-r-4 border-brand-teal px-6 py-4 rounded-t-xl shadow-sm">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-brand-charcoal text-center tracking-wide leading-tight">{room.name}</h3>
              </div>

              {/* Image Section */}
              <div className="relative w-full overflow-hidden mb-4 sm:mb-2 lg:mb-4" style={{height: '332px'}}>
                {'images' in room && Array.isArray(room.images) ? (
                  <Carousel className="w-full h-full">
                    <CarouselContent className="h-full">
                      {(room as RoomWithImages).images.map((image: string, imgIndex: number) => (
                        <CarouselItem key={imgIndex} className="h-full">
                          <div className="relative w-full h-full overflow-hidden">
                            <Image
                              src={image}
                              alt={`${room.name} ${imgIndex + 1}`}
                              width={500}
                              height={500}
                              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                              priority={imgIndex === 0}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border-white shadow-lg backdrop-blur-sm flex items-center justify-center text-brand-deep-teal" style={{filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))'}} />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border-white shadow-lg backdrop-blur-sm flex items-center justify-center text-brand-deep-teal" style={{filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))'}} />
                  </Carousel>
                ) : (
                  (room as RoomWithSingleImage).image ? (
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={(room as RoomWithSingleImage).image}
                        alt={room.name}
                        width={500}
                        height={500}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        priority
                      />
                    </div>
                  ) : null
                )}
              </div>

              {/* Content Section - Fixed spacing issue */}
              <div className="px-3 pt-4 sm:pt-3 lg:pt-4 pb-3 flex-1 flex flex-col">
                <p className="text-brand-charcoal/70 line-clamp-3 text-sm leading-relaxed flex-grow mb-3">{room.description}</p>
                
                {/* Button Container */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link href={`/rooms?room=${room.id}`} className="flex-1">
                    <Button 
                      variant="outline" 
                      className="w-full h-12 text-brand-teal border-brand-teal hover:bg-brand-teal hover:text-white transition-all duration-300 active:scale-98"
                    >
                      View Details
                    </Button>
                  </Link>
                  <Link href="https://live.ipms247.com/booking/book-rooms-sebastianchentest" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button 
                      className="w-full h-12 bg-brand-coral hover:bg-brand-light-coral text-white font-semibold transition-all duration-300 active:scale-98"
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>

            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <Link href="/rooms">
            <Button 
              size="lg" 
              className="bg-brand-teal hover:bg-brand-deep-teal text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              View All Rooms
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Rooms;