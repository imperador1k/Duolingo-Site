export interface DocsPage {
  title: string;
  slug: string;
}

export interface DocsGroup {
  group: string;
  pages: DocsPage[];
}

export const docsNavigation: DocsGroup[] = [
  {
    group: "Getting Started",
    pages: [
      { title: "Introduction", slug: "introduction" },
      { title: "Features", slug: "features" },
      { title: "Quick Start", slug: "quick-start" },
    ],
  },
  {
    group: "Contributing",
    pages: [
      { title: "Guide", slug: "contributing/guide" },
      { title: "Setup", slug: "contributing/setup" },
      { title: "Conventions", slug: "contributing/conventions" },
      { title: "Pull Requests", slug: "contributing/pull-requests" },
    ],
  },
  {
    group: "Architecture",
    pages: [
      { title: "Overview", slug: "architecture/overview" },
      { title: "Database", slug: "architecture/database" },
      { title: "Authentication", slug: "architecture/authentication" },
    ],
  },
  {
    group: "Features",
    pages: [
      { title: "AI Pipeline", slug: "features/ai-pipeline" },
      { title: "Real-time Chat", slug: "features/realtime-chat" },
      { title: "Gamification", slug: "features/gamification" },
      { title: "Security", slug: "features/security" },
    ],
  },
  {
    group: "Reference",
    pages: [
      { title: "Environment Variables", slug: "reference/environment" },
      { title: "Deployment", slug: "reference/deployment" },
    ],
  },
];

export function getAllPages(): DocsPage[] {
  return docsNavigation.flatMap((g) => g.pages);
}

export function getPageBySlug(slug: string): DocsPage | undefined {
  return getAllPages().find((p) => p.slug === slug);
}

export function getGroupForPage(slug: string): string | undefined {
  return docsNavigation.find((g) => g.pages.some((p) => p.slug === slug))?.group;
}

export function getPrevNextPages(slug: string): { prev?: DocsPage; next?: DocsPage } {
  const all = getAllPages();
  const idx = all.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? all[idx - 1] : undefined,
    next: idx < all.length - 1 ? all[idx + 1] : undefined,
  };
}
