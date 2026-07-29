import { mockConversations } from "@/data/mock-conversations";
import { formatRelativeTime } from "@/lib/utils";
import { ChatCircleDots } from "@phosphor-icons/react/ssr";

export function ConversationList() {
  return (
    <div className="space-y-1">
      {mockConversations.map((conv) => (
        <button
          key={conv.id}
          className="w-full flex items-start gap-3 px-3 py-2.5 rounded-lg text-left hover:bg-surface-elevated transition-colors"
        >
          <ChatCircleDots
            size={18}
            className="text-muted mt-0.5 shrink-0"
            weight="regular"
          />
          <div className="min-w-0">
            <p className="text-sm font-medium text-text-primary truncate">
              {conv.title}
            </p>
            <p className="text-xs text-muted mt-0.5">
              {formatRelativeTime(conv.updatedAt)}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
