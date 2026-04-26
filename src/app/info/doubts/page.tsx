"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Book, HelpCircle, ChevronRight, MessageCircle, Star, Shield, Zap } from 'lucide-react';
import { Button3D } from '@/components/Button3D';
import { useTranslation } from '@/hooks/useTranslation';

// Estrutura de dados para o "Portal de Documentação"
const DOCS_DATA = [
  {
    id: 'xp',
    categoryKey: 'info.doubts.cat.gamification',
    titleKey: 'info.doubts.xp.title',
    contentKey: 'info.doubts.xp.desc',
    icon: Star,
    color: 'text-yellow-500',
  },
  {
    id: 'hearts',
    categoryKey: 'info.doubts.cat.mechanics',
    titleKey: 'info.doubts.hearts.title',
    contentKey: 'info.doubts.hearts.desc',
    icon: Shield,
    color: 'text-red-500',
  },
  {
    id: 'streak',
    categoryKey: 'info.doubts.cat.consistency',
    titleKey: 'info.doubts.streak.title',
    contentKey: 'info.doubts.streak.desc',
    icon: Zap,
    color: 'text-orange-500',
  },
  {
    id: 'pro',
    categoryKey: 'info.doubts.cat.plans',
    titleKey: 'info.doubts.pro.title',
    contentKey: 'info.doubts.pro.desc',
    icon: MessageCircle,
    color: 'text-purple-500',
  }
];

export default function DoubtsPage() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  const filteredDocs = DOCS_DATA.filter(doc => 
    t(doc.titleKey as any).toLowerCase().includes(searchQuery.toLowerCase()) ||
    t(doc.categoryKey as any).toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <article className="max-w-5xl pb-20">
      {/* Header Estilo Doc */}
      <div className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-black text-[#3c3c3c] mb-8"
        >
          {t('info.doubts.title')} <br/>
          <span className="text-[#1cb0f6]">{t('info.doubts.accent')}</span>
        </motion.h1>

        {/* Barra de Pesquisa "Super" */}
        <div className="relative group max-w-2xl">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1cb0f6] transition-colors">
            <Search size={24} />
          </div>
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('info.doubts.search')}
            className="w-full bg-white border-2 border-gray-100 rounded-[2rem] py-6 pl-16 pr-8 text-lg font-bold text-[#3c3c3c] shadow-sm focus:border-[#1cb0f6] outline-none transition-all placeholder:text-gray-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Lista de Documentos */}
        <div className="lg:col-span-8 space-y-4">
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-6 px-4">{t('info.doubts.official')}</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {filteredDocs.map((doc) => (
              <motion.div 
                key={doc.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`
                  cursor-pointer p-6 rounded-[2.5rem] border-2 transition-all group
                  ${activeDoc === doc.id ? 'border-[#1cb0f6] bg-[#1cb0f6]/5 shadow-lg' : 'border-gray-100 bg-white hover:border-[#1cb0f6]/30'}
                `}
                onClick={() => setActiveDoc(activeDoc === doc.id ? null : doc.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform ${doc.color}`}>
                      <doc.icon size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{t(doc.categoryKey as any)}</p>
                      <h3 className="text-xl font-black text-[#3c3c3c]">{t(doc.titleKey as any)}</h3>
                    </div>
                  </div>
                  <ChevronRight 
                    className={`text-gray-300 transition-transform duration-300 ${activeDoc === doc.id ? 'rotate-90 text-[#1cb0f6]' : ''}`} 
                  />
                </div>

                <AnimatePresence>
                  {activeDoc === doc.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 pb-4 border-t border-gray-100 mt-6">
                        <p className="text-gray-600 font-medium leading-relaxed text-lg">
                          {t(doc.contentKey as any)}
                        </p>
                        <div className="mt-8 flex gap-3">
                           <Button3D variant="outline" className="py-2 px-6 text-xs font-black">{t('info.doubts.feedback')}</Button3D>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar de Apoio */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#3c3c3c] rounded-[3rem] p-8 text-white">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <Book className="text-[#1cb0f6]" />
            </div>
            <h3 className="text-xl font-black mb-4 tracking-tight">{t('info.doubts.summary')}</h3>
            <p className="text-gray-400 font-bold text-sm leading-relaxed mb-6">
              {t('info.doubts.summary.desc')}
            </p>
            <div className="h-1 w-12 bg-[#1cb0f6] rounded-full"></div>
          </div>

          <div className="bg-[#1cb0f6]/5 rounded-[3rem] p-8 border-2 border-[#1cb0f6]/10">
            <HelpCircle className="text-[#1cb0f6] mb-4" size={32} />
            <h4 className="font-black text-[#3c3c3c] text-lg mb-2">{t('info.doubts.support.title')}</h4>
            <p className="text-gray-500 font-bold text-sm mb-6">
              {t('info.doubts.support.desc')}
            </p>
            <Button3D variant="secondary" fullWidth className="text-xs font-black">
              {t('info.doubts.support.cta')}
            </Button3D>
          </div>
        </div>
      </div>
    </article>
  );
}
