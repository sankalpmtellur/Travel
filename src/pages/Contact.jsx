import SectionHeading from '../components/SectionHeading'
import { Mail, Phone, MapPin } from 'lucide-react'

const infoCards = [
  { title: 'Email', value: 'support@travelwonders.com', icon: Mail },
  { title: 'Phone', value: '+91 9876543210', icon: Phone },
  { title: 'Address', value: '123 Adventure Street, Travel City, India', icon: MapPin },
]

export default function Contact() {
  return (
    <div>
      <section className="section-pad">
        <div className="container-max grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Contact"
              title="Let&apos;s plan your next escape"
              subtitle="We&apos;re happy to help you craft a journey that feels tailored and effortless."
            />
            <div className="grid gap-4">
              {infoCards.map((card) => (
                <div
                  key={card.title}
                  className="flex items-center gap-4 rounded-3xl border border-black/5 bg-white/80 p-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--paper-2)]">
                    <card.icon className="h-5 w-5 text-[var(--ocean)]" />
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                      {card.title}
                    </p>
                    <p className="text-sm font-semibold">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-semibold">Send a message</h3>
            <div className="mt-6 grid gap-4">
              <label className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                Your Name
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm focus:border-[var(--ocean)] focus:outline-none focus:ring-2 focus:ring-[var(--ocean)]/20"
                  placeholder="Enter your name"
                />
              </label>
              <label className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                Your Email
                <input
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm focus:border-[var(--ocean)] focus:outline-none focus:ring-2 focus:ring-[var(--ocean)]/20"
                  placeholder="you@example.com"
                />
              </label>
              <label className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                Message
                <textarea
                  rows="5"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white/90 px-4 py-3 text-sm focus:border-[var(--ocean)] focus:outline-none focus:ring-2 focus:ring-[var(--ocean)]/20"
                  placeholder="Tell us about your dream trip"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
