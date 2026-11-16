import { Fragment } from 'react'
import { useI18n } from '../i18n'
import { ArrowRightIcon } from './icons'

/** Renders a heading given as an array of lines (see src/i18n) with a <br> between lines. */
export function Lines({ lines, brClassName }) {
  if (!Array.isArray(lines)) return lines
  return lines.map((line, i) => (
    <Fragment key={line}>
      {/* The space keeps words apart when the <br> is hidden on small screens. */}
      {i > 0 && (
        <>
          {' '}
          <br className={brClassName} />
        </>
      )}
      {line}
    </Fragment>
  ))
}

export function Eyebrow({ className = '', children }) {
  return (
    <p className={`font-sans text-base font-light uppercase opacity-85 md:text-lg ${className}`}>
      {children}
    </p>
  )
}

export function SectionTitle({ as: Tag = 'h2', className = '', children }) {
  return (
    <Tag
      className={`font-serif text-[28px] leading-[1.12] font-medium uppercase md:text-[34px] xl:text-[40px] ${className}`}
    >
      {children}
    </Tag>
  )
}

const pillTones = {
  stone: 'bg-stone text-white hover:bg-stone/90',
  ivory: 'bg-ivory text-charcoal hover:bg-white',
}

export function PillButton({ href, tone = 'stone', className = '', children, ...props }) {
  const Tag = href ? 'a' : 'button'
  return (
    <Tag
      href={href}
      type={href ? undefined : 'button'}
      className={`inline-flex h-[46px] shrink-0 items-center justify-center rounded-full px-4 font-serif text-base font-medium uppercase transition active:scale-[0.98] ${pillTones[tone]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function ReadMore({ href = '#', className = '', children }) {
  const { t } = useI18n()
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2.5 font-serif text-base font-medium uppercase text-charcoal ${className}`}
    >
      {children ?? t.common.readMore}
      <ArrowRightIcon className="h-3.5 w-[18px] transition-transform group-hover:translate-x-1" />
    </a>
  )
}
