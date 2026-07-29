import { WarningCircle } from "@phosphor-icons/react/ssr";

export function ErrorState({
  message = "Something went wrong.",
}: {
  message?: string;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center py-24 gap-3 text-center px-4"
      role="alert"
    >
      <WarningCircle size={32} className="text-danger" weight="light" />
      <p className="text-sm text-text-primary">{message}</p>
    </div>
  );
}
