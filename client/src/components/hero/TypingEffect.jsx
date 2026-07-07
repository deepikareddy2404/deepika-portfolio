import { useEffect, useState } from 'react'

export default function TypingEffect({ phrases, typingSpeed = 55, deletingSpeed = 30, pause = 1800 }) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setPhraseIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause])

  return (
    <span className="font-mono text-highlight">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-highlight ml-1 align-middle animate-pulse" />
    </span>
  )
}
