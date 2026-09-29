export default function ContactActionCard({ action }) {
  return (
    <a
      href={action.href}
      target={action.isExternal ? '_blank' : undefined}
      rel={action.isExternal ? 'noreferrer' : undefined}
      className="group flex min-h-44 flex-col justify-between rounded-3xl border border-white/70 bg-white/65 p-6 shadow-[0_18px_48px_rgba(63,82,104,0.12)] transition-[transform,box-shadow,background-color] duration-150 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_24px_60px_rgba(63,82,104,0.16)] active:translate-y-px active:shadow-[0_10px_28px_rgba(63,82,104,0.12)]"
    >
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#b8cff0] text-[#1f2430] transition group-hover:bg-[#a8c2e8]">
          <ContactIcon type={action.icon} />
        </div>
        {action.detail && (
          <span className="min-w-0 break-all text-right text-sm font-medium text-[#526174]">
            {action.detail}
          </span>
        )}
      </div>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#5e789c]">
          {action.title}
        </p>
        <p className="mt-2 text-xl font-semibold text-[#1f2430]">{action.label}</p>
        {action.title === 'Resume' && (
          <p className="mt-3 text-sm leading-6 text-[#526174]">
            Opens the current resume PDF in a new tab.
          </p>
        )}
      </div>
    </a>
  )
}

function ContactIcon({ type }) {
  if (type === 'linkedin') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current stroke-2">
        <path d="M7 10v8" />
        <path d="M7 7.2v.1" />
        <path d="M11 18v-8" />
        <path d="M11 13.5c0-2.1 1.2-3.5 3.1-3.5 1.8 0 2.9 1.2 2.9 3.4V18" />
        <path d="M4.5 4.5h15v15h-15z" />
      </svg>
    )
  }

  if (type === 'email') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current stroke-2">
        <path d="M4 6.5h16v11H4z" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current stroke-2">
      <path d="M7 3.5h7l3 3V20H7z" />
      <path d="M14 3.5V7h3" />
      <path d="M9.5 12h5" />
      <path d="M9.5 15h5" />
    </svg>
  )
}
