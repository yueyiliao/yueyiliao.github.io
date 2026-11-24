import AcademicCaseStudy from '../../components/AcademicCaseStudy.jsx'
import { academicCaseIcons as icons } from '../../components/academicCaseIcons.js'
import { projects } from '../../data/projects.js'

const project = projects.find(({ id }) => id === 'second-hand-marketplace')

const marketplace = {
  topId: 'second-hand-marketplace-top',
  title: project.title,
  competency: project.snapshot.positioning,
  timeline: <><time dateTime="2026-09">September 2026</time> – Present · Team Project</>,
  disclaimer: 'Academic portfolio project · Proposed MVP, not a production NYU marketplace',
  metricLabel: 'Team project planning metrics',
  metricNote: 'Project planning estimates and planned testing coverage, not actual expenditure or completed implementation results.',
  metrics: [
    { value: '13', label: 'WBS Modules' },
    { value: '1,982', label: 'Estimated Person-Hours' },
    { value: '$51,650', label: 'Estimated Project Cost' },
    { value: '55', label: 'Planned Test Cases & Scenarios' },
  ],
  overview: 'A proposed web-based marketplace MVP designed to provide verified NYU students with a trusted and convenient platform for buying and selling second-hand items, supporting student affordability, campus sustainability, and the transition of incoming and graduating students.',
  challenge: 'As team members developed different parts of the project plan, inconsistencies emerged across project objectives, requirements, scope boundaries, and deliverables. Without a unified baseline, these inconsistencies could carry forward into scheduling, resource allocation, and implementation planning.',
  contribution: project.summary,
  approach: [
    {
      title: 'Reconciled Team Inputs',
      description: 'Reviewed individually developed project components, identified inconsistencies and information gaps, and reconciled them against shared project objectives.',
      icon: icons.listChecks,
    },
    {
      title: 'Established a Unified Project Baseline',
      description: 'Aligned project goals, requirements, scope boundaries, and deliverables while distinguishing essential MVP functionality from conditional integrations and future enhancements.',
      icon: icons.target,
    },
    {
      title: 'Translated Scope into Detailed Delivery Plans',
      description: 'Decomposed deliverables into structured work packages and connected activity sequencing with resource allocation, effort estimation, and cost planning.',
      icon: icons.listTree,
    },
    {
      title: 'Applied AI-Assisted Planning',
      description: 'Used AI to support WBS development and dependency analysis, validating generated outputs against project requirements and constraints to identify inconsistencies and planning gaps.',
      icon: icons.brainCircuit,
    },
  ],
  outcome: 'Established a coherent project planning baseline connecting business objectives, requirements, scope, deliverables, schedule, resources, and cost. The resulting plan provides the team with a consistent foundation for coordinated MVP delivery and subsequent verification against project requirements.',
  artifactsIntro: 'Selected project documentation demonstrating my approach to scope definition, delivery planning, stakeholder engagement, and requirements-based testing.',
  artifacts: [
    {
      title: 'Project Proposal',
      description: 'Business objectives, project deliverables, dependencies, and implementation boundaries.',
      fileType: 'Google Docs',
      icon: icons.fileText,
      href: 'https://docs.google.com/document/d/14T95mietaVQEED7fQiYzDaoss5aqP81taCVLp984CCY/edit?usp=sharing',
    },
    {
      title: 'WBS, Schedule, Resource & Cost Plan',
      description: 'Detailed work breakdown, activity sequencing, resource allocation, effort estimation, and project budgeting.',
      fileType: 'Google Sheets',
      icon: icons.fileSpreadsheet,
      href: 'https://docs.google.com/spreadsheets/d/1NULqo4DCiu06dvHkRaZtNwpil26jn6DCOZZVDIlIT5Y/edit?usp=sharing',
    },
    {
      title: 'Stakeholder Register',
      description: 'Stakeholder analysis, engagement strategies, communication channels, and WBS-aligned communication milestones.',
      fileType: 'Google Sheets',
      icon: icons.users,
      href: 'https://docs.google.com/spreadsheets/d/1Y1pBRKyHOFN44MqHFH3lGdl7PRQu80IHaoTNOqiMBOs/edit?usp=sharing',
    },
    {
      title: 'Project Test & Acceptance Plan',
      description: '55 planned test cases and scenarios covering unit testing, integration testing, system testing, user workflows, usability, and user acceptance.',
      fileType: 'Google Docs',
      icon: icons.clipboardCheck,
      href: 'https://docs.google.com/document/d/1TvRxF7fZrE0oCahO9NnBcWUC7h28zAPwhzjnq-UHlZ4/edit?usp=sharing',
    },
  ],
}

export default function MarketplacePage({ onNavigate }) {
  return <AcademicCaseStudy study={marketplace} onNavigate={onNavigate} />
}
