export default function CaseStudyLayout({ topId, navItems, onNavigate, children, className = '', backToWork = false }) {
  return (
    <article id={topId} className={`bg-[#f7f0e4] text-[#232018]${className ? ` ${className}` : ''}`}>
      <nav aria-label="Case study sections" className="sticky top-[76px] z-20 border-y border-[#d8ccb8] bg-[#f7f0e4]/92 backdrop-blur-md">
        <div className="mx-auto flex w-[min(100%-32px,1120px)] gap-2 overflow-x-auto py-3 md:flex-wrap md:justify-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-[#686052] transition hover:border-[#9bab84] hover:bg-[#ede4d3] hover:text-[#39452c]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {children}

      <footer className="border-t border-[#d8ccb8] px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm font-semibold text-[#686052] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-5">
            <button type="button" onClick={() => onNavigate('/')} className="hover:text-[#303923] hover:underline">
              Home
            </button>
            <button type="button" onClick={() => onNavigate('/about')} className="hover:text-[#303923] hover:underline">
              About
            </button>
            <button type="button" onClick={() => onNavigate('/projects')} className="hover:text-[#303923] hover:underline">
              {backToWork ? 'Back to Work' : 'Work'}
            </button>
            <button type="button" onClick={() => onNavigate('/contact')} className="hover:text-[#303923] hover:underline">
              Contact
            </button>
          </div>
          <a href={`#${topId}`} className="hover:text-[#303923] hover:underline">
            Back to top
          </a>
        </div>
      </footer>
    </article>
  )
}
