'use client';

import React, { useState, useEffect } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import getConfig from '@/lib/config';
import type { GalleryConfig } from '@/config/types';



export default function GalleryPage() {
  const config = getConfig();
  const galleryConfig = config.gallery;
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('carousel');
  const [showInfo, setShowInfo] = useState(true);

  // Reset selectedIndex when category changes to ensure images load immediately
  useEffect(() => {
    setSelectedIndex(0);
  }, [activeCategory]);

  // Auto-play functionality
  useEffect(() => {
    if (galleryConfig && isPlaying) {
      const { gallery } = galleryConfig;
      const filteredImages = activeCategory === "ALL"
        ? gallery.images
        : gallery.images.filter(image => image.category === activeCategory);
      
      if (filteredImages.length > 0) {
        const interval = setInterval(() => {
          setSelectedIndex(prev => (prev + 1) % filteredImages.length);
        }, gallery.settings.autoPlayInterval);
        return () => clearInterval(interval);
      }
    }
  }, [isPlaying, activeCategory, galleryConfig]);

  if (!galleryConfig) {
    return (
      <div className="min-h-screen flex flex-col bg-brand-cream">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-teal mx-auto mb-4"></div>
            <p className="text-brand-charcoal">Loading gallery...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { gallery } = galleryConfig;
  const filteredImages = activeCategory === "ALL"
    ? gallery.images
    : gallery.images.filter(image => image.category === activeCategory);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSelectedIndex(prev => prev === 0 ? filteredImages.length - 1 : prev - 1);
    } else {
      setSelectedIndex(prev => (prev + 1) % filteredImages.length);
    }
  };

  const currentImage = filteredImages[selectedIndex];

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />
      <main className="flex-1 w-full py-4 sm:py-6 lg:py-8 pt-12 sm:pt-16 bg-brand-cream">
        <Container size="lg">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-2 text-brand-charcoal">
              {gallery.title}
            </h1>
            <p className="body-text text-center text-brand-charcoal/70 mb-4 max-w-2xl mx-auto">
              {gallery.description}
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            {/* Category Navigation with Play Button on Mobile */}
            <div className="flex items-center justify-center gap-4 w-full sm:w-auto">
              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="flex-1 sm:flex-none">
                <TabsList className="flex justify-center h-auto p-1 gap-1 bg-white/50 border border-brand-teal/20 rounded-xl">
                  {gallery.categories.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category} 
                      className="text-sm px-4 py-2 rounded-lg data-[state=active]:bg-brand-teal data-[state=active]:text-white text-brand-charcoal hover:bg-brand-teal/10 transition-all duration-200"
                    >
                      {category === "ALL" ? "All" : category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              
              {/* Play Button - visible on mobile next to tabs */}
              <div className="flex items-center gap-2 sm:hidden">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {/* View Controls - hidden on mobile, visible on larger screens */}
            <div className="hidden sm:flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
                className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Main Gallery Display */}
          <div className="relative mb-8">
            {/* Main Image */}
            <div className="relative w-full mx-auto" style={{ aspectRatio: '16/10' }}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img 
                  src={currentImage?.src || ''} 
                  alt={currentImage?.alt || ''} 
                  className="object-cover w-full h-full transition-opacity duration-300"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Navigation Controls */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white shadow-lg h-12 w-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>



                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div 
                    className="h-full bg-brand-teal transition-all duration-300"
                    style={{ width: `${((selectedIndex + 1) / filteredImages.length) * 100}%` }}
                  />
                </div>


              </div>
            </div>
          </div>

          {/* Enhanced Thumbnail Strip */}
          <div className="relative">
            <div className="flex overflow-x-auto py-4 px-2 gap-3 scrollbar-hide">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`relative flex-shrink-0 cursor-pointer transition-all duration-200 ${
                    selectedIndex === index 
                      ? "ring-2 ring-brand-teal shadow-lg scale-105" 
                      : "hover:scale-105"
                  }`}
                  onClick={() => setSelectedIndex(index)}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {selectedIndex === index && (
                    <div className="absolute inset-0 bg-brand-teal/20 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-brand-teal rounded-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>


        </Container>
      </main>
      <Footer />
    </div>
  );
}