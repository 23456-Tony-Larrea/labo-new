import Image from 'next/image'
import { CtaLink, Eyebrow, Stat } from '@/components/labo-ui'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-secondary">
        <Image
          src="/images/hero-transdermic.png"
          alt="Ampollas de sérum y tratamiento transdérmico Labo Suisse"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
        <div className="container-labo relative">
          <div className="max-w-xl">
            <Eyebrow>No injections, yes transdermic technology®</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl font-semibold uppercase leading-[1.05] tracking-[0.02em] md:text-6xl">
              Belleza sin agujas, resultados sin arrugas
            </h1>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Dermocosmética suiza de vanguardia. Innovación patentada que transforma tu piel y tu
              cabello con la fuerza de la tecnología transdérmica.
            </p>
            <div className="mt-8">
              <CtaLink href="/tecnologia-transdermica">Ver más</CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* Efficacy */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="container-labo grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Eficacia comprobada</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-semibold uppercase leading-tight tracking-[0.04em] md:text-4xl">
              Bellezas sin agujas, resultados sin arrugas
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Labo siempre está a la vanguardia de las nuevas tendencias en medicina estética,
              desarrollando productos innovadores patentados capaces de alcanzar los mejores
              resultados naturales.
            </p>
            <div className="mt-10 flex flex-wrap gap-10">
              <Stat value="+30" label="Años de investigación" />
              <Stat value="50" label="Países con presencia" />
              <Stat value="216" label="Moléculas activas" />
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
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

      {/* Research & innovation */}
      <section className="bg-foreground py-20 text-background md:py-28">
        <div className="container-labo grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] overflow-hidden md:order-1">
            <Image
              src="/images/research.png"
              alt="Investigación dermocosmética en laboratorio"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Tecnología transdérmica
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold uppercase leading-tight tracking-[0.04em] md:text-4xl">
              Entre la investigación e innovación
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-background/70">
              Labo ha puesto el foco en la investigación y desarrollo de tecnologías revolucionarias,
              creando productos dermocosméticos innovadores para el cuidado de la piel y el cabello
              desde 1986.
            </p>
            <div className="mt-8">
              <CtaLink href="/descubre-labo" variant="outline" className="border-background text-background hover:border-accent hover:text-accent">
                Conoce a Labo
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 md:py-28">
        <div className="container-labo">
          <h2 className="text-center text-2xl font-semibold uppercase tracking-[0.08em] md:text-3xl">
            Nuestros productos
          </h2>

          {/* Fillerina */}
          <div className="mt-14 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <Image
                src="/images/product-fillerina.png"
                alt="Fillerina para rostro y cuello"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 90vw"
              />
            </div>
            <div>
              <Eyebrow>Fillerina para rostro y cuello</Eyebrow>
              <h3 className="mt-4 text-3xl font-semibold uppercase leading-tight tracking-[0.03em]">
                Efecto relleno. Sin inyecciones
              </h3>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                Primer y único tratamiento de relleno-densificador alternativo a las inyecciones de
                ácido hialurónico para uso en casa. Para dar mayor volumen a pómulos y labios.
              </p>
              <div className="mt-8">
                <CtaLink href="/cuidado-de-la-piel">Saber más</CtaLink>
              </div>
            </div>
          </div>

          {/* Crescina */}
          <div className="mt-16 grid grid-cols-1 items-center gap-10 md:mt-20 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Eyebrow>Crescina · Tratamiento de recrecimiento capilar</Eyebrow>
              <h3 className="mt-4 text-3xl font-semibold uppercase leading-tight tracking-[0.03em]">
                Eficacia del 100% en las personas testeadas
              </h3>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                Crescina es un tratamiento dermocosmético que previene y trata el adelgazamiento del
                cabello estimulando el recrecimiento capilar.
              </p>
              <div className="mt-8">
                <CtaLink href="/cuidado-capilar">Saber más</CtaLink>
              </div>
            </div>
            <div className="relative order-1 aspect-square overflow-hidden bg-secondary md:order-2">
              <Image
                src="/images/product-crescina.png"
                alt="Crescina tratamiento de recrecimiento capilar"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 90vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
