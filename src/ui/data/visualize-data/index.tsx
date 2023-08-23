interface VisualizeDataProps {
  data: string[][];
}

export default function VisualizeData({ data }: VisualizeDataProps) {
  console.log("VisualizeData - data: ", data);
  return (
    <>
      <h1>Visualize Data</h1>
    </>
  );
}
