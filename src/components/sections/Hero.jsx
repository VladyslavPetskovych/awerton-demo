import AwertonMark from '../brand/AwertonMark'

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] max-h-[800px] min-h-[600px] overflow-hidden bg-ink text-ivory">
      <video
        className="absolute inset-0 h-full w-full origin-center animate-slow-zoom object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-lviv.webp"
        aria-hidden="true"
      >
        <source src="/main-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-ink/60" />

      <div className="relative z-10 flex h-full flex-col items-center px-5 text-center">
        <div className="flex flex-1 flex-col items-center justify-center pt-24">
          <h1 className="animate-fade-up" style={{ animationDelay: '0.05s' }}>
            <span className="sr-only">AWERTON</span>
            <AwertonMark className="h-[120px] w-auto text-gold md:h-[150px]" aria-hidden="true" />
          </h1>
          <p
            className="mt-7 max-w-[490px] animate-fade-up font-sans text-base leading-[1.375] font-light text-ivory"
            style={{ animationDelay: '0.2s' }}
          >
            AWERTON is a modern home for investing and business management. Join the list to be the
            first through the door.
          </p>
        </div>

        <div className="animate-fade-up pb-[43px]" style={{ animationDelay: '0.35s' }}>
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-11 bg-ivory/80" />
            <span className="font-sans text-sm tracking-[0.2em] uppercase">Est. 2013</span>
            <span className="h-px w-11 bg-ivory/80" />
          </div>
          <p className="mt-6 font-serif text-base text-ivory">
            Management you can trust. Results you can feel.
          </p>
        </div>
      </div>
    </section>
  )
}
