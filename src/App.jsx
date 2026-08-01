import { useEffect, useState } from 'react'
import catalogImg from './assets/catalog.png'
import mealPlanScreen from './assets/meal-plan-screen.png'
import profileInputScreen from './assets/profile-input-screen.png'
import profileImg from './assets/profile.png'
import './App.css'

const routes = {
  '/': 'about',
  '/about': 'about',
  '/projects': 'projects',
  '/contact': 'contact',
  '/project-cfc': 'project-cfc',
  '/Project_CFC': 'project-cfc',
  '/project_cfc': 'project-cfc',
}

const navLinks = [
  { path: '/projects', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
  { path: '/about', label: 'About' },
]

const projects = [
  {
    title: 'PROJECT CATALOG: Cat Feeding calculator MVP',
    category: 'UX research and product design',
    description:
      'A pet health MVP that helps cat owners estimate feeding amounts, search food calorie data, and identify high-risk weight-loss scenarios.',
    image: catalogImg,
    path: '/Project_CFC',
  },
]

const cfcNavItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'logic', label: 'Logic' },
  { id: 'safety', label: 'Safety' },
  { id: 'database', label: 'Database' },
  { id: 'validation', label: 'Validation' },
  { id: 'roadmap', label: 'Roadmap' },
]

const problemCards = [
  'Generic weight ranges ignore individual cat conditions',
  'Food calorie units vary across products and brands',
  'Unsafe weight-loss goals may put senior or vulnerable cats at risk',
]

const flowSteps = [
  'Cat Profile Input',
  'Food Selection',
  'Clinical Calculation',
  'Safety Check',
  'Feeding Plan',
]

const logicColumns = [
  {
    title: 'Input',
    items: ['Age group', 'Weight', 'Neutered status', 'Activity level', 'Body goal'],
  },
  {
    title: 'Calculation',
    items: ['RER', 'DER', 'Food calories', 'Serving amount'],
  },
  {
    title: 'Output',
    items: ['Daily calories', 'Feeding quantity', 'Safety warnings', 'Meal plan'],
  },
]

const safetyCards = [
  {
    title: 'Timed Calorie Reduction',
    body: 'Flags aggressive calorie cuts before they become unsafe feeding plans.',
  },
  {
    title: 'RER Floor Check',
    body: 'Prevents recommendations below resting energy requirement.',
  },
  {
    title: 'Life-Stage Logic',
    body: 'Blocks risky senior-cat weight-loss flows.',
  },
  {
    title: 'UX Writing',
    body: 'Translates clinical risk into user-friendly warning messages.',
  },
]

const databaseFields = [
  'Brand',
  'Product name',
  'Food type',
  'Calorie density',
  'Serving unit',
  'Source URL',
  'Manual QA status',
]

const qualityControls = [
  'Deployed SQL queries to identify calorie outliers',
  'Manually reconciled inconsistent manufacturer and retailer data',
  'Checked wet food product lines for internal consistency',
  'Conducted random double-blind QA audit',
  'Used findings to improve final database reliability',
]

const scalabilityCards = [
  'Reusable UI components',
  'Separate calculation logic',
  'Expandable food database',
  'GitHub version control',
  'Vercel deployment',
  'CI/CD-ready workflow',
]

const futureFeatures = [
  'OCR label scanning',
  'AI-assisted nutrition extraction',
  'Typo-tolerant product search',
  'Saved cat profiles',
]

const kpis = [
  { value: '100%', label: 'Clinical safety standard adherence' },
  { value: '4.7 / 5', label: 'Average usefulness rating' },
  { value: '4.3 / 5', label: 'Average trust score' },
  { value: '88.9%', label: 'Users found database search easy' },
]

const roadmapItems = [
  {
    title: 'Smarter Data Capture',
    body: 'Use OCR and AI extraction to scan product labels and convert nutrition facts into structured database fields.',
  },
  {
    title: 'Personalized Cat Profiles',
    body: 'Allow users to save multiple cats, track weight history, and compare feeding plans over time.',
  },
  {
    title: 'Clinical Decision Support',
    body: 'Expand safety logic for senior cats, kittens, obese cats, and cats with special feeding risks.',
  },
]

function getPageFromPath(pathname) {
  return routes[pathname] ?? 'about'
}

function App() {
  const [page, setPage] = useState(() => getPageFromPath(window.location.pathname))
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromPath(window.location.pathname))
      setMenuOpen(false)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigate(path) {
    window.history.pushState({}, '', path)
    setPage(getPageFromPath(path))
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <Navbar
        currentPage={page}
        menuOpen={menuOpen}
        onNavigate={navigate}
        onToggleMenu={() => setMenuOpen((isOpen) => !isOpen)}
      />
      <main>
        {page === 'about' && <AboutPage />}
        {page === 'projects' && <ProjectsPage onNavigate={navigate} />}
        {page === 'contact' && <ContactPage />}
        {page === 'project-cfc' && <ProjectCfcPage onNavigate={navigate} />}
      </main>
    </div>
  )
}

function Navbar({ currentPage, menuOpen, onNavigate, onToggleMenu }) {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <button className="brand" type="button" onClick={() => onNavigate('/about')}>
          UE.
        </button>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={onToggleMenu}
        >
          <span className="menu-toggle-bar"></span>
          <span className="menu-toggle-bar"></span>
          <span className="menu-toggle-bar"></span>
          <span className="sr-only">Toggle navigation</span>
        </button>

        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'is-open' : ''}`}
        >
          {navLinks.map((link) => {
            const isActive =
              routes[link.path] === currentPage ||
              (currentPage === 'project-cfc' && link.path === '/projects')

            return (
              <button
                key={link.path}
                className={`nav-link ${isActive ? 'is-active' : ''}`}
                type="button"
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onNavigate(link.path)}
              >
                {link.label}
              </button>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

function AboutPage() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  const coreCompetencies = [
    'Agile & Scrum',
    'Roadmapping',
    'Risk Management',
    'User-Centered Thinking',
    'Psychological Safety',
    'Technical Collaboration',
  ]

  const tools = ['Jira', 'Asana', 'Excel', 'SQL/Database']

  useEffect(() => {
    const updateBackToTopVisibility = () => {
      setShowBackToTop(document.documentElement.scrollHeight > window.innerHeight + 8)
    }

    updateBackToTopVisibility()
    window.addEventListener('resize', updateBackToTopVisibility)
    return () => window.removeEventListener('resize', updateBackToTopVisibility)
  }, [])

  return (
    <>
      <section className="about-hero">
        <div className="container about-layout">
          <aside className="profile-card" aria-label="Profile summary">
            <div className="avatar-wrap">
              <img className="avatar-image" src={profileImg} alt="Yueyi Liao" />
              <span className="wave-hand" aria-hidden="true">👋</span>
              <ul className="floating-words" aria-label="Focus areas">
                <li>People</li>
                <li>Process</li>
                <li>Product</li>
                <li>Technology</li>
              </ul>
            </div>
            <div>
              <h1>Yueyi Liao (UE)</h1>
              <p>Aspiring Tech PM | Transforming Complex Workflows into Organized Success</p>
            </div>
          </aside>

          <div className="about-copy">
            <p className="eyebrow">About Me</p>
            <h2>B.A. in Psychology @ UCR | M.S. in Project Management @ NYU</h2>
            <div className="text-stack">
              <p>
                I translate technical complexity into actionable roadmaps,
                bridging the gap between stakeholders and execution teams to
                maintain both momentum and well-being.
              </p>
              <p>
                I specialize in aligning business objectives with team dynamics,
                ensuring cross-functional collaboration leads to efficient
                delivery and a high-performing, human-centric culture.
              </p>
              <p>
                Currently seeking opportunities as an Associate Project Manager,
                Project Coordinator, or PM Assistant where I can contribute to
                technical project success and team growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container skills-section">
          <div className="skill-group">
            <h2>Core Competencies</h2>
            <ul className="pill-list" aria-label="Core competencies">
              {coreCompetencies.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skill-group">
            <h2>Tools & Platforms</h2>
            <ul className="pill-list compact" aria-label="Tools and platforms">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

          {showBackToTop && (
            <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to top
            </button>
          )}
        </div>
      </section>
    </>
  )
}

function ProjectsPage({ onNavigate }) {
  const [isTitleCompact, setIsTitleCompact] = useState(false)

  useEffect(() => {
    const updateTitleState = () => {
      setIsTitleCompact(window.scrollY > 24)
    }

    updateTitleState()
    window.addEventListener('scroll', updateTitleState, { passive: true })
    return () => window.removeEventListener('scroll', updateTitleState)
  }, [])

  return (
    <>
      <section className={`projects-title ${isTitleCompact ? 'is-compact' : ''}`}>
        <div className="container">
          <h1>Projects</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-content">
                <p className="project-category">{project.category}</p>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <button type="button" onClick={() => onNavigate(project.path)}>
                  Open project
                </button>
              </div>
              <div className="project-visual">
                <img src={project.image} alt="Illustration of a standing tabby cat" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  const resumeUrl =
    'https://drive.google.com/file/d/19Y6jbMlSlj2eU_TzcglK839rKJ-tFrm2/view?usp=sharing'

  const contactActions = [
    {
      title: 'LinkedIn',
      label: 'Connect via LinkedIn',
      href: 'https://www.linkedin.com/in/yueyi-liao',
      icon: 'linkedin',
      isExternal: true,
    },
    {
      title: 'Email',
      label: 'Email Me',
      href: 'mailto:liaoyueyi@gmail.com',
      icon: 'email',
      isExternal: false,
    },
    {
      title: 'Resume',
      label: 'View / Download Resume',
      href: resumeUrl,
      icon: 'resume',
      isExternal: true,
    },
  ]

  return (
    <section className="min-h-[calc(100vh-76px)] bg-[#dfeaf8] px-4 py-12 text-[#232018] md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-8 rounded-[2rem] border border-white/70 bg-white/45 p-6 shadow-[0_24px_70px_rgba(63,82,104,0.12)] backdrop-blur md:grid-cols-[220px_1fr] md:p-10">
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-[0_18px_42px_rgba(63,82,104,0.18)] md:h-44 md:w-44">
            <img
              src={profileImg}
              alt="Yueyi Liao"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#5e789c]">
              Contact
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#1f2430] md:text-6xl">
              Let’s Connect!
            </h1>
            <p className="mt-[60px] max-w-2xl text-lg leading-8 text-[#526174]">
              I’m always open to internship and career opportunities, future
              iterations or collaborations inspired by my projects, and general
              conversations with people interested in product, UX, and
              human-centered problem solving.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {contactActions.map((action) => (
            <ContactActionCard key={action.title} action={action} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactActionCard({ action }) {
  return (
    <a
      href={action.href}
      target={action.isExternal ? '_blank' : undefined}
      rel={action.isExternal ? 'noreferrer' : undefined}
      className="group flex min-h-44 flex-col justify-between rounded-3xl border border-white/70 bg-white/65 p-6 shadow-[0_18px_48px_rgba(63,82,104,0.12)] transition-[transform,box-shadow,background-color] duration-150 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_24px_60px_rgba(63,82,104,0.16)] active:translate-y-px active:shadow-[0_10px_28px_rgba(63,82,104,0.12)]"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b8cff0] text-[#1f2430] transition group-hover:bg-[#a8c2e8]">
        <ContactIcon type={action.icon} />
      </div>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#5e789c]">
          {action.title}
        </p>
        <p className="mt-2 text-xl font-semibold text-[#1f2430]">{action.label}</p>
        {action.title === 'Resume' && (
          <p className="mt-3 text-sm leading-6 text-[#526174]">
            Opens the current Google Doc resume in a new tab. Replace the URL
            with <span className="font-mono">/resume.pdf</span> later for a local PDF.
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

function ProjectCfcPage({ onNavigate }) {
  const metaCards = [
    {
      label: 'Role',
      value: 'Product Designer, UX Researcher, Front-End Developer',
    },
    {
      label: 'Tools',
      value: 'React, Vite, Tailwind CSS, Figma, GitHub, Vercel',
    },
    {
      label: 'Methodology',
      value: 'Waterfall / WBS Management',
    },
    {
      label: 'Status',
      value: 'MVP launched',
    },
  ]

  return (
    <article id="cfc-top" className="bg-[#f7f0e4] text-[#232018]">
      <nav className="sticky top-[76px] z-20 border-y border-[#d8ccb8] bg-[#f7f0e4]/92 backdrop-blur-md">
        <div className="mx-auto flex w-[min(100%-32px,1120px)] gap-2 overflow-x-auto py-3 md:flex-wrap md:justify-center">
          {cfcNavItems.map((item) => (
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

      <section id="overview" className="scroll-mt-36 px-4 py-14 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#6f7d55]">
              Product case study
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#232018] md:text-7xl">
              Cat Feeding Calculator MVP
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f584d] md:text-xl">
              A precision nutrition tool that converts veterinary energy
              formulas into personalized daily feeding recommendations for cats.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <TactileLink href="#" label="View Live Demo" isPrimary />
              <TactileLink href="#" label="View GitHub" />
            </div>
          </div>

          <div className="relative mx-auto h-[540px] w-full max-w-[460px] overflow-visible sm:h-[560px] md:h-[590px] lg:mx-0 lg:h-[620px] lg:justify-self-end">
            <PhoneMockup
              title="Profile input"
              tone="sage"
              image={profileInputScreen}
              variant="secondary"
            />
            <PhoneMockup
              title="Feeding plan"
              tone="cream"
              image={mealPlanScreen}
              variant="primary"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metaCards.map((meta) => (
            <Card key={meta.label} className="p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#768461]">
                {meta.label}
              </p>
              <p className="mt-3 text-base font-semibold leading-6 text-[#2f2b22]">
                {meta.value}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <Section id="problem" eyebrow="Problem" title="The Problem: Generic Feeding Guidance Is Not Enough">
        <p className="max-w-3xl text-lg leading-8 text-[#5f584d]">
          Most online cat-feeding guidance gives generic recommendations based
          on broad weight ranges. However, real feeding needs vary significantly
          depending on weight, neuter status, activity level, life stage, body
          goal, and food calorie density.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5f584d]">
          This creates a gap between general feeding advice and safe,
          personalized daily feeding decisions.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {problemCards.map((problem) => (
            <Card key={problem} className="p-6">
              <p className="text-lg font-semibold leading-7 text-[#332f25]">{problem}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="goal" eyebrow="Product goal" title="Product Goal">
        <p className="max-w-3xl text-lg leading-8 text-[#5f584d]">
          The goal of CFC is to transform clinical nutrition formulas into a
          user-friendly calculator that helps cat owners estimate daily feeding
          amounts with safety checks and food-specific calorie data.
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-5">
          {flowSteps.map((step, index) => (
            <FlowStep key={step} number={index + 1} label={step} />
          ))}
        </div>
      </Section>

      <Section id="logic" eyebrow="Product logic" title="Translating Clinical Formulas into Product Logic">
        <p className="max-w-3xl text-lg leading-8 text-[#5f584d]">
          The calculation pipeline turns profile inputs into clinical energy
          estimates, converts those estimates into serving amounts, checks for
          risky scenarios, and returns a personalized plan.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {logicColumns.map((column) => (
            <Card key={column.title} className="p-6">
              <h3 className="text-2xl font-semibold text-[#2f2b22]">{column.title}</h3>
              <ul className="mt-5 grid gap-3">
                {column.items.map((item) => (
                  <li key={item} className="rounded-xl bg-[#f7f0e4] px-4 py-3 text-[#5d5548]">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="safety" eyebrow="Differentiator" title="Clinical Safety Guardrails" isHighlighted>
        <p className="max-w-3xl text-lg leading-8 text-[#514a40]">
          Unlike a simple calorie calculator, this MVP includes safety logic to
          prevent unsafe recommendations.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {safetyCards.map((card) => (
            <Card key={card.title} className="border-[#b9c29f] bg-[#f5f0dc] p-6 shadow-[0_18px_40px_rgba(85,91,61,0.14)]">
              <h3 className="text-2xl font-semibold text-[#303923]">{card.title}</h3>
              <p className="mt-3 leading-7 text-[#5c5549]">{card.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="database" eyebrow="Database" title="Building a High-Integrity SKU Database">
        <p className="max-w-3xl text-lg leading-8 text-[#5f584d]">
          A major challenge was that pet food nutrition data is inconsistent
          across brands and retailers. Some products list calories per cup,
          some per kilogram, some per can, and some omit key information.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {databaseFields.map((field) => (
            <Card key={field} className="p-5">
              <p className="font-semibold text-[#332f25]">{field}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-[#2f2b22]">Data Quality Control</h3>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {qualityControls.map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-[#5f584d]">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7c8b62]"></span>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section id="engineering" eyebrow="Engineering" title="Architecting for Scalability">
        <p className="max-w-3xl text-lg leading-8 text-[#5f584d]">
          The MVP was structured as a modular React application so future
          features can be added without rebuilding the core calculator.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {scalabilityCards.map((item) => (
            <Card key={item} className="p-6">
              <p className="text-lg font-semibold text-[#332f25]">{item}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-[#d8ccb8] bg-[#efe5d2] p-6">
          <h3 className="text-xl font-semibold text-[#2f2b22]">Future-ready features</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {futureFeatures.map((feature) => (
              <span key={feature} className="rounded-full bg-[#f9f4ea] px-4 py-2 text-sm font-semibold text-[#5d6546]">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section id="validation" eyebrow="Validation" title="Impact & Validation">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((kpi) => (
            <KPIBadge key={kpi.label} value={kpi.value} label={kpi.label} />
          ))}
        </div>
        <Card className="mt-8 p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-[#2f2b22]">UAT summary</h3>
          <p className="mt-4 text-lg leading-8 text-[#5f584d]">
            In user acceptance testing, all users successfully identified and
            understood the senior-cat weight-loss safety warning in the assigned
            scenario. Most users completed the main flow within five minutes,
            confirming that the MVP was understandable and usable despite the
            clinical logic behind it.
          </p>
        </Card>
      </Section>

      <Section id="roadmap" eyebrow="Roadmap" title="Roadmap & Future">
        <div className="grid gap-5 lg:grid-cols-3">
          {roadmapItems.map((item, index) => (
            <RoadmapCard key={item.title} number={index + 1} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <footer className="border-t border-[#d8ccb8] px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm font-semibold text-[#686052] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-5">
            <button type="button" onClick={() => onNavigate('/projects')} className="hover:text-[#303923] hover:underline">
              Portfolio
            </button>
            <button type="button" onClick={() => onNavigate('/contact')} className="hover:text-[#303923] hover:underline">
              Contact
            </button>
            <button type="button" onClick={() => onNavigate('/about')} className="hover:text-[#303923] hover:underline">
              About
            </button>
          </div>
          <a href="#cfc-top" className="hover:text-[#303923] hover:underline">
            Back to top
          </a>
        </div>
      </footer>
    </article>
  )
}

function Section({ id, eyebrow, title, children, isHighlighted = false }) {
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

function Card({ children, className = '' }) {
  return (
    <article
      className={`rounded-3xl border border-[#ded2bd] bg-[#fbf6ec] shadow-[0_14px_35px_rgba(72,61,44,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(72,61,44,0.12)] ${className}`}
    >
      {children}
    </article>
  )
}

function KPIBadge({ value, label }) {
  return (
    <Card className="p-6">
      <p className="text-4xl font-semibold text-[#56633e]">{value}</p>
      <p className="mt-3 leading-6 text-[#5f584d]">{label}</p>
    </Card>
  )
}

function FlowStep({ number, label }) {
  return (
    <div className="rounded-3xl border border-[#d8ccb8] bg-[#fbf6ec] p-5 shadow-[0_10px_25px_rgba(72,61,44,0.07)]">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7c8b62] text-sm font-bold text-white">
        {number}
      </span>
      <p className="mt-5 font-semibold leading-6 text-[#332f25]">{label}</p>
    </div>
  )
}

function RoadmapCard({ number, title, body }) {
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

function TactileLink({ href, label, isPrimary = false }) {
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

function PhoneMockup({ title, tone, image, variant = 'primary' }) {
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

export default App
