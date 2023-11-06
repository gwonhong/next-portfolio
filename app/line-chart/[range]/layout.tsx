import ReturnButton from "@/app/components/return-button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full">
      <ReturnButton href="/chart" />
      <div className="h-4/5">{children}</div>
    </div>
  );
}
