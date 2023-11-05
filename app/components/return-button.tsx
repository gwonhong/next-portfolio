import Link from "next/link";
export default function ReturnButton({ href }: { href: string }) {
  return (
    <Link href={href}>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Return
      </button>
    </Link>
  );
}
