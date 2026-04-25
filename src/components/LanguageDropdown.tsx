"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Language } from '../hooks/useTranslation';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'pt', name: 'Português', flag: '/flags/pt.svg' },
  { code: 'en', name: 'English', flag: '/flags/usa.svg' },
  { code: 'es', name: 'Español', flag: '/flags/es.svg' },
  { code: 'fr', name: 'Français', flag: '/flags/fr.svg' },
  { code: 'de', name: 'Deutsch', flag: '/flags/de.svg' },
  { code: 'it', name: 'Italiano', flag: '/flags/it.svg' },
];

interface LanguageDropdownProps {
  currentLang: Language;
  onSelect: (lang: Language) => void;
}

export function LanguageDropdown({ currentLang, onSelect }: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLang = languages.find(l => l.code === currentLang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-400 font-bold uppercase text-[11px] tracking-widest cursor-pointer hover:text-gray-600 transition-colors group"
      >
        <div className="flex items-center gap-2">
            <span className="hidden sm:inline">Idioma do site:</span>
            <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-xl border border-gray-200 group-hover:border-gray-300 transition-all shadow-sm">
                <img src={selectedLang.flag} alt={selectedLang.name} className="w-5 h-3.5 object-cover rounded-xs shadow-xs" />
                <span className="text-[#4b4b4b] text-[12px]">{selectedLang.name}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-0 mt-3 w-52 bg-white rounded-2xl border-2 border-gray-100 shadow-2xl overflow-hidden z-[100]"
          >
            <div className="flex flex-col py-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onSelect(lang.code);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left ${
                    currentLang === lang.code ? 'bg-gray-50' : ''
                  }`}
                >
                  <img src={lang.flag} alt={lang.name} className="w-6 h-4.5 object-cover rounded-xs shadow-xs" />
                  <span className={`text-[14px] font-bold ${
                    currentLang === lang.code ? 'text-[#58cc02]' : 'text-[#777]'
                  }`}>
                    {lang.name}
                  </span>
                  {currentLang === lang.code && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#58cc02]"></div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
