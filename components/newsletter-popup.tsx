'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export function NewsletterPopup() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Suscríbete al newsletter"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden bg-background shadow-xl md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-secondary hover:text-brand"
        >
          <X className="size-4" />
        </button>

        <div className="relative hidden min-h-[22rem] md:block">
          <Image
            src="/images/hero-transdermic.png"
            alt="Ampollas y sérum Labo Suisse"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 24rem, 100vw"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/50 to-transparent p-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-background">
              Únete a <span className="block text-2xl font-semibold tracking-[0.15em]">Laboclub</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 md:p-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Suscríbete al newsletter
          </p>
          <h2 className="text-lg font-semibold uppercase tracking-[0.08em]">
            Sé parte de un club exclusivo
          </h2>
          {submitted ? (
            <p className="text-sm text-muted-foreground">
              ¡Gracias por unirte! Pronto recibirás nuestras novedades.
            </p>
          ) : (
            <>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Suscríbete y obtén información, novedades, concursos y todo lo que necesitas para
                transformar tu piel y cabello junto a las innovaciones dermocosméticas de Labo Suisse.
              </p>
              <form
                className="flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <input
                  required
                  placeholder="Nombre"
                  className="border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
                />
                <input
                  required
                  placeholder="Teléfono"
                  className="border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
                />
                <input
                  required
                  type="email"
                  placeholder="Introduce tu email"
                  className="border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
                />
                <label className="flex items-start gap-2 text-[0.7rem] leading-snug text-muted-foreground">
                  <input required type="checkbox" className="mt-0.5" />
                  He leído la información sobre el tratamiento de datos personales.
                </label>
                <button
                  type="submit"
                  className="mt-1 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Unirme a Labo Club
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
