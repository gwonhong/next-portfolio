"use client";

import { CirclesWithBar } from "react-loader-spinner";

export default function Loading(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center">
      <CirclesWithBar
        height="150"
        width="150"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
}
