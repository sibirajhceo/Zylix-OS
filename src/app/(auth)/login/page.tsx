"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Command, Eye, EyeSlash } from "@phosphor-icons/react/ssr";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(
          "Unable to sign in. Check your email and password and try again."
        );
        return;
      }

      router.replace("/");
      router.refresh();
    } catch {
      setError("Something went wrong while signing in. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-dvh items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-2.5 mb-3">
            <Command size={24} className="text-accent" weight="fill" />
            <span className="text-lg font-semibold tracking-tight">
              Zylix OS
            </span>
          </div>
          <p className="text-sm text-text-secondary">
            Your private AI workspace
          </p>
        </div>

        <form
          className="space-y-4"
          onSubmit={handleSubmit}
          aria-busy={submitting}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-secondary mb-1.5"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              disabled={submitting}
              className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border rounded-lg text-text-primary placeholder-muted focus:outline-none focus:border-accent/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-text-secondary mb-1.5"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                required
                disabled={submitting}
                className="w-full px-3.5 py-2.5 pr-10 text-sm bg-surface border border-border rounded-lg text-text-primary placeholder-muted focus:outline-none focus:border-accent/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible((v) => !v)}
                disabled={submitting}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-text-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={passwordVisible ? "Hide password" : "Show password"}
              >
                {passwordVisible ? (
                  <EyeSlash size={16} weight="regular" />
                ) : (
                  <Eye size={16} weight="regular" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-2.5 text-sm font-medium bg-accent text-canvas rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Signing in\u2026" : "Sign in"}
          </button>

          <div className="text-center">
            <span className="text-xs text-muted">
              Forgot password?{" "}
              <span className="text-muted opacity-60">
                (not available in preview)
              </span>
            </span>
          </div>

          {error && (
            <div
              role="alert"
              aria-live="assertive"
              className="text-xs text-accent text-center bg-accent-muted rounded-lg px-3 py-2"
            >
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
