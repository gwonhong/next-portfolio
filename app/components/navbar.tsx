import Link from "next/link";
import Image from "next/image";

// function Logo() {
//   return <Image src="/logo.png" alt="logo" fill />;
// }

function NavItem({ text, href }: { text: string; href: string }) {
  return <Link href={href}>{text}</Link>;
}
export default function Navbar() {
  return (
    <div className="w-full h-20 bg-sky-600 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
              <NavItem text="Home" href="/" />
            </li>
            <li>
              <NavItem text="About" href="/about" />
            </li>
            <li>
              <NavItem text="Gallery" href="/gallery" />
            </li>
            <li>
              <NavItem text="Chart" href="/chart" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
