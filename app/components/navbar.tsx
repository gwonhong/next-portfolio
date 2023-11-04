"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// function Logo() {
//   return <Image src="/logo.png" alt="logo" fill />;
// }

function NavItem({ text, path }: { text: string; path: string }) {
  let pathname = usePathname() || "/";
  const isActive = path === pathname;
  return (
    <Link href={path} className={isActive ? "text-black" : "text-white"}>
      {text}
    </Link>
  );
}
export default function Navbar() {
  return (
    <div className="w-full h-20 bg-sky-600 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <ul className="hidden md:flex gap-x-6">
            <li>
              <NavItem text="Home" path="/" />
            </li>
            <li>
              <NavItem text="About" path="/about" />
            </li>
            <li>
              <NavItem text="Gallery" path="/gallery" />
            </li>
            <li>
              <NavItem text="Chart" path="/chart" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
