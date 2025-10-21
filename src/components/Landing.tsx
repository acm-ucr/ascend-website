"use client";

import Image from "next/image";

export default function Landing() {
  return (
    <section
      aria-label="Ascend landing hero"
      className="relative isolate flex min-h-[65vh] w-full items-start justify-center overflow-hidden bg-neutral-900 md:min-h-[75vh] lg:min-h-[80vh]"
    >
      {/* Background image: 'contain' shows the full image without cropping */}
      <Image
        src="/home/group-1.webp"
        alt="Ascend members at an event"
        fill
        priority
        sizes="100vw"
        className="object-contain"
      />

      {/* Gentle vignette for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />

      {/* Overlay cards, positioned higher on the page */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-10 md:pt-14 lg:pt-16">
        {/* Title card */}
        <div className="rounded-2xl bg-white/80 px-8 py-5 text-center shadow-xl ring-1 ring-black/10 backdrop-blur-md md:px-10 md:py-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-orange-600 md:text-6xl lg:text-7xl">
            Ascend
          </h1>
        </div>

        {/* Subtitle card (slight overlap, placed higher) */}
        <div className="-mt-3 rounded-2xl bg-white/85 px-6 py-3 text-center shadow-xl ring-1 ring-black/10 backdrop-blur-md md:-mt-4 md:px-8 md:py-4">
          <p className="text-lg font-semibold text-black/90 md:text-xl lg:text-2xl">
            Connect. Inspire. Ascend.
          </p>
        </div>
      </div>
    </section>
  );
}
