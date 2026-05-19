import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Github, Twitter, Globe } from "lucide-react";
import { getPrevNextPages, getPageBySlug } from "@/lib/docs-navigation";

interface DocsFooterProps {
  slug: string;
}

export function DocsFooter({ slug }: DocsFooterProps) {
  const { prev, next } = getPrevNextPages(slug);

  return (
    <footer className="border-t-2 border-stone-200 mt-12 pt-8 pb-12">
      {/* Prev/Next navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {prev ? (
          <Link
            href={prev.slug === "introduction" ? "/docs" : `/docs/${prev.slug}`}
            className="group flex flex-col items-start gap-1 p-4 rounded-2xl border-2 border-stone-200 hover:border-[#58cc02] transition-colors"
          >
            <div className="flex items-center gap-1 text-sm text-[#787878] group-hover:text-[#58cc02] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Previous
            </div>
            <span className="font-bold text-[#3c3c3c] group-hover:text-[#58cc02] transition-colors">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/docs/${next.slug}`}
            className="group flex flex-col items-end gap-1 p-4 rounded-2xl border-2 border-stone-200 hover:border-[#58cc02] transition-colors"
          >
            <div className="flex items-center gap-1 text-sm text-[#787878] group-hover:text-[#58cc02] transition-colors">
              Next
              <ArrowRight className="w-4 h-4" />
            </div>
            <span className="font-bold text-[#3c3c3c] group-hover:text-[#58cc02] transition-colors">
              {next.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Social links */}
      <div className="flex items-center justify-center gap-6 text-[#787878]">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-bold hover:text-[#58cc02] transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-bold hover:text-[#58cc02] transition-colors"
        >
          <Twitter className="w-4 h-4" />
          Twitter
        </a>
        <a
          href="/"
          className="flex items-center gap-2 text-sm font-bold hover:text-[#58cc02] transition-colors"
        >
          <Globe className="w-4 h-4" />
          Website
        </a>
      </div>
    </footer>
  );
}
