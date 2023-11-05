import { getPopulationByYearRange } from "@/app/api/chart-data";
import { LineChart } from "@/app/components/charts";
import Link from "next/link";

export default async function LineChartPage({
  params,
}: {
  params: { range: string };
}) {
  const [start, end] = params.range.split("-").map((str) => parseInt(str));
  const data = await getPopulationByYearRange(start, end);
  return (
    <div>
      <LineChart data={data} />
    </div>
  );
}
