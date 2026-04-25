"use client";

import { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { Globe, Monitor, Smartphone, LayoutDashboard, ChevronDown } from 'lucide-react';
import { useTranslation } from './hooks/useTranslation';
import { Button3D } from './components/Button3D';
import { FeatureRow } from './components/FeatureRow';
import { LanguageBanner } from './components/LanguageBanner';
import { MultiPlatformSection } from './components/MultiPlatformSection';
import { SuperSection } from './components/SuperSection';
import { LanguageDropdown } from './components/LanguageDropdown';

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
  const { t, lang, setLang } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#3c3c3c] overflow-x-hidden">
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
          <LanguageDropdown currentLang={lang} onSelect={setLang} />
          <button className="hidden sm:block px-6 py-2.5 rounded-2xl border-[2px] border-[#e5e5e5] text-[#afafaf] hover:bg-gray-50 uppercase font-black tracking-widest text-[13px] shadow-[0_4px_0_0_#e5e5e5] active:shadow-none active:translate-y-[4px] transition-all">
            {t('header.login')}
          </button>
        </div>
      </header>

      {/* Hero Section Container */}
      <div className="flex flex-col md:min-h-[calc(100vh-80px)]">
        <main className="flex-1 max-w-[1000px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 items-center py-12 md:py-0">
        {/* Visual / Floating Group */}
        <div className="relative flex justify-center items-center w-full order-1 md:order-none min-h-[300px] md:min-h-[350px]">
          <AsyncLottie path="/lotties/filipe.json" className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] h-auto z-10" priority={true} />
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
        <div className="border-y-2 border-gray-100 overflow-x-hidden hidden md:block">
          <div className="max-w-6xl mx-auto flex items-center px-6">
            <button className="p-4 text-gray-300 hover:text-gray-400">&lt;</button>
            <LanguageBanner onSelectLanguage={setLang} />
            <button className="p-4 text-gray-300 hover:text-gray-400">&gt;</button>
          </div>
        </div>
      </div>

      {/* Mobile Language Bar (Optional, visible on scroll) */}
      <div className="border-y-2 border-gray-100 overflow-x-hidden md:hidden">
        <div className="max-w-6xl mx-auto flex items-center px-4">
          <LanguageBanner onSelectLanguage={setLang} />
        </div>
      </div>

      {/* Zig-Zag Features Container */}
      <div className="my-16">
        {/* 1. Free, Fun, Effective */}
        <FeatureRow
          title={t('features.1.title')}
          description={t('features.1.desc')}
          imagePlaceholder={
            <div className="relative w-full max-w-[256px] h-64 sm:h-80 flex justify-center items-center">
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
            <div className="relative w-full max-w-[288px] h-64 sm:h-72 flex justify-center items-center">
              <AsyncLottie path="/lotties/filipe2.json" className="w-full h-full" />
            </div>
          }
        />

        {/* 3. Stay motivated */}
        <FeatureRow
          title={t('features.3.title')}
          description={t('features.3.desc')}
          imagePlaceholder={
            <div className="relative w-full max-w-[320px] h-64 sm:h-72 flex justify-center items-center">
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
            <div className="relative w-full max-w-[288px] h-64 sm:h-72 flex justify-center items-center">
              <AsyncLottie path="/lotties/filipe4.json" className="w-full h-full" />
            </div>
          }
        />
      </div>

      <MultiPlatformSection />

      <SuperSection>
        <AsyncLottie path="/lotties/filipe7.json" className="w-full h-full" />
      </SuperSection>

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

      {/* Massive Pre-Footer CTA with integrated Floor Decoration */}
      <section className="bg-white pt-24 pb-0 text-center relative overflow-hidden flex flex-col items-center">
        {/* Decorative Clouds */}
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute -top-10 left-10 text-[80px] opacity-10">☁️</motion.div>
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute top-20 right-20 text-[60px] opacity-10">☁️</motion.div>

        <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center mb-0">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#58cc02] tracking-tight mb-4">
            Aprenda um idioma com o MyDuolingo
          </h2>
          <div className="w-full flex justify-center">
            <Button3D variant="primary" className="py-4 px-12 text-[15px] max-w-[320px] w-full bg-[#58cc02] hover:bg-[#46a302]">
              COMEÇAR AGORA
            </Button3D>
          </div>
        </div>

        {/* Giant Floor Decoration - Balanced: Space on mobile, aggressive on desktop */}
        <div className="w-full relative z-0 pointer-events-none leading-none mt-4 md:-mt-36">
          <AsyncLottie path="/lotties/filipe12.json" className="w-full h-auto" priority={true} />
        </div>
      </section>

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
