"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Eye, Cpu, Database, Lock, UserCheck } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <article className="prose prose-slate max-w-none">
      {/* Header do Documento */}
      <div className="mb-16">
        <div className="flex items-center gap-3 text-[#58cc02] font-black uppercase text-[10px] tracking-[0.3em] mb-4">
          <ShieldCheck size={14} /> {t('legal.privacy.badge')}
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-[#3c3c3c] mb-6 tracking-tight">
          {t('legal.privacy.title')}
        </h1>
        <div className="flex items-center gap-6 text-gray-400 font-bold text-sm">
          <span className="flex items-center gap-2">
            <Eye size={16} /> {t('legal.update')}: 7 de Abril de 2026
          </span>
          <span className="flex items-center gap-2 text-[#58cc02]">
            <Lock size={16} /> {t('legal.privacy.standard')}
          </span>
        </div>
      </div>

      {/* Introdução / Sumário */}
      <div className="bg-[#58cc02]/5 border-2 border-[#58cc02]/10 p-8 rounded-[2.5rem] mb-12">
        <h3 className="text-[#58cc02] font-black uppercase text-xs tracking-widest mb-4">{t('legal.privacy.welcome.title')}</h3>
        <p className="text-gray-600 font-bold leading-relaxed m-0">
          {t('legal.privacy.welcome.desc')}
        </p>
      </div>

      {/* Corpo do Texto - Seções */}
      <div className="space-y-16 text-gray-600 font-medium leading-relaxed text-lg">
        
        <section>
          <h2 className="text-2xl font-black text-[#3c3c3c] mb-6 flex items-center gap-4">
            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">1</span>
            {t('legal.privacy.section1.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <h4 className="font-black text-[#3c3c3c] text-sm uppercase mb-3">{t('legal.privacy.section1.sub1')}</h4>
              <p className="text-sm font-bold text-gray-400">{t('legal.privacy.section1.sub1.desc')}</p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <h4 className="font-black text-[#3c3c3c] text-sm uppercase mb-3">{t('legal.privacy.section1.sub2')}</h4>
              <p className="text-sm font-bold text-gray-400">{t('legal.privacy.section1.sub2.desc')}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#3c3c3c] mb-6 flex items-center gap-4">
            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">2</span>
            {t('legal.privacy.section2.title')}
          </h2>
          <div className="p-8 bg-gray-900 rounded-[2.5rem] text-white relative overflow-hidden group">
            <Cpu className="text-[#ce82ff] mb-4 opacity-50" size={32} />
            <h4 className="text-xl font-black mb-4">{t('legal.privacy.section2.sub')}</h4>
            <p className="text-gray-400 font-bold leading-relaxed mb-6">
              {t('legal.privacy.section2.desc')}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#ce82ff]">
              {t('legal.privacy.section2.badge')}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#3c3c3c] mb-6 flex items-center gap-4">
            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">3</span>
            {t('legal.privacy.section3.title')}
          </h2>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-500">
              <Database size={14} /> Drizzle Postgres Secure
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-500">
              <Lock size={14} /> Clerk JWT Auth
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-500">
              <ShieldCheck size={14} /> SSL Encryption
            </div>
          </div>
          <p>
            {t('legal.privacy.section3.desc')}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#3c3c3c] mb-6 flex items-center gap-4">
            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">4</span>
            {t('legal.privacy.section4.title')}
          </h2>
          <div className="flex items-start gap-6 bg-red-50 p-8 rounded-[2.5rem] border border-red-100">
            <UserCheck className="text-red-500 mt-1 shrink-0" size={24} />
            <div>
              <p className="m-0 text-red-900 font-bold leading-relaxed">
                {t('legal.privacy.section4.desc')}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-[#3c3c3c] mb-6 flex items-center gap-4">
            <span className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">5</span>
            {t('legal.privacy.section5.title')}
          </h2>
          <p>
            {t('legal.privacy.section5.desc')}
          </p>
        </section>
      </div>

      <div className="mt-20 pt-12 border-t-2 border-gray-100 text-center">
        <p className="text-gray-400 font-bold text-sm">
          {t('legal.privacy.footer')} <br/>
          {t('legal.contact_support')}
        </p>
      </div>
    </article>
  );
}
