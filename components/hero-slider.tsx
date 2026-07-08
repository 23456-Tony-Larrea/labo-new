'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    tag: 'NUEVO',
    brand: 'Fillerina®',
    subtitle: 'TRATAMIENTO ANTIEDAD',
    title: 'EFECTO RELLENO',
    tagline: 'NO INJECTIONS, YES TRANSDERMIC TECHNOLOGY',
    image: '/images/product-fillerina.png',
    bg: '/images/hero-skin.png',
    href: '/cuidado-de-la-piel',
  },
  {
    tag: 'NUEVO',
    brand: 'Crescina®',
    subtitle: 'TRATAMIENTO CAPILAR',
    title: 'EFECTO RECRECIMIENTO',
    tagline: 'NO INJECTIONS, YES TRANSDERMIC TECHNOLOGY',
    image: '/images/product-crescina.png',
    bg: '/images/hero-hair.png',
    href: '/cuidado-capilar',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative overflow-hidden bg-[#f5f5f5]" style={{ minHeight: '60vh' }}>
      <Image
        src={slide.bg}
        alt={slide.brand}
        fill
        priority
        className="object-cover object-center transition-opacity duration-700"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-white/20" />

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-[60vh] items-center">
        <div className="container-labo grid grid-cols-1 items-center gap-8 py-16 md:grid-cols-2">
          <div>
            <span className="inline-block border border-brand px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brand">
              {slide.tag}
            </span>
            <p className="mt-3 text-2xl font-light tracking-widest text-foreground">{slide.brand}</p>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {slide.subtitle}
            </p>
            <h1 className="mt-2 text-2xl font-bold uppercase tracking-[0.08em] text-brand">
              {slide.title}
            </h1>
            <p className="mt-3 text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
              {slide.tagline}
            </p>
            <div className="relative mt-6 h-28 w-52">
              <Image
                src={slide.image}
                alt={slide.brand}
                fill
                className="object-contain"
                sizes="208px"
              />
            </div>
            <Link
              href={slide.href}
              className="mt-6 inline-flex items-center gap-2 border border-foreground px-5 py-2 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              VER MÁS <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Swiss Patents badge bottom-left */}
      <div className="absolute bottom-4 left-6 z-10 flex items-center gap-1.5">
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <rect width="28" height="28" rx="4" fill="#CC0000" />
          <rect x="12" y="6" width="4" height="16" fill="white" />
          <rect x="6" y="12" width="16" height="4" fill="white" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-[0.5rem] font-semibold uppercase tracking-wide text-white">Swiss Patents</span>
          <span className="text-[0.45rem] text-white/80">Labo Suisse · est. 1986</span>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`size-2 rounded-full transition-colors ${i === current ? 'bg-brand' : 'bg-foreground/30'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
