'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

interface SliderProps {
  images: string[];
  alt: string;
  /** Tailwind aspect / height classes for the frame. */
  className?: string;
  sizes?: string;
  /** Show arrows as well as dots. Off for small cards where they crowd. */
  arrows?: boolean;
  priority?: boolean;
  /** Advance on a timer until the visitor interacts or hovers. */
  autoPlay?: boolean;
  /** Seconds between automatic advances. */
  interval?: number;
}

/**
 * Manual slider with dots — for hotel and airline cards, where the visitor
 * wants to look at a specific photo rather than have it move under them.
 */
export function ImageSlider({
  images,
  alt,
  className = 'aspect-[4/3]',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  arrows = true,
  priority = false,
  autoPlay = true,
  interval = 6,
}: SliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const reduced = usePrefersReducedMotion();
  const count = images.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  );

  // Advance on a timer, but stop the moment the visitor takes control —
  // a carousel that moves while you are looking at a photo is infuriating.
  useEffect(() => {
    if (!autoPlay || paused || reduced || count < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), interval * 1000);
    return () => window.clearInterval(id);
  }, [autoPlay, paused, reduced, count, interval]);

  if (count === 0) return null;

  return (
    <div
      className={`group relative overflow-hidden bg-[#F2EEE5] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === index ? alt : ''}
          fill
          sizes={sizes}
          priority={priority && i === 0}
          className={`object-cover transition-opacity duration-500 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== index}
        />
      ))}

      {/* Swipe target — mobile users expect to drag, not hunt for arrows.
          Sits below the controls so it never swallows an arrow or dot click. */}
      <div
        className="absolute inset-0 z-10"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
          touchStartX.current = null;
        }}
      />

      {count > 1 && (
        <>
          {arrows && (
            <>
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous photo"
                className="absolute start-2 z-20 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1a1a1a] opacity-0 shadow-md ring-1 ring-black/5 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 hover:bg-white focus-visible:opacity-100 sm:flex"
              >
                <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next photo"
                className="absolute end-2 z-20 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1a1a1a] opacity-0 shadow-md ring-1 ring-black/5 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 hover:bg-white focus-visible:opacity-100 sm:flex"
              >
                <ChevronRight className="h-4 w-4 rtl:rotate-180" />
              </button>
            </>
          )}

          <div className="absolute inset-x-0 bottom-2.5 z-20 flex items-center justify-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Photo ${i + 1} of ${count}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/85'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

interface RotatorProps {
  images: string[];
  alt: string;
  className?: string;
  sizes?: string;
  /** Seconds between changes. */
  interval?: number;
  priority?: boolean;
  children?: React.ReactNode;
}

/**
 * Slow cross-fade with no controls — for destination cards and hero panels,
 * where photography should breathe rather than demand interaction.
 * Honours prefers-reduced-motion by holding on the first frame.
 */
export function AutoRotateImage({
  images,
  alt,
  className = 'aspect-[4/5]',
  sizes = '(max-width: 640px) 100vw, 33vw',
  interval = 7,
  priority = false,
  children,
}: RotatorProps) {
  const [index, setIndex] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || images.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval * 1000
    );
    return () => window.clearInterval(id);
  }, [reduced, images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden bg-[#F2EEE5] ${className}`}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === 0 ? alt : ''}
          fill
          sizes={sizes}
          priority={priority && i === 0}
          className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== index}
        />
      ))}
      {children}
    </div>
  );
}
