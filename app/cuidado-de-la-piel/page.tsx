import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { ProductCard } from '@/components/labo-ui'
import { skinProducts } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Cuidado de la piel – Fillerina 12HA | Labo Suisse',
  description:
    'Fillerina 12HA: tratamiento dermocosmético de relleno-densificador no invasivo, alternativo a las inyecciones de ácido hialurónico, para uso en casa.',
}

const results = [
  { value: '95%', label: 'DE EFECTIVIDAD' },
  { value: '22% a 54%', label: 'REDUCCIÓN DE SURCOS Y LÍNEAS DE EXPRESIÓN' },
  { value: '14,2% a 44,7%', label: 'AUMENTO DE VOLUMEN DE LABIOS' },
  { value: '+2,27 a +3,39 mm', label: 'AUMENTO DE PÓMULOS (EFECTO LIFTING)' },
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
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-[#f0e8e8]">
        <Image
          src="/images/hero-skin.png"
          alt="Cuidado de la piel Fillerina"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container-labo relative z-10 pb-12 pt-24">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/80">
            CUIDADO DE LA PIEL
          </p>
          <h1 className="mt-2 max-w-xl text-3xl font-bold uppercase leading-tight tracking-[0.03em] text-white md:text-5xl">
            EFECTO RELLENO-DENSIFICADOR, SIN INYECCIONES
          </h1>
        </div>
      </section>

      {/* Fillerina 12HA Feature */}
      <section className="py-16 md:py-20">
        <div className="container-labo grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden bg-[#f5e8e8]">
            <Image
              src="/images/product-fillerina.png"
              alt="Fillerina 12HA"
              fill
              className="object-contain p-8"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
          </div>
          <div className="max-w-lg">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-foreground">
              NO INJECTIONS, YES TRANSDERMIC TECHNOLOGY®
            </p>
            <h2 className="mt-3 text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-foreground md:text-3xl">
              PRIMER TRATAMIENTO DERMOCOSMÉTICO DE RELLENO-DENSIFICADOR NO INVASIVO
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Nuestra fórmula patentada de 12 ácidos hialurónicos de distintos pesos moleculares es eficaz para su absorción en las diferentes capas profundas de la piel. Fillerina 12HA logra rellenar líneas de expresión y otorga mayor volumen a mejillas y labios.
            </p>
            <div className="mt-6 flex gap-8">
              <div>
                <span className="block text-3xl font-bold text-brand">95%</span>
                <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">De eficacia comprobada</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-brand">4</span>
                <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">Patentes suizas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-[#f0efed] py-16 md:py-20">
        <div className="container-labo">
          <h2 className="text-center text-base font-semibold uppercase tracking-[0.2em] text-foreground">
            RESULTADOS
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {results.map((r) => (
              <div key={r.label} className="flex flex-col items-center text-center">
                <span className="text-2xl font-bold text-brand md:text-3xl">{r.value}</span>
                <span className="mt-2 text-[0.58rem] font-medium uppercase leading-snug tracking-[0.1em] text-muted-foreground">
                  {r.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section id="productos" className="py-16 md:py-20">
        <div className="container-labo">
          <h2 className="text-center text-base font-semibold uppercase tracking-[0.2em] text-foreground">
            LA LÍNEA FILLERINA® 12HA
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skinProducts.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-border bg-[#f0efed] py-16 md:py-20">
        <div className="container-labo">
          <h2 className="text-center text-base font-semibold uppercase tracking-[0.2em] text-foreground">
            BENEFICIOS
          </h2>
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
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
