import Image from 'next/image'
import type { Metadata } from 'next'
import { CtaLink, Eyebrow, ProductCard, Stat } from '@/components/labo-ui'
import { skinProducts } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Cuidado de la piel – Fillerina 12HA | Labo Suisse',
  description:
    'Fillerina 12HA: tratamiento dermocosmético de relleno-densificador no invasivo, alternativo a las inyecciones de ácido hialurónico, para uso en casa.',
}

const results = [
  { value: '95%', label: 'De efectividad' },
  { value: '22% a 54%', label: 'Reducción de surcos y líneas de expresión' },
  { value: '14,2% a 44,7%', label: 'Aumento de volumen de labios' },
  { value: '+2,27 a +3,39 mm', label: 'Aumento de pómulos (efecto lifting)' },
]

const benefits = [
  'Piel hidratada y con +15% de volumen',
  'Efecto relleno promedio de un 22,8%',
  'Reducción de arrugas y líneas finas de expresión',
  'Mejor elasticidad y firmeza',
  'Renovación celular y recuperación de la barrera cutánea',
  'Piel más suave, vibrante y saludable',
]

export default function SkinCarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-secondary">
        <Image
          src="/images/hero-skin.png"
          alt="Cuidado de la piel Fillerina"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/45 to-transparent" />
        <div className="container-labo relative">
          <div className="max-w-xl">
            <Eyebrow>Fillerina® 12HA</Eyebrow>
            <h1 className="mt-5 text-balance text-3xl font-semibold uppercase leading-tight tracking-[0.02em] md:text-5xl">
              Efecto relleno-densificador, sin inyecciones
            </h1>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Tratamiento no invasivo para uso en casa, alternativo a las inyecciones de ácido
              hialurónico.
            </p>
            <div className="mt-8">
              <CtaLink href="#productos">Ver productos</CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="container-labo grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-balance text-2xl font-semibold uppercase leading-tight tracking-[0.04em] md:text-3xl">
              Primer tratamiento dermocosmético de relleno-densificador no invasivo
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Nuestra fórmula patentada de 12 ácidos hialurónicos de distintos pesos moleculares es
              eficaz para su absorción en las diferentes capas profundas de la piel. Fillerina 12HA
              logra rellenar líneas de expresión y otorga mayor volumen a mejillas y labios.
            </p>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-brand">
              No injections, yes transdermic technology®
            </p>
          </div>
          <div className="flex justify-around gap-6 border border-border p-8">
            <Stat value="95%" label="De eficacia comprobada" />
            <div className="w-px bg-border" />
            <Stat value="4" label="Patentes suizas" />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="container-labo">
          <h2 className="text-center text-2xl font-semibold uppercase tracking-[0.08em]">
            Resultados
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-4">
            {results.map((r) => (
              <Stat key={r.label} value={r.value} label={r.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section id="productos" className="py-20 md:py-28">
        <div className="container-labo">
          <h2 className="text-center text-2xl font-semibold uppercase tracking-[0.08em]">
            La línea Fillerina® 12HA
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skinProducts.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-border bg-secondary py-20 md:py-24">
        <div className="container-labo">
          <h2 className="text-center text-2xl font-semibold uppercase tracking-[0.08em]">
            Beneficios
          </h2>
          <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
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
