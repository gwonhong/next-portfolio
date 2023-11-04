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
    <div className="w-full h-20 bg-sky-600 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <nav className="md:flex gap-x-6">
            <NavItem text="Home" path="/home" />
            <NavItem text="Projects" path="/projects" />
            <NavItem text="Chart" path="/chart" />
          </nav>
        </div>
      </div>
    </div>
  );
}
