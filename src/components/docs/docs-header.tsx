"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Github, Menu } from "lucide-react";
import { DocsSearch } from "./docs-search";

interface DocsHeaderProps {
  onMenuToggle: () => void;
}

export function DocsHeader({ onMenuToggle }: DocsHeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b-2 border-stone-200">
        <div className="max-w-[1400px] mx-auto flex items-center gap-3 px-4 md:px-6 h-16">
          {/* Mobile menu button */}
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-xl hover:bg-stone-100 transition-colors"
          >
            <Menu className="w-5 h-5 text-[#3c3c3c]" />
          </button>

          {/* Logo */}
          <Link href="/docs" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xl font-black text-[#58cc02]">MyDuolingo</span>
            <span className="hidden sm:inline text-sm font-bold text-[#787878]">Docs</span>
          </Link>

          {/* Search bar */}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex-1 max-w-md ml-4 md:ml-8 flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-stone-200 bg-stone-50 text-[#afafaf] text-sm hover:border-stone-300 transition-colors"
          >
            <Search className="w-4 h-4 flex-shrink-0" />
            <span className="hidden sm:inline">Search docs...</span>
            <span className="sm:hidden">Search</span>
            <kbd className="ml-auto hidden md:inline-flex items-center gap-1 text-xs text-[#787878]">
              <span className="px-1.5 py-0.5 rounded bg-white border border-stone-200 font-mono">⌘</span>
              <span className="px-1.5 py-0.5 rounded bg-white border border-stone-200 font-mono">K</span>
            </kbd>
          </button>

          {/* GitHub link */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl hover:bg-stone-100 transition-colors text-[#3c3c3c]"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </header>

      <DocsSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
