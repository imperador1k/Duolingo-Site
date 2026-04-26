'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Code, Palette, Languages, Users, Heart, Zap, Globe, Sparkles, ArrowRight, CheckCircle, Github, Eye } from 'lucide-react';
import { LazyLottie } from '@/components/LazyLottie';
import { useTranslation } from '@/hooks/useTranslation';

export default function JoinUsPage() {
  const { t } = useTranslation();

  const valueCards = [
    {
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
      title: t('info.join_us.values.radical.title'),
      desc: t('info.join_us.values.radical.desc'),
      color: "from-yellow-400/20 to-orange-500/20",
      border: "group-hover:border-yellow-400"
    },
    {
      icon: <Heart className="w-10 h-10 text-red-500" />,
      title: t('info.join_us.values.user.title'),
      desc: t('info.join_us.values.user.desc'),
      color: "from-red-400/20 to-pink-500/20",
      border: "group-hover:border-red-500"
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: t('info.join_us.values.global.title'),
      desc: t('info.join_us.values.global.desc'),
      color: "from-blue-400/20 to-indigo-500/20",
      border: "group-hover:border-blue-500"
    }
  ];

  const areas = [
    { icon: Code, name: t('info.join_us.areas.engineering'), delay: 0.1 },
    { icon: Palette, name: t('info.join_us.areas.design'), delay: 0.2 },
    { icon: Languages, name: t('info.join_us.areas.experts'), delay: 0.3 },
    { icon: Users, name: t('info.join_us.areas.community'), delay: 0.4 }
  ];
  return (
    <article className="w-full pb-32 relative">
      {/* Background Ornaments - Refined */}
      <div className="absolute top-[-100px] right-[-100px] -z-10 w-[600px] h-[600px] bg-[#1cb0f6]/5 rounded-full blur-[120px]" />
      <div className="absolute top-[20%] left-[-100px] -z-10 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      
      {/* Hero Section - Expanded Width */}
      <section className="relative flex flex-col lg:flex-row items-center gap-16 mb-40 pt-6">
        <div className="flex-[1.5] text-left space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#1cb0f6]/10 text-[#1cb0f6] font-black text-sm uppercase tracking-[0.2em] border border-[#1cb0f6]/20 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            {t('info.join_us.badge')}
          </motion.div>
          
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-[90px] font-black text-[#3c3c3c] leading-[0.85] tracking-tighter"
            >
              {t('info.join_us.title')} <br className="hidden xl:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1cb0f6] via-[#2b70c9] to-[#1cb0f6] bg-size-[200%_auto] animate-gradient-x">
                {t('info.join_us.title_accent')}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-[#777] font-bold max-w-2xl leading-relaxed"
            >
              {t('info.join_us.hero_desc')}
            </motion.p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
          className="flex-1 relative w-full max-w-[500px]"
        >
          {/* Decorative glass container */}
          <div className="relative aspect-square rounded-[60px] bg-linear-to-br from-white to-gray-50 p-1 border-2 border-[#e5e5e5] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
            <div className="absolute inset-4 rounded-[45px] bg-white border border-[#e5e5e5] -z-10" />
            <div className="w-full h-full flex items-center justify-center p-4">
              <LazyLottie animationPath="/lotties/filipe.json" className="w-full h-full scale-110 drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]" />
            </div>
            
            {/* Live Indicator */}
            <div className="absolute -top-4 -right-4 bg-[#1cb0f6] text-white px-6 py-3 rounded-2xl shadow-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              {t('info.join_us.status')}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Culture Bento - Re-styled for better flow */}
      <section className="mb-40">
        <div className="mb-16">
          <h2 className="text-5xl font-black text-[#3c3c3c] tracking-tight mb-4 text-center lg:text-left">{t('info.join_us.culture.title')}</h2>
          <p className="text-2xl text-[#777] font-bold text-center lg:text-left mb-4">{t('info.join_us.culture.subtitle')}</p>
          <div className="h-2 w-24 bg-[#1cb0f6] rounded-full mx-auto lg:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {valueCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group p-12 rounded-[50px] bg-white border-2 border-b-14 border-[#e5e5e5] ${card.border} transition-all duration-500 hover:-translate-y-3 relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 space-y-6">
                <div className="p-6 rounded-[30px] bg-gray-50 w-fit group-hover:scale-110 group-hover:bg-white transition-all shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-3xl font-black text-[#3c3c3c]">{card.title}</h3>
                <p className="text-[#777] font-bold text-xl leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Collaboration Area - High-Contrast Editorial Stage */}
      <section className="relative w-full min-h-[900px] lg:min-h-[1100px] bg-slate-50 overflow-hidden flex flex-col items-center justify-center py-20 lg:py-40">
        
      <section className="relative min-h-[900px] md:min-h-[1100px] bg-slate-50 overflow-hidden flex flex-col items-center justify-center py-20">
        {/* Artistic Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${['bg-[#58cc02]', 'bg-[#1cb0f6]', 'bg-[#ffc800]'][i % 3]} opacity-20`}
              animate={{
                x: [Math.random() * 1000, Math.random() * 1000],
                y: [Math.random() * 1000, Math.random() * 1000],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 text-center mb-16 md:mb-24 px-6 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 bg-white border-2 border-gray-100 rounded-full text-[#58cc02] font-black text-sm uppercase tracking-[0.3em] shadow-sm mb-8"
          >
            {t('info.join_us.gh.badge')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-[100px] font-black leading-none tracking-tight mb-8"
          >
            <span className="text-[#042c60] block md:inline">{t('info.join_us.gh.title_1')}</span>
            <span className="text-[#58cc02] md:ml-6">{t('info.join_us.gh.title_2')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl md:text-2xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed"
          >
            {t('info.join_us.gh.desc')}
          </motion.p>
        </div>

        {/* Floating Device Modules Stage */}
        <div className="relative w-full max-w-7xl mx-auto px-4 h-[500px] md:h-[600px] mb-20">
          
          {/* Module 1: Join Mission (Smartphone Left) */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -15 }}
            whileInView={{ opacity: 1, x: 0, rotate: -5 }}
            className="absolute left-[5%] top-[10%] w-[220px] md:w-[300px] aspect-9/19 bg-[#58cc02] rounded-[40px] md:rounded-[60px] p-4 shadow-[0_40px_80px_-15px_rgba(88,204,2,0.3)] z-10 hidden lg:block"
          >
            <div className="w-full h-full bg-[#042c60] rounded-[30px] md:rounded-[50px] overflow-hidden relative border-4 border-[#46a302]">
               <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/20 rounded-full" />
               <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-4">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-20 h-20 bg-[#58cc02] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Rocket className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-white font-black text-xl leading-tight">{t('info.join_us.gh.device1_title')}</h3>
                  <span className="text-[#58cc02] text-xs font-bold bg-white/10 px-3 py-1 rounded-full uppercase tracking-tighter">{t('info.join_us.gh.device1_badge')}</span>
               </div>
            </div>
          </motion.div>

          {/* Module 2: Stack Browser (Desktop Center) */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[90%] md:w-[700px] aspect-video bg-[#58cc02] rounded-[30px] md:rounded-[40px] p-4 md:p-6 shadow-[0_60px_100px_-20px_rgba(88,204,2,0.4)] z-30"
          >
            <div className="w-full h-full bg-white rounded-[20px] md:rounded-[30px] overflow-hidden border-4 border-[#46a302] flex flex-col">
              <div className="h-10 bg-gray-100 flex items-center px-4 gap-2 border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff4b4b]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffc800]" />
                  <div className="w-3 h-3 rounded-full bg-[#58cc02]" />
                </div>
                <div className="flex-1 ml-4 bg-white rounded-md h-6 flex items-center px-3 border border-gray-200">
                  <span className="text-[10px] text-gray-400 font-bold">github.com/imperador1k/myduolingo</span>
                </div>
              </div>
              <div className="flex-1 p-4 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                <div className="space-y-4 text-center md:text-left flex-1">
                  <span className="inline-block px-3 py-1 bg-[#ddf4ff] text-[#1cb0f6] rounded-full text-[10px] font-black uppercase tracking-widest">{t('info.join_us.gh.device2_tab')}</span>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 border flex items-center justify-center font-black text-[#58cc02]">N</div>
                      <span className="font-black text-gray-700">Next.js 15</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 border flex items-center justify-center font-black text-[#1cb0f6]">T</div>
                      <span className="font-black text-gray-700">Tailwind v4</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 border flex items-center justify-center font-black text-[#d33131]">G</div>
                      <span className="font-black text-gray-700">Gemini AI</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-48 p-4 bg-slate-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2">
                   <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                     <Sparkles className="w-6 h-6 text-[#ffc800]" />
                   </div>
                   <span className="text-xs text-gray-400 font-black uppercase tracking-tighter">{t('info.join_us.gh.device2_impact')}</span>
                   <span className="text-center font-black text-gray-700 text-sm">{t('info.join_us.gh.device2_tag')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Module 3: Contrib Engine (Smartphone Right) */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 15 }}
            whileInView={{ opacity: 1, x: 0, rotate: 5 }}
            className="absolute right-[5%] top-[10%] w-[220px] md:w-[300px] aspect-9/19 bg-[#58cc02] rounded-[40px] md:rounded-[60px] p-4 shadow-[0_40px_80px_-15px_rgba(88,204,2,0.3)] z-10 hidden lg:block"
          >
            <div className="w-full h-full bg-white rounded-[30px] md:rounded-[50px] overflow-hidden relative border-4 border-[#46a302] flex flex-col">
               <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-100 rounded-full" />
               <div className="p-6 pt-12 flex-1 flex flex-col gap-4">
                  <div className="flex gap-2 justify-center">
                    <button className="flex-1 py-3 bg-[#58cc02] rounded-xl text-white font-black text-[10px] shadow-[0_4px_0_0_#46a302]">{t('info.join_us.gh.device3_btn1')}</button>
                    <button className="flex-1 py-3 bg-[#1cb0f6] rounded-xl text-white font-black text-[10px] shadow-[0_4px_0_0_#1899d6]">{t('info.join_us.gh.device3_btn2')}</button>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-2xl border-2 border-gray-100 p-4 space-y-3 overflow-hidden">
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b pb-2">{t('info.join_us.gh.device3_title')}</div>
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-gray-200" />
                        <div className="h-2 w-16 bg-gray-200 rounded-full" />
                      </div>
                    ))}
                    <div className="text-[8px] font-black text-[#58cc02] uppercase pt-2">+ {t('info.join_us.areas.community')} {t('info.join_us.gh.contrib_suffix')}</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Call To Action - Classic 3D Duolingo Style */}
        <div className="relative z-30 px-6 w-full flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98, y: 4 }}
            onClick={() => window.open('https://github.com/imperador1k/myduolingo', '_blank')}
            className="group relative w-fit px-10 md:px-20 py-6 md:py-8 bg-[#58cc02] text-white font-black text-xl md:text-4xl rounded-[25px] md:rounded-[35px] border-b-8 border-[#46a302] active:border-b-0 transition-all flex items-center justify-center gap-4 md:gap-8"
          >
            <Github className="w-8 h-8 md:w-14 md:h-14" />
            <span>{t('info.join_us.gh.cta')}</span>
            <ArrowRight className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-4 transition-transform" />
          </motion.button>
        </div>
      </section>


      {/* CTA Section - Absolute Elite */}
      <section className="text-center relative py-20 bg-gray-50/50 rounded-[80px] border-2 border-dashed border-gray-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-12 px-6"
        >
          <div className="space-y-6">
            <h2 className="text-6xl md:text-[80px] font-black text-[#3c3c3c] tracking-tight leading-none">
              {t('info.join_us.cta.title')} <br/> <span className="text-[#1cb0f6] drop-shadow-sm">{t('info.join_us.cta.title_accent')}</span>
            </h2>
            <p className="text-2xl text-[#777] font-bold max-w-2xl mx-auto">
              {t('info.join_us.cta.desc')}
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <motion.button
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-fit px-10 md:px-20 py-6 md:py-8 bg-[#1cb0f6] text-white font-black text-xl md:text-3xl rounded-[30px] md:rounded-[35px] shadow-[0_12px_0_0_#1899d6] md:shadow-[0_15px_0_0_#1899d6] hover:shadow-[0_20px_0_0_#1899d6] active:shadow-none active:translate-y-[15px] transition-all flex items-center gap-4 md:gap-6"
              onClick={() => window.open('https://github.com/imperador1k/myduolingo', '_blank')}
            >
              <Github className="w-8 h-8 md:w-10 md:h-10" />
              {t('info.join_us.cta.button')}
              <ArrowRight className="w-8 h-8 md:w-9 md:h-9 group-hover:translate-x-3 transition-transform" />
            </motion.button>
            
            <div className="flex flex-col items-center gap-2">
              <span className="text-[#afafaf] font-black text-sm uppercase tracking-[0.4em]">{t('info.join_us.cta.contact')}</span>
              <span className="text-2xl text-[#1cb0f6] font-black underline decoration-4 underline-offset-8">contacto@miguelweb.dev</span>
            </div>
          </div>
        </motion.div>
      </section>
    </article>
  );
}
