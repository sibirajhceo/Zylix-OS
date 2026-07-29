import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh px-4 text-center">
      <Icon name="Compass" size={40} className="text-muted mb-4" weight="light" />
      <h1 className="text-xl font-semibold text-text-primary mb-2">
        Page not found
      </h1>
      <p className="text-sm text-text-secondary mb-6 max-w-xs">
        This part of Zylix OS doesn&apos;t exist yet. The workspace is still
        being built.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-accent text-canvas rounded-lg hover:bg-accent-hover transition-colors"
      >
        Back to Assistant
      </Link>
    </div>
  );
}
