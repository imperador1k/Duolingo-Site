"use client";

import React, { useState } from "react";
import { DocsHeader } from "@/components/docs/docs-header";
import { DocsSidebar } from "@/components/docs/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <DocsHeader onMenuToggle={() => setSidebarOpen(true)} />
      <div className="flex">
        <DocsSidebar mobileOpen={sidebarOpen} onMobileClose={() => setSidebarOpen(false)} />
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
