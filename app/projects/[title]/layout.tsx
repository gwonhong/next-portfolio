import MdxLayout from "@/components/mdx-layout";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/projects">Return</Link>
      <MdxLayout>{children}</MdxLayout>
    </>
  );
}
