'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface TableOfContentsProps {
  sections: { id: string; title: string }[];
}

export const TableOfContents = ({ sections }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);
      
      const currentSection = sectionElements.find(element => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <>
      {/* Mobile TOC Toggle */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between border-brand-teal/20 text-brand-charcoal hover:bg-brand-teal/5"
        >
          Table of Contents
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
        
        {isOpen && (
          <div className="mt-4 bg-white rounded-xl p-6 shadow-lg border border-brand-teal/10">
            <nav>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm block py-2 px-3 rounded transition-colors ${
                        activeSection === section.id
                          ? 'bg-brand-teal/10 text-brand-teal font-medium'
                          : 'text-brand-charcoal/70 hover:text-brand-teal hover:bg-brand-teal/5'
                      }`}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop TOC */}
      <div className="hidden lg:block bg-white rounded-xl p-6 shadow-lg border border-brand-teal/10 sticky top-24">
        <h3 className="text-lg font-serif font-semibold text-brand-charcoal mb-4">Table of Contents</h3>
        <nav>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`text-sm block py-2 px-3 rounded transition-colors ${
                    activeSection === section.id
                      ? 'bg-brand-teal/10 text-brand-teal font-medium'
                      : 'text-brand-charcoal/70 hover:text-brand-teal hover:bg-brand-teal/5'
                  }`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};