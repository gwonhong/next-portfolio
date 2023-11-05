"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <div className="w-full bg-sky-600 px-12 h-20">
      <div className="flex items-center h-full font-bold">
      <span className="text-xl mr-6">Gwon Hong&apos;s Portfolio</span>
        <nav className="flex gap-6">
          <NavItem text="Home" path="/home" />
          <NavItem text="Projects" path="/projects" />
          <NavItem text="Chart" path="/chart" />
        </nav>
      </div>
    </div>
  );
}
