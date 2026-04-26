"use client";

import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '@/hooks/useTranslation';

export default function MissionPage() {
  const { t } = useTranslation();

  return (
    <article className="max-w-4xl">
      {/* 1. Hero Section com Duo */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-16">
        <div className="flex-1">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black text-[#3c3c3c] leading-tight mb-6"
          >
            {t('info.mission.title')} <br/>
            <span className="text-[#58cc02]">{t('info.mission.title.accent')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#777] font-bold leading-relaxed"
          >
            {t('info.mission.hero.desc')}
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
        >
          <img src="/images/duo1.svg" alt="Duo Mission" className="w-full h-full object-contain" />
        </motion.div>
      </div>

      {/* 2. O Toque Humano (Passionate Programmer) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#1cb0f6]/5 rounded-[3rem] p-8 md:p-12 border-2 border-[#1cb0f6]/10 mb-16 relative overflow-hidden"
      >
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-black text-[#1cb0f6] uppercase tracking-wide mb-6">
              {t('info.mission.passion.title')}
            </h2>
            <div className="space-y-6 text-lg text-[#4b4b4b] font-medium leading-relaxed">
              <p>{t('info.mission.passion.p1')}</p>
              <p>{t('info.mission.passion.p2')}</p>
            </div>
          </div>
          <div className="w-40 h-40 flex-shrink-0">
            <img src="/images/duo2.svg" alt="Duo Coding" className="w-full h-full object-contain animate-bounce-slow" />
          </div>
        </div>
      </motion.div>

      {/* 3. Pilares da Missão (Bento Grid Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-8 rounded-[2.5rem] bg-[#58cc02]/10 border-2 border-[#58cc02]/20"
        >
          <div className="w-12 h-12 mb-4">
            <img src="/images/duo3.svg" alt="Duo Fun" className="w-full h-full" />
          </div>
          <h3 className="text-xl font-black text-[#46a302] uppercase mb-3">{t('info.mission.pillars.free.title')}</h3>
          <p className="text-[#3c3c3c] font-medium">
            {t('info.mission.pillars.free.desc')}
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="p-8 rounded-[2.5rem] bg-[#ff9600]/10 border-2 border-[#ff9600]/20"
        >
          <div className="text-3xl mb-4">💎</div>
          <h3 className="text-xl font-black text-[#d37d00] uppercase mb-3">{t('info.mission.pillars.quality.title')}</h3>
          <p className="text-[#3c3c3c] font-medium">
            {t('info.mission.pillars.quality.desc')}
          </p>
        </motion.div>
      </div>

      {/* 4. Footer da Missão */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center py-10"
      >
        <p className="text-2xl font-black text-[#3c3c3c] mb-6">
          {t('info.mission.footer')}
        </p>
        <div className="h-1.5 w-24 bg-[#58cc02] rounded-full mx-auto" />
      </motion.div>
    </article>
  );
}
