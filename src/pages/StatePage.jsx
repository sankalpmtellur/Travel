import { useLayoutEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { stateMap } from '../data/states'
import DestinationCard from '../components/DestinationCard'
import SectionHeading from '../components/SectionHeading'
import { ArrowLeft, MapPinned } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function StatePage() {
  const { slug } = useParams()
  const state = stateMap[slug]
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    if (!state) return undefined
    const ctx = gsap.context(() => {
      gsap.from('.state-hero', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' })
      gsap.utils.toArray('.destination-card').forEach((card) => {
        gsap.from(card, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        })
      })
    }, pageRef)

    return () => ctx.revert()
  }, [state])

  if (!state) {
    return (
      <section className="section-pad">
        <div className="container-max text-center">
          <h1 className="text-3xl font-semibold">Destination not found</h1>
          <p className="mt-3 text-sm text-[var(--muted)]">We couldn&apos;t find that state.</p>
          <Link to="/destinations" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ocean)]">
            <ArrowLeft className="h-4 w-4" />
            Back to destinations
          </Link>
        </div>
      </section>
    )
  }

  return (
    <div ref={pageRef}>
      <section className="section-pad">
        <div className="container-max grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="state-hero flex flex-col gap-5">
            <Link to="/destinations" className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
              <ArrowLeft className="h-3 w-3" />
              Destinations
            </Link>
            <h1 className="text-4xl font-semibold md:text-5xl">{state.name}</h1>
            <p className="text-sm text-[var(--muted)] md:text-base">{state.intro}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2">
                <MapPinned className="h-4 w-4 text-[var(--ocean)]" />
                {state.destinations.length} curated highlights
              </span>
            </div>
          </div>
          <div className="state-hero overflow-hidden rounded-[36px] shadow-[var(--shadow-card)]">
            <img src={state.destinations[0]?.img} alt={state.name} className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-max grid gap-8">
          <SectionHeading
            eyebrow="Top Destinations"
            title={`Explore ${state.name}`}
            subtitle="Handpicked highlights to shape a balanced itinerary."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {state.destinations.map((destination) => (
              <div key={destination.title} className="destination-card">
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
