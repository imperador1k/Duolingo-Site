// src/app/blog/page.tsx
"use client";

import React, { useState } from 'react';
import './blog.css';
import Link from 'next/link';
import { BLOG_ARTICLES } from '@/data/blog-data';
import { useTranslation } from '@/hooks/useTranslation';

export default function BlogHome() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", ...Array.from(new Set(BLOG_ARTICLES.map(a => a.categoryKey)))];

  const filteredArticles = BLOG_ARTICLES.filter(article => {
    const title = t('blog.article.' + article.slug + '.title') || article.title;
    const summary = t('blog.article.' + article.slug + '.summary') || article.summary;
    const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || article.categoryKey === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = BLOG_ARTICLES.find(a => a.featured) || BLOG_ARTICLES[0];

  return (
    <div className="blog-container">
      {/* Hero Section */}
      <header style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '60px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <span className="category-badge" style={{ backgroundColor: 'var(--pastel-orange)', color: '#a35d00' }}>{t('blog.category.' + featuredArticle.categoryKey) || featuredArticle.category}</span>
          <h1 className="blog-title" style={{ fontSize: '3.5rem', marginBottom: '20px', lineHeight: 1.1 }}>{t('blog.article.' + featuredArticle.slug + '.title') || featuredArticle.title}</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--blog-gray)', marginBottom: '32px' }}>{t('blog.article.' + featuredArticle.slug + '.summary') || featuredArticle.summary}</p>
          <Link href={`/blog/${featuredArticle.slug}`}>
            <button className="btn-ver-mais">{t('blog.featured.read')}</button>
          </Link>
        </div>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <img src={featuredArticle.image} alt="Hero" style={{ width: '100%', borderRadius: '24px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }} />
        </div>
      </header>

      {/* Search & Filters */}
      <section style={{ marginBottom: '40px' }}>
        <div className="search-container">
          <span style={{ position: 'absolute', left: '20px', top: '18px', fontSize: '1.2rem' }}>🔍</span>
          <input 
            type="text" 
            placeholder={t('blog.search.placeholder')} 
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'all' ? t('blog.search.all') : t('blog.category.' + cat)}
            </button>
          ))}
        </div>
      </section>

      {/* Dynamic Grid */}
      <section>
        <h2 className="blog-title" style={{ fontSize: '2rem', marginBottom: '32px' }}>
          {searchQuery ? `"${searchQuery}"` : t('blog.search.all')}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {filteredArticles.length > 0 ? filteredArticles.map((article) => (
            <Link href={`/blog/${article.slug}`} key={article.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="blog-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <img src={article.image} alt={t('blog.article.' + article.slug + '.title') || article.title} style={{ width: '100%', height: '180px', objectFit: 'contain', marginBottom: '16px' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span className="category-badge" style={{ backgroundColor: '#f0f0f0', color: '#666', margin: 0 }}>{t('blog.category.' + article.categoryKey) || article.category}</span>
                  <span style={{ fontSize: '0.8rem', color: '#999' }}>⏱️ 3 {t('blog.read_time')}</span>
                </div>
                <h3 className="blog-title" style={{ fontSize: '1.4rem' }}>{t('blog.article.' + article.slug + '.title') || article.title}</h3>
                <p style={{ color: 'var(--blog-gray)', flex: 1 }}>{t('blog.article.' + article.slug + '.summary') || article.summary}</p>
                <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '12px', fontSize: '0.85rem', color: '#555', fontWeight: '600' }}>
                  {t('blog.card.by')} {article.author}
                </div>
              </div>
            </Link>
          )) : (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px' }}>
              <img src="/images/duolingo40.webp" style={{ width: '120px', opacity: 0.5 }} />
              <p style={{ color: '#aaa', marginTop: '16px' }}>{t('blog.not_found.message')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Box */}
      <section className="newsletter-box">
        <div style={{ flex: 1 }}>
          <h2 className="blog-title" style={{ color: '#856404', fontSize: '2.2rem' }}>{t('blog.newsletter.title')}</h2>
          <p style={{ color: '#a37d00', fontSize: '1.1rem' }}>{t('blog.newsletter.desc')}</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            <input 
              type="email" 
              placeholder={t('blog.newsletter.placeholder')} 
              className="newsletter-input"
            />
            <button className="btn-ver-mais" style={{ backgroundColor: '#ff4b4b', borderColor: '#d13b3b', whiteSpace: 'nowrap' }}>
              {t('blog.newsletter.button')}
            </button>
          </div>
        </div>
        <div style={{ flex: 0.6, display: 'flex', justifyContent: 'center' }}>
                     <img src="/images/duolingo42.webp" alt="Newsletter" style={{ width: '200px' }} />
        </div>
      </section>
    </div>
  );
}
