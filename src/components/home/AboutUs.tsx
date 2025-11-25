import Image from "next/image";
import connect from "@/public/home/connect.webp";
import inspire from "@/public/home/inspire.webp";
import ascend from "@/public/home/ascend.webp";
import Heading from "../Heading";

const AboutUs = () => {
  return (
    <div className="font-nunito mx-auto flex w-4/5 flex-col gap-8 p-20 text-2xl/11 max-lg:w-full max-lg:p-16 max-lg:text-xl/8">
      <Heading title="About Us" />

      <p className="mt-10">
        Ascend UCR is a one of the student-led chapters of Ascend Leadership,
        the largest non-profit membership organizations advancing Pan-Asian
        professionals in the workplace. Our objective is to empower Asian and
        Pacific Islander (API) business leaders of tomorrow to build community
        and ignite change.
      </p>
      <p className="mb-5">
        Through our UCR student chapter we host weekly events such as
        professional workshops, guest speakers, social events, and more to
        promote personal/professional development and create lifelong
        friendships.
      </p>

      <div className="col-span-3 flex flex-row justify-between text-4xl max-lg:flex-col max-lg:items-center max-lg:gap-6 max-lg:text-2xl">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={connect}
            alt="Connect"
            className="h-64 w-64 object-cover"
          />
          <p className="text-ascend-dark-blue">Connect</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image
            src={inspire}
            alt="Inspire"
            className="h-64 w-64 object-cover"
          />
          <p className="text-ascend-dark-blue">Inspire</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={ascend} alt="Ascend" className="h-64 w-64 object-cover" />
          <p className="text-ascend-dark-blue">Ascend</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
