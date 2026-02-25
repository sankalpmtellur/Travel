export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--rose)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm text-[var(--muted)] md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
