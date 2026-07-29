import { Icon } from "@/components/ui/Icon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-dvh items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-2.5 mb-3">
            <Icon name="Command" size={24} className="text-accent" weight="fill" />
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
          onSubmit={undefined}
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
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full px-3.5 py-2.5 text-sm bg-surface border border-border rounded-lg text-text-primary placeholder-muted focus:outline-none focus:border-accent/50 transition-colors"
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
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                className="w-full px-3.5 py-2.5 pr-10 text-sm bg-surface border border-border rounded-lg text-text-primary placeholder-muted focus:outline-none focus:border-accent/50 transition-colors"
              />
              <button
                type="button"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-text-secondary"
                aria-label="Toggle password visibility"
              >
                <Icon name="Eye" size={16} weight="regular" />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 text-sm font-medium bg-accent text-canvas rounded-lg hover:bg-accent-hover transition-colors"
          >
            Sign in
          </button>

          <div className="text-center">
            <button
              type="button"
              className="text-xs text-muted hover:text-text-secondary transition-colors"
            >
              Forgot password?
            </button>
          </div>

          <p className="text-[11px] text-muted text-center pt-2 border-t border-border">
            Authentication will be connected in an upcoming milestone. This is a
            visual preview only. No credentials are stored or sent.
          </p>
        </form>
      </div>
    </div>
  );
}
