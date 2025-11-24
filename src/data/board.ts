import type { StaticImageData } from "next/image";

// BoardMember interface should match what we have in BoardProps
export interface BoardMember {
  profilePic: StaticImageData;
  name: string;
  position: string;
  majorYear: string;
  linkedin: string;
}

// Image Imports
// Presidents
import allenLien from "@/public/board/allen-lien.webp";
import andrewMartinez from "@/public/board/andrew-martinez.webp";

// Events Committee
import ianSlobodien from "@/public/board/ian-slobodien.webp";
import lucasMoo from "@/public/board/lucas-moo.webp";
import alexMa from "@/public/board/alex-ma.webp";
import edenLin from "@/public/board/eden-lin.webp";
import jamieKwong from "@/public/board/jamie-kwong.webp";

// Membership Committee
import caylieChu from "@/public/board/caylie-chu.webp";
import diadoraWong from "@/public/board/diadora-wong.webp";
import codyNyguen from "@/public/board/cody-nyguen.webp";
import isabellaWu from "@/public/board/isabella-wu.webp";
import davidHuang from "@/public/board/david-huang.webp";

// Presidents

export const presidents: BoardMember[] = [
  {
    profilePic: allenLien,
    name: "Allen Lien",
    position: "Co-President",
    majorYear: "Bus. Admin – Accounting 3rd Year",
    linkedin: "https://www.linkedin.com/in/allenlien275/",
  },
  {
    profilePic: andrewMartinez,
    name: "Andrew Martinez",
    position: "Co-President",
    majorYear: "Bus. Admin – Accounting 3rd Year",
    linkedin: "https://www.linkedin.com/in/andrew-martinez-1358bb2a2/",
  },
];

// Events Committee

export const eventsCommittee: BoardMember[] = [
  {
    profilePic: ianSlobodien,
    name: "Ian Slobodien",
    position: "Co-Director of Internal Affairs",
    majorYear: "Bus. Admin – Accounting 2nd Year",
    linkedin: "https://www.linkedin.com/in/ian-slobodien/",
  },
  {
    profilePic: lucasMoo,
    name: "Lucas Moo",
    position: "Co-Director of Internal Affairs",
    majorYear: "Bus. Admin – Accounting 2nd Year",
    linkedin: "https://www.linkedin.com/in/lucas-moo-ucr/",
  },
  {
    profilePic: alexMa,
    name: "Alex Ma",
    position: "Co-Director of Operations",
    majorYear: "Bus. Admin – Info Systems 4th Year",
    linkedin: "https://www.linkedin.com/in/alexx-ma/",
  },
  {
    profilePic: edenLin,
    name: "Eden Lin",
    position: "Co-Director of Operations",
    majorYear: "Bus. Admin – Accounting 2nd Year",
    linkedin: "https://www.linkedin.com/in/edenlin126/",
  },
  {
    profilePic: jamieKwong,
    name: "Jamie Kwong",
    position: "Director of Programs",
    majorYear: "Business Econ – 4th Year",
    linkedin: "https://www.linkedin.com/in/jamie-kwong-re/",
  },
];

// Membership Committee

export const membershipCommittee: BoardMember[] = [
  {
    profilePic: caylieChu,
    name: "Caylie Chu",
    position: "Co-Director of Marketing",
    majorYear: "Bus. Admin – Marketing 3rd Year",
    linkedin: "https://www.linkedin.com/in/caylie-chu/",
  },
  {
    profilePic: diadoraWong,
    name: "Diadora Weng",
    position: "Co-Director of Marketing",
    majorYear: "Biology – 2nd Year",
    linkedin: "https://www.linkedin.com/in/diadora-wong/",
  },
  {
    profilePic: codyNyguen,
    name: "Cody Nyguen",
    position: "Co-Director of Finance",
    majorYear: "Actuarial Science – 3rd Year",
    linkedin: "https://www.linkedin.com/in/codynguy/",
  },
  {
    profilePic: isabellaWu,
    name: "Isabella Wu",
    position: "Co-Director of Finance",
    majorYear: "Bus. Admin – Accounting 3rd Year",
    linkedin: "https://www.linkedin.com/in/isabella-wu-7916b22a3/",
  },
  {
    profilePic: davidHuang,
    name: "David Huang",
    position: "Director of Data",
    majorYear: "Bus. Admin – 2nd Year",
    linkedin: "https://www.linkedin.com/in/davidyhuang/",
  },
];
