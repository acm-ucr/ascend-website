"use client";

import Image from "next/image";

export default function Landing() {
  const cardBase =
    "w-full max-w-md h-[140px] px-8 py-5 md:px-10 md:py-6 text-center shadow-xl ring-1 ring-black/10 backdrop-blur-md bg-white/30";

  return (
    <section
      aria-label="Ascend landing hero"
      className="relative isolate flex w-full items-start justify-center overflow-hidden bg-neutral-900 
                 min-h-[65vh] md:min-h-[75vh] lg:min-h-[80vh]"
    >
      {/* Background image */}
      <Image
        src="/home/group-1.webp"
        alt="Ascend members at an event"
        fill
        priority
        sizes="100vw"
        className="object-contain"
      />

      {/* Gentle vignette overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />

      {/* Content container */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-10 md:pt-14 lg:pt-16">
        {/* Second background (shadow-style) card */}
        <div
          className={`${cardBase} translate-x-[-10px] translate-y-[150px]`}
          aria-hidden="true"
        />

        {/* Foreground main card */}
        <div className={cardBase}>
          <h1 className="text-4xl font-extrabold tracking-tight text-orange-600 md:text-6xl lg:text-7xl">
            Ascend
          </h1>
          <p className="text-xl font-semibold text-black/90 md:text-2xl">
            Connect. Inspire. Ascend.
          </p>
        </div>
      </div>
    </section>
  );
}

