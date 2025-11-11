import Image, { StaticImageData } from "next/image";

interface CarouselItemProps {
  icon: StaticImageData;
}

const CarouselItem = ({ icon }: CarouselItemProps) => {
  return (
    <div className="absolute left-[100%] flex max-w-70 h-40 items-center justify-center rounded-lg px-5 py-3 pr-14 md:w-80">
      <Image src={icon} alt="icon" className="pr-4 md:w-full " />
    </div>
  );
};

export default CarouselItem;
