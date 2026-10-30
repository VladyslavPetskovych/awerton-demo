import { useEffect, useRef, useState } from 'react'
import VideoModal from '../VideoModal'
import { Eyebrow, PillButton, SectionTitle } from '../ui'

// AWERTON brand film ("авертон (з правками)"), 9:16, with sound.
const VIDEO_SRC = '/videos/awerton-philosophy.mp4'
const POSTER = '/images/philosophy-poster.webp'
// The panel preview starts on the meeting-room shot used in the design.
const PREVIEW_START = 13.2

export default function Philosophy() {
  const [videoOpen, setVideoOpen] = useState(false)
  const previewRef = useRef(null)

  // Muted preview loops in the panel; pause it while the full film plays.
  useEffect(() => {
    const video = previewRef.current
    if (!video) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (videoOpen || reduceMotion) video.pause()
    else video.play().catch(() => {})
  }, [videoOpen])

  return (
    <section id="philosophy" className="relative grid lg:grid-cols-[661fr_779fr]">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink sm:aspect-[16/12] lg:aspect-auto lg:h-[758px]">
        <video
          ref={previewRef}
          className="h-full w-full object-cover"
          src={`${VIDEO_SRC}#t=${PREVIEW_START}`}
          poster={POSTER}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      </div>

      <div className="flex items-center px-5 py-16 md:px-10 lg:py-0 lg:pr-[60px] lg:pl-[clamp(40px,9.8vw,141px)]">
        <div className="max-w-[570px]">
          <Eyebrow>Opinion</Eyebrow>
          <SectionTitle className="mt-2.5">Our philosophy</SectionTitle>
          <p className="mt-[34px] text-base leading-[1.375] opacity-85">
            AWERTON brings together investment, hospitality and professional management under one
            vision. We create and develop projects designed to grow in value, deliver strong
            experiences and remain relevant for years to come.
          </p>
          <PillButton className="mt-[47px]" onClick={() => setVideoOpen(true)}>
            View video
          </PillButton>
        </div>
      </div>

      <VideoModal
        src={VIDEO_SRC}
        poster={POSTER}
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </section>
  )
}
