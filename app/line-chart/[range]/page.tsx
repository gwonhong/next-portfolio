import ReturnButton from "@/app/components/return-button";
import { getPopulationByYearRange } from "@/app/api/chart-data";
import { LineChart } from "@/app/components/charts";

export default async function LineChartPage({
  params,
}: {
  params: { range: string };
}) {
  const [start, end] = params.range.split("-").map((str) => parseInt(str));
  const data = await getPopulationByYearRange(start, end);
  return (
    <>
      <ReturnButton href="/chart" />
      <LineChart data={data} />
    </>
  );
}
