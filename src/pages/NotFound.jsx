import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-max flex flex-col items-center gap-4 text-center">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">404</p>
        <h1 className="text-3xl font-semibold">We lost that trail</h1>
        <p className="text-sm text-[var(--muted)]">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--ocean)] px-6 py-3 text-sm font-semibold text-white"
        >
          Back to home
        </Link>
      </div>
    </section>
  )
}
