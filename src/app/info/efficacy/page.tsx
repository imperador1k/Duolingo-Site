"use client";

import React from 'react';
import { motion } from 'motion/react';
import { LazyLottie } from '@/components/LazyLottie';
import { useTranslation } from '@/hooks/useTranslation';

export default function EfficacyPage() {
  const { t } = useTranslation();

  return (
    <article className="max-w-4xl pb-20">
      {/* Hero: Eficácia baseada em Ciência */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-20">
        <div className="flex-1">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#3c3c3c] leading-tight mb-6"
          >
            {t('info.efficacy.title')} <br/>
            <span className="text-[#1cb0f6]">{t('info.efficacy.title.accent')}</span>
          </motion.h1>
          <p className="text-xl text-[#777] font-bold leading-relaxed">
            {t('info.efficacy.hero.desc')}
          </p>
        </div>
        <div className="w-48 h-48 md:w-56 md:h-56 shrink-0">
          <LazyLottie animationPath="/lotties/filipe3.json" className="w-full h-full" />
        </div>
      </div>

      {/* Pilares da Eficácia (Método, não estatística) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-[3rem] bg-white border-2 border-gray-100 shadow-sm"
        >
          <div className="w-12 h-12 bg-[#58cc02]/10 rounded-2xl flex items-center justify-center text-2xl mb-6">🧠</div>
          <h3 className="text-xl font-black text-[#3c3c3c] mb-3 uppercase tracking-tight">{t('info.efficacy.spaced.title')}</h3>
          <p className="text-[#777] font-bold leading-relaxed">
            {t('info.efficacy.spaced.desc')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-[3rem] bg-white border-2 border-gray-100 shadow-sm"
        >
          <div className="w-12 h-12 bg-[#1cb0f6]/10 rounded-2xl flex items-center justify-center text-2xl mb-6">🎮</div>
          <h3 className="text-xl font-black text-[#3c3c3c] mb-3 uppercase tracking-tight">{t('info.efficacy.gamified.title')}</h3>
          <p className="text-[#777] font-bold leading-relaxed">
            {t('info.efficacy.gamified.desc')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-[3rem] bg-white border-2 border-gray-100 shadow-sm"
        >
          <div className="w-12 h-12 bg-[#ff9600]/10 rounded-2xl flex items-center justify-center text-2xl mb-6">🌍</div>
          <h3 className="text-xl font-black text-[#3c3c3c] mb-3 uppercase tracking-tight">{t('info.efficacy.cefr.title')}</h3>
          <p className="text-[#777] font-bold leading-relaxed">
            {t('info.efficacy.cefr.desc')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-[3rem] bg-white border-2 border-gray-100 shadow-sm"
        >
          <div className="w-12 h-12 bg-[#ce82ff]/10 rounded-2xl flex items-center justify-center text-2xl mb-6">⚡️</div>
          <h3 className="text-xl font-black text-[#3c3c3c] mb-3 uppercase tracking-tight">{t('info.efficacy.micro.title')}</h3>
          <p className="text-[#777] font-bold leading-relaxed">
            {t('info.efficacy.micro.desc')}
          </p>
        </motion.div>
      </div>

      {/* Visualização de Retenção de Memória */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#3c3c3c] p-10 md:p-16 rounded-[4rem] text-white"
      >
        <h2 className="text-2xl md:text-3xl font-black mb-10 text-center uppercase tracking-wider">
          {t('info.efficacy.chart.title')}
        </h2>
        
        <div className="space-y-12">
          <div>
            <div className="flex justify-between mb-4">
              <span className="font-black text-sm uppercase text-[#1cb0f6]">{t('info.efficacy.chart.passive')}</span>
              <span className="font-black text-sm">20% de Retenção</span>
            </div>
            <div className="h-4 bg-white/10 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }} 
                 whileInView={{ width: '20%' }} 
                 className="h-full bg-gray-500"
               />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-4">
              <span className="font-black text-sm uppercase text-[#58cc02]">{t('info.efficacy.chart.active')}</span>
              <span className="font-black text-sm text-[#58cc02]">90% de Retenção</span>
            </div>
            <div className="h-4 bg-white/10 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }} 
                 whileInView={{ width: '90%' }} 
                 className="h-full bg-[#58cc02]"
               />
            </div>
          </div>
        </div>
        
        <p className="mt-12 text-center text-gray-400 font-bold text-sm leading-relaxed">
          {t('info.efficacy.chart.footer')}
        </p>
      </motion.div>
    </article>
  );
}
