import Image, { StaticImageData } from "next/image";

interface CarouselItemProps {
  icon: StaticImageData;
}

const CarouselItem = ({ icon }: CarouselItemProps) => {
  return (
    <div className="absolute left-[100%] flex h-40 max-w-66 items-center justify-center rounded-lg px-5 py-3 pr-14 sm:w-66">
      <Image src={icon} alt="icon" className="pr-4 w-full" />
    </div>
  );
};

export default CarouselItem;
