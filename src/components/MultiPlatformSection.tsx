"use client";

import React from 'react';
import { motion, Variants } from 'motion/react';

/**
 * Animation Variants
 * Organized outside the component for cleaner JSX.
 */
const floatingVariants: Variants = {
  animate: (delay: number) => ({
    y: [-15, 15, -15],
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
      delay: delay,
    },
  }),
};

const particleVariants: Variants = {
  animate: (custom: { x: number[]; y: number[]; duration: number; delay: number }) => ({
    x: custom.x,
    y: custom.y,
    transition: {
      repeat: Infinity,
      duration: custom.duration,
      ease: "easeInOut",
      delay: custom.delay,
    },
  }),
};

/**
 * MultiPlatformSection Component
 * 
 * A premium, playful section showcasing the multi-platform nature of the app
 * with floating device mockups and interactive "juicy" buttons.
 */
export const MultiPlatformSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#ddf4ff] flex flex-col items-center py-24 px-6 relative overflow-hidden">
      
      {/* 1. Header Section */}
      <div className="relative z-30 text-center flex flex-col items-center gap-8 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-extrabold text-4xl sm:text-5xl md:text-7xl text-[#042c60] lowercase tracking-tight max-w-3xl"
        >
          aprenda onde e quando quiser
        </motion.h2>

        {/* Juicy Store Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {/* Apple Store Button */}
          <button className="group flex items-center gap-2.5 bg-black text-white px-5 sm:px-7 py-3 rounded-2xl border-b-4 border-gray-800 active:border-b-0 active:translate-y-1 transition-all cursor-pointer">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.062 14.125c-.026 2.45 2.083 3.633 2.133 3.657-.018.061-.334 1.144-1.096 2.257-.659.96-1.343 1.916-2.424 1.936-1.06.02-1.399-.623-2.613-.623-1.213 0-1.592.603-2.6.643-1.06.038-1.848-1.036-2.513-2.001-1.358-1.963-2.394-5.544-1.006-7.954.689-1.196 1.918-1.956 3.255-1.976 1.012-.016 1.968.685 2.583.685.614 0 1.8-.847 3.011-.724.507.02 1.932.203 2.846 1.539-.074.045-1.699.99-1.676 2.96zm-2.457-7.854c.548-.664.919-1.587.818-2.511-.795.032-1.758.53-2.328 1.194-.511.591-.958 1.536-.837 2.438.887.069 1.799-.457 2.347-1.121z" />
            </svg>
            <div className="text-left">
              <div className="text-[8px] sm:text-[9px] uppercase font-black opacity-60 leading-none mb-1">Download on the</div>
              <div className="text-sm sm:text-lg font-black leading-none">App Store</div>
            </div>
          </button>

          {/* Google Play Button */}
          <button className="group flex items-center gap-2.5 bg-black text-white px-5 sm:px-7 py-3 rounded-2xl border-b-4 border-gray-800 active:border-b-0 active:translate-y-1 transition-all cursor-pointer">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.29 2.29 0 0 1-.61-1.59V3.404c0-.606.22-1.164.609-1.59zm11.185 11.186l2.308-2.308-11.722-6.7c-.368-.21-.803-.333-1.267-.333l10.681 9.341zm2.308-2.308l2.91 1.66c.6.342.987.973.987 1.648a1.91 1.91 0 0 1-.987 1.647l-2.91 1.66-3.102-3.102 3.102-3.102zm-3.102 3.102l-10.681 9.341c.464 0 .899-.123 1.267-.333l11.722-6.7-2.308-2.308z" />
            </svg>
            <div className="text-left">
              <div className="text-[8px] sm:text-[9px] uppercase font-black opacity-60 leading-none mb-1">Get it on</div>
              <div className="text-sm sm:text-lg font-black leading-none">Google Play</div>
            </div>
          </button>
        </div>
      </div>

      {/* 2. Floating Devices Stage */}
      <div className="relative w-full flex-1 min-h-[400px] md:max-h-[600px] mt-10 flex justify-center items-center overflow-visible px-4">
        
        {/* Device 1: Left iPhone (-rotate-12) */}
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          custom={0}
          className="absolute left-[0%] sm:left-[5%] md:left-[10%] lg:left-[15%] -rotate-12 z-10"
        >
          <div className="w-[100px] h-[210px] sm:w-[130px] sm:h-[280px] md:w-[180px] md:h-[380px] bg-[#3c3c3c] rounded-3xl sm:rounded-[2.2rem] md:rounded-[3rem] border-4 sm:border-8 border-[#3c3c3c] shadow-[10px_10px_0_rgba(0,0,0,0.05)] relative overflow-hidden">
             <img 
               src="/images/print-phone-1.png" 
               alt="Mobile Interface 1" 
               className="w-full h-full object-cover rounded-2xl sm:rounded-[1.8rem] md:rounded-[2.2rem]"
               onError={(e) => { e.currentTarget.style.display = 'none'; }}
             />
             <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Device 2: Center Browser (Straight, Scale Up) */}
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          custom={1.5}
          className="z-20 scale-90 sm:scale-100 md:scale-125"
        >
          <div className="w-[240px] sm:w-[350px] md:w-[550px] h-[160px] sm:h-[240px] md:h-[380px] bg-white rounded-2xl sm:rounded-3xl border-t-24 sm:border-t-36 border-[#3c3c3c] shadow-[15px_15px_0_rgba(0,0,0,0.05)] md:shadow-[30px_30px_0_rgba(0,0,0,0.05)] relative overflow-hidden group">
             {/* Browser Navigation Bar */}
             <div className="absolute top-[-18px] sm:top-[-26px] left-3 sm:left-4 flex gap-1.5 sm:gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]"></div>
             </div>
             {/* Real Desktop Print */}
             <img 
               src="/images/print-desktop.png" 
               alt="Desktop Interface" 
               className="w-full h-full object-cover object-top"
               onError={(e) => { e.currentTarget.style.display = 'none'; }}
             />
             <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Device 3: Right iPhone (rotate-12) */}
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          custom={0.7}
          className="absolute right-[0%] sm:right-[5%] md:right-[10%] lg:right-[15%] rotate-12 z-10"
        >
          <div className="w-[100px] h-[210px] sm:w-[130px] sm:h-[280px] md:w-[180px] md:h-[380px] bg-[#3c3c3c] rounded-3xl sm:rounded-[2.2rem] md:rounded-[3rem] border-4 sm:border-8 border-[#3c3c3c] shadow-[-10px_10px_0_rgba(0,0,0,0.05)] relative overflow-hidden">
             <img 
               src="/images/print-phone-2.png" 
               alt="Mobile Interface 2" 
               className="w-full h-full object-cover rounded-2xl sm:rounded-[1.8rem] md:rounded-[2.2rem]"
               onError={(e) => { e.currentTarget.style.display = 'none'; }}
             />
             <div className="absolute inset-0 bg-linear-to-tl from-white/10 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* 3. Decorative Floating Particles */}
        <motion.div 
          variants={particleVariants}
          animate="animate"
          custom={{ x: [0, 25, 0], y: [0, -40, 0], duration: 5, delay: 0 }}
          className="absolute top-10 left-[15%] w-8 h-8 bg-[#58cc02] rounded-xl rotate-12 shadow-lg"
        />
        <motion.div 
          variants={particleVariants}
          animate="animate"
          custom={{ x: [0, -20, 0], y: [0, 35, 0], duration: 7, delay: 1.2 }}
          className="absolute bottom-[20%] left-[8%] w-10 h-10 bg-[#ff9600] rounded-full shadow-lg"
        />
        <motion.div 
          variants={particleVariants}
          animate="animate"
          custom={{ x: [0, 35, 0], y: [0, -25, 0], duration: 4.5, delay: 0.8 }}
          className="absolute top-32 right-[12%] w-6 h-6 bg-[#ce82ff] rounded-lg -rotate-12 shadow-md"
        />
        <motion.div 
          variants={particleVariants}
          animate="animate"
          custom={{ x: [0, -15, 0], y: [0, -50, 0], duration: 8, delay: 2.5 }}
          className="absolute bottom-16 right-[10%] w-12 h-12 bg-[#58cc02]/30 rounded-full blur-md"
        />
        <motion.div 
          variants={particleVariants}
          animate="animate"
          custom={{ x: [0, 20, 0], y: [0, 20, 0], duration: 6, delay: 0.4 }}
          className="absolute top-1/2 left-[5%] w-5 h-5 bg-[#ce82ff] rounded-md rotate-45"
        />
      </div>

      {/* Decorative Orbs in Background */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#58cc02]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#1cb0f6]/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};
