import { Card, CardContent } from "@/components/ui/card";
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
    name: "One-Bedroom Apartment",
    description: "Spacious 27m² apartment featuring a private bathroom, balcony with city/garden/mountain views, fully equipped kitchenette, air conditioning, flat-screen TV with cable channels, and access to the rooftop pool",
    images: [
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806841/One-Bedroom_Apartment_2_hofhj8.jpg",
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806842/One-Bedroom_Apartment_6_h8ydkq.jpg",
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806841/One-Bedroom_Apartment_4_nj1gps.jpg",
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806840/One-Bedroom_Apartment_msnlkm.jpg",
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806840/One-Bedroom_Apartment_5_ezpttj.jpg",
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806840/One-Bedroom_Apartment_3_li9nwt.jpg",
    ],
  },
  {
    id: 2,
    name: "Two-Bedroom Apartment with Balcony",
    description: "Generous 47m² family-friendly space with balcony/patio offering city and mountain views, private bathroom, fully equipped kitchen, dining area, sitting area with sofa, and flat-screen TV",
    images: [
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806842/Two-Bedroom_Apartment_with_Balcony_5_xue35g.jpg",
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806842/Two-Bedroom_Apartment_with_Balcony_3_xbi7wq.jpg",
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806842/Two-Bedroom_Apartment_with_Balcony_4_lond16.jpg",
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806841/Two-Bedroom_Apartment_with_Balcony_bvqce9.jpg",
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806840/Two-Bedroom_Apartment_with_Balcony_6_rw9fmj.jpg",
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806840/Two-Bedroom_Apartment_with_Balcony_2_s5ac9x.jpg"
    ],        
  },
  {
    id: 3,
    name: "Studio with Balcony",
    description: "Cozy 34m² studio featuring balcony/patio with mountain views, private bathroom, kitchenette with dining table, sofa bed, flat-screen TV, and access to rooftop pool facilities",
    images: [
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806842/Studio_with_Balcony_4_irbu6r.jpg",
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806842/Studio_with_Balcony_3_akao9p.jpg",
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806841/Studio_with_Balcony_iu9etm.jpg",
      "https://res.cloudinary.com/dvumjbuwj/image/upload/v1747806841/Studio_with_Balcony_2_urjnrz.jpg"
    ],
  },

];

const Rooms = () => {
  return (
    <section id="rooms" className="py-12 sm:py-16 lg:py-20 bg-brand-cream dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 lg:mb-12 text-center">
          <h2 className="section-heading font-bold font-serif mb-2 text-brand-charcoal">Our Rooms</h2>
          <p className="body-text text-brand-charcoal/80 max-w-2xl mx-auto">Choose from our selection of comfortable accommodations</p>
        </div>

        {/* Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {roomsData.map((room) => (
            <Card key={room.id} className="overflow-hidden group border border-brand-teal/20 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl bg-white h-full flex flex-col">
              {/* Mobile: 16:9 aspect ratio, Desktop: square */}
              <div className="relative aspect-video md:aspect-square overflow-hidden">
                {'images' in room && Array.isArray(room.images) ? (
                  <Carousel className="w-full h-full">
                    <CarouselContent className="h-full">
                      {(room as RoomWithImages).images.map((image: string, imgIndex: number) => (
                        <CarouselItem key={imgIndex} className="h-full">
                          <div className="relative w-full h-full">
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
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                  </Carousel>
                ) : (
                  (room as RoomWithSingleImage).image ? (
                    <div className="relative w-full h-full">
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
              <CardContent className="p-3 sm:p-4 flex-1 flex flex-col">
                <h3 className="font-serif text-lg sm:text-xl font-semibold mb-1 leading-tight text-brand-charcoal">{room.name}</h3>
                <p className="text-brand-charcoal/70 mt-1 mb-3 line-clamp-3 text-sm sm:text-base leading-relaxed flex-1">{room.description}</p>
                
                {/* Button Container */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Link href={`/rooms?room=${room.id}`} className="flex-1">
                    <Button 
                      variant="outline" 
                      className="w-full h-12 text-brand-teal border-brand-teal hover:bg-brand-teal hover:text-white transition-all duration-300 active:scale-98"
                    >
                      View Details
                    </Button>
                  </Link>
                  <Button 
                    className="flex-1 h-12 bg-brand-coral hover:bg-brand-light-coral text-white font-semibold transition-all duration-300 active:scale-98"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
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