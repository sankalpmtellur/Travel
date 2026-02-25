import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function StateCard({ state }) {
  const cover = state.destinations[0]

  return (
    <Link
      to={`/state/${state.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-1"
    >
      <div className="relative aspect-[5/3] overflow-hidden">
        <img
          src={cover?.img}
          alt={state.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{state.name}</h3>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[var(--muted)] transition group-hover:bg-[var(--ocean)] group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p className="text-sm text-[var(--muted)]">{state.intro}</p>
        <span className="mt-auto text-xs font-semibold uppercase tracking-[0.2em] text-[var(--rose)]">
          {state.destinations.length} Highlights
        </span>
      </div>
    </Link>
  )
}
