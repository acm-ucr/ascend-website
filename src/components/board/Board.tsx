import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface props {
  profilePic: StaticImageData; // the picture of the member
  name: string; // the member's name
  position: string; // what position the member holds
  majorYear: string; // the member's major and their year
  linkedin: string; // the link to the board member's LinkedIn
  imgSize?: number; // size of profile picture, default is set to 300
}

const Board = ({
  profilePic,
  name,
  position,
  majorYear,
  linkedin,
  imgSize = 300,
}: props) => {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: imgSize,
        font: "var(--font-nunito)",
      }}
    >
      <Image
        src={profilePic}
        alt="profile Pic"
        style={{
          position: "relative",
          objectFit: "cover",
          borderRadius: "20px",
          maxHeight: imgSize,
        }}
      />
      <div
        style={{
          display: "grid",
          gridAutoRows: "min-content",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          transform: "translateY(-125%)",
          width: imgSize * 0.75,
          height: imgSize * 0.25,
          paddingLeft: imgSize * 0.06,
          alignContent: "center",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: imgSize * 0.06 }}> {name} </p>
        <p style={{ fontSize: imgSize * 0.05 }}> {position} </p>
      </div>
      <div style={{ textAlign: "center", transform: "translateY(-125%)" }}>
        <p style={{ fontSize: imgSize * 0.05, paddingBottom: imgSize * 0.025 }}>
          {majorYear}
        </p>
        <Link href={linkedin} target="_blank">
          <p
            style={{
              fontSize: imgSize * 0.04,
              backgroundColor: "var(--color-ascend-dark-blue)",
              color: "white",
              textDecoration: "underline",
              textDecorationThickness: "5%",
              textUnderlineOffset: "10%",
              width: "fit-content",
              borderRadius: "20px",
              paddingInline: imgSize * 0.05,
              paddingBlock: imgSize * 0.01,
              justifySelf: "center",
            }}
          >
            {"LinkedIn"}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Board;
