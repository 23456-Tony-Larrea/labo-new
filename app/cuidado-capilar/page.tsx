import Image from 'next/image'
import type { Metadata } from 'next'
import { ProductCard } from '@/components/labo-ui'
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
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-secondary">
        <Image
          src="/images/hero-hair.png"
          alt="Cuidado capilar Crescina"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-labo relative z-10 pb-12 pt-24">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/80">
            CUIDADO CAPILAR
          </p>
          <h1 className="mt-2 max-w-xl text-3xl font-bold uppercase leading-tight tracking-[0.03em] text-white md:text-5xl">
            TRATAMIENTO DE RECRECIMIENTO CAPILAR
          </h1>
        </div>
      </section>

      {/* Crescina Feature */}
      <section className="py-16 md:py-20">
        <div className="container-labo grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="max-w-lg">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-foreground">
              NO INJECTIONS, YES TRANSDERMIC TECHNOLOGY®
            </p>
            <h2 className="mt-3 text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-foreground md:text-3xl">
              EXISTEN MUCHOS PRODUCTOS PARA LA CAÍDA, PERO POCOS ATACAN EL RECRECIMIENTO
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Con Crescina ya tienes la solución: un tratamiento de recrecimiento capilar con tecnología transdérmica que actúa directamente sobre el problema de la caída del cabello.
            </p>
            <div className="mt-6 flex gap-10">
              <div>
                <span className="block text-3xl font-bold text-brand">100%</span>
                <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">De eficacia comprobada</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-brand">6.300</span>
                <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">Nuevos cabellos</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-brand">8</span>
                <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">Patentes suizas y europeas</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden bg-[#f0f0f0]">
            <Image
              src="/images/product-crescina.png"
              alt="Crescina HFSC"
              fill
              className="object-contain p-8"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
          </div>
        </div>
      </section>

      {/* Products - Anti Hair Loss */}
      <section id="productos" className="border-t border-border py-16 md:py-20">
        <div className="container-labo flex flex-col gap-16">
          <div>
            <p className="text-center text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-brand">
              ANTI HAIR LOSS
            </p>
            <h2 className="mt-2 text-center text-base font-semibold uppercase tracking-[0.16em] text-foreground">
              TRATAMIENTO COMPLETO
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              ¿Tienes problemas de caída del cabello?
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
              {hairProducts.antiHairLoss.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-center text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-brand">
              RE-GROWTH
            </p>
            <h2 className="mt-2 text-center text-base font-semibold uppercase tracking-[0.16em] text-foreground">
              PRODUCTO DE RECRECIMIENTO
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              ¿Tienes menos volumen en tu cabello?
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
              {hairProducts.reGrowth.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results & Benefits */}
      <section className="border-t border-border bg-[#f0efed] py-16 md:py-20">
        <div className="container-labo">
          <h2 className="text-center text-base font-semibold uppercase tracking-[0.2em] text-foreground">
            RESULTADOS Y BENEFICIOS
          </h2>
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
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
