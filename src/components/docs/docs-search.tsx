"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { docsNavigation, type DocsPage } from "@/lib/docs-navigation";

interface DocsSearchProps {
  open: boolean;
  onClose: () => void;
}

interface SearchResult {
  page: DocsPage;
  group: string;
  excerpt?: string;
}

export function DocsSearch({ open, onClose }: DocsSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const fuseRef = useRef<Fuse<DocsPage & { group: string }> | null>(null);

  useEffect(() => {
    const allPages = docsNavigation.flatMap((group) =>
      group.pages.map((page) => ({ ...page, group: group.group }))
    );
    fuseRef.current = new Fuse(allPages, {
      keys: ["title", "slug"],
      threshold: 0.4,
    });
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!query.trim() || !fuseRef.current) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const searchResults = fuseRef.current.search(query).slice(0, 8);
    setResults(
      searchResults.map((r) => ({
        page: r.item,
        group: r.item.group,
      }))
    );
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        const slug = results[selectedIndex].page.slug;
        const href = slug === "introduction" ? "/docs" : `/docs/${slug}`;
        router.push(href);
        onClose();
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [results, selectedIndex, router, onClose]
  );

  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleGlobalKey);
    return () => window.removeEventListener("keydown", handleGlobalKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-2xl border-2 border-stone-200 shadow-2xl overflow-hidden">
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b-2 border-stone-100">
          <svg className="w-5 h-5 text-[#787878] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search documentation..."
            className="flex-1 bg-transparent outline-none text-[#3c3c3c] placeholder:text-[#afafaf] text-base"
          />
          <button
            onClick={onClose}
            className="text-xs text-[#787878] px-2 py-1 rounded bg-stone-100 hover:bg-stone-200 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto py-2">
          {query.trim() && results.length === 0 && (
            <div className="px-4 py-8 text-center text-[#787878] text-sm">
              No results found for &quot;{query}&quot;
            </div>
          )}
          {!query.trim() && (
            <div className="px-4 py-8 text-center text-[#787878] text-sm">
              Type to search documentation
            </div>
          )}
          {results.map((result, idx) => {
            const href = result.page.slug === "introduction" ? "/docs" : `/docs/${result.page.slug}`;
            return (
              <Link
                key={result.page.slug}
                href={href}
                onClick={onClose}
                className={`block px-4 py-3 mx-2 rounded-xl transition-colors ${
                  idx === selectedIndex
                    ? "bg-[#58cc02]/10"
                    : "hover:bg-stone-50"
                }`}
              >
                <div className="font-bold text-[#3c3c3c] text-sm">{result.page.title}</div>
                <div className="text-xs text-[#787878] mt-0.5">{result.group}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
