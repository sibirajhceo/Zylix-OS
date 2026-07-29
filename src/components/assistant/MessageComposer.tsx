"use client";

import { Icon } from "@/components/ui/Icon";

export function MessageComposer() {
  return (
    <div className="border border-border rounded-xl bg-surface overflow-hidden focus-within:border-accent/50 transition-colors">
      <div className="flex items-end gap-2 p-2">
        <textarea
          className="flex-1 bg-transparent text-sm text-text-primary placeholder-muted resize-none outline-none px-2 py-1.5 min-h-[40px] max-h-[120px]"
          placeholder="Type a message or brain dump..."
          rows={1}
          onInput={(e) => {
            const target = e.currentTarget;
            target.style.height = "auto";
            target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
          }}
          aria-label="Message input"
        />
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="p-2 rounded-lg text-muted hover:text-text-secondary hover:bg-surface-elevated transition-colors"
            aria-label="Voice input"
          >
            <Icon name="Microphone" size={18} weight="regular" />
          </button>
          <button
            type="button"
            className="p-2 rounded-lg bg-accent text-canvas hover:bg-accent-hover transition-colors"
            aria-label="Send message"
          >
            <Icon name="PaperPlaneRight" size={18} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
