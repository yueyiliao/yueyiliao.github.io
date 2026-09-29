export function Section({ id, eyebrow, title, children, isHighlighted = false }) {
  return (
    <section
      id={id}
      className={`scroll-mt-36 px-4 py-16 md:py-20 ${isHighlighted ? 'bg-[#e7ead7]' : ''}`}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#6f7d55]">
          {eyebrow}
        </p>
        <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#232018] md:text-5xl">
          {title}
        </h2>
        <div className="mt-7">{children}</div>
      </div>
    </section>
  )
}

export function Card({ children, className = '' }) {
  return (
    <article
      className={`rounded-3xl border border-[#ded2bd] bg-[#fbf6ec] shadow-[0_14px_35px_rgba(72,61,44,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(72,61,44,0.12)] ${className}`}
    >
      {children}
    </article>
  )
}

export function KPIBadge({ value, label }) {
  return (
    <Card className="p-6">
      <p className="text-4xl font-semibold text-[#56633e]">{value}</p>
      <p className="mt-3 leading-6 text-[#5f584d]">{label}</p>
    </Card>
  )
}

export function FlowStep({ number, label }) {
  return (
    <div className="rounded-3xl border border-[#d8ccb8] bg-[#fbf6ec] p-5 shadow-[0_10px_25px_rgba(72,61,44,0.07)]">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7c8b62] text-sm font-bold text-white">
        {number}
      </span>
      <p className="mt-5 font-semibold leading-6 text-[#332f25]">{label}</p>
    </div>
  )
}

export function RoadmapCard({ number, title, body }) {
  return (
    <Card className="p-6">
      <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#7c8b62]">
        0{number}
      </span>
      <h3 className="mt-5 text-2xl font-semibold text-[#2f2b22]">{title}</h3>
      <p className="mt-4 leading-7 text-[#5f584d]">{body}</p>
    </Card>
  )
}

export function TactileLink({ href, label, isPrimary = false }) {
  return (
    <a
      href={href}
      className={`inline-flex rounded-full px-5 py-3 font-bold transition-[transform,box-shadow,background-color] duration-120 hover:-translate-y-0.5 active:translate-y-px ${
        isPrimary
          ? 'bg-[#2f3926] text-white shadow-[0_10px_22px_rgba(47,57,38,0.2)] hover:shadow-[0_14px_28px_rgba(47,57,38,0.24)] active:shadow-[0_5px_12px_rgba(47,57,38,0.18)]'
          : 'border border-[#a9b28f] bg-[#fbf6ec] text-[#2f3926] shadow-[0_8px_18px_rgba(72,61,44,0.1)] hover:shadow-[0_12px_24px_rgba(72,61,44,0.14)] active:shadow-[0_4px_10px_rgba(72,61,44,0.1)]'
      }`}
    >
      {label}
    </a>
  )
}

export function PhoneMockup({ title, tone, image, variant = 'primary' }) {
  const isSage = tone === 'sage'
  const frameClass =
    variant === 'primary'
      ? 'absolute left-1/2 top-0 z-10 w-[min(78vw,250px)] -translate-x-1/2 rotate-0 shadow-[0_28px_62px_rgba(65,55,39,0.24)] sm:left-auto sm:right-6 sm:top-6 sm:w-[255px] sm:translate-x-0 sm:rotate-[1deg] md:w-[265px] lg:right-8 lg:top-7 lg:w-[275px]'
      : 'absolute left-4 top-2 hidden w-[210px] -rotate-[2.5deg] opacity-75 shadow-[0_18px_42px_rgba(65,55,39,0.13)] sm:block md:left-6 md:top-5 md:w-[225px] lg:left-8 lg:top-8 lg:w-[235px]'

  return (
    <div className={`${frameClass} rounded-[2.25rem] border border-[#d4c8b4] bg-[#2a2a26] p-3`}>
      <div className={`relative aspect-[9/19.5] overflow-hidden rounded-[1.55rem] ${isSage ? 'bg-[#e8eddd]' : 'bg-[#fbf6ec]'}`}>
        {image ? (
          <img
            src={image}
            alt={`${title} mobile UI screenshot`}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="h-full p-5">
            <div className="mx-auto mb-8 h-1.5 w-14 rounded-full bg-[#2a2a26]/30"></div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#65734f]">
              {title}
            </p>
            <div className="mt-6 grid gap-3">
              <div className="h-12 rounded-2xl bg-white/80"></div>
              <div className="h-12 rounded-2xl bg-white/80"></div>
              <div className="h-28 rounded-3xl bg-[#7c8b62]/20"></div>
              <div className="h-12 rounded-full bg-[#2f3926]"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
