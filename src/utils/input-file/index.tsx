export default function InputFile({
  children,
}: {
  children: JSX.Element | string;
}) {
  return (
    <label htmlFor="contained-button-file" className="m-0 w-100 ">
      <input type="file" accept=".csv" className="hidden" />
      <>{children}</>
    </label>
  );
}
