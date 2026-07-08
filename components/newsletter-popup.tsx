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
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Suscríbete al newsletter"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden bg-background shadow-2xl md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-10 flex size-7 items-center justify-center rounded-full bg-white/80 text-foreground/70 transition-colors hover:bg-white hover:text-brand"
        >
          <X className="size-3.5" />
        </button>

        {/* Image panel */}
        <div className="relative hidden min-h-[26rem] md:block">
          <Image
            src="/images/hero-skin.png"
            alt="Fillerina Labo Suisse"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 24rem, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-white/70">
              ÚNETE A
            </p>
            <p className="text-2xl font-bold uppercase tracking-[0.12em] text-white">LABOCLUB</p>
            <p className="mt-1 text-[0.6rem] uppercase tracking-[0.14em] text-white/60">
              Labo Suisse · est. 1986
            </p>
          </div>
        </div>

        {/* Form panel */}
        <div className="flex flex-col gap-4 p-6 md:p-8">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            SUSCRÍBETE AL NEWSLETTER
          </p>
          <h2 className="text-base font-bold uppercase tracking-[0.06em] text-foreground">
            SÉ PARTE DE UN CLUB EXCLUSIVO
          </h2>
          {submitted ? (
            <p className="text-sm text-muted-foreground">
              ¡Gracias por unirte! Pronto recibirás nuestras novedades.
            </p>
          ) : (
            <>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Suscríbete y obtén información, novedades, concursos y todo lo que necesitas para transformar tu piel y cabello junto a las innovaciones dermocosméticas de Labo Suisse.
              </p>
              <form
                className="flex flex-col gap-2.5"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <input
                  required
                  placeholder="Nombre"
                  className="border border-border bg-background px-3 py-2 text-xs outline-none focus:border-brand"
                />
                <input
                  required
                  placeholder="Teléfono"
                  className="border border-border bg-background px-3 py-2 text-xs outline-none focus:border-brand"
                />
                <input
                  required
                  type="email"
                  placeholder="Introduce tu email"
                  className="border border-border bg-background px-3 py-2 text-xs outline-none focus:border-brand"
                />
                <label className="flex items-start gap-2 text-[0.65rem] leading-snug text-muted-foreground">
                  <input required type="checkbox" className="mt-0.5 accent-brand" />
                  He leído la información sobre el tratamiento de datos personales.
                </label>
                <label className="flex items-start gap-2 text-[0.65rem] leading-snug text-muted-foreground">
                  <input type="checkbox" className="mt-0.5 accent-brand" />
                  Acepto recibir comunicaciones comerciales de Labo Suisse Chile.
                </label>
                <button
                  type="submit"
                  className="mt-1 bg-brand px-6 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-foreground transition-opacity hover:opacity-90"
                >
                  UNIRME A LABO CLUB
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
