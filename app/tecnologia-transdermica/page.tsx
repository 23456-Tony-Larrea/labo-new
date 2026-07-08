import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tecnología transdérmica | Labo Suisse',
  description:
    'La tecnología transdérmica patentada por Labo permite que las moléculas penetren en la profundidad de la piel para mejores resultados dermocosméticos.',
}

export default function TransdermicPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-secondary">
        <Image
          src="/images/tech-skin-layers.png"
          alt="Tecnología transdérmica: moléculas penetrando en las capas de la piel"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container-labo relative z-10 pb-12 pt-24">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/80">
            TECNOLOGÍA TRANSDÉRMICA
          </p>
          <h1 className="mt-2 max-w-xl text-3xl font-bold uppercase leading-tight tracking-[0.03em] text-white md:text-5xl">
            LA REVOLUCIÓN DEL CUIDADO DE LA PIEL
          </h1>
          <p className="mt-3 max-w-md text-sm text-white/75">
            La tecnología transdérmica ya está en Chile
          </p>
        </div>
      </section>

      {/* Innovation */}
      <section className="py-16 md:py-20">
        <div className="container-labo grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="max-w-lg">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-foreground">
              INNOVACIÓN TECNOLÓGICA
            </p>
            <h2 className="mt-3 text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-foreground md:text-3xl">
              EL PODER DE LA TECNOLOGÍA TRANSDÉRMICA
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              La tecnología transdérmica que Labo aplica a todos sus productos desde 2015 permite que cada ingrediente activo o molécula de las diferentes formulaciones penetre en las distintas capas de la piel. Actualmente hay 216 moléculas activas desarrolladas y probadas por la marca.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Siempre con un enfoque en la medicina estética, a lo largo de los años Labo ha sido capaz de innovar y renovar sus tecnologías desarrollando soluciones científicas de vanguardia para preservar una piel de apariencia juvenil.
            </p>
            <div className="mt-6 flex gap-10">
              <div>
                <span className="block text-3xl font-bold text-brand">2015</span>
                <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">Año de patente</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-brand">216</span>
                <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">Moléculas activas</span>
              </div>
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

      {/* Skin layers diagram / image */}
      <section className="bg-[#f0efed] py-16 md:py-20">
        <div className="container-labo">
          <h2 className="text-center text-base font-semibold uppercase tracking-[0.2em] text-foreground">
            TECNOLOGÍA TRANSDÉRMICA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Esta tecnología patentada por Labo permite que las moléculas penetren en la profundidad de la piel, entregando así mejores resultados dermocosméticos de alto rendimiento.
          </p>
          <div className="mt-10 relative aspect-[16/7] overflow-hidden">
            <Image
              src="/images/tech-skin-layers.png"
              alt="Capas de la piel con tecnología transdérmica"
              fill
              className="object-cover"
              sizes="80vw"
            />
          </div>
        </div>
      </section>

      {/* Piel vs Cuero cabelludo */}
      <section className="py-16 md:py-20">
        <div className="container-labo grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="border border-border bg-white p-8">
            <h3 className="text-base font-bold uppercase tracking-[0.1em] text-brand">PIEL</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              El grosor de la piel de nuestro cuerpo y rostro es de 2 a 3 milímetros. Gracias a la tecnología transdérmica de Labo, las moléculas logran atravesar el estrato córneo y llegar a las diferentes capas de la piel, obteniendo mejores resultados con los tratamientos faciales.
            </p>
          </article>
          <article className="border border-border bg-white p-8">
            <h3 className="text-base font-bold uppercase tracking-[0.1em] text-brand">CUERO CABELLUDO</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              El cuero cabelludo tiene alrededor de 8 milímetros de espesor. La tecnología transdérmica facilita que los principios activos alcancen el folículo piloso, mejorando los resultados de los tratamientos capilares.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
