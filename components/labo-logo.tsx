import { cn } from '@/lib/utils'

export function LaboLogo({
  className,
  tagline = false,
}: {
  className?: string
  tagline?: boolean
}) {
  return (
    <span className={cn('inline-flex flex-col items-center leading-none', className)}>
      <span
        className="font-semibold text-brand"
        style={{ letterSpacing: '0.35em', paddingLeft: '0.35em' }}
      >
        LABO
      </span>
      {tagline && (
        <span
          className="mt-1 text-[0.5rem] font-medium uppercase text-muted-foreground"
          style={{ letterSpacing: '0.18em' }}
        >
          Suisse · est. 1986
        </span>
      )}
    </span>
  )
}
