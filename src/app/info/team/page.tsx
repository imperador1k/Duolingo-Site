"use client";

import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '@/hooks/useTranslation';

export default function TeamPage() {
  const { t } = useTranslation();

  return (
    <article className="max-w-4xl">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-black text-[#3c3c3c] mb-12 leading-tight"
      >
        {t('info.team.title')} <br/>
        <span className="text-[#1cb0f6]">{t('info.team.title.accent')}</span>
      </motion.h1>

      <div className="space-y-12">
        {/* 1. Founder Spotlight: Miguel */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-[3rem] border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-[#1cb0f6] to-[#58cc02] rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-48 h-48 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/creator.jpg" 
                alt="Miguel - Founder" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Miguel";
                }}
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-black text-[#1f2937] mb-1">Miguel</h2>
            <p className="text-[#1cb0f6] font-extrabold uppercase text-sm tracking-[0.2em] mb-4">{t('info.team.founder.role')}</p>
            <div className="space-y-4 text-[#777] font-medium leading-relaxed">
              <p>
                {t('info.team.founder.desc')}
              </p>
              <p className="text-sm italic">
                {t('info.team.founder.quote')}
              </p>
            </div>
            
            <div className="mt-6 flex justify-center md:justify-start gap-3">
               <span className="px-3 py-1 bg-gray-50 rounded-full text-xs font-bold text-gray-400">Next.js Specialist</span>
               <span className="px-3 py-1 bg-gray-50 rounded-full text-xs font-bold text-gray-400">UI/UX Enthusiast</span>
            </div>
          </div>
        </motion.div>

        {/* 2. Our Mascot: Duo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] bg-[#58cc02]/5 border-2 border-[#58cc02]/10 flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 mb-6 transform group-hover:rotate-12 transition-transform">
              <img src="/images/duo4.svg" alt="Duo Chief" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-black text-[#46a302] mb-1">Duo</h3>
            <p className="text-[#58cc02] font-black uppercase text-[10px] tracking-widest mb-4">{t('info.team.mascot.duo.role')}</p>
            <p className="text-[#777] font-medium">{t('info.team.mascot.duo.desc')}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-[2.5rem] bg-[#ce82ff]/5 border-2 border-[#ce82ff]/10 flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 mb-6 transform group-hover:-rotate-12 transition-transform">
              <img src="/images/duo5.svg" alt="Duo Helper" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-2xl font-black text-[#a520ca] mb-1">Lily</h3>
            <p className="text-[#ce82ff] font-black uppercase text-[10px] tracking-widest mb-4">{t('info.team.mascot.lily.role')}</p>
            <p className="text-[#777] font-medium">{t('info.team.mascot.lily.desc')}</p>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 p-10 rounded-[3rem] bg-[#3c3c3c] text-white text-center"
      >
        <h3 className="text-2xl font-black mb-4">{t('info.team.join.title')}</h3>
        <p className="text-gray-400 font-medium mb-8 max-w-lg mx-auto">
          {t('info.team.join.desc')}
        </p>
        <button className="bg-white text-[#3c3c3c] font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform active:scale-95 uppercase tracking-widest text-sm">
          {t('info.team.join.cta')}
        </button>
      </motion.div>
    </article>
  );
}
