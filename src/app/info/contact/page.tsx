"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button3D } from '@/components/Button3D';
import { LazyLottie } from '@/components/LazyLottie';
import { useTranslation } from '@/hooks/useTranslation';
import { Send, Mail, Briefcase, HelpCircle, ArrowRight, Globe, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <article className="max-w-5xl pb-20 relative">
      {/* Elementos de Magia de Fundo (Glows) */}
      <div className="absolute top-0 -right-20 w-96 h-96 bg-[#1cb0f6]/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 -left-20 w-72 h-72 bg-[#58cc02]/10 rounded-full blur-[80px] -z-10 animate-pulse-slow"></div>

      {/* Header com Revelação Mágica */}
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-12 mb-20 border-b-2 border-gray-50 pb-16">
        <div className="flex-1 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-[#1cb0f6]/10 to-[#58cc02]/10 text-[#1cb0f6] rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-white/50 shadow-sm"
          >
            <Sparkles size={12} className="animate-pulse" /> Direct Channel
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="text-5xl md:text-7xl font-black text-[#3c3c3c] leading-[1.05] tracking-tight"
          >
            {t('info.contact.title')} <br/>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#3c3c3c] to-gray-400">{t('info.contact.accent')}</span>
          </motion.h1>
        </div>
        <motion.div 
          initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-40 h-40 md:w-52 md:h-52 shrink-0 drop-shadow-2xl"
        >
          <LazyLottie animationPath="/lotties/filipe7.json" className="w-full h-full" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Info lateral - Estilo Glass */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-8">
            <h3 className="text-sm font-black text-gray-500 uppercase tracking-[0.4em]">{t('info.contact.connect')}</h3>
            
            <div className="space-y-8">
              {[
                { icon: Globe, label: t('info.contact.press'), email: 'contacto@miguelweb.dev', color: 'bg-[#1cb0f6]' },
                { icon: Briefcase, label: t('info.contact.partners'), email: 'contacto@miguelweb.dev', color: 'bg-[#58cc02]' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  whileHover={{ x: 15 }}
                  className="group flex items-center gap-6 cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-3xl ${item.color}/10 flex items-center justify-center text-gray-500 group-hover:scale-110 group-hover:text-white group-hover:${item.color} transition-all duration-500 shadow-sm`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-[#3c3c3c] font-black text-xl group-hover:text-[#1cb0f6] transition-colors">{item.email}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Help Card Elevado */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative p-10 rounded-[3rem] bg-linear-to-br from-gray-50 to-white border-2 border-gray-100 shadow-sm overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1cb0f6]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
            <h4 className="relative z-10 font-black text-[#3c3c3c] text-lg mb-4 tracking-tight">{t('info.contact.support.title')}</h4>
            <p className="relative z-10 text-gray-600 font-bold text-sm mb-8 leading-relaxed">
              {t('info.contact.support.desc')}
            </p>
            <button className="relative z-10 flex items-center gap-3 text-[#1cb0f6] font-black uppercase text-xs tracking-widest hover:gap-5 transition-all group/btn">
              {t('info.contact.support.cta')} <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Formulário Signature - Glassmorphism */}
        <div className="lg:col-span-7 relative">
          <div className="absolute inset-0 bg-linear-to-br from-[#1cb0f6]/5 to-[#58cc02]/5 blur-3xl -z-10"></div>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-2xl rounded-[4rem] border-2 border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] p-10 md:p-14"
          >
            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <form key="form" onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3 group">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#1cb0f6] transition-colors">{t('info.contact.form.name')}</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:border-[#1cb0f6] outline-none transition-all font-bold text-[#3c3c3c] text-lg placeholder:text-gray-300"
                        placeholder={t('info.contact.form.placeholder.name')}
                      />
                    </div>
                    <div className="space-y-3 group">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#1cb0f6] transition-colors">{t('info.contact.form.email')}</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:border-[#1cb0f6] outline-none transition-all font-bold text-[#3c3c3c] text-lg placeholder:text-gray-300"
                        placeholder="teu@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#1cb0f6] transition-colors">{t('info.contact.form.message')}</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-transparent border-b-2 border-gray-100 py-4 focus:border-[#1cb0f6] outline-none transition-all font-bold text-[#3c3c3c] text-lg resize-none placeholder:text-gray-300"
                      placeholder={t('info.contact.form.placeholder.message')}
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button3D 
                      type="submit"
                      fullWidth 
                      className="bg-[#3c3c3c] text-white hover:bg-black shadow-[0_8px_0_0_#1a1a1a] py-5 rounded-[2rem] text-sm"
                    >
                      {status === 'loading' ? t('info.contact.form.sending') : t('info.contact.form.send')}
                    </Button3D>
                  </div>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-[#58cc02] rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-[#58cc02]/30 animate-bounce-slow">
                    <Send className="text-white w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black text-[#3c3c3c] mb-4">{t('info.contact.success.title')}</h3>
                  <p className="text-gray-500 font-bold text-lg max-w-xs mx-auto leading-relaxed">
                    {t('info.contact.success.desc')}
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-12 text-[#1cb0f6] font-black uppercase text-xs tracking-widest hover:tracking-[0.2em] transition-all"
                  >
                    {t('info.contact.success.new')}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
