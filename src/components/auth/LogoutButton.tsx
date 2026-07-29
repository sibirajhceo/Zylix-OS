"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SignOut } from "@phosphor-icons/react/ssr";
import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setError(null);
    setSubmitting(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();

      if (error) {
        setError("Unable to sign out. Please try again.");
        return;
      }

      router.replace("/login");
      router.refresh();
    } catch {
      setError("Unable to sign out. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={submitting}
        aria-busy={submitting}
        className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-muted hover:text-text-secondary hover:bg-surface-elevated transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <SignOut size={18} weight="regular" />
        {submitting ? "Signing out\u2026" : "Sign out"}
      </button>
      {error && (
        <p
          role="alert"
          aria-live="assertive"
          className="text-xs text-accent px-3 mt-1"
        >
          {error}
        </p>
      )}
    </div>
  );
}
