import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HeroSlider } from '@/components/hero-slider'

function OutlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 border border-foreground px-5 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-foreground transition-colors hover:border-brand hover:text-brand"
    >
      {children} <ArrowRight className="size-3" />
    </Link>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Efficacy Section */}
      <section className="bg-[#f0efed] py-16 md:py-20">
        <div className="container-labo grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="max-w-lg">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground">
              EFICACIA COMPROBADA
            </p>
            <h2 className="mt-3 text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-foreground md:text-3xl">
              BELLEZAS SIN AGUJAS,<br />RESULTADOS SIN ARRUGAS
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Labo siempre está a la vanguardia de las nuevas tendencias en medicina estética, desarrollando nuevos productos innovadores patentados capaces de alcanzar los mejores resultados naturales.
            </p>
            <div className="mt-6">
              <OutlineLink href="/tecnologia-transdermica">TECNOLOGÍA TRANSDÉRMICA</OutlineLink>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
            <Image
              src="/images/skin-closeup.png"
              alt="Piel radiante y firme"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
          </div>
        </div>
      </section>

      {/* Research & Innovation - 3 columns */}
      <section className="py-16 md:py-20">
        <div className="container-labo grid grid-cols-1 items-center gap-0 md:grid-cols-3">
          {/* Left image */}
          <div className="relative aspect-square overflow-hidden bg-[#f5e8ea]">
            <Image
              src="/images/product-fillerina.png"
              alt="Fillerina productos"
              fill
              className="object-contain p-8"
              sizes="(min-width: 768px) 33vw, 90vw"
            />
          </div>

          {/* Center text */}
          <div className="flex flex-col items-center px-8 py-12 text-center">
            <h2 className="text-xl font-bold uppercase leading-tight tracking-[0.08em] text-foreground">
              ENTRE LA INVESTIGACIÓN<br />E INNOVACIÓN
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Labo ha puesto el foco en la investigación y desarrollo de tecnologías revolucionarias creando así productos dermocosméticos innovadores para el cuidado de la piel y el cabello desde 1986
            </p>
            <div className="mt-6">
              <OutlineLink href="/descubre-labo">CONOCE A LABO</OutlineLink>
            </div>
          </div>

          {/* Right image */}
          <div className="relative aspect-square overflow-hidden bg-[#f5f0e8]">
            <Image
              src="/images/product-crescina.png"
              alt="Crescina ampollas"
              fill
              className="object-contain p-8"
              sizes="(min-width: 768px) 33vw, 90vw"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="container-labo">
          <h2 className="text-center text-base font-semibold uppercase tracking-[0.2em] text-foreground">
            NUESTROS PRODUCTOS
          </h2>

          {/* Fillerina */}
          <div className="mt-10 grid grid-cols-1 items-center gap-0 md:grid-cols-2">
            <div className="order-2 px-8 py-10 md:order-1 md:px-16">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-foreground">
                FILLERINA PARA ROSTRO Y CUELLO
              </p>
              <h3 className="mt-3 text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-foreground">
                EFECTO RELLENO.<br />SIN INYECCIONES
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Para dar mayor volumen a los pómulos y labios. Primer y único tratamiento de relleno-densificador alternativo a las inyecciones de ácido hialurónico para uso en casa.
              </p>
              <div className="mt-6">
                <OutlineLink href="/cuidado-de-la-piel">SABER MÁS</OutlineLink>
              </div>
            </div>
            <div className="relative order-1 aspect-square overflow-hidden bg-secondary md:order-2">
              <Image
                src="/images/product-fillerina.png"
                alt="Fillerina para rostro y cuello"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 90vw"
              />
            </div>
          </div>

          {/* Crescina */}
          <div className="mt-0 grid grid-cols-1 items-center gap-0 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <Image
                src="/images/product-crescina.png"
                alt="Crescina tratamiento de recrecimiento capilar"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 90vw"
              />
            </div>
            <div className="px-8 py-10 md:px-16">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-foreground">
                CRESCINA – TRATAMIENTO DE RECRECIMIENTO CAPILAR
              </p>
              <h3 className="mt-3 text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-foreground">
                EFICACIA DEL 100% EN LAS PERSONAS TESTEADAS
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Crescina es un tratamiento dermocosmético que previene y trata el adelgazamiento del cabello estimulando el recrecimiento capilar.
              </p>
              <div className="mt-6">
                <OutlineLink href="/cuidado-capilar">SABER MÁS</OutlineLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
