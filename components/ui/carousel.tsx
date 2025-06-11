'use client';

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { type EmblaCarouselType, type EmblaOptionsType } from "embla-carousel"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type CarouselContextProps = {
  embla: EmblaCarouselType | undefined
  api: EmblaCarouselType | undefined
  setApi: (api: EmblaCarouselType | undefined) => void
  options: EmblaOptionsType
  orientation: "horizontal" | "vertical"
  selectedIndex: number
  setSelectedIndex: (index: number) => void
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

type CarouselProps = {
  opts?: EmblaOptionsType
  orientation?: "horizontal" | "vertical"
  plugins?: Parameters<typeof useEmblaCarousel>[1]
  children: React.ReactNode
  className?: string
  activeIndex?: number
  onSelect?: (index: number) => void
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    { opts, orientation = "horizontal", plugins, children, className, activeIndex, onSelect, ...props },
    ref,
  ) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
      { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
      plugins,
    )
    const [selectedIndex, setSelectedIndex] = React.useState(activeIndex ?? 0)

    const onSelectHandler = React.useCallback((emblaApi: EmblaCarouselType) => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      onSelect?.(emblaApi.selectedScrollSnap())
    }, [onSelect])

    React.useEffect(() => {
      if (!emblaApi) return

      onSelectHandler(emblaApi)
      emblaApi.on("select", onSelectHandler)
      emblaApi.on("reInit", onSelectHandler)

      return () => {
        emblaApi.off("select", onSelectHandler)
        emblaApi.off("reInit", onSelectHandler)
      }
    }, [emblaApi, onSelectHandler])

    React.useEffect(() => {
      if (emblaApi && activeIndex !== undefined && activeIndex !== selectedIndex) {
        emblaApi.scrollTo(activeIndex)
      }
    }, [emblaApi, activeIndex, selectedIndex])

    const contextValue = React.useMemo(() => ({
      embla: emblaApi,
      api: emblaApi,
      setApi: (api: EmblaCarouselType | undefined) => { /* no-op */ }, // setApi is not directly exposed for external use
      options: opts || {},
      orientation,
      selectedIndex,
      setSelectedIndex,
    }), [emblaApi, opts, orientation, selectedIndex])

    return (
      <CarouselContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn("overflow-hidden", className)}
          {...props}
        >
          <div
            className={cn(
              "flex",
              orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            )}
            ref={emblaRef}
          >
            {children}
          </div>
        </div>
      </CarouselContext.Provider>
    )
  },
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { embla, orientation } = useCarousel()

    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    )
  },
)
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>((
  { className, variant = "outline", size = "icon", asChild, ...props },
  ref,
) => {
  const { embla, orientation } = useCarousel()
  const Comp = asChild ? "span" : "button"

  const handlePrevious = React.useCallback(() => {
    embla?.scrollPrev()
  }, [embla])

  return (
    <Comp
      ref={ref}
      className={cn(
        "rounded-full",
        orientation === "horizontal"
          ? "-left-12" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!embla?.canScrollPrev()}
      onClick={handlePrevious}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
      <span className="sr-only">Previous slide</span>
    </Comp>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>((
  { className, variant = "outline", size = "icon", asChild, ...props },
  ref,
) => {
  const { embla, orientation } = useCarousel()
  const Comp = asChild ? "span" : "button"

  const handleNext = React.useCallback(() => {
    embla?.scrollNext()
  }, [embla])

  return (
    <Comp
      ref={ref}
      className={cn(
        "rounded-full",
        orientation === "horizontal"
          ? "-right-12" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!embla?.canScrollNext()}
      onClick={handleNext}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
      <span className="sr-only">Next slide</span>
    </Comp>
  )
})
CarouselNext.displayName = "CarouselNext"

type CarouselThumbsProps = React.HTMLAttributes<HTMLDivElement> & {
  onThumbClick?: (index: number) => void;
};

const CarouselThumbs = React.forwardRef<HTMLDivElement, CarouselThumbsProps>(
  ({ className, children, onThumbClick, ...props }, ref) => {
    const { embla, selectedIndex } = useCarousel();

    const handleThumbClick = React.useCallback((index: number) => {
      if (embla) {
        embla.scrollTo(index);
        onThumbClick?.(index);
      }
    }, [embla, onThumbClick]);

    return (
      <div
        ref={ref}
        className={cn(
          "flex space-x-2 overflow-x-auto py-2 scrollbar-hide",
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={cn(
              "flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 hover:scale-105",
              selectedIndex === index 
                ? "border-brand-teal shadow-lg ring-2 ring-brand-teal/30" 
                : "border-gray-200 hover:border-brand-teal/50"
            )}
            onClick={() => handleThumbClick(index)}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }
);
CarouselThumbs.displayName = "CarouselThumbs";

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselThumbs };
