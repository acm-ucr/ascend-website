"use client";
import Image from "next/image";

export default function Landing() {
  const cardBase =
    "w-full max-w-lg h-[140px] px-8 py-5 md:px-10 md:py-6 text-center shadow-xl ring-1 ring-black/10 backdrop-blur-md bg-white/50";

  return (
    <section
      aria-label="Ascend landing hero"
      className="relative isolate flex min-h-[65vh] w-full items-start justify-center overflow-hidden bg-neutral-900 md:min-h-[75vh] lg:min-h-[80vh]"
    >
      <Image
        src="/home/group-1.webp"
        alt="Ascend members at an event"
        fill
        priority
        sizes="100vw"
        className="object-contain"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-10 md:pt-14 lg:pt-16">
        <div
          className={`${cardBase} translate-x-[-10px] translate-y-[150px]`}
          aria-hidden="true"
        />

        <div className={cardBase}>
          <h1
            className="text-ascend-red-orange -mt-4 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ascend
          </h1>

          <p
            className="py-2 text-xl font-semibold text-black/90 md:text-3xl"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Connect. Inspire. Ascend.
          </p>
        </div>
      </div>
    </section>
  );
}
