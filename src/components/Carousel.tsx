"use client";
import CarouselItem from "./CarouselItem";
import { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface CarouselDataItem {
  icon: StaticImageData;
}

interface CarouselProps {
  data: CarouselDataItem[];
}

const CarouselAnimation = (index: number, length: number) => ({
  initial: { x: 0 },
  animate: { x: "-300%" },
  transition: {
    duration: 20,
    ease: "linear",
    repeat: Infinity,
    delay: (20 / length) * (length - index + 1) * -1,
  },
});

const Carousel = ({ data }: CarouselProps) => {
  const length = data.length;

  return (
    <div className="relative mt-24 h-100 w-full overflow-hidden md:my-10">
      <div className="w-[1200px] xl:w-full ">
        {data.map(({ icon }, index) => {
          const animation = CarouselAnimation(index, length);
          return (
            <motion.div
              key={index}
              initial={animation.initial}
              animate={animation.animate}
              transition={animation.transition}
            >
              <CarouselItem  icon={icon}  />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
