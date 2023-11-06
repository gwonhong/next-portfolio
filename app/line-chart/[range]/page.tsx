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
      <p className="mb-2 rounded-lg bg-yellow-100 shadow-sm shadow-black/5 border-b-1 border-yellow-200 bg-clip-padding p-2 text-slate-600 text-xs text-center">
        Hint: You can toggle each line by clicking on the corresponding item of
        the legend!
      </p>
      <div className="h-4/5 rounded-lg bg-slate-100 shadow-lg shadow-black/5 border-b-2 bg-clip-padding p-2">
        <LineChart data={data} />
      </div>
    </>
  );
}
