import Image from "next/image";
import ascendLogo from "@/public/logo.webp";
import { SiLinktree } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-10 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] 
                      flex flex-col md:flex-row items-center md:items-start 
                      justify-center md:justify-between px-6 md:px-32 gap-10 md:gap-0">

      <div className="flex justify-center md:justify-start w-full md:w-auto order-2 md:order-none">
        <Image 
          src={ascendLogo}
          alt="Ascend Logo"
          className="w-24 sm:w-42 md:w-60" 
        />
      </div>

      <div className ="flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-none">

        <div className="font-playfair text-3xl font-bold">Contact Us</div>

         <a
          href="mailto:ascenducr@gmail.com"
          className="hidden md:block mt-1 underline decoration-1"
        >
          ascenducr@gmail.com
        </a>

        <div className="mt-4 flex items-center gap-8">
          <Link
            href="https://linktr.ee/AscendUCR"
            target="_blank"
            rel="noopener noreferrer"
            className = "hover:opacity-70 transition" //ADDED HOVER 
          >
            <SiLinktree size={35} />
          </Link>

          <Link
            href="https://www.linkedin.com/company/ascenducr-25"
            target="_blank"
            rel="noopener noreferrer"
            className = "hover:opacity-70 transition"//ADDED HOVER 
          >
            <FiLinkedin size={40} />
          </Link>

          <Link
            href="https://www.instagram.com/ascend_ucr/"
            target="_blank"
            rel="noopener noreferrer"
            className = "hover:opacity-70 transition" //ADDED HOVER 
          >
            <FaInstagram size={40} />
          </Link>

          <a
            href = "mailto:ascenducr@gmail.com"
            className = "block md:hidden hover:opacity-70 transition"
          >
            <FiMail size={40}/>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
