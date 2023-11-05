"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function validateYears(start: number, end: number) {
  if (start < 1960 || start > 2022) return false;
  if (end < 1960 || end > 2022) return false;
  return true;
}

export default function ChartPage() {
  const router = useRouter();
  const [start, setStart] = useState(1960);
  const [end, setEnd] = useState(2022);
  const [isWrong, setIsWrong] = useState(false);
  return (
    <div>
      <h1>Line Chart about Korea&apos;s population change</h1>
      <h3 className={isWrong ? "text-red" : ""}>
        You should input years between 1960-2022.
      </h3>
      <p>
        Start Year:{" "}
        <input
          type="number"
          value={1960}
          onChange={(e) => {
            setStart(parseInt(e.target.value));
          }}
        ></input>
      </p>
      <p>
        End Year:{" "}
        <input
          type="number"
          value="2022"
          onChange={(e) => {
            setEnd(parseInt(e.target.value));
          }}
        ></input>
      </p>
      <button
        type="button"
        onClick={() => {
          const isValid = validateYears(start, end);
          if (isValid) router.push(`/line-chart/${start}-${end}`);
          else {
            setIsWrong(true);
          }
        }}
      >
        Go!
      </button>
    </div>
  );
}
