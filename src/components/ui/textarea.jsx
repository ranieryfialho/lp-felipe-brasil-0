export function Textarea(props) {
  return (
    <textarea
      className="min-h-[120px] w-full rounded-md border border-line/50 bg-bg2/50 px-3 py-2 text-sm placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 ring-accent"
      {...props}
    />
  );
}
