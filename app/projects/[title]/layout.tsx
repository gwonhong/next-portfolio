import ReturnButton from "@/app/components/return-button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReturnButton href="/projects"/>
      {children}
    </>
  );
}
