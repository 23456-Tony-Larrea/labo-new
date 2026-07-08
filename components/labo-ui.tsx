import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand',
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
        'inline-flex w-fit items-center justify-center px-8 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition-colors',
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
      <span className="text-3xl font-semibold text-brand md:text-4xl">{value}</span>
      <span className="mt-2 max-w-[12rem] text-xs uppercase tracking-[0.1em] text-muted-foreground">
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
      className="group flex flex-col border border-border bg-background transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <Image
          src={image || '/placeholder.svg'}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-sm font-semibold uppercase leading-snug tracking-[0.04em]">{name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-auto pt-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brand">
          Ver detalles
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
      <h2 className="text-balance text-2xl font-semibold uppercase tracking-[0.06em] md:text-3xl">
        {title}
      </h2>
    </div>
  )
}
