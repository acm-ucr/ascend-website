// app/components/NavBar.tsx
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

const NavBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="bg-gradient-to-r from-orange-50 via-orange-200 to-orange-400 shadow-md">
      <div className="flex w-full items-center justify-between px-20 py-3">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={150}
            height={100}
            priority
          />
        </Link>

        {/* Right: Nav */}
        <nav>
          <ul className="flex items-center gap-15 text-2xl">
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
                      "text-neutral-900 hover:text-orange-600",
                      isActive ? "font-medium text-orange-600" : "",
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
