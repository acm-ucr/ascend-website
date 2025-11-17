"use client";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { motion } from "motion/react";

interface CarouselDataItem {
  icon: StaticImageData;
}

interface CarouselProps {
  data: CarouselDataItem[];
}

const Carousel = ({ data }: CarouselProps) => {
  const scrollingItems = [...data, ...data];

  return (
    <div className="relative mt-24 h-40 w-full overflow-hidden md:my-10">
      <motion.div
        className="flex gap-6 items-center w-max"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: [0, 0, 1, 1],
          duration: 20, 
        }}
        style={{ willChange: "transform" }}
      >
        {scrollingItems.map((item, index) => (
          <div
            key={index}
            className="inline-flex flex-shrink-0 w-40 h-40 items-center justify-center rounded-lg px-5 py-3"
          >
            <Image
              src={item.icon}
              alt={`item-${index}`}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
