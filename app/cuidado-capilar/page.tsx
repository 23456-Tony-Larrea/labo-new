import Image from 'next/image'
import type { Metadata } from 'next'
import { CtaLink, Eyebrow, ProductCard, Stat } from '@/components/labo-ui'
import { hairProducts } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Cuidado capilar – Crescina HFSC | Labo Suisse',
  description:
    'Crescina Transdermic HFSC: tratamiento de recrecimiento capilar con tecnología transdérmica que contrarresta el adelgazamiento y la caída del cabello.',
}

const results = [
  'De +7 a +41 cabellos nuevos que crecen en 1,8 cm²',
  'Más volumen',
  'Cabello más firme',
  '100% efectivo',
  'Más confianza',
  'No invasivo',
]

export default function HairCarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-secondary">
        <Image
          src="/images/hero-hair.png"
          alt="Cuidado capilar Crescina"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-transparent" />
        <div className="container-labo relative">
          <div className="max-w-xl">
            <Eyebrow>Crescina · Transdermic HFSC</Eyebrow>
            <h1 className="mt-5 text-balance text-3xl font-semibold uppercase leading-tight tracking-[0.02em] md:text-5xl">
              Tratamiento de recrecimiento capilar
            </h1>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Desarrollado para contrarrestar el adelgazamiento y la caída, estimulando el
              recrecimiento fisiológico del cabello.
            </p>
            <div className="mt-8">
              <CtaLink href="#productos">Ver productos</CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* Intro + stats */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="container-labo grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand">
              No injections, yes transdermic technology®
            </span>
            <h2 className="mt-4 text-balance text-2xl font-semibold uppercase leading-tight tracking-[0.04em] md:text-3xl">
              Existen muchos productos para la caída, pero pocos atacan el recrecimiento
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Con Crescina ya tienes la solución: un tratamiento de recrecimiento capilar con
              tecnología transdérmica que actúa directamente sobre el problema de la caída del
              cabello.
            </p>
          </div>
          <div className="flex justify-around gap-4 border border-border p-8">
            <Stat value="100%" label="De eficacia comprobada" />
            <div className="w-px bg-border" />
            <Stat value="6.300" label="Nuevos cabellos" />
            <div className="w-px bg-border" />
            <Stat value="8" label="Patentes suizas y europeas" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="productos" className="py-20 md:py-28">
        <div className="container-labo flex flex-col gap-16">
          <div>
            <div className="flex flex-col items-center text-center">
              <Eyebrow>Anti hair loss</Eyebrow>
              <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[0.06em]">
                Tratamiento completo
              </h2>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                ¿Tienes problemas de caída del cabello?
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
              {hairProducts.antiHairLoss.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col items-center text-center">
              <Eyebrow>Re-growth</Eyebrow>
              <h2 className="mt-3 text-2xl font-semibold uppercase tracking-[0.06em]">
                Producto de recrecimiento
              </h2>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                ¿Tienes menos volumen en tu cabello?
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
              {hairProducts.reGrowth.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results & benefits */}
      <section className="border-t border-border bg-secondary py-20 md:py-24">
        <div className="container-labo">
          <h2 className="text-center text-2xl font-semibold uppercase tracking-[0.08em]">
            Resultados y beneficios
          </h2>
          <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {results.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm leading-relaxed">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
