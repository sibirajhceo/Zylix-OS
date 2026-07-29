import type { Metadata } from "next";
import { ClockCounterClockwise, ArrowUUpLeft } from "@phosphor-icons/react/ssr";
import { mockActivity } from "@/data/mock-activity";
import { ActivityRecordCard } from "@/components/operational/ActivityItem";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata: Metadata = {
  title: "Activity",
};

export default function ActivityPage() {
  const sorted = [...mockActivity].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  if (sorted.length === 0) {
    return (
      <div className="p-4 lg:p-6 max-w-3xl mx-auto">
        <EmptyState
          icon={<ClockCounterClockwise size={32} weight="light" />}
          title="No activity yet"
          description="Your recent actions will appear here."
        />
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <ClockCounterClockwise
            size={20}
            className="text-accent"
            weight="fill"
          />
          <h1 className="text-lg font-semibold tracking-tight">Activity</h1>
        </div>
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted hover:text-text-secondary border border-border rounded-lg hover:bg-surface transition-colors"
          aria-label="Undo (preview only)"
        >
          <ArrowUUpLeft size={14} weight="regular" />
          Undo
        </button>
      </div>

      <div className="border-l border-border pl-4">
        {sorted.map((record) => (
          <ActivityRecordCard key={record.id} record={record} />
        ))}
      </div>

      <p className="text-[11px] text-muted text-center mt-6">
        Undo is a preview feature and is not yet operational.
      </p>
    </div>
  );
}
