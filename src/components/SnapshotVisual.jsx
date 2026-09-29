function Node({ x, y, width = 120, label, emphasis = false }) {
  return (
    <g className={emphasis ? 'snapshot-node snapshot-node-emphasis' : 'snapshot-node'}>
      <rect x={x} y={y} width={width} height="54" rx="8" />
      <text x={x + width / 2} y={y + 32} textAnchor="middle">{label}</text>
    </g>
  )
}

function Coordination() {
  return (
    <>
      <g className="snapshot-lines"><path d="M155 67 C185 67 175 180 210 180 M155 167 H210 M155 267 C185 267 175 180 210 180 M310 180 C350 180 320 67 350 67 M310 180 H350 M310 180 C350 180 320 267 350 267" /></g>
      <Node x={20} y={40} width={135} label="Feedback" />
      <Node x={35} y={140} label="Questions" />
      <Node x={20} y={240} width={135} label="Updates" />
      <g className="snapshot-node snapshot-node-emphasis"><rect x="200" y="130" width="120" height="100" rx="10" /><text x="260" y="174" textAnchor="middle">Shared</text><text x="260" y="198" textAnchor="middle">structure</text></g>
      <Node x={350} y={40} width={110} label="Owners" />
      <Node x={350} y={140} width={110} label="Tasks" />
      <Node x={350} y={240} width={110} label="Progress" />
    </>
  )
}

function Ecosystem() {
  return (
    <>
      <g className="snapshot-lines"><path d="M160 62 L240 172 L320 62 M160 172 H320 M160 282 L240 172 L320 282" /></g>
      <Node x={10} y={35} width={150} label="Identity" />
      <Node x={10} y={145} width={150} label="Hardware" />
      <Node x={10} y={255} width={150} label="Campus services" />
      <Node x={320} y={35} width={150} label="Security" />
      <Node x={320} y={145} width={150} label="Platforms" />
      <Node x={320} y={255} width={150} label="Readiness" />
      <g className="snapshot-node snapshot-node-emphasis"><rect x="194" y="108" width="92" height="132" rx="18" /><circle cx="240" cy="171" r="16" /><path d="M215 153 Q240 128 265 153 M219 189 Q240 211 261 189" /></g>
      <text className="snapshot-art-label" x="240" y="265" textAnchor="middle">Credential</text>
    </>
  )
}

function Process() {
  return (
    <>
      <g className="snapshot-lines"><path d="M150 87 H180 M300 87 H330 M390 114 V207 Q390 237 355 237 H280 M170 237 H130" /></g>
      <Node x={20} y={60} width={130} label="Challenge" />
      <Node x={180} y={60} label="Discovery" />
      <Node x={330} y={60} width={130} label="Bottleneck" emphasis />
      <Node x={240} y={210} width={160} label="Human + AI" />
      <Node x={30} y={210} width={150} label="Validation" emphasis />
      <g className="snapshot-art-mark"><path d="m166 80 9 7-9 7 m150 83 8 4-8 4 M390 177 l-7 -9 m7 9 7-9 M215 237 l9 -7 m-9 7 9 7" /></g>
      <text className="snapshot-art-label" x="240" y="320" textAnchor="middle">Quality · scale · cost</text>
    </>
  )
}

function Planning() {
  return (
    <>
      <g className="snapshot-lines"><path d="M100 84 L240 150 M240 80 V150 M380 84 L240 150 M240 204 V240 H85 V272 M240 240 V272 M240 240 H395 V272" /></g>
      <g className="snapshot-fragments"><rect x="40" y="35" width="110" height="44" rx="5" transform="rotate(-5 95 57)" /><rect x="185" y="25" width="110" height="44" rx="5" /><rect x="330" y="35" width="110" height="44" rx="5" transform="rotate(5 385 57)" /></g>
      <text className="snapshot-art-label" x="240" y="110" textAnchor="middle">Team inputs</text>
      <Node x={145} y={150} width={190} label="Aligned baseline" emphasis />
      <g className="snapshot-fragments"><rect x="35" y="272" width="100" height="35" rx="5" /><rect x="190" y="272" width="100" height="35" rx="5" /><rect x="345" y="272" width="100" height="35" rx="5" /></g>
      <text className="snapshot-art-label" x="240" y="340" textAnchor="middle">Structured work packages</text>
    </>
  )
}

const concepts = { coordination: Coordination, ecosystem: Ecosystem, process: Process, planning: Planning }

export default function SnapshotVisual({ visual }) {
  const Concept = concepts[visual.kind]
  return (
    <div className={`snapshot-visual snapshot-visual-${visual.kind}`}>
      {visual.src ? (
        <img src={visual.src} alt={visual.alt} loading="lazy" />
      ) : (
        <div className="snapshot-concept-art" role="img" aria-label={visual.alt}>
          <svg viewBox="0 0 480 360" aria-hidden="true" focusable="false">
            {Concept && <Concept />}
          </svg>
        </div>
      )}
    </div>
  )
}
