import Image from 'next/image'
import type { Metadata } from 'next'
import { Eyebrow, Stat } from '@/components/labo-ui'

export const metadata: Metadata = {
  title: 'Tecnología transdérmica | Labo Suisse',
  description:
    'La tecnología transdérmica patentada por Labo permite que las moléculas penetren en la profundidad de la piel para mejores resultados dermocosméticos.',
}

export default function TransdermicPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center overflow-hidden bg-foreground text-background">
        <Image
          src="/images/tech-skin-layers.png"
          alt="Tecnología transdérmica: moléculas penetrando en las capas de la piel"
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/30" />
        <div className="container-labo relative">
          <div className="max-w-2xl">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent">
              La tecnología transdérmica ya está en Chile
            </span>
            <h1 className="mt-5 text-balance text-3xl font-semibold uppercase leading-tight tracking-[0.02em] md:text-5xl">
              La revolución del cuidado de la piel
            </h1>
            <p className="mt-6 max-w-lg text-pretty leading-relaxed text-background/75">
              Esta tecnología patentada por Labo permite que las moléculas penetren en la profundidad
              de la piel, entregando así mejores resultados dermocosméticos de alto rendimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="container-labo grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Innovación tecnológica</Eyebrow>
            <h2 className="mt-4 text-balance text-2xl font-semibold uppercase leading-tight tracking-[0.04em] md:text-3xl">
              El poder de la tecnología transdérmica
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              La tecnología transdérmica que Labo aplica a todos sus productos desde 2015 permite que
              cada ingrediente activo o molécula de las diferentes formulaciones penetre en las
              distintas capas de la piel. Actualmente hay 216 moléculas activas desarrolladas y
              probadas por la marca.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Siempre con un enfoque en la medicina estética, a lo largo de los años Labo ha sido
              capaz de innovar y renovar sus tecnologías desarrollando soluciones científicas de
              vanguardia para preservar una piel de apariencia juvenil.
            </p>
            <div className="mt-10 flex flex-wrap gap-10">
              <Stat value="2015" label="Año de patente" />
              <Stat value="216" label="Moléculas activas" />
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
            <Image
              src="/images/research.png"
              alt="Investigación de tecnología transdérmica"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
          </div>
        </div>
      </section>

      {/* Skin vs scalp */}
      <section className="py-20 md:py-28">
        <div className="container-labo grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="border border-border p-8">
            <h3 className="text-lg font-semibold uppercase tracking-[0.1em] text-brand">Piel</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              El grosor de la piel de nuestro cuerpo y rostro es de 2 a 3 milímetros. Gracias a la
              tecnología transdérmica de Labo, las moléculas logran atravesar el estrato córneo y
              llegar a las diferentes capas de la piel, obteniendo mejores resultados con los
              tratamientos faciales.
            </p>
          </article>
          <article className="border border-border p-8">
            <h3 className="text-lg font-semibold uppercase tracking-[0.1em] text-brand">
              Cuero cabelludo
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              El cuero cabelludo tiene alrededor de 8 milímetros de espesor. La tecnología
              transdérmica facilita que los principios activos alcancen el folículo piloso, mejorando
              los resultados de los tratamientos capilares.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
