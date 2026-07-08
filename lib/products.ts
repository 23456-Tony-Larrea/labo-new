export type ProductTab = {
  label: string
  paragraphs: string[]
  bullets?: string[]
}

export type Product = {
  slug: string
  name: string
  category: 'Cuidado de la piel' | 'Cuidado capilar'
  categoryHref: string
  shortDescription: string
  image: string
  highlights: string[]
  optionLabel: string
  options: string[]
  tabs: ProductTab[]
  efficacy?: { title: string; rows: { label: string; value: string }[] }
}

export const products: Product[] = [
  {
    slug: 'transdermic-hfsc-re-growth-man',
    name: 'Transdermic HFSC Re-Growth Man',
    category: 'Cuidado capilar',
    categoryHref: '/cuidado-capilar',
    shortDescription: 'Tratamiento de recrecimiento capilar con eficacia 100% comprobada.',
    image: '/images/product-crescina.png',
    highlights: [
      '100% eficacia comprobada',
      'Desarrollado con tecnología transdérmica patentada',
      '8 patentes suizas y europeas',
      'Hasta 6300 nuevos cabellos',
    ],
    optionLabel: 'Formato',
    options: ['HFSC - 500', 'HFSC - 900', 'HFSC - 1300'],
    tabs: [
      {
        label: 'Descripción y eficacia',
        paragraphs: [
          'Crescina Re-Growth es un tratamiento dermocosmético que previene y trata el adelgazamiento del cabello estimulando el recrecimiento fisiológico, reactivando el rebrote en bulbos no atrofiados.',
          'Tecnología transdérmica de bajo peso molecular con potenciadores de penetración que mejoran y facilitan la absorción de los principios activos.',
        ],
        bullets: [
          'Re-Growth Complex que estimula la producción de nuevos cabellos',
          'HFSC Complex que protege las células madre del cabello',
          'Re-Growth Booster Complex que fortalece el cabello y el folículo piloso',
          '100% eficaz en las personas testeadas',
        ],
      },
      {
        label: 'Ingredientes',
        paragraphs: [
          'Complejo patentado HFSC, aminoácidos, péptidos biomiméticos y potenciadores de penetración transdérmica de bajo peso molecular.',
        ],
      },
      {
        label: 'Modo de uso',
        paragraphs: [
          'Aplica el contenido de una ampolla sobre el cuero cabelludo seco o toalla-seco, masajeando suavemente. Usar según la frecuencia indicada en el tratamiento elegido. No enjuagar.',
        ],
      },
    ],
    efficacy: {
      title: 'Estudio clínico-instrumental – Hombres',
      rows: [
        { label: 'Cabello en fase anágena', value: '+11,5% a 2 meses · +18,2% a 4 meses' },
        { label: 'Cabello en fase telógena', value: '−18,6% a 2 meses · −29,1% a 4 meses' },
        { label: 'Pérdida de cabello (tracción)', value: '−29,6% a 2 meses · −46,8% a 4 meses' },
        { label: 'Sujetos que mejoraron', value: '95,7% a 2 meses · 100% a 4 meses' },
      ],
    },
  },
  {
    slug: 'fillerina-12ha-densifying-filler-intensive-treatment',
    name: 'Fillerina® 12HA Densifying-Filler Intensive Treatment',
    category: 'Cuidado de la piel',
    categoryHref: '/cuidado-de-la-piel',
    shortDescription:
      'Tratamiento con efecto relleno-densificador sin agujas para uso en casa.',
    image: '/images/product-fillerina.png',
    highlights: [
      'Con 12 moléculas de ácido hialurónico de distintos pesos moleculares',
      'Desarrollado con tecnología transdérmica patentada',
      'Da volumen a pómulos y labios y rellena líneas de expresión',
      'Con aplicador de precisión cosmético patentado',
    ],
    optionLabel: 'Tipo de grado',
    options: ['Grado 3', 'Grado 4', 'Grado 5'],
    tabs: [
      {
        label: 'Descripción y eficacia',
        paragraphs: [
          'Primer tratamiento dermocosmético de efecto relleno-densificador para uso en casa, para pieles con líneas de expresión desde iniciales a profundas, con signos de flacidez y pérdida de volumen en pómulos y labios. Tratamiento intensivo para 14 días.',
          'Desarrollado con tecnología transdérmica patentada por Labo, que permite una mayor penetración de los ingredientes activos en las diferentes capas de la piel.',
        ],
        bullets: [
          'Efecto relleno: 12 moléculas de ácido hialurónico de distintas dimensiones',
          'Efecto densificador: 3 moléculas de colágeno y 2 de elastina',
          'Gel de tratamiento + velo nutritivo finalizador',
          '2 aplicadores de precisión patentados (Patente Suiza CH 695 412)',
        ],
      },
      {
        label: 'Ingredientes',
        paragraphs: [
          '12 moléculas de ácido hialurónico de diferentes pesos moleculares, colágeno, elastina e ingredientes revitalizantes en un sistema de liberación transdérmica.',
        ],
      },
      {
        label: 'Modo de uso',
        paragraphs: [
          'Aplica el gel de tratamiento con el aplicador de precisión sobre rostro limpio, mañana y noche durante 14 días. Finaliza con el velo nutritivo. Repite el ciclo según necesidad.',
        ],
      },
    ],
    efficacy: {
      title: 'Eficacia comprobada en 14 días',
      rows: [
        { label: 'Efectividad general', value: '95%' },
        { label: 'Reducción de surcos y líneas', value: '22% a 54%' },
        { label: 'Aumento de volumen de labios', value: '14,2% a 44,7%' },
        { label: 'Aumento de pómulos (efecto lifting)', value: '+2,27 mm a +3,39 mm' },
      ],
    },
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

// Category grids
export const skinProducts = [
  {
    name: 'Fillerina® 12HA Densifying-Filler Intensive Treatment',
    description: 'Tratamiento con efecto relleno-densificador sin agujas para uso en casa.',
    image: '/images/product-fillerina.png',
    href: '/producto/fillerina-12ha-densifying-filler-intensive-treatment',
  },
  {
    name: 'Fillerina® 12HA Densifying-Filler Lip Contour Cream',
    description: 'Con 12 moléculas de ácido hialurónico para dar volumen y definición a los labios.',
    image: '/images/product-cream.png',
    href: '/producto/fillerina-12ha-densifying-filler-intensive-treatment',
  },
  {
    name: 'Fillerina® 12HA Densifying-Filler Eye Contour Cream',
    description: 'Con 12 moléculas de ácido hialurónico para el delicado contorno de ojos.',
    image: '/images/product-cream.png',
    href: '/producto/fillerina-12ha-densifying-filler-intensive-treatment',
  },
  {
    name: 'Fillerina® 12HA Densifying-Filler Day Cream',
    description: 'Crema de día con efecto relleno y densificador para una piel firme.',
    image: '/images/product-cream.png',
    href: '/producto/fillerina-12ha-densifying-filler-intensive-treatment',
  },
  {
    name: 'Fillerina® 12HA Densifying-Filler Night Cream',
    description: 'Crema de noche que rellena y densifica mientras descansas.',
    image: '/images/product-cream.png',
    href: '/producto/fillerina-12ha-densifying-filler-intensive-treatment',
  },
]

export const hairProducts = {
  antiHairLoss: [
    {
      name: 'Transdermic HFSC Complete Treatment Man',
      description: 'Tratamiento anti caída y de recrecimiento capilar 100% eficaz.',
      image: '/images/product-crescina.png',
      href: '/producto/transdermic-hfsc-re-growth-man',
    },
    {
      name: 'Transdermic HFSC Complete Treatment Woman',
      description: 'Tratamiento anti caída y de recrecimiento capilar 100% eficaz.',
      image: '/images/product-crescina.png',
      href: '/producto/transdermic-hfsc-re-growth-man',
    },
  ],
  reGrowth: [
    {
      name: 'Transdermic HFSC Re-Growth Man',
      description: 'Tratamiento de recrecimiento capilar 100% eficacia comprobada.',
      image: '/images/product-vials.png',
      href: '/producto/transdermic-hfsc-re-growth-man',
    },
    {
      name: 'Transdermic HFSC Re-Growth Woman',
      description: 'Tratamiento de recrecimiento capilar 100% eficacia comprobada.',
      image: '/images/product-vials.png',
      href: '/producto/transdermic-hfsc-re-growth-man',
    },
  ],
}
