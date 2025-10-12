import Image from "next/image";
import ascendLogo from "@/public/logo.webp";
import { SiLinktree } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex h-1/3 w-screen items-center justify-between px-32 py-8 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)]">
      <Image src={ascendLogo} className="w-1/4" alt="Ascend Logo" />

      <div className="flex flex-col text-left">
        <div className="font-playfair text-4xl font-bold">Contact Us</div>

        <a
          href="mailto:ascenducr@gmail.com"
          className="mt-1 text-2xl font-semibold underline decoration-1"
        >
          ascenducr@gmail.com
        </a>

        <div className="mt-4 flex items-center gap-8">
          <Link
            href="https://linktr.ee/AscendUCR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinktree size={55} />
          </Link>

          <Link
            href="https://www.linkedin.com/company/ascenducr-25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={60} />
          </Link>

          <Link
            href="https://www.instagram.com/ascend_ucr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={60} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
