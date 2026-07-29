import { Lightning } from "@phosphor-icons/react/ssr";
import { suggestedPrompts } from "@/data/mock-conversations";

export function SuggestedPrompts() {
  return (
    <div className="flex flex-wrap gap-2">
      {suggestedPrompts.map((prompt) => (
        <button
          key={prompt.id}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-text-secondary bg-surface-elevated hover:bg-border rounded-full transition-colors"
        >
          <Lightning size={12} className="text-accent" weight="fill" />
          {prompt.text}
        </button>
      ))}
    </div>
  );
}
