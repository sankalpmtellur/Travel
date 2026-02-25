import SectionHeading from '../components/SectionHeading'
import { Leaf, HeartHandshake, Sparkles } from 'lucide-react'

const values = [
  {
    title: 'Customer-Centric',
    desc: 'We design journeys around the pace, comfort, and curiosity of every traveler.',
    icon: HeartHandshake,
  },
  {
    title: 'Sustainability',
    desc: 'We advocate for mindful tourism that protects nature and supports local communities.',
    icon: Leaf,
  },
  {
    title: 'Innovation',
    desc: 'Smart tools, seamless planning, and data-led inspiration shape every itinerary.',
    icon: Sparkles,
  },
]

export default function About() {
  return (
    <div>
      <section className="section-pad">
        <div className="container-max grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="About"
              title="Travel Wonders is a design-led travel studio"
              subtitle="We craft journeys across India that feel personal, layered, and wildly memorable."
            />
            <p className="text-sm text-[var(--muted)] md:text-base">
              From the serene beaches of the west to the Himalayan sanctuaries, we celebrate India&apos;s vast palette of
              landscapes and cultures. Our team curates stays, seasons, and stories so you can travel with intention and
              ease.
            </p>
          </div>
          <div className="overflow-hidden rounded-[36px] shadow-[var(--shadow-card)]">
            <img src="/images/about/aboutus.png" alt="Travel Wonders team" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#faf4ec]">
        <div className="container-max grid gap-8">
          <SectionHeading
            eyebrow="Values"
            title="Our core values"
            subtitle="We put people, planet, and progress at the heart of every itinerary."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--paper-2)]">
                  <value.icon className="h-5 w-5 text-[var(--ocean)]" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
