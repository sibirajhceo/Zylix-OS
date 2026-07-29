"use client";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-danger"
        aria-hidden="true"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z" />
      </svg>
      <p className="text-sm text-text-primary">{message}</p>
    </div>
  );
}
