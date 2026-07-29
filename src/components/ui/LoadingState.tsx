export function LoadingState({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-3" role="status">
      <div className="h-5 w-5 rounded-full border-2 border-border border-t-accent animate-spin" />
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}
