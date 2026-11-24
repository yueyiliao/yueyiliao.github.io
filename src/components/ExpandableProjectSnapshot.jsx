const contributionIcons = {
  messages: 'M15 12h-5l-3 3v-3H4V3h14v9h-3ZM20 7h1v12h-3v3l-3-3h-5v-2',
  target: 'M21 12a9 9 0 1 1-9-9m5 9a5 5 0 1 1-5-5m0 5 8-8m-4 0h4v4',
  chart: 'M3 20h18M5 16l5-6 4 3 6-8m-4 0h4v4',
}

export default function ExpandableProjectSnapshot({ id, snapshot, expanded }) {
  return (
    <div id={id} className="snapshot-disclosure-panel" role="region" aria-label={`${snapshot.title} snapshot`} hidden={!expanded}>
      {snapshot.disclosure ? <ContributionSnapshot disclosure={snapshot.disclosure} /> : (
        <>
          <p className="snapshot-summary">{snapshot.summary}</p>
          <ul className="snapshot-evidence">
            {snapshot.evidence.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="snapshot-takeaway">{snapshot.takeaway}</p>
        </>
      )}
    </div>
  )
}

function ContributionSnapshot({ disclosure }) {
  return (
    <>
      {disclosure.challenge && (
        <section>
          <h4>The Challenge</h4>
          <p>{disclosure.challenge}</p>
        </section>
      )}
      <section className="snapshot-disclosure-contribution">
        <h4>My Contribution</h4>
        <ul role="list">
          {disclosure.contributions.map(({ title, description, icon }) => (
            <li key={title}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={contributionIcons[icon]} />
              </svg>
              <div>
                <h5>{title}</h5>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {disclosure.outcome && (
        <section>
          <h4>{disclosure.outcomeTitle ?? 'Outcome'}</h4>
          <p>{disclosure.outcome}</p>
        </section>
      )}
      {disclosure.disclaimer && <p className="snapshot-label">{disclosure.disclaimer}</p>}
    </>
  )
}
