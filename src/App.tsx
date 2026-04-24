import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe, Monitor, Smartphone, LayoutDashboard, ChevronDown } from 'lucide-react';
import { useTranslation } from './hooks/useTranslation';
import { Button3D } from './components/Button3D';
import { FeatureRow } from './components/FeatureRow';
import Lottie from 'lottie-react';

function AsyncLottie({ path, className }: { path: string; className?: string }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(path).then((r) => r.json()).then(setData).catch(console.error);
  }, [path]);
  if (!data) return null;
  return <Lottie animationData={data} className={className} loop={true} />;
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
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} className="absolute w-[350px] h-[350px] border-dashed border-2 border-gray-100 rounded-full -z-10" />
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-[#58cc02] rounded-[3rem] rotate-6 flex items-center justify-center shadow-[0_12px_0_0_#58a700] relative">
              <Globe className="w-32 h-32 text-white/50 -rotate-6" />
              {/* Floating avatar/faces placeholder */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-lg -rotate-12">👩🏽</div>
              <div className="absolute bottom-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg rotate-12">👨🏻‍🦰</div>
              <div className="absolute -top-6 right-10 w-10 h-10 bg-[#1cb0f6] rounded-full flex items-center justify-center text-white shadow-lg">?</div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 text-center md:text-left items-center md:items-start pl-0 md:pl-8">
          <h1 className="text-3xl sm:text-4xl md:text-[40px] leading-[1.2] font-extrabold text-[#4b4b4b] tracking-tight capitalize">
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
              {/* Phone Mockup */}
              <div className="w-52 h-full border-4 border-gray-800 rounded-[2.5rem] bg-white flex flex-col overflow-hidden shadow-2xl relative z-10">
                <div className="h-12 bg-gray-100 flex justify-center items-center border-b-2 border-gray-200">
                  <div className="w-16 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex-1 p-4 flex flex-col gap-3">
                   <div className="w-full h-20 bg-blue-100 rounded-xl"></div>
                   <div className="w-full h-12 bg-green-100 rounded-xl"></div>
                   <div className="w-full h-12 bg-orange-100 rounded-xl"></div>
                </div>
              </div>
              {/* Mascot decoration */}
              <motion.div animate={{ y: [0, -8, 0], x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -right-8 -top-4 w-28 h-28 bg-[#58cc02] rounded-full shadow-lg border-4 border-white flex justify-center items-center z-20">
                <div className="text-white font-black text-3xl">D!</div>
              </motion.div>
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
              <AsyncLottie path="/tedy.json" className="w-80 h-80 z-20" />
              <motion.div animate={{ rotate: [0, 2, -2, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute w-56 h-56 bg-[#cda9ff] rounded-[3rem] shadow-xl overflow-hidden flex items-end">
                <motion.div animate={{ height: ['40%', '45%', '40%'] }} transition={{ repeat: Infinity, duration: 2 }} className="w-full bg-[#1cb0f6] opacity-80"></motion.div>
              </motion.div>
            </div>
          }
        />

        {/* 3. Stay motivated */}
        <FeatureRow
          title={t('features.3.title')}
          description={t('features.3.desc')}
          imagePlaceholder={
            <div className="relative w-80 h-72 flex justify-center items-center">
              <AsyncLottie path="/star_angry.json" className="w-80 h-80 z-20 drop-shadow-2xl translate-y-[-20px]" />
              <div className="w-64 h-24 bg-[#ffc800] rounded-2xl shadow-[0_8px_0_0_#d1a300] -rotate-6 absolute bottom-10 z-0"></div>
              <div className="w-64 h-24 bg-[#ff4b4b] rounded-2xl shadow-[0_8px_0_0_#cc3b3b] rotate-6 absolute top-10 z-0"></div>
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
              <div className="absolute w-56 h-56 border-8 border-[#e5e5e5] rounded-full"></div>
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="absolute w-40 h-40 border-8 border-dashed border-[#1cb0f6] rounded-full"></motion.div>
              <div className="w-24 h-24 bg-white rounded-full shadow-lg z-10 flex justify-center items-center">
                <span className="text-5xl">🧠</span>
              </div>
            </div>
          }
        />
      </div>

      {/* Cloud / Devices Ecosystem */}
      <section id="eco-section" className="py-24 px-6 md:px-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 md:w-1/2">
          <h2 className="text-[#4b4b4b] text-4xl md:text-5xl font-extrabold tracking-tight capitalize">
            {t('eco.title')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
             <a href="//itunes.apple.com/br/app/duolingo-learn-spanish-french/id570060128?mt=8&at=1010lwpr" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform">
               <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><title>badge-app-store</title><path d="M26.9039 19.1188C26.9363 16.611 28.2528 14.2945 30.3922 12.981C29.0364 11.0473 26.8469 9.86522 24.4843 9.7914C21.9986 9.53084 19.5888 11.2768 18.3221 11.2768C17.0309 11.2768 15.0807 9.81727 12.9806 9.86042C10.2174 9.94957 7.7038 11.4804 6.35946 13.8929C3.49663 18.8428 5.63205 26.1174 8.3744 30.1184C9.74645 32.0776 11.35 34.2661 13.4482 34.1885C15.5014 34.1035 16.2682 32.881 18.7466 32.881C21.202 32.881 21.9215 34.1885 24.0623 34.1392C26.2655 34.1035 27.6536 32.1713 28.9775 30.1935C29.9633 28.7975 30.7219 27.2546 31.2252 25.622C28.6084 24.5167 26.907 21.9562 26.9039 19.1188V19.1188Z" fill="currentColor"></path><path d="M22.8604 7.16005C24.0617 5.71991 24.6535 3.86887 24.5102 2C22.6749 2.1925 20.9796 3.06846 19.7621 4.45334C18.5599 5.81971 17.9508 7.60728 18.0691 9.42235C19.929 9.44147 21.6949 8.60765 22.8604 7.16005V7.16005Z" fill="currentColor"></path></svg>
               <div className="text-left flex flex-col">
                 <span className="text-[10px] uppercase font-bold text-gray-300 leading-tight">Baixar na</span>
                 <span className="text-xl font-bold leading-none">App Store</span>
               </div>
             </a>
             <a href="//play.google.com/store/apps/details?hl=pt&id=com.duolingo&referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsplash" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform">
               <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><title>badge-play-store</title><path fillRule="evenodd" clipRule="evenodd" d="M3.80942 4.3203C3.80942 4.09554 3.82731 3.88521 3.86151 3.69016L17.8617 18.4703L3.83906 33.2741C3.81952 33.1218 3.80942 32.961 3.80942 32.792V4.3203ZM5.35237 35.0876C5.86758 35.1708 6.47838 35.0454 7.13188 34.6805L24.1811 25.1417L19.4773 20.1758L5.35237 35.0876ZM21.0928 18.4703L26.2937 23.9609L32.63 20.4164C34.4567 19.393 34.4567 17.7194 32.63 16.6985L26.1861 13.0933L21.0928 18.4703ZM24.0742 11.9117L7.13188 2.43299C6.60625 2.13818 6.10808 1.99915 5.66613 1.99915C5.60892 1.99915 5.55264 2.00146 5.49734 2.00606L19.4773 16.7648L24.0742 11.9117Z" fill="currentColor"></path></svg>
               <div className="text-left flex flex-col">
                 <span className="text-[10px] uppercase font-bold text-gray-300 leading-tight">Disponível no</span>
                 <span className="text-xl font-bold leading-none">Google Play</span>
               </div>
             </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end items-center">
           <img src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/229d5f88cc9df2eb0b68f39466500911.svg" className="w-full max-w-[500px]" alt="Aprenda onde e quando quiser" />
        </div>
      </section>

      {/* Super Duoclone Section */}
      <section className="bg-[#1c002b] py-24 px-6 relative overflow-hidden flex justify-center">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#9b51e0] via-[#ff4b4b] to-[#1cb0f6] opacity-30 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">
          {/* Super Mascot Placeholder */}
          <div className="flex-1 flex justify-center">
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="relative drop-shadow-2xl">
              <img src="/raio_duolingo.png" alt="Super Ray" className="w-64 h-64 object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-8">
              POWER UP WITH<br/>SUPER MYDUOLINGO
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
            <div className="relative w-64 h-64 bg-white border-8 border-gray-100 rounded-[2rem] shadow-xl flex items-center justify-center rotate-3">
              <div className="absolute top-4 right-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white shadow-md">✓</div>
              <div className="text-gray-200">
                <LayoutDashboard className="w-24 h-24" />
              </div>
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
              <div className="absolute inset-0 bg-[#ffc800] rounded-[2rem] shadow-[0_10px_0_0_#d1a300] -rotate-6"></div>
              <div className="absolute inset-0 bg-white rounded-[2rem] border-4 border-gray-100 flex items-center justify-center rotate-3 shadow-lg">
                <span className="text-6xl">✏️</span>
              </div>
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
              <div className="w-20 h-20 bg-[#ff4b4b] rounded-xl shadow-[0_6px_0_0_#cc3b3b] flex items-center justify-center text-white text-4xl font-black -rotate-12 absolute left-4 bottom-0 z-20">A</div>
              <div className="w-24 h-24 bg-[#1cb0f6] rounded-xl shadow-[0_6px_0_0_#1899d6] flex items-center justify-center text-white text-5xl font-black rotate-6 absolute z-10 bottom-4">B</div>
              <div className="w-16 h-16 bg-[#58cc02] rounded-xl shadow-[0_6px_0_0_#46a302] flex items-center justify-center text-white text-3xl font-black rotate-12 absolute right-8 bottom-0 z-20">C</div>
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#58cc02] tracking-tight mb-8 capitalize">
            {t('cta.title')}
          </h2>
          <Button3D variant="primary" className="py-4 px-12 text-[15px] max-w-[320px] w-full bg-[#58cc02] hover:bg-[#46a302]">
            {t('hero.start')}
          </Button3D>
        </div>
      </section>

      {/* Giant Floor Decoration before footer */}
      <div className="w-full relative z-0 -mt-[25%] md:-mt-[30%] lg:-mt-[35%] xl:-mt-[40%] 2xl:-mt-[45%] pointer-events-none overflow-hidden leading-none flex items-end">
        <img src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/890eb76de9a395b182c1c28322721405.svg" className="w-full h-auto translate-y-[2px]" alt="footer decoration" />
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
