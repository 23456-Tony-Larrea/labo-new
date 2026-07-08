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

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-labo flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Left: desktop nav */}
        <nav className="hidden flex-1 items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-[0.72rem] font-medium uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:text-brand',
                pathname === item.href && 'text-brand',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {/* Center: logo */}
        <Link href="/" className="flex shrink-0 items-center justify-center" aria-label="Labo Suisse inicio">
          <LaboLogo className="text-2xl md:text-3xl" />
        </Link>

        {/* Right: search */}
        <div className="flex flex-1 items-center justify-end">
          <button
            type="button"
            className="flex items-center justify-center text-foreground/80 transition-colors hover:text-brand"
            aria-label="Buscar"
          >
            <Search className="size-5" />
          </button>
        </div>
      </div>

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
