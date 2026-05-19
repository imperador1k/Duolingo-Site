import fs from "fs";
import path from "path";

const docsDirectory = path.join(process.cwd(), "content/docs");

export interface DocMeta {
  slug: string;
  title: string;
  description: string;
  content: string;
  group?: string;
}

export function getDocBySlug(slug: string): DocMeta | null {
  const filePath = path.join(docsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const title = extractFrontmatter(raw, "title") || slug.split("/").pop() || slug;
  const description = extractFrontmatter(raw, "description") || "";

  return {
    slug,
    title,
    description,
    content: raw,
  };
}

export function getAllDocSlugs(): string[] {
  const slugs: string[] = [];

  function walk(dir: string, base = "") {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full, base ? `${base}/${entry.name}` : entry.name);
      } else if (entry.name.endsWith(".mdx")) {
        const slug = base ? `${base}/${entry.name.replace(".mdx", "")}` : entry.name.replace(".mdx", "");
        slugs.push(slug);
      }
    }
  }

  if (fs.existsSync(docsDirectory)) {
    walk(docsDirectory);
  }

  return slugs;
}

function extractFrontmatter(raw: string, key: string): string | null {
  const match = raw.match(new RegExp(`^---\\n[\\s\\S]*?${key}:\\s*["']?([^"'\n]+)["']?`, "m"));
  return match ? match[1].trim() : null;
}
