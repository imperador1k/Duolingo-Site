"use client";

import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef, memo } from 'react';

// Importa o Lottie apenas no lado do cliente com ssr: false para evitar processamento no servidor
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface LazyLottieProps {
  animationPath: string;
  className?: string;
  priority?: boolean;
}

/**
 * LazyLottie - Versão Auditada e Otimizada
 * 
 * Correções feitas:
 * 1. Uso de useRef em vez de getElementById (evita colisões e acessos globais pesados).
 * 2. AbortController no fetch para evitar memory leaks em componentes que desmontam.
 * 3. Memoização para evitar re-renders desnecessários.
 * 4. Isolamento estrito do ciclo de vida da animação.
 */
const LazyLottieComponent = ({ animationPath, className, priority = false }: LazyLottieProps) => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [inView, setInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: '200px' } // Reduced margin for better CPU management
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (!inView && !priority) return;
    if (animationData) return;

    const controller = new AbortController();
    
    const loadLottie = async () => {
      // Check sessionStorage cache first
      const cacheKey = `lottie:${animationPath}`;
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        try {
          setAnimationData(JSON.parse(cached));
          return;
        } catch {
          sessionStorage.removeItem(cacheKey);
        }
      }

      try {
        const response = await fetch(animationPath, { signal: controller.signal });
        if (!response.ok) throw new Error("Lottie not found");
        const data = await response.json();
        // Cache in sessionStorage (limit to ~5MB per entry)
        const jsonStr = JSON.stringify(data);
        if (jsonStr.length < 5 * 1024 * 1024) {
          sessionStorage.setItem(cacheKey, jsonStr);
        }
        setAnimationData(data);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          console.error("Lottie Load Error:", err);
        }
      }
    };

    loadLottie();

    return () => controller.abort();
  }, [animationPath, inView, priority, animationData]);

  return (
    <div 
      ref={containerRef}
      className={`${className || ''} transition-opacity duration-700 ${animationData ? 'opacity-100' : 'opacity-0'}`}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '1px' }}
    >
      {animationData ? (
        <Lottie 
          animationData={animationData} 
          loop={true} 
          autoplay={inView || priority} 
          rendererSettings={{
            progressiveLoad: true,
            preserveAspectRatio: 'xMidYMid slice'
          }}
          className="w-full h-full"
        />
      ) : (
        <div className="w-full h-full bg-transparent" />
      )}
    </div>
  );
};

export const LazyLottie = memo(LazyLottieComponent);
