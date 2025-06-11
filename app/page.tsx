import './globals.css';
import BookingStateProvider from '@/components/BookingStateProvider';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Amenities from '@/components/sections/Amenities';
import Benefits from '@/components/sections/Benefits';
import Location from '@/components/sections/Location';
import Reviews from '@/components/sections/Reviews';
import Rooms from '@/components/sections/Rooms';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <BookingStateProvider>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Rooms />
        <Amenities />
        <Benefits />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </BookingStateProvider>
  );
}