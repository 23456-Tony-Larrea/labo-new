'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LaboLogo } from './labo-logo'

const NAV = [
  { label: 'Cuidado de la piel', href: '/cuidado-de-la-piel' },
  { label: 'Cuidado capilar', href: '/cuidado-capilar' },
  { label: 'Tecnología transdérmica', href: '/tecnologia-transdermica' },
  { label: 'Descubre Labo', href: '/descubre-labo' },
]

function SwissPatentsBadge() {
  return (
    <div className="hidden items-center gap-1.5 lg:flex">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect width="28" height="28" rx="4" fill="#CC0000" />
        <rect x="12" y="6" width="4" height="16" fill="white" />
        <rect x="6" y="12" width="16" height="4" fill="white" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.1em] text-foreground">Swiss</span>
        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.1em] text-foreground">Patents</span>
        <span className="text-[0.48rem] text-muted-foreground tracking-wide">Labo Suisse · est. 1986</span>
      </div>
    </div>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/98 backdrop-blur">
      {/* Top row: Swiss Patents | LABO | Search */}
      <div className="container-labo flex h-14 items-center justify-between gap-4">
        {/* Left: Swiss Patents badge */}
        <div className="flex w-36 items-center">
          <SwissPatentsBadge />
          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center justify-center lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Center: logo */}
        <Link href="/" className="flex shrink-0 items-center justify-center" aria-label="Labo Suisse inicio">
          <LaboLogo className="text-3xl" />
        </Link>

        {/* Right: search */}
        <div className="flex w-36 items-center justify-end">
          <button
            type="button"
            className="flex items-center justify-center text-foreground/70 transition-colors hover:text-brand"
            aria-label="Buscar"
          >
            <Search className="size-4" />
          </button>
        </div>
      </div>

      {/* Bottom row: desktop nav */}
      <nav className="hidden border-t border-border lg:block">
        <div className="container-labo flex h-10 items-center justify-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-[0.65rem] font-medium uppercase tracking-[0.14em] text-foreground/70 transition-colors hover:text-brand',
                pathname === item.href && 'text-brand',
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile nav panel */}
      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <ul className="container-labo flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block py-3 text-sm font-medium uppercase tracking-[0.12em] text-foreground/80',
                    pathname === item.href && 'text-brand',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
