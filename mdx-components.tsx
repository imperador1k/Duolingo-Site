import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/docs/callout";
import { CodeBlock } from "@/components/docs/code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-3xl md:text-4xl font-black text-[#3c3c3c] mb-4 mt-8" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#3c3c3c] mb-3 mt-8" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-xl md:text-2xl font-bold text-[#3c3c3c] mb-2 mt-6" {...props} />
    ),
    p: (props) => (
      <p className="text-base leading-relaxed text-[#4b4b4b] mb-4" {...props} />
    ),
    a: (props) => (
      <a className="text-[#58cc02] hover:text-[#46a302] underline font-bold" {...props} />
    ),
    ul: (props) => (
      <ul className="list-disc pl-6 mb-4 space-y-2 text-[#4b4b4b]" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-[#4b4b4b]" {...props} />
    ),
    li: (props) => (
      <li className="leading-relaxed" {...props} />
    ),
    code: (props) => {
      const { className, children, ...rest } = props as { className?: string; children?: React.ReactNode };
      const isInline = !className;
      return isInline ? (
        <code className="bg-stone-100 text-[#58cc02] px-1.5 py-0.5 rounded-md text-sm font-mono font-bold" {...rest}>
          {children}
        </code>
      ) : (
        <code className={className} {...rest}>
          {children}
        </code>
      );
    },
    pre: (props) => <CodeBlock {...props} />,
    blockquote: (props) => (
      <blockquote className="border-l-4 border-[#58cc02] bg-green-50 pl-4 py-3 my-4 rounded-r-lg text-[#4b4b4b]" {...props} />
    ),
    table: (props) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-2 border-stone-200 rounded-xl" {...props} />
      </div>
    ),
    th: (props) => (
      <th className="bg-stone-100 border-b-2 border-stone-200 px-4 py-2 text-left font-extrabold text-[#3c3c3c]" {...props} />
    ),
    td: (props) => (
      <td className="border-b border-stone-100 px-4 py-2 text-[#4b4b4b]" {...props} />
    ),
    Callout,
    ...components,
  };
}
