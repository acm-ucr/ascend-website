import SubHeading from "@/components/join/SubHeading";
import Link from "next/link";

const Join = () => {
  return (
    <div className="text-center mb-20">
      <SubHeading title="How to Join" />
      <div className="text-center my-10">
        <p>Click below to join Ascend and take the first step toward new</p>
        <p>opportunities, meaningful connections, and becoming part of</p>
        <p>an inspiring community today!</p>
      </div>
      <Link href='./page.tsx' className="bg-ascend-red-orange mt-5 rounded-full px-8 py-2 text-xl text-white transition hover:bg-red-700">Join!</Link>
    </div>
  );
};

export default Join;
