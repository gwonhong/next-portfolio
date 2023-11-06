import Spinner from "@/app/components/spinner";

export default function Loading(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner />
    </div>
  );
}
