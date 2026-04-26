import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../hooks/useTranslation';

/**
 * SuperSection Component
 * 
 * A high-conversion, luxury premium section with a sticky-scroll effect,
 * animated ambient glow, and high-fidelity typography.
 */
export const SuperSection: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-[140vh] bg-[#0b0520] w-full overflow-hidden flex items-center justify-center py-24">
      {/* 1. Animated Aurora / Ambient Glow Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Neon Orb 1: Fuchsia */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            x: [0, 80, 0], 
            y: [0, -60, 0],
            opacity: [0.3, 0.5, 0.3]
          }} 
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-fuchsia-600/40 rounded-full blur-[120px]" 
        />
        
        {/* Neon Orb 2: Cyan */}
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2], 
            x: [0, -100, 0], 
            y: [0, 50, 0],
            opacity: [0.4, 0.2, 0.4]
          }} 
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-500/40 rounded-full blur-[120px]" 
        />
        
        {/* Neon Orb 3: Indigo */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            y: [0, -80, 0],
            opacity: [0.2, 0.4, 0.2]
          }} 
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vw] bg-indigo-600/40 rounded-full blur-[150px]" 
        />
      </div>

      {/* 2. Central Content Layout */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 max-w-6xl mx-auto px-6 w-full">
        
        {/* Left Column: Floating Lottie / Mascot (Scale-in Entrance) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="flex-shrink-0 relative group"
        >
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            {/* Neon Glow under the mascot */}
            <div className="absolute inset-0 bg-pink-500/20 blur-[60px] rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-[0_0_50px_rgba(236,72,153,0.4)]">
              {/* INJETAR O LOTTIE AQUI */}
              {children}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Copy & Conversion */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-pink-400 font-black text-sm md:text-base tracking-[0.4em] uppercase mb-4"
          >
            {t('super.powered_by')}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-8xl font-black leading-none tracking-tighter mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-sm whitespace-pre-line"
          >
            {t('super.title')}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="relative group w-full max-w-[320px]"
          >
            {/* Premium Button Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
            <button className="relative w-full bg-white text-[#0b0520] font-black text-lg py-4 rounded-2xl border-b-4 border-gray-300 active:border-b-0 active:translate-y-1 transition-all shadow-[0_0_40px_rgba(6,182,212,0.3)]">
              {t('super.cta')}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator / Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[2px] h-16 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
          ></motion.div>
          <span className="text-[10px] text-cyan-400 font-black tracking-[0.5em] uppercase">
            {t('common.scroll')}
          </span>
      </div>
    </section>
  );
};
