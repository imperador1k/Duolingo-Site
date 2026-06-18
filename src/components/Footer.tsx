"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#58cc02] pt-8 pb-16 px-6 md:px-12 text-white/90 font-bold text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-black uppercase text-base mb-2">{t('footer.about')}</h3>
          <Link href="/info/courses" className="hover:text-white transition-colors">{t('footer.about.courses')}</Link>
          <Link href="/info/mission" className="hover:text-white transition-colors">{t('footer.about.mission')}</Link>
          <Link href="/info/method" className="hover:text-white transition-colors">{t('footer.about.method')}</Link>
          <Link href="/info/efficacy" className="hover:text-white transition-colors">{t('footer.about.efficacy')}</Link>
          <Link href="/info/team" className="hover:text-white transition-colors">{t('footer.about.team')}</Link>
          <Link href="/info/join-us" className="hover:text-white transition-colors">{t('footer.about.join_us')}</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-black uppercase text-base mb-2">{t('footer.products')}</h3>
          <Link href="/" className="hover:text-white transition-colors">MyDuolingo</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-black uppercase text-base mb-2">{t('footer.apps')}</h3>
          <Link href="/" className="hover:text-white transition-colors">{t('footer.apps.android')}</Link>
          <Link href="/" className="hover:text-white transition-colors">{t('footer.apps.windows')}</Link>
          <Link href="/" className="hover:text-white transition-colors">{t('footer.apps.web')}</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-black uppercase text-base mb-2">{t('footer.support')}</h3>
          <Link href="/info/doubts" className="hover:text-white transition-colors">{t('footer.support.doubts')}</Link>
          <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-black uppercase text-base mb-2">{t('footer.legal')}</h3>
          <Link href="/legal/terms" className="hover:text-white transition-colors">{t('footer.legal.terms')}</Link>
          <Link href="/legal/privacy" className="hover:text-white transition-colors">{t('footer.legal.privacy')}</Link>
          <Link href="/legal/copyright" className="hover:text-white transition-colors">{t('footer.legal.copyright')}</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-black uppercase text-base mb-2">{t('footer.social')}</h3>
          <Link href="/" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/" className="hover:text-white transition-colors">Instagram</Link>
          <Link href="/" className="hover:text-white transition-colors">Twitter</Link>
          <Link href="/" className="hover:text-white transition-colors">YouTube</Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/60 font-bold text-xs uppercase tracking-widest text-center md:text-left">
          {t('footer.rights')}
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-white/60 text-[11px] font-bold uppercase tracking-widest">
          <span>Português</span>
          <span>English</span>
          <span>Español</span>
          <span>Français</span>
          <span>Deutsch</span>
        </div>
      </div>
    </footer>
  );
}
