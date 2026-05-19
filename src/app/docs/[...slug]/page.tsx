import React from "react";
import { notFound } from "next/navigation";
import { getAllDocSlugs } from "@/lib/docs-content";
import { DocsFooter } from "@/components/docs/docs-footer";
import { getPageBySlug } from "@/lib/docs-navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/../mdx-components";
import fs from "fs";
import path from "path";

interface DocsPageProps {
  params: Promise<{ slug: string[] }>;
}

const docsDirectory = path.join(process.cwd(), "content/docs");

export default async function DocsSlugPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const slugString = slug.join("/");

  const filePath = path.join(docsDirectory, `${slugString}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");

  const { content } = await compileMDX({
    source: rawContent,
    components: useMDXComponents({}),
    options: { parseFrontmatter: true },
  });

  const navPage = getPageBySlug(slugString);
  const displayTitle = navPage?.title || slug.pop() || slugString;

  return (
    <article>
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-[#3c3c3c] mb-2">
          {displayTitle}
        </h1>
      </header>
      <div>{content}</div>
      <DocsFooter slug={slugString} />
    </article>
  );
}

export function generateStaticParams() {
  const slugs = getAllDocSlugs();
  return slugs.map((slug) => ({
    slug: slug.split("/"),
  }));
}
