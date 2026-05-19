"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '@/hooks/useTranslation';
import { 
  Rocket, 
  Users, 
  BookOpen, 
  Target, 
  CheckCircle, 
  Mail,
  HelpCircle,
  Github,
  ChevronDown
} from 'lucide-react';

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: t('menu.mission'), href: '/info/mission', icon: Rocket },
    { name: t('menu.team'), href: '/info/team', icon: Users },
    { name: t('menu.courses'), href: '/info/courses', icon: BookOpen },
    { name: t('menu.method'), href: '/info/method', icon: Target },
    { name: t('menu.efficacy'), href: '/info/efficacy', icon: CheckCircle },
    { name: t('menu.doubts'), href: '/info/doubts', icon: HelpCircle },
    { name: t('menu.join_us'), href: '/info/join-us', icon: Github },
    { name: t('menu.contact'), href: '/info/contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Container Principal */}
      <div className="w-full flex flex-col md:flex-row pt-24 pb-20 px-6 md:px-12">
        
        {/* Sidebar / Top Navigation Menu */}
        <aside className="w-full md:w-64 flex-shrink-0 mb-10 md:mb-0 relative z-20">
          <div className="sticky top-32">
            {/* Mobile Dropdown Selector */}
            <div className="md:hidden relative w-full mb-6">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white border-2 border-[#e5e5e5] rounded-2xl text-[#4b4b4b] font-black uppercase text-[13px] tracking-wider shadow-[0_4px_0_0_#e5e5e5] active:shadow-none active:translate-y-[4px] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {(() => {
                    const activeItem = menuItems.find(item => pathname === item.href) || menuItems[0];
                    const ActiveIcon = activeItem.icon;
                    return (
                      <>
                        <ActiveIcon className="w-5 h-5 text-[#1cb0f6]" />
                        <span>{activeItem.name}</span>
                      </>
                    );
                  })()}
                </div>
                <ChevronDown className={`w-5 h-5 text-[#afafaf] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <>
                    {/* Backdrop to close dropdown when clicking outside */}
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                    
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 right-0 mt-2 bg-white border-2 border-[#e5e5e5] rounded-2xl shadow-xl z-20 overflow-hidden divide-y divide-gray-100 max-h-[300px] overflow-y-auto"
                    >
                      {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 px-6 py-4 transition-all text-[#777] hover:bg-gray-50 active:bg-gray-100 ${isActive ? 'bg-[#1cb0f6]/5 text-[#1cb0f6] font-extrabold' : 'font-bold'}`}
                          >
                            <Icon className={`w-5 h-5 ${isActive ? 'text-[#1cb0f6]' : 'text-gray-400'}`} />
                            <span className="uppercase text-[12px] tracking-wider">{item.name}</span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Navigation (visible only on md and up) */}
            <nav className="hidden md:flex flex-col gap-3 border-r-2 border-gray-100 pr-8">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-2xl transition-all whitespace-nowrap relative
                      ${isActive 
                        ? 'bg-[#1cb0f6] text-white shadow-[0_4px_0_0_#1899d6]' 
                        : 'bg-transparent text-[#777] border-2 border-transparent hover:border-gray-200'}
                    `}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    <span className="font-black uppercase text-[13px] tracking-wider">
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div 
                        layoutId="sidebar-active"
                        className="absolute right-[-34px] w-1.5 h-8 bg-[#1cb0f6] rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Conteúdo da Página */}
        <main className="flex-1 md:pl-12">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
