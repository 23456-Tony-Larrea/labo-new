import Link from 'next/link'
import { LaboLogo } from './labo-logo'

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.6C11.7 3 11 4.5 11 6.7V8.5H9V11h2v10h3V11h2.2l.3-2.5H14Z" />
    </svg>
  )
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5A2 2 0 1 1 3 5.5a2 2 0 0 1 1.98-2ZM3.4 8.9h3.2V21H3.4V8.9Zm5.3 0h3.06v1.65h.05c.43-.8 1.48-1.65 3.05-1.65 3.26 0 3.86 2.15 3.86 4.94V21h-3.2v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H8.7V8.9Z" />
    </svg>
  )
}

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.6 7.2s-.2-1.4-.8-2c-.75-.8-1.6-.8-2-.85C16 4.1 12 4.1 12 4.1h-.02s-4 0-6.8.24c-.4.05-1.25.05-2 .85-.6.6-.8 2-.8 2S2.2 8.8 2.2 10.5v1.6c0 1.65.18 3.3.18 3.3s.2 1.4.8 2c.75.8 1.74.77 2.2.86 1.6.15 6.62.2 6.62.2s4 0 6.8-.24c.4-.05 1.25-.05 2-.85.6-.6.8-2 .8-2s.18-1.65.18-3.3v-1.6c0-1.65-.18-3.3-.18-3.3ZM9.9 14.6V8.9l5.2 2.85-5.2 2.85Z" />
    </svg>
  )
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.305A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.958 7.958 0 0 1-4.064-1.114l-.292-.173-3.01.789.805-2.934-.19-.301A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  )
}

const COLUMNS = [
  {
    title: 'Productos',
    links: [
      { label: 'Cuidado de la piel', href: '/cuidado-de-la-piel' },
      { label: 'Cuidado capilar', href: '/cuidado-capilar' },
    ],
  },
  {
    title: 'Descubre Labo',
    links: [
      { label: 'Descubre Labo', href: '/descubre-labo' },
      { label: 'Tecnología transdérmica', href: '/tecnologia-transdermica' },
    ],
  },
]

const SOCIAL = [
  { icon: IconInstagram, label: 'Instagram' },
  { icon: IconFacebook, label: 'Facebook' },
  { icon: IconLinkedin, label: 'LinkedIn' },
  { icon: IconYoutube, label: 'YouTube' },
  { icon: IconWhatsApp, label: 'WhatsApp' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#f0efed]">
      <div className="container-labo grid grid-cols-1 gap-10 py-14 md:grid-cols-3 md:py-16">
        <div className="flex flex-col gap-5">
          <LaboLogo className="text-3xl" tagline />
          <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
            Dermocosmética suiza con tecnología transdérmica patentada. No injections, yes transdermic technology®
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-8 items-center justify-center rounded-full border border-border bg-background text-foreground/60 transition-colors hover:border-brand hover:text-brand"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title} className="flex flex-col gap-4">
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-foreground">
              {col.title}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-labo flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Labo Suisse Chile. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand">Política de privacidad</a>
            <a href="#" className="hover:text-brand">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
