"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
    const {title} = useParams();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Project with name &quot;{title}&quot; does not exist.</h2>
    </div>
  );
}
