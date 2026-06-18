"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Scale, Heart, Code, Sparkles } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function CopyrightPage() {
  const { t } = useTranslation();

  return (
    <article className="prose prose-slate max-w-none">
      <div className="mb-16">
        <div className="flex items-center gap-3 text-[#58cc02] font-black uppercase text-[10px] tracking-[0.3em] mb-4">
          <Scale size={14} /> {t('legal.copyright.badge')}
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-[#3c3c3c] mb-6 tracking-tight">
          {t('legal.copyright.title')}
        </h1>
      </div>

      {/* Intro */}
      <section className="mb-16">
        <div className="bg-[#58cc02]/5 border-2 border-[#58cc02]/10 p-8 md:p-12 rounded-[2.5rem] mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#58cc02]/10 rounded-2xl">
              <Heart className="w-7 h-7 text-[#58cc02]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#3c3c3c] m-0">
              {t('legal.copyright.intro.title')}
            </h2>
          </div>
          <p className="text-gray-600 font-bold leading-relaxed text-lg m-0">
            {t('legal.copyright.intro.desc')}
          </p>
        </div>
      </section>

      <div className="space-y-16 text-gray-600 font-medium leading-relaxed text-lg">
        {/* No intent */}
        <section>
          <h2 className="text-2xl font-black text-[#3c3c3c] mb-6 flex items-center gap-4">
            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">1</span>
            {t('legal.copyright.no_intent.title')}
          </h2>
          <p>{t('legal.copyright.no_intent.desc')}</p>
        </section>

        {/* Made with love */}
        <section>
          <h2 className="text-2xl font-black text-[#3c3c3c] mb-6 flex items-center gap-4">
            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">2</span>
            {t('legal.copyright.made_with_love.title')}
          </h2>
          <div className="flex items-start gap-6 bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
            <Code className="text-[#58cc02] mt-1 shrink-0" size={24} />
            <p className="m-0 font-bold leading-relaxed">
              {t('legal.copyright.made_with_love.desc')}
            </p>
          </div>
        </section>

        {/* Acknowledgment */}
        <section>
          <h2 className="text-2xl font-black text-[#3c3c3c] mb-6 flex items-center gap-4">
            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">3</span>
            {t('legal.copyright.acknowledgment.title')}
          </h2>
          <div className="flex items-start gap-6 bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100">
            <Sparkles className="text-amber-500 mt-1 shrink-0" size={24} />
            <p className="m-0 font-bold leading-relaxed text-amber-900">
              {t('legal.copyright.acknowledgment.desc')}
            </p>
          </div>
        </section>
      </div>

      <div className="mt-20 pt-12 border-t-2 border-gray-100 text-center">
        <p className="text-gray-400 font-bold text-sm">
          {t('legal.copyright.footer')}
        </p>
      </div>
    </article>
  );
}
