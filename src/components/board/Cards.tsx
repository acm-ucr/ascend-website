import { Board } from "@/data/board";
import BoardCard from "@/components/board/BoardCard";

const Cards = () => {
  return (
    <div>
      {Board.map(({ title, members }, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-30"
        >
          <p className="text-ascend-red-orange font-playfair mt-15 text-3xl font-bold underline underline-offset-5">
            {title}
          </p>
          <div className="grid grid-cols-2 items-center justify-center gap-25">
            {members.map(
              ({ profilePic, name, position, majorYear, linkedin }, index) => (
                <div key={index} className="font-nunito">
                  <BoardCard
                    profilePic={profilePic}
                    name={name}
                    position={position}
                    majorYear={majorYear}
                    linkedin={linkedin}
                  />
                </div>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
