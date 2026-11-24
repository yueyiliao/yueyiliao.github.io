import catalogImg from '../assets/catalog.png'

export const webServesSnapshotPath = '/projects#project-webserves'
export const webServesTitle = 'WebServes Website Update'

export const projects = [
  {
    id: 'webserves',
    slug: 'webserves',
    title: webServesTitle,
    context: 'WebServes',
    contextLabels: ['PROFESSIONAL', 'WEBSERVES', 'ONGOING'],
    tags: ['Async Coordination', 'Requirements', 'Implementation Planning'],
    summary:
      'Creating shared structure for an asynchronous volunteer team to turn stakeholder feedback into executable work.',
    featured: true,
    caseStudyStatus: 'snapshot-only',
    image: null,
    imageAlt: null,
    path: null,
    snapshot: {
      title: webServesTitle,
      type: 'PROFESSIONAL',
      positioning: 'Business Value Alignment & Communication Process Improvement',
      hook: 'Aligned website improvements with organizational objectives and improved team communication processes to support project execution.',
      disclosure: {
        challenge: "The existing website does not clearly communicate WebServes' mission, service offerings, and value to potential clients, making it difficult for visitors to understand how the organization can support their needs.",
        contributions: [
          {
            icon: 'target',
            title: 'Business Value Alignment',
            description: 'Translated stakeholder feedback into prioritized improvements and measurable acceptance criteria, keeping deliverables focused on organizational goals and user needs.',
          },
          {
            icon: 'messages',
            title: 'Communication Process Improvement',
            description: 'Identified barriers to project tracking adoption, gathered team feedback, and created a walkthrough to improve task visibility, ownership, and progress reporting.',
          },
        ],
        outcomeTitle: 'Expected Outcome',
        outcome: "Improve first-time visitors' understanding of WebServes' services and value, ultimately increasing the conversion rate from website visitors to client inquiries.",
        disclaimer: 'Ongoing professional project · Outcome pending validation.',
      },
    },
  },
  {
    id: 'mobile-identity',
    slug: 'mobile-identity',
    title: 'NYU Tap and Go (Mobile Credential) Rollout',
    context: 'New York University',
    contextLabels: ['ACADEMIC', 'NYU SPS', 'IMPLEMENTATION PLANNING'],
    tags: ['IT Implementation Planning', 'Risk', 'Dependencies'],
    summary:
      'Planning a scoped mobile credential pilot across NYU services, with emphasis on system dependencies, risk mitigation, lifecycle requirements, and implementation readiness.',
    featured: true,
    caseStudyStatus: 'available',
    image: null,
    imageAlt: null,
    path: '/projects/mobile-identity',
    snapshot: {
      title: 'NYU Tap & Go',
      subtitle: 'Mobile Credential Rollout',
      type: 'ACADEMIC PROJECT · NYU SPS',
      positioning: 'Change Management & Implementation Planning',
      hook: 'Led risk identification and mitigation planning for a complex IT implementation project involving organizational change, interdepartmental coordination, and technical dependencies.',
    },
  },
  {
    id: 'second-hand-marketplace',
    slug: 'second-hand-marketplace',
    title: 'Second-Hand Marketplace Rollout',
    context: 'MVP rollout planning',
    contextLabels: ['ACADEMIC PROJECT', 'NYU SPS'],
    tags: ['Requirements Alignment', 'Scope Definition'],
    summary: 'Took ownership of reconciling inconsistent team inputs, establishing a unified project scope and an executable MVP delivery baseline.',
    featured: true,
    caseStudyStatus: 'available',
    image: null,
    imageAlt: null,
    path: '/projects/second-hand-marketplace',
    snapshot: {
      title: 'Second-Hand Marketplace Rollout',
      type: 'ACADEMIC PROJECT · NYU SPS',
      positioning: 'Requirements Alignment & Scope Definition',
    },
  },
  {
    id: 'google-hackathon',
    slug: 'google-hackathon',
    title: 'Google × NYU SPS Hackathon',
    topic: "Accelerating Creator Marketing Campaigns with Google's Multimodal AI",
    context: 'Google × NYU SPS',
    contextLabels: ['HACKATHON', 'GOOGLE × NYU SPS', 'PROCESS & GTM'],
    tags: ['Process Design', 'AI Strategy', 'Validation'],
    summary:
      'Proactively consulted marketing SMEs to identify gaps in our understanding and obtain the information needed to support the team’s strategy development.',
    featured: true,
    caseStudyStatus: 'in-progress',
    image: null,
    imageAlt: null,
    path: null,
    snapshot: {
      title: 'Google × NYU SPS Hackathon',
      type: 'HACKATHON',
      positioning: 'SME Engagement & Team Communication',
      disclosure: {
        challenge: 'Our team needed to develop an AI-enabled creator marketing strategy within a limited timeframe, but lacked sufficient domain knowledge to confidently define the operational problem.',
        contributions: [
          {
            icon: 'messages',
            title: 'Engaged Marketing SMEs',
            description: "Led a marketing SME interview to clarify operational challenges and address the team's knowledge gaps.",
          },
          {
            icon: 'target',
            title: 'Supported Problem Framing',
            description: 'Synthesized practitioner insights into actionable input to help the team narrow the problem and focus its strategy.',
          },
          {
            icon: 'chart',
            title: 'Refined Success Criteria',
            description: 'Encouraged the team to evaluate the proposed solution beyond execution speed, considering quality, scalability, and cost.',
          },
        ],
        outcome: 'Helped the team develop a more focused, practitioner-informed go-to-market strategy grounded in operational needs and business value.',
        disclaimer: 'Hackathon strategy proposal · Not a deployed AI system',
      },
    },
  },
  {
    id: 'cat-feeding-calculator',
    slug: 'cat-feeding-calculator',
    title: 'Cat Feeding Calculator MVP',
    context: 'Independent Product Project',
    contextLabels: ['INDEPENDENT PROJECT', 'COMPLETED MVP'],
    tags: ['Independent Product Project', 'Requirements', 'Validation'],
    summary:
      'A pet health MVP that helps cat owners estimate feeding amounts, search food calorie data, and identify high-risk weight-loss scenarios.',
    featured: false,
    caseStudyStatus: 'available',
    image: catalogImg,
    imageAlt: 'Illustration of a standing tabby cat',
    path: '/Project_CFC',
    snapshot: {
      title: 'Cat Feeding Calculator MVP',
      type: 'INDEPENDENT PROJECT',
      positioning: 'End-to-End Product Delivery',
      hook: 'Independently defined product requirements, prioritized MVP features, and managed the development and delivery of a functional cat feeding calculator.',
      summary: 'I turned that question into an independently delivered MVP that converts cat-profile inputs into feeding recommendations while accounting for usability and health-risk considerations.',
      evidence: [
        'Defined requirements, assumptions, user stories, and acceptance criteria.',
        'Built and iterated the product from calculation logic through interface.',
        'Used feedback to improve usability and clarity.',
      ],
      takeaway: 'My first experience owning the full delivery cycle end to end.',
    },
  },
]
