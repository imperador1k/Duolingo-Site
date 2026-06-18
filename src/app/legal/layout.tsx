"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { Shield, FileText, Scale, ArrowLeft } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { LanguageDropdown } from '@/components/LanguageDropdown';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { t, lang, setLang } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header Minimalista */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-[#3c3c3c] transition-colors font-black uppercase text-xs tracking-widest">
            <ArrowLeft size={16} /> {t('legal.back')}
          </Link>
          
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8">
              <Link 
                href="/legal/terms" 
                className={`flex items-center gap-2 font-black uppercase text-[11px] tracking-widest transition-colors ${pathname === '/legal/terms' ? 'text-[#1cb0f6]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <FileText size={14} /> {t('footer.legal.terms')}
              </Link>
              <Link 
                href="/legal/privacy" 
                className={`flex items-center gap-2 font-black uppercase text-[11px] tracking-widest transition-colors ${pathname === '/legal/privacy' ? 'text-[#1cb0f6]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Shield size={14} /> {t('footer.legal.privacy')}
              </Link>
              <Link 
                href="/legal/copyright" 
                className={`flex items-center gap-2 font-black uppercase text-[11px] tracking-widest transition-colors ${pathname === '/legal/copyright' ? 'text-[#58cc02]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Scale size={14} /> {t('footer.legal.copyright')}
              </Link>
            </nav>

            <div className="pl-8 border-l border-gray-100">
              <LanguageDropdown currentLang={lang} onSelect={setLang} />
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Centralizado */}
      <main className="max-w-4xl mx-auto py-16 px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer Legal Simples */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">
          {t('footer.rights')}
        </p>
      </footer>
    </div>
  );
}
