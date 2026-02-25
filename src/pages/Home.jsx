import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { featuredDestinations } from '../data/featured'
import { states } from '../data/states'
import SectionHeading from '../components/SectionHeading'
import StateSelect from '../components/StateSelect'
import { ArrowRight, Map, Sparkles, SunMedium, Wind } from 'lucide-react'

const highlightCards = [
  {
    title: 'Handpicked Trails',
    desc: 'Curated experiences blending iconic landmarks with hidden retreats.',
    icon: Map,
  },
  {
    title: 'Seasonal Stories',
    desc: 'Plan by monsoon, mountains, or coastal escapes with clarity.',
    icon: Wind,
  },
  {
    title: 'Local Flavors',
    desc: 'Taste-led itineraries inspired by heritage cuisines and bazaars.',
    icon: SunMedium,
  },
]

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' })
      gsap.from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' })
      gsap.from('.hero-cta', { y: 20, opacity: 0, duration: 0.7, delay: 0.4, ease: 'power3.out' })
      gsap.from('.hero-image', {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.2,
        ease: 'power3.out',
      })

      gsap.utils.toArray('.reveal-card').forEach((card) => {
        gsap.from(card, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        })
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef}>
      <section className="section-pad">
        <div className="container-max grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[var(--rose)]">
              <Sparkles className="h-4 w-4" />
              Discover India
            </span>
            <h1 className="hero-title text-4xl font-semibold leading-tight md:text-5xl">
              Travel Wonders, crafted for slow mornings and epic horizons.
            </h1>
            <p className="hero-subtitle text-base text-[var(--muted)] md:text-lg">
              Embark on journeys across India&apos;s most breathtaking landscapes, from misty hills to sun-kissed coasts,
              with itineraries that feel personal and poetic.
            </p>
            <div className="hero-cta flex flex-wrap items-center gap-4">
              <Link
                to="/destinations"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--ocean)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5"
              >
                Explore destinations
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--ink)]"
              >
                Our travel ethos
              </Link>
            </div>
            <div className="mt-6 max-w-md">
              <StateSelect />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="hero-image overflow-hidden rounded-[36px] shadow-[var(--shadow-card)]">
              <img
                src="/images/featured/kerala_backwaters.png"
                alt="Kerala backwaters"
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="hero-image overflow-hidden rounded-[36px] shadow-[var(--shadow-card)] sm:mt-10">
              <img src="/images/featured/jaipur_fort.png" alt="Jaipur forts" className="h-64 w-full object-cover" />
            </div>
            <div className="hero-image overflow-hidden rounded-[36px] shadow-[var(--shadow-card)] sm:col-span-2">
              <img src="/images/featured/taj_mahal.png" alt="Taj Mahal" className="h-64 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#faf4ec]">
        <div className="container-max grid gap-10">
          <SectionHeading
            eyebrow="Featured"
            title="Signature experiences"
            subtitle="Begin with the classics, then wander into curated stories, design-led stays, and slow travel routes."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredDestinations.map((item) => (
              <article
                key={item.title}
                className="reveal-card group overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[var(--shadow-card)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="px-5 py-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[var(--rose)]">
                    {item.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-max grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Why Travel Wonders"
              title="Designed for wonder, clarity, and connection"
              subtitle="We map journeys by mood, season, and story so every escape feels intentional."
            />
            <div className="grid gap-4">
              {highlightCards.map((card) => (
                <div key={card.title} className="reveal-card flex gap-4 rounded-3xl border border-black/5 bg-white/80 p-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--paper-2)]">
                    <card.icon className="h-5 w-5 text-[var(--ocean)]" />
                  </span>
                  <div>
                    <p className="text-base font-semibold">{card.title}</p>
                    <p className="text-sm text-[var(--muted)]">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {states.slice(0, 4).map((state) => (
              <article
                key={state.slug}
                className="reveal-card flex flex-col gap-3 rounded-[28px] border border-black/5 bg-white p-5 shadow-[var(--shadow-card)]"
              >
                <img
                  src={state.destinations[0]?.img}
                  alt={state.name}
                  className="aspect-[4/3] w-full rounded-[22px] object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[var(--rose)]">
                    {state.name}
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{state.intro}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
