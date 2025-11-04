import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BoardProps {
  profilePic: StaticImageData;
  name: string;
  position: string;
  majorYear: string;
  linkedin: string;
}

const Board = ({
  profilePic,
  name,
  position,
  majorYear,
  linkedin,
}: BoardProps) => {
  return (
    <div className="font-nunito relative flex flex-col items-center">
      <Image
        src={profilePic}
        alt="profile Pic"
        className="relative max-h-115 max-w-115 rounded-3xl object-cover"
      />
      <div className="h-25 w-80 -translate-x-17.5 -translate-y-40 content-center bg-white/80 pl-5">
        <p className="text-2xl font-bold"> {name} </p>
        <p className="text-l"> {position} </p>
      </div>
      <div className="-translate-y-20">
        <p className="pb-3 text-xl">{majorYear}</p>
        <Link href={linkedin} target="_blank">
          <p className="text-l bg-ascend-dark-blue justify-self-center rounded-full px-6 py-1 text-white underline underline-offset-2">
            {"LinkedIn"}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Board;
