// src/app/blog/[slug]/page.tsx
"use client";

import React from 'react';
import '../blog.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BLOG_ARTICLES } from '@/data/blog-data';
import { useTranslation } from '@/hooks/useTranslation';

export default function ArticlePage() {
  const { t } = useTranslation();
  const params = useParams();
  const slug = params.slug;
  
  const article = BLOG_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="blog-container" style={{ textAlign: 'center', padding: '100px' }}>
        <h1 className="blog-title">{t('blog.not_found.title')}</h1>
        <Link href="/blog" style={{ color: 'var(--blog-green)', fontWeight: '700' }}>{t('blog.back')}</Link>
      </div>
    );
  }

  return (
    <div className="blog-container" style={{ maxWidth: '800px' }}>
      <Link href="/blog" style={{ color: 'var(--blog-green)', fontWeight: '700', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
        ← {t('blog.back')}
      </Link>

      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span className="category-badge" style={{ backgroundColor: 'var(--pastel-blue)', color: '#007bb5' }}>{t('blog.category.' + article.categoryKey) || article.category}</span>
        <h1 className="blog-title" style={{ fontSize: '3rem', marginTop: '16px', marginBottom: '16px', lineHeight: 1.1 }}>
          {t('blog.article.' + article.slug + '.title') || article.title}
        </h1>
        <p style={{ color: 'var(--blog-gray)', fontWeight: '600' }}>{article.date} • {t('blog.card.by')} {article.author}</p>
        
        <div style={{ marginTop: '40px', borderRadius: '32px', overflow: 'hidden', border: '2px solid var(--blog-border)', backgroundColor: '#f9f9f9' }}>
          <img src={article.image} alt={t('blog.article.' + article.slug + '.title') || article.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', display: 'block', padding: '20px' }} />
        </div>
      </header>

      {/* Conteúdo Dinâmico */}
      <article 
        className="blog-article-content"
        style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#4b4b4b', marginBottom: '80px' }}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Sugestões (Dinâmicas - exclui o artigo atual) */}
      <section style={{ borderTop: '2px solid var(--blog-border)', paddingTop: '60px', marginBottom: '80px' }}>
        <h3 className="blog-title" style={{ fontSize: '1.8rem', marginBottom: '32px' }}>{t('blog.related.title')}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {BLOG_ARTICLES.filter(a => a.slug !== slug).slice(0, 3).map((a) => (
            <Link href={`/blog/${a.slug}`} key={a.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="blog-card" style={{ padding: '16px' }}>
                <img src={a.image} alt={t('blog.article.' + a.slug + '.title') || a.title} style={{ width: '100%', height: '100px', objectFit: 'contain' }} />
                <h5 className="blog-title" style={{ fontSize: '0.95rem', marginTop: '12px' }}>{t('blog.article.' + a.slug + '.title') || a.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
