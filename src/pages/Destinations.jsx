import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from '../components/SectionHeading'
import StateSelect from '../components/StateSelect'
import StateCard from '../components/StateCard'
import { states } from '../data/states'
import { Compass } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Destinations() {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.state-card').forEach((card) => {
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef}>
      <section className="section-pad">
        <div className="container-max grid gap-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <SectionHeading
              eyebrow="Destinations"
              title="Every state, a new rhythm"
              subtitle="Browse 26 Indian states packed with heritage, nature, and curated stays."
            />
            <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/80 px-5 py-3 text-sm text-[var(--muted)] shadow-sm">
              <Compass className="h-4 w-4 text-[var(--ocean)]" />
              26 curated state journeys
            </div>
          </div>
          <div className="max-w-lg">
            <StateSelect />
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-max grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((state) => (
            <div key={state.slug} className="state-card">
              <StateCard state={state} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
