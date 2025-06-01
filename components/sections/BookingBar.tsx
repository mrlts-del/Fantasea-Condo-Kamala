"use client";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, UserIcon, MapPinIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

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
    <div className="booking-bar absolute bottom-[-40px] md:bottom-[-40px] left-1/2 transform -translate-x-1/2 z-[50] max-w-[1200px] w-[calc(100%-48px)]">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search/Location Field - Flexible width */}
          <div className="flex-1">
            <div className="relative">
              <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search location" 
                className="pl-10 h-12"
              />
            </div>
          </div>
          
          {/* Check-in Date - 140px desktop */}
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
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkInDate}
                  onSelect={setCheckInDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Check-out Date - 140px desktop */}
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
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOutDate}
                  onSelect={setCheckOutDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Guests - 100px desktop */}
          <div className="w-[100px]">
            <Select>
              <SelectTrigger className="h-12">
                <UserIcon className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="5">5+ Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Search Button - 120px × 48px, coral background */}
          <div className="w-[120px]">
            <Button className="w-full h-12 bg-coral-primary hover:bg-coral-dark text-white">
              Search
            </Button>
          </div>
        </div>
        
        {/* Mobile Layout - Stack vertically in 3 rows */}
        <div className="md:hidden space-y-4">
          {/* Row 1: Search/Location */}
          <div className="relative">
            <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search location" 
              className="pl-10 h-12"
            />
          </div>
          
          {/* Row 2: Check-in and Check-out */}
          <div className="grid grid-cols-2 gap-3">
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
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkInDate}
                  onSelect={setCheckInDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            
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
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={checkOutDate}
                  onSelect={setCheckOutDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Row 3: Guests and Search Button */}
          <div className="grid grid-cols-2 gap-3">
            <Select>
              <SelectTrigger className="h-12">
                <UserIcon className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="5">5+ Guests</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="h-12 bg-coral-primary hover:bg-coral-dark text-white">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;