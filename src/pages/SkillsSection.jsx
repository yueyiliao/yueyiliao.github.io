const skillGroups = [
  {
    title: 'Project Management',
    skills: [
      'Requirements & Scope Definition',
      'Project Planning & Scheduling',
      'Execution Coordination',
      'Progress Monitoring',
      'Risk & Dependency Management',
      'Stakeholder Management',
      'Change Control',
      'Process Improvement',
      'Usability & Acceptance Testing',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Monday.com', 'Jira', 'Asana', 'Notion', 'Excel', 'Google Workspace'],
  },
  {
    title: 'AI-Assisted Workflows',
    skills: ['ChatGPT', 'Codex', 'NotebookLM'],
  },
]

export default function SkillsSection() {
  return (
    <section className="container home-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills &amp; Tools</h2>
      <div className="home-skill-groups">
        {skillGroups.map(({ title, skills }) => (
          <div key={title}>
            <h3>{title}</h3>
            <ul className="home-skill-labels" role="list">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
