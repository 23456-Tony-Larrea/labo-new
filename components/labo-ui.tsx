import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function CtaLink({
  href,
  children,
  variant = 'solid',
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: 'solid' | 'outline'
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex w-fit items-center justify-center px-7 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] transition-colors',
        variant === 'solid'
          ? 'bg-brand text-brand-foreground hover:bg-accent'
          : 'border border-foreground text-foreground hover:border-brand hover:text-brand',
        className,
      )}
    >
      {children}
    </Link>
  )
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-3xl font-bold text-brand md:text-4xl">{value}</span>
      <span className="mt-2 max-w-[12rem] text-[0.58rem] font-medium uppercase leading-snug tracking-[0.1em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function ProductCard({
  name,
  description,
  image,
  href,
}: {
  name: string
  description: string
  image: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col border border-border bg-background transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
        <Image
          src={image || '/placeholder.svg'}
          alt={name}
          fill
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-xs font-bold uppercase leading-snug tracking-[0.06em]">{name}</h3>
        <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-auto pt-3 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-brand">
          VER DETALLES →
        </span>
      </div>
    </Link>
  )
}

export function SectionTitle({
  eyebrow,
  title,
  className,
}: {
  eyebrow?: string
  title: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col items-center gap-3 text-center', className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-xl font-bold uppercase tracking-[0.1em] md:text-2xl">
        {title}
      </h2>
    </div>
  )
}
