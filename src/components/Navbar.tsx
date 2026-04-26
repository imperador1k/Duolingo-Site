"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { LanguageDropdown } from './LanguageDropdown';

export function Navbar() {
  const { t, lang, setLang } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white h-20 border-b-2 border-gray-100 px-6 md:px-12 flex items-center justify-between transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
        <div className="relative w-10 h-10" style={{ position: 'relative' }}>
          <Image 
            src="/duolingo_icon_2.png" 
            alt="MyDuolingo Icon" 
            fill
            className="object-contain"
          />
        </div>
        <span className="text-2xl font-black text-[#58cc02] tracking-tight">MyDuolingo</span>
      </Link>

      {/* Actions */}
      <div className="flex items-center gap-4 md:gap-6">
        <LanguageDropdown currentLang={lang} onSelect={setLang} />
        <button className="hidden sm:block px-6 py-2.5 rounded-2xl border-[2px] border-[#e5e5e5] text-[#afafaf] hover:bg-gray-50 uppercase font-black tracking-widest text-[13px] shadow-[0_4px_0_0_#e5e5e5] active:shadow-none active:translate-y-[4px] transition-all">
          {t('header.login')}
        </button>
      </div>
    </header>
  );
}
