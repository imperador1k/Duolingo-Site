"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Button3D } from '@/components/Button3D';
import { useTranslation } from '@/hooks/useTranslation';

const courses = [
  { id: 'en', key: 'en', flag: '/flags/usa.svg', color: 'border-[#1cb0f6]' },
  { id: 'es', key: 'es', flag: '/flags/es.svg', color: 'border-[#ff9600]' },
  { id: 'fr', key: 'fr', flag: '/flags/fr.svg', color: 'border-[#ce82ff]' },
  { id: 'de', key: 'de', flag: '/flags/de.svg', color: 'border-[#ffc800]' },
  { id: 'it', key: 'it', flag: '/flags/it.svg', color: 'border-[#58cc02]' },
  { id: 'pt', key: 'pt', flag: '/flags/pt.svg', color: 'border-[#f00]' },
];

export default function CoursesPage() {
  const { t } = useTranslation();

  return (
    <article className="max-w-5xl">
      {/* Hero dos Cursos */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-32 h-32 md:w-48 md:h-48"
        >
          <img src="/images/duo6.svg" alt="Duo Teacher" className="w-full h-full object-contain" />
        </motion.div>
        <div className="text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black text-[#3c3c3c] leading-tight mb-4"
          >
            {t('info.courses.title')} <br/>
            <span className="text-[#58cc02]">{t('info.courses.title.accent')}</span>
          </motion.h1>
          <p className="text-xl text-[#777] font-bold">{t('info.courses.hero.desc')}</p>
        </div>
      </div>

      {/* Grelha de Cursos */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {courses.map((course) => (
          <motion.div 
            key={course.id}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`
              relative p-8 rounded-[3rem] bg-white border-2 border-gray-100 
              shadow-[0_10px_0_0_#f3f4f6] hover:shadow-[0_15px_0_0_#f3f4f6] 
              transition-all flex flex-col items-center text-center group
              hover:${course.color}/30
            `}
          >
            {/* Flag Badge */}
            <div className="w-24 h-24 mb-6 relative">
              <div className="absolute inset-0 bg-gray-50 rounded-full scale-110 group-hover:bg-white transition-colors"></div>
              <img 
                src={course.flag} 
                alt={t(`courses.${course.key}.name` as any)} 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10" 
              />
            </div>

            <h3 className="text-2xl font-black text-[#3c3c3c] mb-2">{t(`courses.${course.key}.name` as any)}</h3>
            <div className="flex items-center gap-2 mb-8">
              <p className="text-[#58cc02] font-black text-lg italic tracking-wider">"{t(`courses.${course.key}.greeting` as any)}"</p>
            </div>

            <Button3D variant="primary" fullWidth className="py-4 text-sm font-black">
              {t('info.courses.start')}
            </Button3D>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Criativo */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 p-12 rounded-[4rem] bg-[#58cc02] text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
        
        <div className="w-48 h-48 flex-shrink-0 relative z-10">
          <img src="/images/duo7.svg" alt="Duo World" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>

        <div className="flex-1 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">{t('info.courses.world.title')}</h2>
          <p className="text-white/90 font-bold text-xl mb-8 leading-relaxed">
            {t('info.courses.world.desc')}
          </p>
          <div className="flex flex-wrap gap-4">
             <Button3D 
               variant="outline" 
               className="bg-white text-[#58cc02] border-none shadow-[0_6px_0_0_#00000020] hover:bg-gray-50 hover:text-[#58cc02] px-10"
             >
                {t('info.courses.world.cta')}
             </Button3D>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
