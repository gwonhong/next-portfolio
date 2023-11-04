import Link from "next/link";

function Logo() {
  return <></>;
}

function NavItem({ text, href }: { text: string; href: string }) {
  return (
    <Link href={href}>
      <button type="button">{text}</button>
    </Link>
  );
}
export default function Navbar() {
  return (
    <div className="w-full h-20 bg-emerald-800 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
              <NavItem text="home" href="/" />
            </li>
            <li>
              <NavItem text="about" href="/about" />
            </li>
            <li>
              <NavItem text="gallery" href="/gallery" />
            </li>
            <li>
              <NavItem text="chart" href="/chart" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
