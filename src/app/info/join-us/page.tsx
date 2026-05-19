'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Code, Palette, Languages, Users, Heart, Zap, Globe, Sparkles, ArrowRight, CheckCircle, Github, Eye, GitFork, Terminal, GitPullRequest, Cpu } from 'lucide-react';
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

      {/* Collaboration Steps Grid - Replaced 3D Stage */}
      <section className="mb-40 bg-gray-50/50 rounded-[50px] border-2 border-dashed border-gray-200 p-8 md:p-16">
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-5 py-2 bg-white border-2 border-gray-100 rounded-full text-[#58cc02] font-black text-sm uppercase tracking-[0.2em] shadow-xs">
            {t('info.join_us.gh.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#3c3c3c] tracking-tight">
            {t('info.join_us.collab.title')}
          </h2>
          <p className="text-xl text-[#777] font-bold leading-relaxed">
            {t('info.join_us.collab.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: t('info.join_us.steps.step1.title'),
              desc: t('info.join_us.steps.step1.desc'),
              icon: <GitFork className="w-8 h-8 text-[#1cb0f6]" />,
              badge: "Fork",
              color: "border-[#1cb0f6] bg-[#1cb0f6]/5 text-[#1cb0f6]",
              code: "github.com/imperador1k/myduolingo"
            },
            {
              title: t('info.join_us.steps.step2.title'),
              desc: t('info.join_us.steps.step2.desc'),
              icon: <Terminal className="w-8 h-8 text-[#58cc02]" />,
              badge: "Clone",
              color: "border-[#58cc02] bg-[#58cc02]/5 text-[#58cc02]",
              code: "git clone https://github.com/your-username/myduolingo.git"
            },
            {
              title: t('info.join_us.steps.step3.title'),
              desc: t('info.join_us.steps.step3.desc'),
              icon: <Cpu className="w-8 h-8 text-[#ffc800]" />,
              badge: "Build",
              color: "border-[#ffc800] bg-[#ffc800]/5 text-[#ffc800]",
              code: "npm install && npm run dev"
            },
            {
              title: t('info.join_us.steps.step4.title'),
              desc: t('info.join_us.steps.step4.desc'),
              icon: <GitPullRequest className="w-8 h-8 text-purple-500" />,
              badge: "PR",
              color: "border-purple-500 bg-purple-500/5 text-purple-500",
              code: "git push origin feature/awesome-updates"
            }
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-[40px] bg-white border-2 border-b-6 border-[#e5e5e5] hover:border-[#1cb0f6] transition-all duration-300 relative flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="p-4 rounded-2xl bg-gray-50 group-hover:bg-white border border-[#e5e5e5] transition-all shadow-xs">
                    {step.icon}
                  </div>
                  <span className={`text-xs font-black px-3 py-1 rounded-full border ${step.color}`}>
                    {step.badge}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-[#3c3c3c]">{step.title}</h3>
                  <p className="text-[#777] font-bold text-base leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {step.code && (
                <div className="mt-6 p-3 rounded-2xl bg-gray-50 border border-gray-100 font-mono text-xs text-gray-500 select-all overflow-x-auto whitespace-nowrap scrollbar-thin">
                  {step.code}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Developer Docs Referral Banner */}
      <section className="mb-20 bg-white rounded-[40px] p-8 md:p-12 overflow-hidden relative border-2 border-b-6 border-[#e5e5e5] shadow-xs max-w-7xl mx-auto">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <span className="inline-block px-3 py-1 bg-gray-100 text-[#1cb0f6] text-xs font-black rounded-full uppercase tracking-wider">
                Developer Resources
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#3c3c3c]">
              {t('info.join_us.docs.title')}
            </h2>
            <p className="text-[#777] font-bold text-base md:text-lg leading-relaxed">
              {t('info.join_us.docs.desc')}
            </p>
          </div>

          <motion.a
            href="/docs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-[#1cb0f6] text-white font-black text-sm uppercase tracking-wider rounded-2xl border-b-4 border-[#1899d6] hover:border-b-0 hover:translate-y-[4px] transition-all flex items-center gap-2 shadow-xs w-full lg:w-auto justify-center"
          >
            <Code className="w-5 h-5" />
            <span>{t('info.join_us.docs.cta')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </section>

      {/* Consolidated CTA Section - Rescaled and Elegant */}
      <section className="text-center relative py-16 bg-white rounded-[50px] border-2 border-[#e5e5e5] border-b-8 shadow-xs max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8 px-6"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#3c3c3c] tracking-tight leading-tight">
              {t('info.join_us.cta.title')} <span className="text-[#1cb0f6]">{t('info.join_us.cta.title_accent')}</span>
            </h2>
            <p className="text-xl text-[#777] font-bold max-w-xl mx-auto leading-relaxed">
              {t('info.join_us.cta.desc')}
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-fit px-8 py-4 bg-[#58cc02] text-white font-black text-sm uppercase tracking-wider rounded-2xl border-b-4 border-[#46a302] hover:border-b-0 hover:translate-y-[4px] transition-all flex items-center gap-3 shadow-xs"
              onClick={() => window.open('https://github.com/imperador1k/myduolingo', '_blank')}
            >
              <Github className="w-5 h-5" />
              <span>{t('info.join_us.cta.button')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </motion.button>
            
            <div className="flex flex-col items-center gap-1.5 pt-4 border-t border-gray-100 w-full max-w-xs">
              <span className="text-[#afafaf] font-black text-xs uppercase tracking-widest">{t('info.join_us.cta.contact')}</span>
              <span className="text-lg text-[#1cb0f6] font-black hover:underline cursor-pointer">contacto@miguelweb.dev</span>
            </div>
          </div>
        </motion.div>
      </section>
    </article>
  );
}
