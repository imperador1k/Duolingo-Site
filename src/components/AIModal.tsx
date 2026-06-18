import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { Button3D } from './Button3D';

const Lottie = lazy(() => import('lottie-react'));

interface AIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Premium AI Modal - "Playful & Premium UI" Edition
 * Designed for high-fidelity interaction with Lottie animations and tactile elements.
 */
export const AIModal: React.FC<AIModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [lottieData, setLottieData] = useState(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Load Lottie animation for the header
  useEffect(() => {
    if (isOpen) {
      fetch('/duo_animation.json')
        .then((r) => r.json())
        .then(setLottieData)
        .catch(console.error);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop: Dark overlay with blur to highlight the modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-[3rem] sm:rounded-[4rem] shadow-2xl flex flex-col max-h-[90vh] border-b-[10px] border-[#e5e5e5] overflow-hidden"
          >
            {/* Header: Lottie Animation Section */}
            <div className="relative h-40 sm:h-48 bg-linear-to-b from-blue-50/50 to-white flex items-center justify-center pt-4">
              {/* Close Button: Discrete but accessible */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 z-20 p-2 text-[#afafaf] hover:text-[#3c3c3c] transition-all rounded-full hover:bg-gray-100/80 cursor-pointer active:scale-90"
              >
                <X className="w-7 h-7" />
              </button>

              <div className="w-full h-full max-w-[200px] sm:max-w-[240px] flex items-center justify-center relative z-10">
                <Suspense fallback={<div className="w-16 h-16 bg-gray-100 rounded-full animate-pulse" />}>
                  {lottieData && (
                    <Lottie 
                      animationData={lottieData} 
                      className="w-full h-full transform scale-110" 
                      loop={true} 
                    />
                  )}
                </Suspense>
              </div>
            </div>

            {/* Content Section: Scrollable without visible scrollbar */}
            <div className="relative flex-1 overflow-hidden flex flex-col">
              <div className="flex-1 overflow-y-auto scrollbar-none px-8 sm:px-12 pb-6">
                {/* Main Title */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl sm:text-4xl font-black text-[#1f2937] leading-tight mb-2">
                    {t('ai.modal.title')}
                  </h2>
                  <div className="h-1.5 w-20 bg-[#1cb0f6] rounded-full mx-auto opacity-30" />
                </div>

                {/* Features List */}
                <div className="space-y-10">
                  {/* Item 1: Error Explanation */}
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start group">
                    <div className="shrink-0 w-24 h-24 rounded-3xl overflow-hidden shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-500">
                      <img src="/images/ai_error.webp" alt="AI Error Explanation" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="font-black text-[#1f2937] text-xl mb-2 uppercase tracking-wide">
                        {t('ai.modal.feature1.title')}
                      </h3>
                      <p className="text-[#4b4b4b] font-bold text-lg leading-relaxed opacity-80">
                        {t('ai.modal.feature1.desc')}
                      </p>
                    </div>
                  </div>

                  {/* Item 2: Chat 24/7 */}
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start group">
                    <div className="shrink-0 w-24 h-24 rounded-3xl overflow-hidden shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-500">
                      <img src="/images/ai_chat.webp" alt="AI Personalized Chat" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="font-black text-[#1f2937] text-xl mb-2 uppercase tracking-wide">
                        {t('ai.modal.feature2.title')}
                      </h3>
                      <p className="text-[#4b4b4b] font-bold text-lg leading-relaxed opacity-80">
                        {t('ai.modal.feature2.desc')}
                      </p>
                    </div>
                  </div>

                  {/* Item 3: Dynamic Challenges */}
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start group">
                    <div className="shrink-0 w-24 h-24 rounded-3xl overflow-hidden shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-500">
                      <img src="/images/ai_challenges.webp" alt="AI Dynamic Challenges" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="font-black text-[#1f2937] text-xl mb-2 uppercase tracking-wide">
                        {t('ai.modal.feature3.title')}
                      </h3>
                      <p className="text-[#4b4b4b] font-bold text-lg leading-relaxed opacity-80">
                        {t('ai.modal.feature3.desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient Fade at the bottom of scroll */}
              <div className="absolute bottom-[100px] left-0 right-0 h-16 bg-linear-to-t from-white to-transparent pointer-events-none z-10" />

              {/* Fixed Footer Action */}
              <div className="px-8 sm:px-12 pb-8 pt-4 bg-white border-t border-gray-50">
                <Button3D 
                  variant="secondary" 
                  fullWidth 
                  onClick={onClose}
                  className="py-5 text-xl bg-[#1cb0f6] hover:bg-[#14a0e1] border-[#1899d6] shadow-[0_6px_0_0_#1899d6] rounded-3xl"
                >
                  {t('ai.modal.close')}
                </Button3D>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
