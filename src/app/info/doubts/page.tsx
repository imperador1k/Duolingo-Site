"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Book, HelpCircle, ChevronRight, Star, Shield, Zap, 
  HeartPulse, Snowflake, Trophy, Crown, ListOrdered, AlertTriangle, Users, 
  Timer, Flame, MessageSquare, UserCircle, Moon, Heart 
} from 'lucide-react';
import { Button3D } from '@/components/Button3D';
import { useTranslation } from '@/hooks/useTranslation';

// Estrutura de dados para o "Portal de Documentação"
const DOCS_DATA = [
  { id: 'xp', cat: 'mechanics', titleKey: 'info.doubts.xp.title', contentKey: 'info.doubts.xp.desc', icon: Star, color: 'text-yellow-500' },
  { id: 'hearts', cat: 'mechanics', titleKey: 'info.doubts.hearts.title', contentKey: 'info.doubts.hearts.desc', icon: Shield, color: 'text-red-500' },
  { id: 'hearts_recovery', cat: 'mechanics', titleKey: 'info.doubts.hearts_recovery.title', contentKey: 'info.doubts.hearts_recovery.desc', icon: HeartPulse, color: 'text-pink-500' },
  { id: 'pro', cat: 'plans', titleKey: 'info.doubts.pro.title', contentKey: 'info.doubts.pro.desc', icon: Crown, color: 'text-purple-500' },
  { id: 'streak', cat: 'gamification', titleKey: 'info.doubts.streak.title', contentKey: 'info.doubts.streak.desc', icon: Zap, color: 'text-orange-500' },
  { id: 'streak_freeze', cat: 'gamification', titleKey: 'info.doubts.streak_freeze.title', contentKey: 'info.doubts.streak_freeze.desc', icon: Snowflake, color: 'text-blue-400' },
  { id: 'daily_missions', cat: 'gamification', titleKey: 'info.doubts.daily_missions.title', contentKey: 'info.doubts.daily_missions.desc', icon: Trophy, color: 'text-yellow-600' },
  { id: 'leagues', cat: 'social', titleKey: 'info.doubts.leagues.title', contentKey: 'info.doubts.leagues.desc', icon: ListOrdered, color: 'text-blue-500' },
  { id: 'leagues_zones', cat: 'social', titleKey: 'info.doubts.leagues_zones.title', contentKey: 'info.doubts.leagues_zones.desc', icon: AlertTriangle, color: 'text-orange-600' },
  { id: 'friends_social', cat: 'social', titleKey: 'info.doubts.friends_social.title', contentKey: 'info.doubts.friends_social.desc', icon: Users, color: 'text-green-500' },
  { id: 'arcade_sprint', cat: 'arcade', titleKey: 'info.doubts.arcade_sprint.title', contentKey: 'info.doubts.arcade_sprint.desc', icon: Timer, color: 'text-red-400' },
  { id: 'arcade_meteors', cat: 'arcade', titleKey: 'info.doubts.arcade_meteors.title', contentKey: 'info.doubts.arcade_meteors.desc', icon: Flame, color: 'text-orange-400' },
  { id: 'marco_chat', cat: 'arcade', titleKey: 'info.doubts.marco_chat.title', contentKey: 'info.doubts.marco_chat.desc', icon: MessageSquare, color: 'text-[#58cc02]' },
  { id: 'account_edit', cat: 'account', titleKey: 'info.doubts.account_edit.title', contentKey: 'info.doubts.account_edit.desc', icon: UserCircle, color: 'text-gray-500' },
  { id: 'dark_mode', cat: 'account', titleKey: 'info.doubts.dark_mode.title', contentKey: 'info.doubts.dark_mode.desc', icon: Moon, color: 'text-indigo-500' },
  { id: 'wall_of_love', cat: 'account', titleKey: 'info.doubts.wall_of_love.title', contentKey: 'info.doubts.wall_of_love.desc', icon: Heart, color: 'text-red-600' },
];

const CATEGORIES = [
  { id: 'mechanics', icon: Shield, color: 'text-red-500' },
  { id: 'plans', icon: Crown, color: 'text-purple-500' },
  { id: 'gamification', icon: Zap, color: 'text-orange-500' },
  { id: 'social', icon: Users, color: 'text-green-500' },
  { id: 'arcade', icon: Flame, color: 'text-orange-400' },
  { id: 'account', icon: UserCircle, color: 'text-gray-500' },
];

export default function DoubtsPage() {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen pb-40">
      {/* Índice Minimalista Lateral - Estilo Editorial */}
      <nav className="fixed right-10 top-1/2 -translate-y-1/2 z-50 hidden 2xl:flex flex-col gap-8 p-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollToSection(cat.id)}
            className="group flex items-center gap-6 text-right transition-all"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
              {t(`info.doubts.cat.${cat.id}` as any)}
            </span>
            <div className={`w-2 h-8 rounded-full transition-all bg-gray-100 group-hover:bg-[#1cb0f6] group-hover:scale-y-150`} />
          </button>
        ))}
      </nav>

      <article className="max-w-6xl mx-auto px-6">
        {/* Header Monumental */}
        <header className="py-32 md:py-48 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#1cb0f6]/10 text-[#1cb0f6] text-sm font-black tracking-[0.3em] uppercase mb-12"
          >
            <Book size={18} strokeWidth={3} />
            {t('info.doubts.official')}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black text-[#3c3c3c] leading-none tracking-tighter"
          >
            {t('info.doubts.title')} <br/>
            <span className="text-[#1cb0f6] drop-shadow-sm">{t('info.doubts.accent')}</span>
          </motion.h1>
        </header>

        {/* The Infinity Wall */}
        <div className="space-y-40">
          {CATEGORIES.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-32">
              {/* Cabeçalho de Secção Massive */}
              <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16 border-b-4 border-gray-50 pb-8">
                <h2 className="text-5xl md:text-8xl font-black text-[#3c3c3c] tracking-tighter uppercase">
                  {t(`info.doubts.cat.${category.id}` as any)}
                </h2>
                <span className="text-xl md:text-2xl font-black text-gray-200 tracking-widest uppercase">
                  ({DOCS_DATA.filter(d => d.cat === category.id).length})
                </span>
              </div>

              {/* Lista de Cards de Largura Total */}
              <div className="grid grid-cols-1 gap-12">
                {DOCS_DATA.filter(item => item.cat === category.id).map((doc) => (
                  <motion.div
                    key={doc.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    onClick={() => setExpandedId(expandedId === doc.id ? null : doc.id)}
                    className={`
                      relative overflow-hidden cursor-pointer rounded-[3.5rem] border-2 transition-all p-10 md:p-14
                      ${expandedId === doc.id 
                        ? 'bg-white border-[#1cb0f6] shadow-[0_50px_100px_rgba(28,176,246,0.1)] scale-[1.01] z-10' 
                        : 'bg-white border-gray-100 hover:border-[#1cb0f6]/30 hover:shadow-2xl'}
                    `}
                  >
                    <div className="flex flex-col md:flex-row items-start gap-10 md:gap-14">
                      {/* Ícone com Shadow Tátil */}
                      <div className={`
                        w-24 h-24 rounded-3xl flex items-center justify-center transition-all shrink-0 shadow-lg
                        ${expandedId === doc.id ? 'bg-[#1cb0f6] text-white rotate-6 scale-110 shadow-[#1cb0f6]/30' : 'bg-gray-50 text-gray-400'}
                      `}>
                        <doc.icon size={44} strokeWidth={2.5} />
                      </div>

                      <div className="flex-1">
                        <h3 className={`text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight ${expandedId === doc.id ? 'text-[#1cb0f6]' : 'text-[#3c3c3c]'}`}>
                          {t(doc.titleKey as any)}
                        </h3>
                        
                        <AnimatePresence>
                          {expandedId === doc.id ? (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="text-xl md:text-3xl font-bold text-gray-500 leading-[1.6] mt-8 max-w-4xl">
                                {t(doc.contentKey as any)}
                              </p>
                              <div className="mt-12 flex flex-wrap items-center gap-8">
                                 <Link href="/info/contact">
                                   <Button3D variant="primary" className="px-12 py-5 text-sm font-black uppercase tracking-widest shadow-2xl">
                                     {t('info.doubts.support.cta')}
                                   </Button3D>
                                 </Link>
                                 <div className="flex items-center gap-4">
                                    <span className="text-xs font-black text-gray-300 uppercase tracking-widest">{t('info.doubts.feedback')}</span>
                                    <div className="flex gap-2">
                                      <button className="w-12 h-12 rounded-2xl bg-gray-50 border-2 border-gray-100 flex items-center justify-center hover:bg-[#58cc02]/10 hover:border-[#58cc02] transition-all text-xl">👍</button>
                                      <button className="w-12 h-12 rounded-2xl bg-gray-50 border-2 border-gray-100 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-all text-xl">👎</button>
                                    </div>
                                 </div>
                              </div>
                            </motion.div>
                          ) : (
                            <p className="text-xl md:text-2xl font-bold text-gray-400 line-clamp-1 opacity-50">
                              {t(doc.contentKey as any)}
                            </p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className={`hidden md:block transition-all duration-700 ${expandedId === doc.id ? 'rotate-180 scale-150 text-[#1cb0f6]' : 'text-gray-200'}`}>
                        <ChevronRight size={40} strokeWidth={4} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer "Help Hub" Massive */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-64 p-16 md:p-32 rounded-[6rem] bg-[#3c3c3c] text-white overflow-hidden relative group text-center md:text-left"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1cb0f6] opacity-[0.03] -skew-x-12 translate-x-1/4" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-6xl md:text-8xl font-black mb-10 leading-none tracking-tighter">
                 {t('info.doubts.support.title')}
              </h3>
              <p className="text-gray-400 text-2xl md:text-3xl font-bold mb-14 leading-relaxed">
                 {t('info.doubts.support.desc')}
              </p>
              <Link href="/info/contact">
                <Button3D variant="secondary" className="px-16 py-6 bg-[#1cb0f6] text-white border-none text-base font-black shadow-[0_20px_50px_rgba(28,176,246,0.3)]">
                   {t('info.doubts.support.cta')}
                </Button3D>
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-white/5 rounded-[6rem] border-2 border-white/10 flex items-center justify-center rotate-6 group-hover:rotate-12 transition-all duration-1000">
                 <HelpCircle size={150} className="text-[#1cb0f6] opacity-30 animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
