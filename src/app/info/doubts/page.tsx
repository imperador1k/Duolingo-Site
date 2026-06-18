"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Book, HelpCircle, ChevronRight, Star, Shield, Zap, 
  HeartPulse, Snowflake, Trophy, Crown, ListOrdered, AlertTriangle, Users, 
  Timer, Flame, MessageSquare, UserCircle, Moon, Heart, Search, X 
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
  const [searchQuery, setSearchQuery] = useState("");

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

  // Filtragem dinâmica dos cards
  const filteredDocs = DOCS_DATA.filter((doc) => {
    const title = t(doc.titleKey as any).toLowerCase();
    const content = t(doc.contentKey as any).toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || content.includes(query);
  });

  // Mostrar categorias apenas se houver documentos visíveis nelas
  const visibleCategories = CATEGORIES.filter((category) =>
    filteredDocs.some((doc) => doc.cat === category.id)
  );

  return (
    <div className="relative min-h-screen pb-24">
      {/* Índice Lateral Fixo (Visível apenas em ecrãs ultra-largos) */}
      <nav className="fixed right-10 top-1/2 -translate-y-1/2 z-50 hidden 2xl:flex flex-col gap-6 p-4">
        {CATEGORIES.map((cat) => {
          const isCategoryVisible = visibleCategories.some(vc => vc.id === cat.id);
          if (!isCategoryVisible) return null;
          
          return (
            <button
              key={cat.id}
              onClick={() => scrollToSection(cat.id)}
              className="group flex items-center gap-4 text-right transition-all cursor-pointer"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                {t(`info.doubts.cat.${cat.id}` as any)}
              </span>
              <div className="w-1.5 h-6 rounded-full transition-all bg-gray-100 group-hover:bg-[#1cb0f6] group-hover:scale-y-125" />
            </button>
          );
        })}
      </nav>

      <article className="max-w-4xl mx-auto px-4 md:px-0">
        {/* Hero Splitscren Premium com Lottie */}
        <header className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b-2 border-gray-100/50 mb-10">
          <div className="md:col-span-8 text-center md:text-left flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1cb0f6]/10 text-[#1cb0f6] text-xs font-black tracking-[0.25em] uppercase mb-4"
            >
              <Book size={14} strokeWidth={3} />
              {t('info.doubts.official')}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-[#3c3c3c] leading-tight tracking-tight mb-4"
            >
              {t('info.doubts.title')}{' '}
              <span className="text-[#1cb0f6] drop-shadow-sm">{t('info.doubts.accent')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base font-bold text-gray-400 mb-8 max-w-lg leading-relaxed"
            >
              {t('info.doubts.hero_desc')}
            </motion.p>

            {/* Barra de Pesquisa 3D Super Interativa */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="w-full max-w-md relative flex items-center border-2 border-gray-200 bg-white rounded-2xl p-1 shadow-[0_4px_0_0_#e5e5e5] focus-within:border-[#1cb0f6] focus-within:shadow-[0_4px_0_0_#1899d6] transition-all duration-200"
            >
              <Search className="w-5 h-5 text-gray-400 ml-4 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('info.doubts.search_placeholder')}
                className="w-full px-3 py-2.5 text-sm font-bold text-[#3c3c3c] bg-transparent outline-none placeholder-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-all mr-2 shrink-0 cursor-pointer"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
            </motion.div>
          </div>

          {/* Animação do Duo Mascot - CSS only */}
          <div className="hidden md:col-span-4 md:flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              className="w-48 h-48 select-none pointer-events-none"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#58cc02] to-[#46a302] flex items-center justify-center shadow-lg animate-bounce-slow">
                <div className="text-white text-7xl font-black tracking-tight select-none">Duo</div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Índice de Categorias Rápido (Se houver resultados) */}
        {visibleCategories.length > 0 && (
          <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mb-12">
            {visibleCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-2xl border-2 border-gray-100 hover:border-[#1cb0f6] bg-white hover:bg-gray-50 transition-all text-[#4b4b4b] font-black uppercase text-[11px] tracking-wider shadow-[0_3px_0_0_#f3f4f6] hover:shadow-[0_3px_0_0_#1cb0f6]/20 cursor-pointer"
                >
                  <Icon className={`w-4 h-4 ${cat.color}`} />
                  <span>{t(`info.doubts.cat.${cat.id}` as any)}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* The Infinity Wall Otimizada */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((category) => (
              <motion.section 
                key={category.id} 
                id={category.id} 
                className="scroll-mt-32"
                layout="position"
              >
                {/* Cabeçalho de Secção mais Elegante */}
                <div className="flex items-baseline gap-3 mb-6 border-b-2 border-gray-50 pb-3">
                  <h2 className="text-xl md:text-2xl font-black text-[#3c3c3c] tracking-tight uppercase">
                    {t(`info.doubts.cat.${category.id}` as any)}
                  </h2>
                  <span className="text-xs font-black text-gray-300 tracking-wider">
                    ({filteredDocs.filter(d => d.cat === category.id).length})
                  </span>
                </div>

                {/* Lista de Cards com Animações Melhoradas */}
                <div className="grid grid-cols-1 gap-4">
                  {filteredDocs.filter(item => item.cat === category.id).map((doc) => {
                    const isExpanded = expandedId === doc.id;
                    return (
                      <motion.div
                        key={doc.id}
                        layout="position"
                        onClick={() => setExpandedId(isExpanded ? null : doc.id)}
                        className={`
                          relative overflow-hidden cursor-pointer rounded-2xl border-2 transition-all duration-300 p-5 md:p-6
                          ${isExpanded 
                            ? 'bg-white border-[#1cb0f6] shadow-[0_16px_32px_rgba(28,176,246,0.06)] scale-[1.005] z-10' 
                            : 'bg-white border-gray-100 hover:border-[#1cb0f6]/30 hover:shadow-md'}
                        `}
                      >
                        <div className="flex items-start gap-4 md:gap-5">
                          {/* Ícone com Rotação no Clique */}
                          <motion.div 
                            animate={{ 
                              scale: isExpanded ? 1.05 : 1,
                              rotate: isExpanded ? 8 : 0,
                              backgroundColor: isExpanded ? '#1cb0f6' : '#f9fafb',
                              color: isExpanded ? '#ffffff' : '#9ca3af'
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                          >
                            <doc.icon size={22} strokeWidth={2.5} />
                          </motion.div>

                          <div className="flex-1 min-w-0">
                            <h3 className={`text-base md:text-lg font-black tracking-tight leading-snug transition-colors duration-200 ${isExpanded ? 'text-[#1cb0f6]' : 'text-[#3c3c3c]'}`}>
                              {t(doc.titleKey as any)}
                            </h3>
                            
                            {/* Animação Suave Spring de Altura & Slide */}
                            <AnimatePresence initial={false}>
                              {isExpanded ? (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ 
                                    opacity: 1, 
                                    height: 'auto',
                                    transition: {
                                      height: { type: "spring", stiffness: 300, damping: 30 },
                                      opacity: { duration: 0.2, delay: 0.05 }
                                    }
                                  }}
                                  exit={{ 
                                    opacity: 0, 
                                    height: 0,
                                    transition: {
                                      height: { duration: 0.2 },
                                      opacity: { duration: 0.1 }
                                    }
                                  }}
                                  className="overflow-hidden"
                                >
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    transition={{ duration: 0.25 }}
                                  >
                                    <p className="text-sm md:text-base font-bold text-gray-500 leading-relaxed mt-3.5 max-w-3xl">
                                      {t(doc.contentKey as any)}
                                    </p>
                                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4 pt-3.5 border-t border-gray-50">
                                       <Link href="/info/contact">
                                         <Button3D variant="primary" className="px-5 py-2.5 text-[11px] font-black uppercase tracking-wider shadow-sm">
                                           {t('info.doubts.support.cta')}
                                         </Button3D>
                                       </Link>
                                       <div className="flex items-center gap-3">
                                          <span className="text-[10px] font-black text-gray-300 uppercase tracking-wider">{t('info.doubts.feedback')}</span>
                                          <div className="flex gap-1">
                                            <button className="w-8.5 h-8.5 rounded-xl bg-gray-50 border-2 border-gray-100 flex items-center justify-center hover:bg-[#58cc02]/10 hover:border-[#58cc02] transition-all text-xs cursor-pointer">👍</button>
                                            <button className="w-8.5 h-8.5 rounded-xl bg-gray-50 border-2 border-gray-100 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-all text-xs cursor-pointer">👎</button>
                                          </div>
                                       </div>
                                    </div>
                                  </motion.div>
                                </motion.div>
                              ) : (
                                <p className="text-xs md:text-sm font-bold text-gray-400 line-clamp-1 opacity-60 mt-1">
                                  {t(doc.contentKey as any)}
                                </p>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Chevron Rotativo com Framer Motion */}
                          <motion.div 
                            className="hidden sm:block text-gray-200 shrink-0"
                            animate={{ 
                              rotate: isExpanded ? 90 : 0, 
                              color: isExpanded ? '#1cb0f6' : '#e5e5e5' 
                            }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <ChevronRight size={20} strokeWidth={3} />
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>
            ))}
          </AnimatePresence>

          {/* Estado de Pesquisa sem Resultados */}
          {filteredDocs.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-16 text-center flex flex-col items-center justify-center bg-gray-50/50 rounded-3xl border-2 border-dashed border-gray-200 p-8"
            >
              <div className="w-32 h-32 mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-300" />
              </div>
              <h3 className="text-xl font-black text-[#3c3c3c] mb-2">{t('info.doubts.no_results')} &quot;{searchQuery}&quot;</h3>
              <p className="text-sm font-bold text-gray-400 max-w-sm leading-relaxed">
                {t('info.doubts.no_results_desc')}
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-6 px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-2xl font-black text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                {t('info.doubts.no_results_clear')}
              </button>
            </motion.div>
          )}
        </div>

        {/* Footer Help Hub Redimensionado */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-8 md:p-12 rounded-[2.5rem] bg-[#3c3c3c] text-white overflow-hidden relative group text-center md:text-left shadow-lg"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1cb0f6] opacity-[0.02] -skew-x-12 translate-x-1/4" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1 max-w-xl">
              <h3 className="text-2xl md:text-4xl font-black mb-3 leading-tight tracking-tight">
                 {t('info.doubts.support.title')}
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-bold mb-6 leading-relaxed">
                 {t('info.doubts.support.desc')}
              </p>
              <Link href="/info/contact">
                <Button3D variant="secondary" className="px-8 py-3.5 bg-[#1cb0f6] text-white border-none text-xs font-black shadow-[0_10px_20px_rgba(28,176,246,0.2)]">
                   {t('info.doubts.support.cta')}
                </Button3D>
              </Link>
            </div>
            <div className="w-32 h-32 bg-white/5 rounded-3xl border-2 border-white/10 flex items-center justify-center shrink-0 rotate-3 group-hover:rotate-6 transition-all duration-700">
               <HelpCircle size={60} className="text-[#1cb0f6] opacity-30 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
