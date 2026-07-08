import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Descubre Labo | Labo Suisse',
  description:
    'Fundada en Basilea en 1986, Labo Suisse se dedica a la investigación y desarrollo de dermocosmética no invasiva y altamente efectiva, presente en 50 países.',
}

const timeline = [
  { year: '1986', text: 'Labo Cosprophar AG, laboratorio fundado en Basilea, Suiza.' },
  { year: '1996', text: 'Labo Internacional SRL, fundada en Padua, Italia.' },
  { year: '1998', text: 'Labo desarrolla una formulación innovadora: Crescina Re-Growth.' },
  { year: '2012', text: 'Labo lanza el primer tratamiento de relleno-densificador para uso en casa: Fillerina.' },
  { year: '2013', text: 'Nueva generación de productos para mercados internacionales: Crescina HFSC y Fillerina.' },
  { year: '2015', text: 'Labo desarrolla y patenta la tecnología transdérmica, una innovación disruptiva.' },
  { year: '2020', text: 'Renovación mundial de Crescina y Fillerina: Crescina HFSC Transdermic y Fillerina 12HA.' },
  { year: '2024', text: 'Llegada de Labo a Chile.' },
]

const patents = [
  'Patente Suiza CH 711 466: tecnología transdérmica con propiedades potenciadoras de penetración.',
  'Patente Suiza CH 705 713: relleno dérmico cosmético de rápida penetración.',
  'Patente Suiza CH 695 412: aplicador de precisión cosmético patentado.',
]

const stats = [
  { value: '+30', label: 'AÑOS DE INVESTIGACIÓN' },
  { value: '50', label: 'PAÍSES CON PRESENCIA' },
  { value: '216', label: 'MOLÉCULAS ACTIVAS' },
  { value: '8', label: 'PATENTES SUIZAS Y EUROPEAS' },
]

export default function DiscoverPage() {
  return (
    <>
      {/* Hero / intro */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="container-labo grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="max-w-lg">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-foreground">
              DESCUBRE LABO
            </p>
            <h1 className="mt-3 text-balance text-3xl font-bold uppercase leading-tight tracking-[0.03em] text-foreground md:text-4xl">
              MÁS DE 30 AÑOS DE INNOVACIÓN SUIZA
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Fundada en Basilea en 1986, durante más de 30 años Labo Suisse se ha dedicado constantemente a la investigación y desarrollo de técnicas de vanguardia para producir productos no invasivos y altamente efectivos, con formulaciones innovadoras, alternativas y patentadas.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Labo Suisse es reconocida en todo el mundo por utilizar las últimas tecnologías, comprender y anticipar las tendencias. Hoy cuenta con una red de distribuidores exclusivos en 50 países y una alta lealtad de sus clientes.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
            <Image
              src="/images/heritage.png"
              alt="Laboratorio Labo Suisse en Basilea"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 90vw"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f0efed] py-14">
        <div className="container-labo grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-brand md:text-4xl">{s.value}</span>
              <span className="mt-2 text-[0.58rem] font-medium uppercase leading-snug tracking-[0.1em] text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20">
        <div className="container-labo">
          <h2 className="text-center text-base font-semibold uppercase tracking-[0.2em] text-foreground">
            HISTORIA
          </h2>
          <ol className="mx-auto mt-12 max-w-3xl">
            {timeline.map((item, i) => (
              <li key={item.year} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex size-3 shrink-0 rounded-full bg-brand" />
                  {i < timeline.length - 1 && <span className="mt-1 w-px flex-1 bg-border" />}
                </div>
                <div className="-mt-1 pb-2">
                  <span className="text-xl font-bold text-brand">{item.year}</span>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Patents */}
      <section className="border-t border-border bg-[#f0efed] py-16 md:py-20">
        <div className="container-labo max-w-3xl">
          <h2 className="text-center text-base font-semibold uppercase tracking-[0.2em] text-foreground">
            PATENTES
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Para obtener una patente se debe demostrar que el producto es único e innovador y que cumple con su promesa. Los productos de Labo tienen un fuerte respaldo científico y una eficacia comprobada.
          </p>
          <ul className="mt-10 flex flex-col gap-4">
            {patents.map((p) => (
              <li key={p} className="flex items-start gap-3 border border-border bg-background p-5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                <span className="text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
