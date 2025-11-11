import SubHeading from "@/components/join/SubHeading";
import Link from "next/link";

const Join = () => {
  return (
    <div className="mb-20 text-center">
      <SubHeading title="How to Join" />
      <div className="my-10 text-center">
        <p>Click below to join Ascend and take the first step toward new</p>
        <p>opportunities, meaningful connections, and becoming part of</p>
        <p>an inspiring community today!</p>
      </div>
      <Link
        href="./page.tsx"
        className="bg-ascend-red-orange mt-5 rounded-full px-8 py-2 text-xl text-white transition hover:bg-red-700"
      >
        Join!
      </Link>
    </div>
  );
};

export default Join;
