"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const codeText = React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string") return child;
      if (React.isValidElement(child)) {
        const el = child as React.ReactElement<{ children?: React.ReactNode }>;
        if (el.props?.children) {
          return React.Children.toArray(el.props.children).join("");
        }
      }
      return "";
    })
    .join("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const lang = className?.replace("language-", "") || "code";

  return (
    <div className="relative my-6 rounded-2xl border-2 border-stone-200 overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-stone-100 border-b-2 border-stone-200">
        <span className="text-xs font-bold text-[#787878] uppercase tracking-wider">{lang}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold text-[#787878] hover:bg-stone-200 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#58cc02]" />
              <span className="text-[#58cc02]">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      {/* Code content */}
      <div className="bg-[#1e1e1e] overflow-x-auto">
        <pre className="p-4 text-sm leading-relaxed text-green-400 font-mono">
          {children}
        </pre>
      </div>
    </div>
  );
}
