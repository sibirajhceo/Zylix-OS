import type { ReactNode } from "react";

export function EmptyState({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center px-4">
      <div className="text-muted">{icon}</div>
      <div>
        <h3 className="text-base font-medium text-text-primary">{title}</h3>
        <p className="text-sm text-muted mt-1 max-w-sm">{description}</p>
      </div>
    </div>
  );
}
