import Carousel from "@/components/Carousel";
import partners from "@/data/partners";
import Heading from "../Heading";
import Image from "next/image";
import groupPhoto2 from "@/public/home/group2withdots.webp";

const Partners = () => {
  return (
    <>
      {/* TODO: Change this to subheading after its done */}
      <Heading title="Partners" />
      <Carousel data={partners} />
      <Image src={groupPhoto2} alt="Group Photo 2" className="w-1/2 pb-12" />
    </>
  );
};

export default Partners;
