"use client";

import { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button3D } from '@/components/Button3D';
import { FeatureRow } from '@/components/FeatureRow';
import { LanguageBanner } from '@/components/LanguageBanner';
import { MultiPlatformSection } from '@/components/MultiPlatformSection';
import { SuperSection } from '@/components/SuperSection';
import { AIModal } from '@/components/AIModal';
import { GamesModal } from '@/components/GamesModal';
import { ChatModal } from '@/components/ChatModal';

import { LazyLottie } from '@/components/LazyLottie';

export default function LandingPage() {
  const { t, setLang } = useTranslation();
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isGamesModalOpen, setIsGamesModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-[calc(100vh-80px)] flex flex-col w-full overflow-hidden">
        <main className="flex-1 flex items-center justify-center">
          <div className="max-w-[1000px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 items-center">
            {/* Visual Group */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="relative flex justify-center items-center w-full order-1 md:order-0 min-h-[300px] md:min-h-[350px]"
            >
              <LazyLottie animationPath="/lotties/filipe.json" className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] h-auto z-10" priority={true} />
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-8 text-center md:text-left items-center md:items-start pl-0 md:pl-8"
            >
              <h1 className="text-3xl sm:text-4xl md:text-[40px] leading-[1.2] font-extrabold text-[#4b4b4b] tracking-tight">
                {t('hero.title').split(/(grátis|free)/i).map((part, i) =>
                  /^(grátis|free)$/i.test(part) ? <span key={i} className="text-[#58cc02] px-1">{part}</span> : part
                )}
              </h1>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
                  }
                }}
                className="flex flex-col gap-3 w-full max-w-[340px] mt-2"
              >
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                  <Button3D variant="primary" fullWidth className="py-3.5 text-[15px]">
                    {t('hero.start')}
                  </Button3D>
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                  <Button3D variant="outline" fullWidth className="py-3.5 text-[15px] border-[#e5e5e5] text-[#1cb0f6] shadow-[0_4px_0_0_#e5e5e5]">
                    {t('hero.account')}
                  </Button3D>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </main>

        {/* Language Bar */}
        <div className="w-full border-t-2 border-gray-100 bg-white z-10">
          <div className="max-w-6xl mx-auto flex items-center px-6">
            <LanguageBanner onSelectLanguage={setLang} />
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="my-16">
        <FeatureRow
          title={t('features.1.title')}
          description={t('features.1.desc')}
          imagePlaceholder={
            <div className="relative w-full max-w-[256px] h-64 sm:h-80 flex justify-center items-center">
              <LazyLottie animationPath="/lotties/filipe1.json" className="w-full h-full" />
            </div>
          }
        />
        <FeatureRow
          reverse
          title={t('features.2.title')}
          description={t('features.2.desc')}
          imagePlaceholder={
            <div className="relative w-full max-w-[288px] h-64 sm:h-72 flex justify-center items-center">
              <LazyLottie animationPath="/lotties/filipe2.json" className="w-full h-full" />
            </div>
          }
        />
        <FeatureRow
          title={t('features.3.title')}
          description={t('features.3.desc')}
          imagePlaceholder={
            <div className="relative w-full max-w-[320px] h-64 sm:h-72 flex justify-center items-center">
              <LazyLottie animationPath="/lotties/filipe3.json" className="w-full h-full" />
            </div>
          }
        />
        <FeatureRow
          reverse
          title={t('features.4.title')}
          description={t('features.4.desc')}
          imagePlaceholder={
            <div className="relative w-full max-w-[288px] h-64 sm:h-72 flex justify-center items-center">
              <LazyLottie animationPath="/lotties/filipe4.json" className="w-full h-full" />
            </div>
          }
        />
      </div>

      <MultiPlatformSection title={t('eco.title')} />

      <SuperSection>
        <LazyLottie animationPath="/lotties/filipe7.json" className="w-full h-full" />
      </SuperSection>

      <div className="py-20 pb-0">
        <FeatureRow
          title={t('ai.title')}
          description={t('ai.desc')}
          imagePlaceholder={
            <div className="relative w-64 h-64 flex items-center justify-center">
              <LazyLottie animationPath="/lotties/filipe8.json" className="w-full h-full" />
            </div>
          }
        >
          <Button3D variant="outline" className="border-gray-200 text-[#1cb0f6] shadow-[0_4px_0_0_#e5e5e5] w-full sm:w-auto px-8" onClick={() => setIsAIModalOpen(true)}>
            {t('ai.cta')}
          </Button3D>
        </FeatureRow>
        
        <FeatureRow reverse title={t('games.title')} description={t('games.desc')} imagePlaceholder={<div className="relative w-64 h-64"><LazyLottie animationPath="/lotties/filipe9.json" className="w-full h-full" /></div>}>
          <Button3D variant="outline" className="border-gray-200 text-[#1cb0f6] shadow-[0_4px_0_0_#e5e5e5] w-full sm:w-auto px-8" onClick={() => setIsGamesModalOpen(true)}>
            {t('games.cta')}
          </Button3D>
        </FeatureRow>

        <FeatureRow title={t('chat.title')} description={t('chat.desc')} imagePlaceholder={<div className="relative w-72 h-64 flex items-end justify-center"><LazyLottie animationPath="/lotties/filipe10.json" className="w-full h-full" /></div>}>
          <Button3D variant="outline" className="border-gray-200 text-[#1cb0f6] shadow-[0_4px_0_0_#e5e5e5] w-full sm:w-auto px-8" onClick={() => setIsChatModalOpen(true)}>
            {t('chat.cta')}
          </Button3D>
        </FeatureRow>
      </div>

      <section className="bg-white pt-24 pb-0 text-center relative overflow-hidden flex flex-col items-center">
        <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center mb-0">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-[#58cc02] tracking-tight mb-8"
          >
            {t('cta.title')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="w-full flex justify-center"
          >
            <Button3D variant="primary" className="py-4 px-12 text-[15px] max-w-[320px] w-full bg-[#58cc02] hover:bg-[#46a302]">
              {t('hero.start')}
            </Button3D>
          </motion.div>
        </div>

        <div className="w-full relative z-0 pointer-events-none leading-none mt-4 md:-mt-36">
          <LazyLottie animationPath="/lotties/filipe12.json" className="w-full h-auto" priority={true} />
        </div>
      </section>

      <AIModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
      <GamesModal isOpen={isGamesModalOpen} onClose={() => setIsGamesModalOpen(false)} />
      <ChatModal isOpen={isChatModalOpen} onClose={() => setIsChatModalOpen(false)} />
    </div>
  );
}
