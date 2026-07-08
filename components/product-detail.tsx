'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ChevronRight } from 'lucide-react'
import type { Product } from '@/lib/products'
import { cn } from '@/lib/utils'

export function ProductDetail({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState(0)
  const [option, setOption] = useState('')

  return (
    <div className="py-10 md:py-14">
      <div className="container-labo">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-brand">Home</Link>
          <ChevronRight className="size-3" />
          <span>Productos</span>
          <ChevronRight className="size-3" />
          <Link href={product.categoryHref} className="hover:text-brand">
            {product.category}
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Main */}
        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-square overflow-hidden border border-border bg-secondary">
            <Image
              src={product.image || '/placeholder.svg'}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
          </div>

          <div>
            <h1 className="text-2xl font-semibold uppercase leading-tight tracking-[0.04em] md:text-3xl">
              {product.name}
            </h1>
            <p className="mt-3 leading-relaxed text-muted-foreground">{product.shortDescription}</p>

            <ul className="mt-6 flex flex-col gap-2.5">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  {h}
                </li>
              ))}
            </ul>

            {/* Option selector */}
            <div className="mt-8">
              <label
                htmlFor="product-option"
                className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
              >
                {product.optionLabel}
              </label>
              <select
                id="product-option"
                value={option}
                onChange={(e) => setOption(e.target.value)}
                className="mt-2 w-full max-w-xs border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
              >
                <option value="">Elige una opción</option>
                {product.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              className="mt-6 w-full max-w-xs bg-brand px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!option}
            >
              {option ? 'Añadir al carrito' : 'Selecciona una opción'}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 border-t border-border pt-10">
          <div className="flex flex-wrap gap-6 border-b border-border">
            {product.tabs.map((tab, i) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(i)}
                className={cn(
                  '-mb-px border-b-2 pb-3 text-xs font-semibold uppercase tracking-[0.12em] transition-colors',
                  activeTab === i
                    ? 'border-brand text-brand'
                    : 'border-transparent text-muted-foreground hover:text-foreground',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8 max-w-3xl">
            {product.tabs[activeTab].paragraphs.map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            {product.tabs[activeTab].bullets && (
              <ul className="mt-2 flex flex-col gap-2.5">
                {product.tabs[activeTab].bullets!.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Efficacy */}
        {product.efficacy && (
          <div className="mt-14 border border-border bg-secondary p-8 md:p-10">
            <h2 className="text-lg font-semibold uppercase tracking-[0.08em]">
              {product.efficacy.title}
            </h2>
            <dl className="mt-6 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
              {product.efficacy.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 border-b border-border py-3"
                >
                  <dt className="text-sm text-muted-foreground">{row.label}</dt>
                  <dd className="text-right text-sm font-semibold text-brand">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </div>
  )
}
