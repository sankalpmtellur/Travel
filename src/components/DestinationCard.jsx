export default function DestinationCard({ destination }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={destination.img}
          alt={destination.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-5 py-5">
        <h3 className="text-lg font-semibold">{destination.title}</h3>
        <p className="text-sm text-[var(--muted)]">{destination.desc}</p>
      </div>
    </article>
  )
}
