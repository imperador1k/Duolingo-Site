"use client";

import React from 'react';
import { motion } from 'motion/react';
import { FileText, Clock, Scale } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <article className="prose prose-slate max-w-none">
      {/* Header do Documento */}
      <div className="mb-16">
        <div className="flex items-center gap-3 text-[#1cb0f6] font-black uppercase text-[10px] tracking-[0.3em] mb-4">
          <Scale size={14} /> {t('legal.official')}
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-[#3c3c3c] mb-6 tracking-tight">
          {t('legal.terms.title')}
        </h1>
        <div className="flex items-center gap-6 text-gray-400 font-bold text-sm">
          <span className="flex items-center gap-2">
            <Clock size={16} /> {t('legal.update')}: 7 de Abril de 2026
          </span>
          <span className="flex items-center gap-2">
            <FileText size={16} /> {t('legal.version')} 1.0.2
          </span>
        </div>
      </div>

      {/* Introdução / Sumário */}
      <div className="bg-[#1cb0f6]/5 border-2 border-[#1cb0f6]/10 p-8 rounded-[2.5rem] mb-12">
        <h3 className="text-[#1899d6] font-black uppercase text-xs tracking-widest mb-4">{t('legal.terms.agreement.title')}</h3>
        <p className="text-gray-600 font-bold leading-relaxed m-0">
          {t('legal.terms.agreement.desc')}
        </p>
      </div>

      {/* Corpo do Texto - Seções */}
      <div className="space-y-16 text-gray-600 font-medium leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-black text-[#3c3c3c] mb-6 flex items-center gap-4">
            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">1</span>
            {t('legal.terms.section1.title')}
          </h2>
          <p>
            {t('legal.terms.section1.desc')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#3c3c3c] mb-6 flex items-center gap-4">
            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">2</span>
            {t('legal.terms.section2.title')}
          </h2>
          <div className="space-y-4">
            <p>
              <strong className="text-[#3c3c3c]">{t('legal.terms.section2.own')}</strong> {t('legal.terms.section2.own.desc')}
            </p>
            <p>
              <strong className="text-[#3c3c3c]">{t('legal.terms.section2.usage')}</strong> {t('legal.terms.section2.usage.desc')}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#3c3c3c] mb-6 flex items-center gap-4">
            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">3</span>
            {t('legal.terms.section3.title')}
          </h2>
          <p>
            {t('legal.terms.section3.desc')}
          </p>
        </section>

        <section className="bg-gray-50 p-10 rounded-[3rem] border-2 border-gray-100">
          <h2 className="text-2xl font-black text-[#3c3c3c] mb-6 flex items-center gap-4">
            <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sm">4</span>
            {t('legal.terms.section4.title')}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
            {[
              t('legal.terms.section4.item1'),
              t('legal.terms.section4.item2'),
              t('legal.terms.section4.item3'),
              t('legal.terms.section4.item4'),
              t('legal.terms.section4.item5'),
              t('legal.terms.section4.item6')
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-bold text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ef4444] mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#3c3c3c] mb-6 flex items-center gap-4">
            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">5</span>
            {t('legal.terms.section5.title')}
          </h2>
          <p>
            {t('legal.terms.section5.desc')}
          </p>
        </section>
      </div>

      <div className="mt-20 pt-12 border-t-2 border-gray-100 text-center">
        <p className="text-gray-400 font-bold text-sm">
          {t('legal.contact_support')}
        </p>
      </div>
    </article>
  );
}
