"use client";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

interface BookingBarProps {
  checkInDate: Date | undefined;
  setCheckInDate: (date: Date | undefined) => void;
  checkOutDate: Date | undefined;
  setCheckOutDate: (date: Date | undefined) => void;
}

const BookingBar = ({
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
}: BookingBarProps) => {

  return (
    <div className="booking-bar absolute bottom-[-20px] md:bottom-[-20px] left-1/2 transform -translate-x-1/2 z-[10] max-w-[540px] w-[calc(100%-48px)] hidden md:block">
      <div className="bg-white rounded-lg shadow-lg p-6 relative">
        {/* Desktop Layout */}
        <div className="flex items-center gap-4">
          
          {/* Check-in Date */}
          <div className="w-[140px]">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-12 justify-start text-left font-normal",
                    !checkInDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkInDate ? (
                    format(checkInDate, "MMM dd")
                  ) : (
                    <span>Check-in</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 z-[99999]" align="start">
                <Calendar
                  mode="single"
                  selected={checkInDate}
                  onSelect={setCheckInDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Check-out Date */}
          <div className="w-[140px]">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-12 justify-start text-left font-normal",
                    !checkOutDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOutDate ? (
                    format(checkOutDate, "MMM dd")
                  ) : (
                    <span>Check-out</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 z-[99999]" align="start">
                <Calendar
                  mode="single"
                  selected={checkOutDate}
                  onSelect={setCheckOutDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Guests - FIXED VERSION */}
          <div className="w-[100px]">
            <Select>
              <SelectTrigger className="h-12">
                <UserIcon className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Guests" />
              </SelectTrigger>
              <SelectContent 
                className="z-[99999] bg-white border shadow-lg"
                position="popper"
                side="bottom"
                align="start"
                sideOffset={4}
              >
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="5">5+ Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Search Button */}
          <div className="w-[120px]">
            <Link href="https://live.ipms247.com/booking/book-rooms-sebastianchentest" target="_blank" rel="noopener noreferrer">
              <Button className="w-full h-12 bg-coral-primary hover:bg-coral-dark text-white">
                Search
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;