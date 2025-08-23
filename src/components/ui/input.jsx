export function Input(props) {
  return (
    <input
      className="h-11 w-full rounded-md border border-line/50 bg-bg2/50 px-3 text-sm placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 ring-accent"
      {...props}
    />
  );
}
