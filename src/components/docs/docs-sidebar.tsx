"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { docsNavigation, type DocsGroup, type DocsPage } from "@/lib/docs-navigation";

interface DocsSidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export function DocsSidebar({ mobileOpen, onMobileClose }: DocsSidebarProps) {
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<Set<string>>(
    new Set(docsNavigation.map((g) => g.group))
  );

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(group)) {
        next.delete(group);
      } else {
        next.add(group);
      }
      return next;
    });
  };

  const isActive = (page: DocsPage) => {
    return pathname === `/docs/${page.slug}` || (page.slug === "introduction" && pathname === "/docs");
  };

  const sidebarContent = (
    <div className="h-full overflow-y-auto py-6 px-4">
      {docsNavigation.map((group: DocsGroup) => {
        const isOpen = openGroups.has(group.group);
        return (
          <div key={group.group} className="mb-4">
            <button
              onClick={() => toggleGroup(group.group)}
              className="flex items-center gap-2 w-full text-left font-extrabold text-sm uppercase tracking-wider text-[#787878] hover:text-[#58cc02] transition-colors py-2 px-3 rounded-lg"
            >
              {isOpen ? (
                <ChevronDown className="w-4 h-4 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              )}
              {group.group}
            </button>
            {isOpen && (
              <div className="ml-4 mt-1 space-y-1">
                {group.pages.map((page) => {
                  const active = isActive(page);
                  const href = page.slug === "introduction" ? "/docs" : `/docs/${page.slug}`;
                  return (
                    <Link
                      key={page.slug}
                      href={href}
                      onClick={onMobileClose}
                      className={`block px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                        active
                          ? "bg-[#58cc02]/10 text-[#58cc02]"
                          : "text-[#4b4b4b] hover:bg-stone-100 hover:text-[#3c3c3c]"
                      }`}
                    >
                      {page.title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-56 flex-shrink-0 border-r-2 border-stone-200 bg-white sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
        {sidebarContent}
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={onMobileClose} />
          <aside className="relative w-80 max-w-[85vw] h-full bg-white shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b-2 border-stone-200">
              <span className="font-black text-lg text-[#58cc02]">Docs</span>
              <button
                onClick={onMobileClose}
                className="p-2 rounded-xl hover:bg-stone-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
