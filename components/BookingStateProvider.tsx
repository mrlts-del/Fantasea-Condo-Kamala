'use client';

import { useState } from "react";
// import BookingBarPopup from "@/components/sections/BookingBarPopup";

interface BookingStateProviderProps {
  children: React.ReactNode;
}

export default function BookingStateProvider({ children }: BookingStateProviderProps) {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();
  const [isBookingPopupOpen, setIsBookingPopupOpen] = useState(false);

  return (
    <>
      {children}
      {/* <BookingBarPopup 
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
        isOpen={isBookingPopupOpen}
        setIsOpen={setIsBookingPopupOpen}
      /> */}
    </>
  );
}