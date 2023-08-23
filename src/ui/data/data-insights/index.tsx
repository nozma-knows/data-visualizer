interface DataInsightsProps {
  data: string[][];
}

export default function DataInsights({ data }: DataInsightsProps) {
  console.log("DataInsights - data: ", data);
  return (
    <>
      <h1>Data Insights</h1>
    </>
  );
}
