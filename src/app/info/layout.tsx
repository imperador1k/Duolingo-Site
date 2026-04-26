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
  HelpCircle
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
    { name: t('menu.contact'), href: '/info/contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Container Principal */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row pt-24 pb-20 px-4 sm:px-6">
        
        {/* Sidebar / Top Navigation Menu */}
        <aside className="w-full md:w-64 flex-shrink-0 mb-8 md:mb-0">
          <nav className="sticky top-28 flex md:flex-col overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-none gap-2 border-b md:border-b-0 md:border-r border-gray-100 pr-0 md:pr-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-2xl transition-all whitespace-nowrap
                    ${isActive 
                      ? 'bg-[#ddf4ff] text-[#1cb0f6] shadow-[0_4px_0_0_#1899d620]' 
                      : 'text-[#777] hover:bg-gray-50 hover:text-[#4b4b4b]'}
                  `}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#1cb0f6]' : 'text-gray-400'}`} />
                  <span className="font-black uppercase text-[13px] tracking-wider">
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="sidebar-active"
                      className="hidden md:block absolute right-[-2px] w-1 h-8 bg-[#1cb0f6] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
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
