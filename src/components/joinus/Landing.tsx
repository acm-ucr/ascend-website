import Heading from "@/components/Heading";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col items-center justify-center pt-10">
        <Heading title="Join Us" />
        <div className="mt-8 w-1/2 text-center text-ascend-dark-blue text-2xl">
          Ascend is a national non-profit organization that is advancing
          Pan-Asian professionals across all industries. We welcome students of
          every major who are passionate about leadership, growth, and
          community.
        </div>

        <div className="mt-12 flex h-125 w-full items-center justify-center bg-gray-300">
          <Image
            src="/home/ascend.webp"
            alt="Logo"
            width={750}
            height={200}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;