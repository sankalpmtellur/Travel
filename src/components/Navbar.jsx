import { NavLink, Link } from 'react-router-dom'
import { Compass, Sparkles } from 'lucide-react'

const linkClasses = ({ isActive }) =>
  `transition-colors ${
    isActive ? 'text-[var(--ocean)]' : 'text-[var(--muted)] hover:text-[var(--ocean)]'
  }`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#fcf9f4]/90 backdrop-blur">
      <div className="container-max flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ocean)] text-white">
            <Compass className="h-5 w-5" />
          </span>
          Travel Wonders
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/destinations" className={linkClasses}>
            Destinations
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
        </nav>
        <Link
          to="/destinations"
          className="hidden items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-black/10 transition hover:-translate-y-0.5 md:flex"
        >
          Plan a trip
          <Sparkles className="h-4 w-4" />
        </Link>
      </div>
      <nav className="flex items-center justify-center gap-6 border-t border-black/5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] md:hidden">
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>
        <NavLink to="/destinations" className={linkClasses}>
          Destinations
        </NavLink>
        <NavLink to="/about" className={linkClasses}>
          About
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}
