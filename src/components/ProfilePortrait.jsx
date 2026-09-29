import { useEffect, useRef, useState } from 'react'

export default function ProfilePortrait({ defaultSrc, waveSrc, alt }) {
  const [showWave, setShowWave] = useState(false)
  const resetTimer = useRef(null)
  const hasWaveState = Boolean(waveSrc)

  useEffect(() => () => window.clearTimeout(resetTimer.current), [])

  function handlePointerUp(event) {
    if (!hasWaveState || event.pointerType === 'mouse') return

    window.clearTimeout(resetTimer.current)
    setShowWave(true)
    resetTimer.current = window.setTimeout(() => setShowWave(false), 1100)
  }

  const images = (
    <>
      <img className="avatar-image avatar-image-default" src={defaultSrc} alt={alt} />
      {hasWaveState && (
        <img className="avatar-image avatar-image-wave" src={waveSrc} alt="" aria-hidden="true" />
      )}
    </>
  )

  if (!hasWaveState) {
    return <div className="avatar-wrap">{images}</div>
  }

  return (
    <button
      className={`avatar-wrap avatar-interaction${showWave ? ' is-waving' : ''}`}
      type="button"
      aria-label="Show Yueyi Liao waving"
      onPointerUp={handlePointerUp}
    >
      {images}
    </button>
  )
}
