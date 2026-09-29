import CaseStudyLayout from '../../components/CaseStudyLayout.jsx'
import { Card, Section } from '../../components/CaseStudyParts.jsx'
import './WebServesPage.css'

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'execution', label: 'Execution' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'ownership', label: 'Ownership' },
  { id: 'adoption', label: 'Adoption' },
  { id: 'current-state', label: 'Current State' },
]

const metadata = [
  ['Role', 'Digital Project Coordinator'],
  ['Organization', 'WebServes, Inc.'],
  ['Timeline', 'Aug 2026 – Present'],
  ['Focus', 'Async Coordination · Requirements · Implementation Planning'],
  ['Status', 'Ongoing'],
]

const challenges = [
  ['Fragmented Input', 'Stakeholder feedback existed, but not every comment was implementation-ready.'],
  ['Distributed Ownership', 'Content, web implementation, visual work, decisions, and deployment were owned by different contributors.'],
  ['Asynchronous Coordination', 'Progress depended on contributors independently understanding ownership, dependencies, status, and next actions.'],
]

const ownership = [
  'Managed the master implementation tracker.',
  'Reviewed stakeholder suggestions and underlying website issues.',
  'Translated vague feedback into clearer current issues, accepted outcomes, and subtasks.',
  'Documented owners, dependencies, statuses, target dates, and clarification notes.',
  'Flagged requirements that were not implementation-ready.',
  'Followed up on ambiguity rather than making unsupported assumptions.',
  'Monitored progress and supported use of the shared tracking process.',
  'Identified low tracker engagement as a communication/schedule risk and created a walkthrough to improve adoption.',
]

const examples = [
  {
    title: 'Image captions',
    feedback: '“Add captions to all images.”',
    interpretation: 'A blanket caption requirement could create redundant copy and visual clutter.',
    outcome: 'Use captions only where an image needs additional context to communicate meaning.',
  },
  {
    title: 'Accessible interactions',
    feedback: '“Replace hover-only / motion-driven interactions.”',
    interpretation: 'The accessibility goal was valid, but it was unclear whether the request meant removing all interactive behavior or specifically removing inaccessible interaction patterns.',
    outcome: 'Flag for clarification before implementation rather than converting the comment into an unsupported technical requirement.',
  },
  {
    title: 'HTML sitemap',
    feedback: '“Add an HTML sitemap.”',
    interpretation: 'The need should depend on site complexity rather than automatically adding another navigation artifact.',
    outcome: 'Review the existing site structure first. The site was counted at 19 pages, so the decision should consider both page count and navigation complexity.',
  },
]

const trackerGroups = [
  {
    title: 'Coordinate the work',
    fields: [
      ['Priority', 'Relative importance of the action item.'],
      ['Action Item', 'The change or decision to be addressed.'],
      ['Owner', 'Role-based ownership: Content, Web, Visual, or Decision Owner.'],
      ['Status', 'Progress or clarification needed.'],
      ['Target Date', 'The target recorded for the work.'],
    ],
  },
  {
    title: 'Define the work',
    fields: [
      ['Current Issue', 'The existing issue behind the request.'],
      ['Accepted Version', 'The intended outcome for the change.'],
      ['Subtasks', 'Smaller pieces of implementation work.'],
      ['Dependencies', 'Upstream decisions or work needed first.'],
      ['Notes', 'Questions, clarification, and follow-up context.'],
    ],
  },
]

const workflow = [
  'Stakeholder feedback', 'Issue definition', 'Accepted outcome', 'Subtasks',
  'Owner', 'Dependencies', 'Status / clarification', 'Staging / validation',
]

const adoptionSteps = [
  'Shared process created',
  'Low engagement observed',
  'Communication/schedule risk identified',
  'Feedback gathered',
  'Asynchronous walkthrough created',
]

const judgments = [
  ['Clarity before execution', 'A stakeholder request is not automatically an implementation-ready requirement.'],
  ['Dependencies matter', 'Content, UX, accessibility, and technical changes often depend on upstream decisions.'],
  ['Escalation is part of good PM work', 'When technical intent or ownership was unclear, surfacing the ambiguity was more responsible than guessing.'],
]

const outputs = [
  'Initial review of the existing WebServes website.',
  'Structured implementation tracker.',
  'Requirements/action-item breakdowns.',
  'Ownership and dependency documentation.',
  'Clarification flags for unresolved requirements.',
  'Tracker-adoption walkthrough.',
]

const competencies = [
  'Asynchronous Coordination', 'Influence Without Authority', 'Requirements Clarification',
  'Process Adoption', 'Dependency Management', 'Risk / Issue Escalation',
]

export default function WebServesPage({ onNavigate }) {
  return (
    <CaseStudyLayout topId="webserves-top" navItems={navItems} onNavigate={onNavigate} className="pm-case" backToWork>
      <header className="pm-hero">
        <div className="container">
          <p className="eyebrow">PROFESSIONAL · WEBSERVES · ONGOING</p>
          <h1>WebServes Website Update &amp; Implementation Coordination</h1>
          <p className="pm-intro">Creating shared structure for an asynchronous volunteer team to turn stakeholder feedback into executable work.</p>
          <dl className="pm-metadata">
            {metadata.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}{label === 'Role' && <span className="pm-role-context">Volunteer</span>}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <Section id="overview" eyebrow="01 / Overview" title="Shared structure for an ongoing website update">
        <div className="pm-prose">
          <p>WebServes is improving its existing website to make the site clearer, easier to scan and navigate, and better aligned with organizational goals: attract clients, encourage donations, and recruit volunteers.</p>
          <p>The work includes content restructuring, clearer messaging and CTAs, stronger information hierarchy, evidence-based visuals, navigation/footer improvements, and accessibility-related updates. Changes are intended to move through staging before production.</p>
          <p>My focus was creating enough shared structure for an asynchronous volunteer team to turn stakeholder feedback into executable work, across different areas of ownership and availability.</p>
        </div>
        <aside className="pm-note"><strong>Scope:</strong> An update to the existing WebServes website. A separate future redesign is outside this case study.</aside>
      </Section>

      <Section id="challenge" eyebrow="02 / Challenge" title="Coordinating execution in an asynchronous volunteer team">
        <p className="pm-prose pm-challenge-intro">Contributors worked across different functional areas and availability windows. Work depended on people independently finding their tasks, understanding expectations, surfacing blockers, and updating progress. I had no formal reporting authority over contributors; the challenge was creating enough shared clarity for work to move without constant synchronous supervision.</p>
        <div className="pm-grid pm-grid-three">
          {challenges.map(([title, body]) => (
            <Card key={title} className="pm-panel">
              <h3>{title}</h3>
              <p>{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="execution" eyebrow="03 / Execution" title="The tracker as an asynchronous coordination system">
        <p className="pm-prose">The tracker created a shared source of truth for distributed contributors: what needs to happen, who owns it, what the accepted outcome looks like, what is blocking it, what needs clarification, and where the work is in the process.</p>
        <figure className="pm-tracker">
          <figcaption>
            <span className="eyebrow">Sanitized reconstruction</span>
            <h3>Implementation tracker structure</h3>
            <p>Field structure only, with generic owner roles. Internal entries, names, dates, and task statuses are not reproduced.</p>
          </figcaption>
          <div className="pm-grid pm-grid-two">
            {trackerGroups.map((group) => (
              <div className="pm-tracker-group" key={group.title}>
                <h4>{group.title}</h4>
                <dl>
                  {group.fields.map(([field, description]) => (
                    <div key={field}>
                      <dt>{field}</dt>
                      <dd>{description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </figure>
        <h3 className="pm-workflow-title">From feedback toward staging</h3>
        <ol className="pm-workflow">
          {workflow.map((step, index) => (
            <li key={step}>
              <span className="pm-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span>{step}</span>
              {index < workflow.length - 1 && <span className="pm-arrow" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
        <p className="pm-caption">Intended coordination process; this does not indicate that all work has reached staging or production.</p>
      </Section>

      <Section id="requirements" eyebrow="04 / Requirements" title="From feedback to executable requirements">
        <p className="pm-prose"><strong>Clear asynchronous coordination depends on reducing interpretation gaps.</strong> When contributors are not continuously meeting synchronously, a vague stakeholder comment can produce inconsistent execution. Clarification and accepted outcomes become part of the coordination system.</p>
        <div className="pm-examples">
          {examples.map((example, index) => (
            <article className="pm-example" key={example.title}>
              <h3><span className="pm-index">0{index + 1}</span>{example.title}</h3>
              <dl className="pm-transformation">
                <div>
                  <dt>Initial feedback</dt>
                  <dd>{example.feedback}</dd>
                </div>
                <div>
                  <dt>PM interpretation</dt>
                  <dd>{example.interpretation}</dd>
                </div>
                <div className="pm-refined">
                  <dt>Refined outcome</dt>
                  <dd>{example.outcome}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section id="ownership" eyebrow="05 / Ownership" title="My Role & Ownership">
        <p className="pm-lead">I owned the coordination structure and substantial requirements decomposition for the website-update work, while implementation and strategic decisions remained distributed across the team.</p>
        <ul className="pm-list pm-list-columns">
          {ownership.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <aside className="pm-note"><strong>Team-owned:</strong> Implementation work, final strategic decisions, content creation, visual work, accessibility implementation, and production deployment were distributed across other contributors.</aside>
      </Section>

      <Section id="adoption" eyebrow="06 / Adoption" title="When the process itself became a risk">
        <p className="pm-prose">A shared process only created value if contributors used it. Low tracker engagement became a communication and schedule risk, making process adoption part of the coordination work itself.</p>
        <ol className="pm-adoption-sequence" aria-label="Adoption intervention sequence">
          {adoptionSteps.map((step, index) => (
            <li key={step}>
              <span>{step}</span>
              {index < adoptionSteps.length - 1 && <span className="pm-arrow" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
        <div className="pm-grid pm-adoption">
          <Card className="pm-panel">
            <p className="eyebrow">Response</p>
            <h3>An asynchronous communication intervention</h3>
            <p>I gathered feedback and created a screen-recorded walkthrough so contributors could review the process without another live meeting. It showed how to:</p>
            <ul className="pm-list">
              <li>Filter tasks by owner.</li>
              <li>Identify assigned work.</li>
              <li>Understand ownership.</li>
              <li>Update task status.</li>
            </ul>
          </Card>
          <div className="pm-adoption-result">
            <p className="eyebrow">Intervention created</p>
            <p className="pm-lead">Created an adoption intervention to reduce missed updates and improve visibility into project work.</p>
            <p className="pm-caption">No measured post-intervention result is currently available.</p>
          </div>
        </div>
      </Section>

      <Section id="judgment" eyebrow="07 / Implementation judgment" title="Implementation is more than task tracking">
        <div className="pm-grid pm-grid-three">
          {judgments.map(([title, body]) => (
            <Card key={title} className="pm-panel">
              <h3>{title}</h3>
              <p>{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="current-state" eyebrow="08 / Current State" title="Coordination outputs, with implementation ongoing">
        <div className="pm-grid pm-grid-two">
          <div>
            <h3>Completed coordination outputs</h3>
            <ul className="pm-list">
              {outputs.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <Card className="pm-panel">
            <p className="pm-status">ONGOING IMPLEMENTATION COORDINATION</p>
            <h3>Current state</h3>
            <p>The website update remains ongoing.</p>
            <p>Work is still progressing across content, CTA, information hierarchy, proof-based visuals, accessibility clarification, contributor follow-up, and implementation planning.</p>
          </Card>
        </div>
        <div className="pm-competencies">
          <h3>What this project demonstrates</h3>
          <ul>{competencies.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </Section>
    </CaseStudyLayout>
  )
}
