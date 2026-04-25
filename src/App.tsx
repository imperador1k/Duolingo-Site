"use client";

import { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { Globe, Monitor, Smartphone, LayoutDashboard, ChevronDown } from 'lucide-react';
import { useTranslation } from './hooks/useTranslation';
import { Button3D } from './components/Button3D';
import { FeatureRow } from './components/FeatureRow';

const Lottie = lazy(() => import('lottie-react'));

function AsyncLottie({ path, className, priority = false }: { path: string; className?: string; priority?: boolean }) {
  const [data, setData] = useState(null);
  const [inView, setInView] = useState(priority);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '1000px' } // Pre-load well before coming into view
    );

    // Create a temporary element to observe if we don't have a ref directly attached
    const el = document.getElementById(`lottie-container-${path}`);
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [path, priority]);

  useEffect(() => {
    if (inView) {
      fetch(path).then((r) => r.json()).then(setData).catch(console.error);
    }
  }, [path, inView]);

  return (
    <div id={`lottie-container-${path}`} className={`${className || ''} transition-opacity duration-700 ${data ? 'opacity-100' : 'opacity-0'}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {data ? (
        <Suspense fallback={null}>
          <Lottie animationData={data} className="w-full h-full" loop={true} />
        </Suspense>
      ) : null}
    </div>
  );
}

export default function App() {
  const { t, toggleLang, lang } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#3c3c3c]">
      {/* Header */}
      <header className="h-20 border-b-2 border-gray-100 px-6 md:px-12 flex items-center justify-between sticky top-0 bg-white z-50">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
          <img src="/icon.png" alt="MyDuolingo Icon" className="w-10 h-10 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.classList.remove('hidden'); }} />
          <div className="hidden w-10 h-10 bg-[#58cc02] rounded-xl flex items-center justify-center shadow-[0_4px_0_0_#58a700]">
            <span className="text-white font-black text-2xl">M</span>
          </div>
          <span className="text-2xl font-black text-[#58cc02] tracking-tight">MyDuolingo</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 text-gray-400 font-bold uppercase text-[11px] tracking-widest cursor-pointer hover:text-gray-600 transition-colors"
            aria-label="Trocar Idioma"
          >
            <span className="hidden sm:inline">IDIOMA DO SITE: {lang === 'pt' ? 'PORTUGUÊS' : 'ENGLISH'}</span>
            <span className="sm:hidden">{lang}</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <button className="hidden sm:block px-6 py-2.5 rounded-2xl border-[2px] border-[#e5e5e5] text-[#afafaf] hover:bg-gray-50 uppercase font-black tracking-widest text-[13px] shadow-[0_4px_0_0_#e5e5e5] active:shadow-none active:translate-y-[4px] transition-all">
            {t('header.login')}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-[1000px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 items-center py-20 pb-24">
        {/* Visual / Floating Group */}
        <div className="relative flex justify-center items-center w-full order-1 md:order-none min-h-[350px]">
          <AsyncLottie path="/lotties/filipe.json" className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] z-10" priority={true} />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 text-center md:text-left items-center md:items-start pl-0 md:pl-8">
          <h1 className="text-3xl sm:text-4xl md:text-[40px] leading-[1.2] font-extrabold text-[#4b4b4b] tracking-tight">
            {t('hero.title').split(/(grátis|free)/i).map((part, i) =>
              /^(grátis|free)$/i.test(part) ? <span key={i} className="text-[#58cc02] px-1">{part}</span> : part
            )}
          </h1>
          <div className="flex flex-col gap-3 w-full max-w-[340px] mt-2">
            <Button3D variant="primary" fullWidth className="py-3.5 text-[15px]">
              {t('hero.start')}
            </Button3D>
            <Button3D variant="outline" fullWidth className="py-3.5 text-[15px] border-[#e5e5e5] text-[#1cb0f6] shadow-[0_4px_0_0_#e5e5e5]">
              {t('hero.account')}
            </Button3D>
          </div>
        </div>
      </main>

      {/* Language Bar */}
      <div className="border-y-2 border-gray-100 overflow-x-hidden">
        <div className="max-w-6xl mx-auto flex items-center px-6">
          <button className="p-4 text-gray-300 hover:text-gray-400">&lt;</button>
          <div className="flex flex-1 justify-between gap-6 overflow-hidden py-4 text-sm font-bold text-[#777] uppercase tracking-widest whitespace-nowrap">
            <span className="flex items-center gap-2"><span className="text-xl">🇺🇸</span> INGLÊS</span>
            <span className="flex items-center gap-2"><span className="text-xl">🇪🇸</span> ESPANHOL</span>
            <span className="flex items-center gap-2"><span className="text-xl">🇫🇷</span> FRANCÊS</span>
            <span className="flex items-center gap-2"><span className="text-xl">🇩🇪</span> ALEMÃO</span>
            <span className="flex items-center gap-2"><span className="text-xl">🇮🇹</span> ITALIANO</span>
            <span className="flex items-center gap-2 hidden md:flex"><span className="text-xl">🇯🇵</span> JAPONÊS</span>
            <span className="flex items-center gap-2 hidden lg:flex"><span className="text-xl">🇰🇷</span> COREANO</span>
          </div>
          <button className="p-4 text-gray-300 hover:text-gray-400">&gt;</button>
        </div>
      </div>

      {/* Zig-Zag Features Container */}
      <div className="my-16">
        {/* 1. Free, Fun, Effective */}
        <FeatureRow
          title={t('features.1.title')}
          description={t('features.1.desc')}
          imagePlaceholder={
            <div className="relative w-64 h-80 flex justify-center items-center">
              <AsyncLottie path="/lotties/filipe1.json" className="w-full h-full" />
            </div>
          }
        />

        {/* 2. Backed by science */}
        <FeatureRow
          reverse
          title={t('features.2.title')}
          description={t('features.2.desc')}
          imagePlaceholder={
            <div className="relative w-72 h-72 flex justify-center items-center">
              <AsyncLottie path="/lotties/filipe2.json" className="w-full h-full" />
            </div>
          }
        />

        {/* 3. Stay motivated */}
        <FeatureRow
          title={t('features.3.title')}
          description={t('features.3.desc')}
          imagePlaceholder={
            <div className="relative w-80 h-72 flex justify-center items-center">
              <AsyncLottie path="/lotties/filipe3.json" className="w-full h-full" />
            </div>
          }
        />

        {/* 4. Personalized */}
        <FeatureRow
          reverse
          title={t('features.4.title')}
          description={t('features.4.desc')}
          imagePlaceholder={
            <div className="relative w-72 h-72 flex justify-center items-center">
              <AsyncLottie path="/lotties/filipe4.json" className="w-full h-full" />
            </div>
          }
        />
      </div>

      {/* Cloud / Devices Ecosystem - Premium "Brutal" 3D Presentation */}
      <section id="eco-section" className="bg-[#eff8ff] min-h-[100vh] w-full flex flex-col items-center justify-center py-32 px-6 relative overflow-hidden">
        {/* Dynamic Studio Background Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle Grid texture for premium feel */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          {/* Glowing Animated Orbs for "Juice" */}
          <motion.div animate={{ scale: [1, 1.1, 1], x: [0, 40, 0], y: [0, -30, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[#1cb0f6]/10 rounded-full blur-[100px]" />
          <motion.div animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-[20%] -right-[10%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-[#58cc02]/10 rounded-full blur-[100px]" />
          <motion.div animate={{ scale: [1, 1.15, 1], y: [0, -40, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[30vw] max-w-[1000px] max-h-[500px] bg-[#ff4b4b]/10 rounded-full blur-[120px]" />
        </div>

        {/* Title Component */}
        <div className="relative z-20 mb-20 md:mb-28 text-center flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-[#2b2b2b] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-black tracking-tighter drop-shadow-xl max-w-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#202020] via-[#3a3a3a] to-[#202020]">
              {t('eco.title')}
            </h2>
            <div className="mt-6 w-24 h-2 bg-gradient-to-r from-[#1cb0f6] to-[#58cc02] rounded-full mx-auto shadow-md"></div>
          </motion.div>
        </div>

        {/* Floating 3D Devices Container */}
        <div className="flex flex-col xl:flex-row items-center justify-center gap-20 sm:gap-24 xl:gap-6 w-full max-w-[1500px] relative z-20 mb-32 perspective-[2500px]">
          
          {/* Left iPhone - Dramatic 3D Rotation */}
          <motion.div 
            animate={{ y: [0, -25, 0], rotateY: [15, 12, 15], rotateX: [5, 8, 5] }} 
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="group w-[200px] sm:w-[240px] lg:w-[280px] h-[400px] sm:h-[480px] lg:h-[580px] bg-[#000] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] border-y-[4px] lg:border-y-[6px] border-x-[3px] lg:border-x-[4px] border-[#333] shadow-[-20px_40px_80px_rgba(0,0,0,0.25)] flex flex-col items-center relative xl:translate-y-12 flex-shrink-0 overflow-visible transform-gpu"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Phone Metal Frame Edge Base */}
            <div className="absolute -inset-[4px] sm:-inset-[6px] lg:-inset-[8px] bg-gradient-to-br from-[#dfdfdf] via-[#a8a8a8] to-[#f4f4f4] rounded-[2.2rem] sm:rounded-[3rem] lg:rounded-[4rem] -z-10 shadow-[inset_0_0_10px_rgba(255,255,255,0.5)]"></div>
            
            {/* Hardware buttons */}
            <div className="absolute top-[80px] sm:top-[100px] lg:top-[120px] -left-[4px] lg:-left-[10px] w-[4px] lg:w-[6px] h-[20px] sm:h-[25px] lg:h-[30px] bg-gradient-to-r from-[#888] to-[#bbb] rounded-l-md -z-20"></div>
            <div className="absolute top-[120px] sm:top-[140px] lg:top-[170px] -left-[4px] lg:-left-[10px] w-[4px] lg:w-[6px] h-[40px] sm:h-[50px] lg:h-[60px] bg-gradient-to-r from-[#888] to-[#bbb] rounded-l-md -z-20"></div>
            <div className="absolute top-[170px] sm:top-[200px] lg:top-[240px] -left-[4px] lg:-left-[10px] w-[4px] lg:w-[6px] h-[40px] sm:h-[50px] lg:h-[60px] bg-gradient-to-r from-[#888] to-[#bbb] rounded-l-md -z-20"></div>
            <div className="absolute top-[130px] sm:top-[150px] lg:top-[180px] -right-[4px] lg:-right-[10px] w-[4px] lg:w-[6px] h-[50px] sm:h-[60px] lg:h-[80px] bg-gradient-to-l from-[#888] to-[#bbb] rounded-r-md -z-20"></div>

            {/* Screen Content Wrapper */}
            <div className="w-full h-full rounded-[1.8rem] sm:rounded-[2.2rem] lg:rounded-[3.1rem] overflow-hidden relative bg-black shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border-[3px] lg:border-[6px] border-black">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-1 lg:top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 lg:w-24 h-4 sm:h-5 lg:h-7 bg-black rounded-full z-30 flex items-center justify-end px-2 lg:px-3">
                 <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 rounded-full bg-[#111] border border-gray-800 shadow-[inset_0_0_2px_rgba(255,255,255,0.3)]"></div>
              </div> 
              
              {/* Device Screen Image */}
              <img 
                src="/images/print-phone-1.png" 
                alt="App Screen 1" 
                className="w-full h-full object-cover relative z-10 transition-transform duration-500 scale-[1.01]"
                onError={(e) => { e.currentTarget.style.opacity = '0'; }} 
              />
              
              {/* Glass Glare Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/30 z-20 pointer-events-none mix-blend-overlay opacity-70 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </motion.div>

          {/* Center Premium Desktop Browser */}
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
            className="group w-[90%] sm:w-[95%] max-w-[850px] h-[260px] sm:h-[350px] md:h-[450px] lg:h-[520px] bg-black rounded-xl sm:rounded-2xl lg:rounded-3xl border-t-[4px] sm:border-t-[6px] lg:border-t-[8px] border-x-[4px] sm:border-x-[6px] lg:border-x-[8px] border-b-[12px] sm:border-b-[16px] lg:border-b-[24px] border-[#111] shadow-[0_30px_50px_rgba(0,0,0,0.35),0_10px_20px_rgba(0,0,0,0.2)] lg:shadow-[0_60px_100px_rgba(0,0,0,0.35),0_10px_20px_rgba(0,0,0,0.2)] flex flex-col relative z-30 xl:scale-110 transform-gpu"
          >
            {/* Metallic iMac Chin detail */}
            <div className="absolute -bottom-[12px] sm:-bottom-[16px] lg:-bottom-[24px] left-0 w-full h-[12px] sm:h-[16px] lg:h-[24px] bg-gradient-to-r from-[#d1d5db] via-[#f3f4f6] to-[#d1d5db] rounded-b-lg sm:rounded-b-xl lg:rounded-b-[1.25rem] overflow-hidden">
               <div className="w-full h-full bg-[linear-gradient(90deg,transparent_40%,rgba(255,255,255,0.8)_50%,transparent_60%)]"></div>
            </div>
            
            {/* Desktop Stand (behind) */}
            <div className="absolute -bottom-[40px] sm:-bottom-[60px] lg:-bottom-[90px] left-1/2 -translate-x-1/2 w-[80px] sm:w-[120px] lg:w-[160px] h-[60px] sm:h-[90px] lg:h-[120px] bg-gradient-to-b from-[#b0b0b0] to-[#e5e5e5] rounded-t-sm rounded-b-lg lg:rounded-b-xl -z-10 shadow-[0_10px_20px_rgba(0,0,0,0.2)] lg:shadow-[0_20px_30px_rgba(0,0,0,0.2)]" style={{ transform: 'perspective(500px) rotateX(20deg)' }}>
               {/* Stand Foot hole */}
               <div className="absolute bottom-2 sm:bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 w-8 sm:w-12 lg:w-16 h-3 sm:h-4 lg:h-8 bg-[#888] rounded-full shadow-inner"></div>
            </div>

            {/* Inner Screen Bezel */}
            <div className="w-full h-full flex flex-col relative overflow-hidden bg-white/5">
              {/* Browser Top Bar (macOS style glassmorphism) */}
              <div className="backdrop-blur-xl bg-white/80 h-6 sm:h-8 lg:h-10 w-full flex items-center px-2 sm:px-3 lg:px-4 gap-1.5 lg:gap-2 border-b border-white/20 relative z-20">
                <div className="w-1.5 sm:w-2 lg:w-3 h-1.5 sm:h-2 lg:h-3 rounded-full bg-[#ff5f56] shadow-sm border border-red-500/20"></div>
                <div className="w-1.5 sm:w-2 lg:w-3 h-1.5 sm:h-2 lg:h-3 rounded-full bg-[#ffbd2e] shadow-sm border border-orange-500/20"></div>
                <div className="w-1.5 sm:w-2 lg:w-3 h-1.5 sm:h-2 lg:h-3 rounded-full bg-[#27c93f] shadow-sm border border-green-500/20"></div>
                <div className="mx-auto bg-black/5 rounded-full lg:rounded-md h-3 sm:h-4 lg:h-6 w-1/3 shadow-inner flex items-center justify-center px-1 lg:px-2">
                   <div className="w-3/4 h-1 lg:h-2 bg-black/10 rounded-full"></div>
                </div>
              </div>
              
              {/* Browser Desktop Image Component */}
              <div className="flex-1 bg-[#1a1a1a] relative overflow-hidden">
                <img 
                  src="/images/print-desktop.png" 
                  alt="Desktop Web Interface" 
                  className="w-full h-full object-cover object-top relative z-10 scale-[1.005]"
                  onError={(e) => { e.currentTarget.style.opacity = '0'; }} 
                />
                {/* Huge Screen Glare */}
                <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-bl from-white/20 to-transparent z-20 pointer-events-none transform -translate-y-1/4 translate-x-1/4 rotate-12 mix-blend-screen opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
              </div>
            </div>
          </motion.div>

          {/* Right iPhone - Dramatic Opposite Rotation */}
          <motion.div 
            animate={{ y: [0, -25, 0], rotateY: [-15, -12, -15], rotateX: [5, 8, 5] }} 
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="group w-[200px] sm:w-[240px] lg:w-[280px] h-[400px] sm:h-[480px] lg:h-[580px] bg-[#000] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] border-y-[4px] lg:border-y-[6px] border-x-[3px] lg:border-x-[4px] border-[#333] shadow-[20px_40px_80px_rgba(0,0,0,0.25)] flex flex-col items-center relative xl:translate-y-12 flex-shrink-0 overflow-visible transform-gpu"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Phone Metal Frame Edge Base */}
            <div className="absolute -inset-[4px] sm:-inset-[6px] lg:-inset-[8px] bg-gradient-to-bl from-[#dfdfdf] via-[#a8a8a8] to-[#f4f4f4] rounded-[2.2rem] sm:rounded-[3rem] lg:rounded-[4rem] -z-10 shadow-[inset_0_0_10px_rgba(255,255,255,0.5)]"></div>
            
            {/* Hardware buttons */}
            <div className="absolute top-[80px] sm:top-[100px] lg:top-[120px] -right-[4px] lg:-right-[10px] w-[4px] lg:w-[6px] h-[20px] sm:h-[25px] lg:h-[30px] bg-gradient-to-l from-[#888] to-[#bbb] rounded-r-md -z-20"></div>
            <div className="absolute top-[120px] sm:top-[140px] lg:top-[170px] -right-[4px] lg:-right-[10px] w-[4px] lg:w-[6px] h-[40px] sm:h-[50px] lg:h-[60px] bg-gradient-to-l from-[#888] to-[#bbb] rounded-r-md -z-20"></div>
            <div className="absolute top-[170px] sm:top-[200px] lg:top-[240px] -right-[4px] lg:-right-[10px] w-[4px] lg:w-[6px] h-[40px] sm:h-[50px] lg:h-[60px] bg-gradient-to-l from-[#888] to-[#bbb] rounded-r-md -z-20"></div>
            <div className="absolute top-[130px] sm:top-[150px] lg:top-[180px] -left-[4px] lg:-left-[10px] w-[4px] lg:w-[6px] h-[50px] sm:h-[60px] lg:h-[80px] bg-gradient-to-r from-[#888] to-[#bbb] rounded-l-md -z-20"></div>

            {/* Screen Content Wrapper */}
            <div className="w-full h-full rounded-[1.8rem] sm:rounded-[2.2rem] lg:rounded-[3.1rem] overflow-hidden relative bg-black shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border-[3px] lg:border-[6px] border-black">
               {/* Dynamic Island / Notch */}
               <div className="absolute top-1 lg:top-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 lg:w-24 h-4 sm:h-5 lg:h-7 bg-black rounded-full z-30 flex items-center justify-end px-2 lg:px-3">
                 <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 rounded-full bg-[#111] border border-gray-800 shadow-[inset_0_0_2px_rgba(255,255,255,0.3)]"></div>
              </div> 
              
              {/* Device Screen Image */}
              <img 
                src="/images/print-phone-2.png" 
                alt="App Screen 2" 
                className="w-full h-full object-cover relative z-10 transition-transform duration-500 scale-[1.01]"
                onError={(e) => { e.currentTarget.style.opacity = '0'; }} 
              />
              
              {/* Glass Glare Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tl from-white/0 via-white/5 to-white/30 z-20 pointer-events-none mix-blend-overlay opacity-70 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </motion.div>

        </div>

        {/* Enhanced App Store Buttons with glowing aura */}
        <div className="flex flex-col sm:flex-row gap-6 relative z-30 mt-10">
          {/* Animated Glow Behind Buttons */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1cb0f6] to-[#58cc02] blur-2xl opacity-20 -z-10 rounded-[3rem]"></div>
          
          <a href="//itunes.apple.com/br/app/duolingo-learn-spanish-french/id570060128?mt=8&at=1010lwpr" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 bg-[#0a0a0a] text-white px-8 py-3.5 rounded-[1.25rem] shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all border border-[#222] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px] relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"><title>badge-app-store</title><path d="M26.9039 19.1188C26.9363 16.611 28.2528 14.2945 30.3922 12.981C29.0364 11.0473 26.8469 9.86522 24.4843 9.7914C21.9986 9.53084 19.5888 11.2768 18.3221 11.2768C17.0309 11.2768 15.0807 9.81727 12.9806 9.86042C10.2174 9.94957 7.7038 11.4804 6.35946 13.8929C3.49663 18.8428 5.63205 26.1174 8.3744 30.1184C9.74645 32.0776 11.35 34.2661 13.4482 34.1885C15.5014 34.1035 16.2682 32.881 18.7466 32.881C21.202 32.881 21.9215 34.1885 24.0623 34.1392C26.2655 34.1035 27.6536 32.1713 28.9775 30.1935C29.9633 28.7975 30.7219 27.2546 31.2252 25.622C28.6084 24.5167 26.907 21.9562 26.9039 19.1188V19.1188Z" fill="currentColor"></path><path d="M22.8604 7.16005C24.0617 5.71991 24.6535 3.86887 24.5102 2C22.6749 2.1925 20.9796 3.06846 19.7621 4.45334C18.5599 5.81971 17.9508 7.60728 18.0691 9.42235C19.929 9.44147 21.6949 8.60765 22.8604 7.16005V7.16005Z" fill="currentColor"></path></svg>
            <div className="text-left flex flex-col relative z-10">
              <span className="text-[10px] font-semibold text-[#888] leading-tight group-hover:text-[#aaa] uppercase tracking-wide">Baixar na</span>
              <span className="text-xl font-bold leading-none tracking-tight">App Store</span>
            </div>
          </a>
          <a href="//play.google.com/store/apps/details?hl=pt&id=com.duolingo&referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsplash" target="_blank" rel="noreferrer" className="group flex items-center justify-center gap-3 bg-[#0a0a0a] text-white px-8 py-3.5 rounded-[1.25rem] shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all border border-[#222] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px] relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"><title>badge-play-store</title><path fillRule="evenodd" clipRule="evenodd" d="M3.80942 4.3203C3.80942 4.09554 3.82731 3.88521 3.86151 3.69016L17.8617 18.4703L3.83906 33.2741C3.81952 33.1218 3.80942 32.961 3.80942 32.792V4.3203ZM5.35237 35.0876C5.86758 35.1708 6.47838 35.0454 7.13188 34.6805L24.1811 25.1417L19.4773 20.1758L5.35237 35.0876ZM21.0928 18.4703L26.2937 23.9609L32.63 20.4164C34.4567 19.393 34.4567 17.7194 32.63 16.6985L26.1861 13.0933L21.0928 18.4703ZM24.0742 11.9117L7.13188 2.43299C6.60625 2.13818 6.10808 1.99915 5.66613 1.99915C5.60892 1.99915 5.55264 2.00146 5.49734 2.00606L19.4773 16.7648L24.0742 11.9117Z" fill="currentColor"></path></svg>
            <div className="text-left flex flex-col relative z-10">
              <span className="text-[10px] font-semibold text-[#888] leading-tight group-hover:text-[#aaa] uppercase tracking-wide">Disponível no</span>
              <span className="text-xl font-bold leading-none tracking-tight">Google Play</span>
            </div>
          </a>
        </div>
      </section>

      {/* Super Duoclone Section */}
      <section className="bg-[#1c002b] py-24 px-6 relative overflow-hidden flex justify-center">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#9b51e0] via-[#ff4b4b] to-[#1cb0f6] opacity-30 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">
          {/* Super Mascot Placeholder */}
          <div className="flex-1 flex justify-center">
            <div className="relative drop-shadow-2xl w-64 h-64">
              <AsyncLottie path="/lotties/filipe7.json" className="w-full h-full" />
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-8">
              POWER UP WITH<br />SUPER MYDUOLINGO
            </h2>
            <Button3D variant="outline" className="bg-white text-[#1c002b] border-white shadow-[0_4px_0_0_#999] hover:bg-gray-100 py-3.5 px-8 max-w-[300px] w-full">
              {t('super.cta')}
            </Button3D>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <div className="py-20 pb-0">
        {/* Test */}
        <FeatureRow
          title={t('test.title')}
          description={t('test.desc')}
          imagePlaceholder={
            <div className="relative w-64 h-64 flex items-center justify-center">
              <AsyncLottie path="/lotties/filipe8.json" className="w-full h-full" />
            </div>
          }
        >
          <Button3D variant="outline" className="border-gray-200 text-[#1cb0f6] shadow-[0_4px_0_0_#e5e5e5] w-full sm:w-auto px-8">
            {t('test.cta')}
          </Button3D>
        </FeatureRow>

        {/* Schools */}
        <FeatureRow
          reverse
          title={t('schools.title')}
          description={t('schools.desc')}
          imagePlaceholder={
            <div className="relative w-64 h-64">
              <AsyncLottie path="/lotties/filipe9.json" className="w-full h-full" />
            </div>
          }
        >
          <Button3D variant="outline" className="border-gray-200 text-[#1cb0f6] shadow-[0_4px_0_0_#e5e5e5] w-full sm:w-auto px-8">
            {t('schools.cta')}
          </Button3D>
        </FeatureRow>

        {/* ABC */}
        <FeatureRow
          title={t('abc.title')}
          description={t('abc.desc')}
          imagePlaceholder={
            <div className="relative w-72 h-64 flex items-end justify-center">
              <AsyncLottie path="/lotties/filipe10.json" className="w-full h-full" />
            </div>
          }
        >
          <Button3D variant="outline" className="border-gray-200 text-[#1cb0f6] shadow-[0_4px_0_0_#e5e5e5] w-full sm:w-auto px-8">
            {t('abc.cta')}
          </Button3D>
        </FeatureRow>
      </div>

      {/* Massive Pre-Footer CTA */}
      <section className="bg-white py-24 pb-32 text-center relative overflow-hidden">
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute -top-10 left-10 text-[80px] opacity-10">☁️</motion.div>
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute top-20 right-20 text-[60px] opacity-10">☁️</motion.div>

        <div className="max-w-2xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#58cc02] tracking-tight mb-8">
            {t('cta.title')}
          </h2>
          <div className="mb-12 w-full flex justify-center">
            <Button3D variant="primary" className="py-4 px-12 text-[15px] max-w-[320px] w-full bg-[#58cc02] hover:bg-[#46a302]">
              {t('hero.start')}
            </Button3D>
          </div>
          <div className="w-64 h-64">
            <AsyncLottie path="/lotties/filipe11.json" className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Giant Floor Decoration before footer */}
      <div className="w-full relative z-0 -mt-[25%] md:-mt-[30%] lg:-mt-[35%] xl:-mt-[40%] 2xl:-mt-[45%] pointer-events-none overflow-hidden leading-none flex items-end min-h-[100px]">
        <AsyncLottie path="/lotties/filipe12.json" className="w-full h-auto translate-y-[2px]" priority={true} />
      </div>

      {/* Footer Extensive */}
      <footer className="bg-[#58cc02] pt-8 pb-16 px-6 md:px-12 text-white/90 font-bold text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-black uppercase text-base mb-2">Quem somos</h3>
            <a href="#" className="hover:text-white transition-colors">Cursos</a>
            <a href="#" className="hover:text-white transition-colors">Missão</a>
            <a href="#" className="hover:text-white transition-colors">Método</a>
            <a href="#" className="hover:text-white transition-colors">Eficácia</a>
            <a href="#" className="hover:text-white transition-colors">Equipe</a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-black uppercase text-base mb-2">Produtos</h3>
            <a href="#" className="hover:text-white transition-colors">MyDuolingo</a>
            <a href="#" className="hover:text-white transition-colors">Schools</a>
            <a href="#" className="hover:text-white transition-colors">Test</a>
            <a href="#" className="hover:text-white transition-colors">Podcast</a>
            <a href="#" className="hover:text-white transition-colors">Business</a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-black uppercase text-base mb-2">Aplicativos</h3>
            <a href="#" className="hover:text-white transition-colors">Android</a>
            <a href="#" className="hover:text-white transition-colors">iOS</a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-black uppercase text-base mb-2">Suporte</h3>
            <a href="#" className="hover:text-white transition-colors">Dúvidas</a>
            <a href="#" className="hover:text-white transition-colors">Fórum</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-black uppercase text-base mb-2">Termos e privacidade</h3>
            <a href="#" className="hover:text-white transition-colors">Diretrizes</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-black uppercase text-base mb-2">Social</h3>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 font-bold text-xs uppercase tracking-widest text-center md:text-left">
            {t('footer.rights')}
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-white/60 text-[11px] font-bold uppercase tracking-widest">
            <span>Português</span>
            <span>English</span>
            <span>Español</span>
            <span>Français</span>
            <span>Deutsch</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
