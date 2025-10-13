"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/joinus", label: "Join Us" },
  { href: "/board", label: "Board" },
  { href: "/events", label: "Events" },
  { href: "/calendar", label: "Calendar" },
  { href: "/programs", label: "Programs" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <header className="to-ascend-peach bg-gradient-to-r from-white shadow-md">
      <div className="flex w-full items-center justify-between px-20 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={150}
            height={100}
            priority
          />
        </Link>

        <nav>
          <ul className="flex items-center gap-8 text-2xl font-[var(--font-nunito)]">
            {LINKS.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "transition-colors",
                      "text-ascend-dark-blue hover:text-ascend-red-orange",
                      isActive ? "text-ascend-red-orange font-medium" : "",
                    ].join(" ")}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
