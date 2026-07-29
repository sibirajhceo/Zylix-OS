import { Icon } from "@/components/ui/Icon";
import { MessageComposer } from "@/components/assistant/MessageComposer";
import { SuggestedPrompts } from "@/components/assistant/SuggestedPrompts";
import { focusTasks } from "@/data/mock-tasks";
import { formatCurrency } from "@/lib/utils";
import { totalPending } from "@/data/mock-payments";
import { mockWaitingItems } from "@/data/mock-waiting";
import { TaskCard } from "@/components/operational/TaskCard";
import { mockConversations } from "@/data/mock-conversations";

export default function HomePage() {
  const latestMessages = mockConversations.flatMap((c) => c.messages).slice(-2);

  return (
    <div className="flex flex-col lg:flex-row min-h-dvh">
      <div className="flex-1 flex flex-col min-w-0 max-w-3xl mx-auto w-full px-4 lg:px-6 py-4 lg:py-6">
        <div className="flex items-center gap-2.5 mb-6">
          <Icon name="Command" size={20} className="text-accent" weight="fill" />
          <h1 className="text-lg font-semibold tracking-tight">Assistant</h1>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto">
          {latestMessages.length > 0 && (
            <div className="space-y-4">
              {latestMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-3 text-sm ${
                      msg.role === "user"
                        ? "bg-accent text-canvas"
                        : "bg-surface text-text-primary border border-border"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pt-4">
            <p className="text-xs text-muted mb-3">Suggested prompts</p>
            <SuggestedPrompts />
          </div>

          <p className="text-[11px] text-muted text-center pt-4 border-t border-border">
            AI and cloud sync are not connected yet. This is a preview of the
            assistant interface.
          </p>
        </div>

        <div className="mt-4 sticky bottom-0 bg-canvas pt-2">
          <MessageComposer />
        </div>
      </div>

      <aside className="hidden lg:block w-80 border-l border-border p-4 overflow-y-auto">
        <div className="space-y-4">
          <div>
            <h2 className="text-xs font-medium text-muted uppercase tracking-wider mb-3">
              Today
            </h2>
            <div className="space-y-2">
              {focusTasks.map((task) => (
                <TaskCard key={task.id} task={task} isPriority />
              ))}
            </div>
          </div>

          <div className="pt-2">
            <h2 className="text-xs font-medium text-muted uppercase tracking-wider mb-3">
              Payments
            </h2>
            <div className="rounded-lg border border-border bg-surface p-3">
              <p className="text-xs text-text-secondary">Pending total</p>
              <p className="text-lg font-semibold text-text-primary mt-1">
                {formatCurrency(totalPending)}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <h2 className="text-xs font-medium text-muted uppercase tracking-wider mb-3">
              Waiting
            </h2>
            <div className="space-y-2">
              {mockWaitingItems.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-border bg-surface p-3"
                >
                  <p className="text-sm text-text-primary truncate">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted mt-1">{item.person}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
