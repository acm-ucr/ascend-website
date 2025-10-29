import Image from "next/image";
import connect from "@/public/home/connect.webp";
import inspire from "@/public/home/inspire.webp";
import ascend from "@/public/home/ascend.webp";

const AboutUs = () => {
  return (
    <div className="font-nunito flex w-4/5 flex-col gap-8 text-3xl/11">
      <p className="indent-12">
        Ascend UCR is a one of the student-led chapters of Ascend Leadership,
        the largest non-profit membership organizations advancing Pan-Asian
        professionals in the workplace. Our objective is to empower Asian and
        Pacific Islander (API) business leaders of tomorrow to build community
        and ignite change.
      </p>
      <p className="indent-12">
        Through our UCR student chapter we host weekly events such as
        professional workshops, guest speakers, social events, and more to
        promote personal/professional development and create lifelong
        friendships.
      </p>
      <div className="grid w-full grid-cols-3 gap-12 text-4xl">
        <div className="flex flex-col items-center gap-6">
          <Image
            src={connect}
            alt="Connect"
            className="h-64 w-64 object-cover"
          />
          <p className="text-ascend-dark-blue">Connect</p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <Image
            src={inspire}
            alt="Inspire"
            className="h-64 w-64 object-cover"
          />
          <p className="text-ascend-dark-blue">Inspire</p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <Image src={ascend} alt="Ascend" className="h-64 w-64 object-cover" />
          <p className="text-ascend-dark-blue">Ascend</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
