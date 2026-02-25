import { useNavigate } from 'react-router-dom'
import { MapPinned } from 'lucide-react'
import { states } from '../data/states'

export default function StateSelect({ className = '' }) {
  const navigate = useNavigate()

  return (
    <div className={`flex w-full flex-col gap-2 ${className}`}>
      <label className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
        Pick a State
      </label>
      <div className="relative">
        <MapPinned className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
        <select
          className="w-full appearance-none rounded-full border border-black/10 bg-white/90 py-3.5 pl-11 pr-10 text-sm shadow-sm focus:border-[var(--ocean)] focus:outline-none focus:ring-2 focus:ring-[var(--ocean)]/20"
          defaultValue=""
          onChange={(event) => {
            if (event.target.value) {
              navigate(`/state/${event.target.value}`)
            }
          }}
        >
          <option value="" disabled>
            Select a destination state
          </option>
          {states.map((state) => (
            <option key={state.slug} value={state.slug}>
              {state.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
