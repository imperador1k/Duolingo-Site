"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { useTranslation } from '@/hooks/useTranslation';
import { 
  Rocket, 
  Users, 
  BookOpen, 
  Target, 
  CheckCircle, 
  Mail,
  HelpCircle,
  Github
} from 'lucide-react';

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { t } = useTranslation();

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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row pt-24 pb-20 px-4 sm:px-6">
        
        {/* Sidebar / Top Navigation Menu */}
        <aside className="w-full md:w-64 flex-shrink-0 mb-10 md:mb-0">
          <div className="sticky top-32">
            <div className="md:hidden mb-4 flex items-center justify-between px-2">
              <span className="text-[#afafaf] font-black text-xs uppercase tracking-[0.3em]">Menu</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-gray-300" />
                <div className="w-1 h-1 rounded-full bg-gray-300" />
                <div className="w-1 h-1 rounded-full bg-gray-300" />
              </div>
            </div>
            
            <div className="relative group">
              {/* Horizontal Scroll Gradient Masks (Mobile Only) */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-white to-transparent z-10 pointer-events-none md:hidden" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-white to-transparent z-10 pointer-events-none md:hidden" />
              
              <nav className="flex md:flex-col overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 scrollbar-none gap-3 border-b-2 md:border-b-0 md:border-r-2 border-gray-100 pr-0 md:pr-8 snap-x">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
    
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        flex items-center gap-3 px-6 md:px-4 py-3 rounded-2xl transition-all whitespace-nowrap snap-start
                        ${isActive 
                          ? 'bg-[#1cb0f6] text-white shadow-[0_4px_0_0_#1899d6]' 
                          : 'bg-gray-50 md:bg-transparent text-[#777] border-2 border-transparent hover:border-gray-200'}
                      `}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                      <span className="font-black uppercase text-[12px] md:text-[13px] tracking-wider">
                        {item.name}
                      </span>
                      {isActive && (
                        <motion.div 
                          layoutId="sidebar-active"
                          className="hidden md:block absolute right-[-2px] w-1.5 h-8 bg-[#1cb0f6] rounded-full"
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
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
