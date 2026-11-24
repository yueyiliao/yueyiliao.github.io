import AcademicCaseStudy from '../../components/AcademicCaseStudy.jsx'
import { academicCaseIcons as icons } from '../../components/academicCaseIcons.js'

const metrics = [
  { value: 4, label: 'Campus Services in Pilot Scope' },
  { value: 18, label: 'Dependencies Mapped' },
  { value: 10, label: 'Risks Identified' },
]

const approach = [
  {
    title: 'Mapped Implementation Dependencies',
    description: 'Examined relationships between technical systems, campus services, departmental approvals, and implementation activities.',
    icon: icons.network,
  },
  {
    id: 'readiness',
    title: 'Identified Implementation Risks',
    description: 'Identified potential barriers across security, user adoption, departmental coordination, technology dependencies, compliance, and scope control.',
    icon: icons.shieldAlert,
  },
  {
    title: 'Developed Mitigation Strategies',
    description: 'Proposed preventive measures, contingency arrangements, and coordination mechanisms to reduce implementation risks and support pilot readiness.',
    icon: icons.clipboardCheck,
  },
]

const artifacts = [
  {
    title: 'Risk Management Plan',
    description: 'Identified implementation risks and proposed mitigation strategies.',
    fileType: 'Google Docs',
    icon: icons.shieldCheck,
    href: 'https://docs.google.com/document/d/1oa_5-ckjYJkiCjlINDg7uJWMOzI_dW0qM30M5cyx62Y/edit?usp=sharing',
  },
  {
    title: 'Implementation Dependency Analysis',
    description: 'Key implementation dependencies, relationships, and potential impacts.',
    fileType: 'Google Docs',
    icon: icons.network,
    href: 'https://docs.google.com/document/d/1BWGMHouBLNYFpWCR6qZrRBOjNfkyhUiWsUx-sYzUOrw/edit?usp=sharing',
  },
  {
    title: 'WBS & Project Schedule',
    description: 'Project decomposition, activity sequencing, resource allocation, and cost planning.',
    fileType: 'Google Sheets',
    icon: icons.listTree,
    href: 'https://docs.google.com/spreadsheets/d/1YFKX3i4gXq1pbB8UgVQreK809_VCQZ-h3twlSkvHnHo/edit?usp=sharing',
  },
]

const mobileIdentity = {
  topId: 'mobile-identity-top',
  headingPrefix: 'mi',
  sectionIds: { challenge: 'scope', contribution: 'ownership', approach: 'dependencies', outcome: 'current-state' },
  title: 'NYU Tap and Go (Mobile Credential) Rollout',
  competency: 'Change Management & Implementation Planning',
  timeline: <><time dateTime="2026-09">September 2026</time> – <time dateTime="2026-12">December 2026</time> · Team Project</>,
  disclaimer: 'Academic portfolio concept · Not a production NYU service',
  metrics,
  overview: 'A proposed mobile credential pilot designed to allow NYU students to access campus buildings, printing, library services, and dining through their smartphones.',
  challenge: 'Introducing mobile credentials requires more than technology integration. It also involves organizational change, coordination across departments, user adoption, and operational readiness.',
  contribution: 'Led risk identification and mitigation planning for a complex IT implementation project involving organizational change, interdepartmental coordination, and technical dependencies.',
  approach,
  outcome: 'Contributed to a structured implementation plan that documents key dependencies and proposed risk responses, providing a foundation for future pilot execution and informed implementation decisions.',
  artifactsIntro: 'Selected project documentation demonstrating my risk management and implementation planning approach.',
  artifacts,
}

export default function MobileIdentityPage({ onNavigate }) {
  return <AcademicCaseStudy study={mobileIdentity} onNavigate={onNavigate} />
}
