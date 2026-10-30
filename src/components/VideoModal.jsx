import { useEffect, useRef } from 'react'

export default function VideoModal({ src, poster, open, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video"
      className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 font-sans text-sm uppercase tracking-widest text-ivory transition hover:text-gold"
      >
        Close
      </button>
      <video
        className="max-h-[88vh] w-auto max-w-full rounded-md bg-black"
        src={src}
        poster={poster}
        controls
        autoPlay
        playsInline
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
