import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/../mdx-components";

interface DocsContentProps {
  children: React.ReactNode;
}

export function DocsContent({ children }: DocsContentProps) {
  return (
    <div className="docs-content">
      <MDXProvider components={useMDXComponents({})}>
        {children}
      </MDXProvider>
    </div>
  );
}
