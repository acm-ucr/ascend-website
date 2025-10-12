import Image from "next/image";
import ascendLogo from "@/public/logo.webp";
import { SiLinktree } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="grid h-1/3 w-screen grid-cols-3 items-center p-8">
      <div className="ml-8 flex w-5/8">
        <Image src={ascendLogo} alt="Ascend Logo" />
      </div>
      <div></div>
      <div className="flex flex-col text-left">
        <div
          className="text-4xl font-bold"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Contact Us
        </div>
        <div className="mt-1 text-2xl font-semibold underline">
          <a href="mailto:ascenducr@gmail.com">ascenducr@gmail.com</a>
        </div>
        <div className="mt-4 flex items-center gap-8">
          <Link href="https://linktr.ee/AscendUCR">
            <SiLinktree size={55} />
          </Link>

          <Link href="https://www.linkedin.com/company/ascenducr-25">
            <FiLinkedin size={60} />
          </Link>

          <Link href="https://www.instagram.com/ascend_ucr/">
            <FaInstagram size={60} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
