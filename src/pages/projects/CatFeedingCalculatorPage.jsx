import mealPlanScreen from '../../assets/meal-plan-screen.png'
import profileInputScreen from '../../assets/profile-input-screen.png'
import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
import { Section, Card, KPIBadge, FlowStep, RoadmapCard, TactileLink, PhoneMockup } from '../../components/CaseStudyParts.jsx'

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

export default function CatFeedingCalculatorPage({ onNavigate }) {
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
    <CaseStudyLayout topId="cfc-top" navItems={cfcNavItems} onNavigate={onNavigate}>
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
    </CaseStudyLayout>
  )
}
