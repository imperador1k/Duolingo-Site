import React from "react";
import Link from "next/link";
import { docsNavigation, type DocsGroup } from "@/lib/docs-navigation";
import { BookOpen, Code, Settings, Sparkles, FileText, ArrowRight } from "lucide-react";

const groupIcons: Record<string, React.ReactNode> = {
  "Getting Started": <BookOpen className="w-6 h-6" />,
  Contributing: <Code className="w-6 h-6" />,
  Architecture: <Settings className="w-6 h-6" />,
  Features: <Sparkles className="w-6 h-6" />,
  Reference: <FileText className="w-6 h-6" />,
};

export default function DocsIndexPage() {
  return (
    <div>
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-[#3c3c3c] mb-4">
          MyDuolingo Documentation
        </h1>
        <p className="text-lg text-[#4b4b4b] max-w-2xl leading-relaxed">
          Everything you need to know about building, contributing to, and deploying MyDuolingo.
          From quick start guides to deep architectural insights.
        </p>
      </div>

      {/* Quick start card */}
      <div className="rounded-2xl border-2 border-stone-200 border-b-8 bg-gradient-to-r from-green-50 to-white p-6 md:p-8 mb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-extrabold text-[#3c3c3c] mb-2">New here?</h2>
            <p className="text-[#4b4b4b]">
              Start with the introduction to get an overview of the project, then follow the quick start guide to get up and running.
            </p>
          </div>
          <Link
            href="/docs"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#58cc02] text-white font-extrabold border-b-4 border-[#46a302] active:translate-y-1 active:border-b-0 transition-all hover:bg-[#46a302]"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Section cards */}
      <div className="space-y-8">
        {docsNavigation.map((group: DocsGroup) => (
          <section key={group.group}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-[#58cc02]/10 text-[#58cc02]">
                {groupIcons[group.group]}
              </div>
              <h2 className="text-xl font-extrabold text-[#3c3c3c]">{group.group}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {group.pages.map((page) => {
                const href = page.slug === "introduction" ? "/docs" : `/docs/${page.slug}`;
                return (
                  <Link
                    key={page.slug}
                    href={href}
                    className="group flex items-center justify-between p-4 rounded-2xl border-2 border-stone-200 border-b-4 hover:border-[#58cc02] transition-all active:translate-y-0.5 active:border-b-2"
                  >
                    <span className="font-bold text-[#3c3c3c] group-hover:text-[#58cc02] transition-colors">
                      {page.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#afafaf] group-hover:text-[#58cc02] transition-colors" />
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
