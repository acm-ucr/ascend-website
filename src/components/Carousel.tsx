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
  const scrollingItems = [...data, ...data]; // duplicate for infinite scroll

  return (
    <div className="relative mt-24 h-96 w-full overflow-hidden md:my-10">
      <motion.div
        className="flex gap-8 items-center"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: [0, 0, 1, 1],
          duration: 20, // adjust for speed
        }}
      >
        {scrollingItems.map((item, index) => (
          <div
            key={index}
            className="flex h-40 w-40 items-center justify-center rounded-lg px-5 py-3"
          >
            <Image src={item.icon} alt={`item-${index}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
