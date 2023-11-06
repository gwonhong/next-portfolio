"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function validateYears(start: number, end: number) {
  if (start < 1960 || start > 2022) return false;
  if (end < 1960 || end > 2022) return false;
  if (start > end) return false;
  return true;
}

export default function ChartPage() {
  const router = useRouter();
  const [start, setStart] = useState(1960);
  const [end, setEnd] = useState(2022);
  const [isWrong, setIsWrong] = useState(false);
  return (
    <div className="prose">
      <h2>Line Chart about Korea&apos;s population change</h2>
      <h3 className={isWrong ? "text-red-600" : ""}>
        You should input years between 1960-2022.
      </h3>
      <p>
        <label>Start Year: </label>
        <input
          type="number"
          className="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
          value={start}
          onChange={(e) => {
            setStart(parseInt(e.target.value));
          }}
        ></input>
      </p>
      <p>
        <label>End Year: </label>
        <input
          type="number"
          className="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
          value={end}
          onChange={(e) => {
            setEnd(parseInt(e.target.value));
          }}
        ></input>
      </p>
      <button
        type="button"
        className="bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-700 py-2 px-4 border border-transparent hover:border-blue-500 rounded"
        onClick={() => {
          const isValid = validateYears(start, end);
          if (isValid) router.push(`/line-chart/${start}-${end}`);
          else {
            setIsWrong(true);
            console.log(isWrong);
          }
        }}
      >
        Go!
      </button>
    </div>
  );
}
