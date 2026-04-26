"use client";

import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '@/hooks/useTranslation';

export default function MethodPage() {
  const { t } = useTranslation();

  return (
    <article className="max-w-4xl pb-20">
      {/* Hero: A Ciência por Trás */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-20">
        <div className="flex-1">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-[#3c3c3c] leading-tight mb-6"
          >
            {t('info.method.title')} <br/>
            <span className="text-[#ce82ff]">{t('info.method.title.accent')}</span>
          </motion.h1>
          <p className="text-xl text-[#777] font-bold leading-relaxed">
            {t('info.method.hero.desc')}
          </p>
        </div>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
        >
          <img src="/images/duo8.svg" alt="Scientist Duo" className="w-full h-full object-contain" />
        </motion.div>
      </div>

      <div className="space-y-24">
        {/* Secção 1: Comunicação para a Vida Real */}
        <motion.section 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-3xl font-black text-[#3c3c3c] mb-6">{t('info.method.real.title')}</h2>
            <p className="text-[#4b4b4b] text-lg font-medium leading-relaxed">
              {t('info.method.real.desc')}
            </p>
          </div>
          <div className="w-full md:w-1/3 p-8 bg-[#1cb0f6]/5 rounded-[3rem] border-2 border-[#1cb0f6]/10 order-1 md:order-2">
             <div className="text-5xl mb-4 text-center">☕️</div>
             <p className="text-center font-black text-[#1899d6] uppercase tracking-widest text-xs">Foco Prático</p>
          </div>
        </motion.section>

        {/* Secção 2: Conteúdo Marcante (Duo Peculiar) */}
        <motion.section 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#58cc02]/5 rounded-[4rem] p-10 md:p-16 border-2 border-[#58cc02]/10 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="w-40 h-40 flex-shrink-0">
               <img src="/images/duo9.svg" alt="Surprised Duo" className="w-full h-full object-contain animate-pulse-slow" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-black text-[#46a302] mb-6 uppercase tracking-tight">{t('info.method.content.title')}</h2>
              <p className="text-[#3c3c3c] text-lg font-medium leading-relaxed italic">
                {t('info.method.content.phrase')} 
              </p>
              <p className="mt-4 text-[#4b4b4b] text-lg font-medium">
                {t('info.method.content.desc')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Secção 3: Equilíbrio e IA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3rem] bg-[#ff9600]/5 border-2 border-[#ff9600]/10"
          >
            <h3 className="text-2xl font-black text-[#d37d00] mb-4 uppercase">{t('info.method.implicit.title')}</h3>
            <p className="text-[#4b4b4b] font-medium leading-relaxed">
              {t('info.method.implicit.desc')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-10 rounded-[3rem] bg-[#ce82ff]/5 border-2 border-[#ce82ff]/10"
          >
            <h3 className="text-2xl font-black text-[#a520ca] mb-4 uppercase">{t('info.method.ai.title')}</h3>
            <p className="text-[#4b4b4b] font-medium leading-relaxed">
              {t('info.method.ai.desc')}
            </p>
          </motion.div>
        </div>

        {/* Secção 4: Evolução Constante */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-[#3c3c3c] rounded-[4rem] p-12 md:p-20 text-white"
        >
          <div className="w-32 h-32 mx-auto mb-8">
             <img src="/images/duo10.svg" alt="Duo Tech" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">{t('info.method.evolution.title')}</h2>
          <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto mb-10">
            {t('info.method.evolution.desc')}
          </p>
          <div className="h-2 w-24 bg-[#1cb0f6] rounded-full mx-auto" />
        </motion.section>
      </div>
    </article>
  );
}
