import { ActivityRecord } from "@/types";
import { formatRelativeTime } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

const actionIcons: Record<string, string> = {
  task_created: "PlusCircle",
  task_completed: "CheckCircle",
  project_paused: "Pause",
  payment_recorded: "CurrencyInr",
  deadline_updated: "CalendarCheck",
  moved_to_waiting: "Hourglass",
  ai_suggestion: "Lightbulb",
  project_created: "Folder",
  payment_received: "CurrencyInr",
};

const actionColors: Record<string, string> = {
  task_created: "text-accent",
  task_completed: "text-success",
  project_paused: "text-warning",
  payment_recorded: "text-warning",
  deadline_updated: "text-text-secondary",
  moved_to_waiting: "text-muted",
  ai_suggestion: "text-accent",
  project_created: "text-accent",
  payment_received: "text-success",
};

export function ActivityRecordCard({
  record,
}: {
  record: ActivityRecord;
}) {
  const iconName = actionIcons[record.actionType];

  return (
    <div className="flex items-start gap-3 py-3">
      <div className="flex flex-col items-center gap-1">
        {iconName && (
          <Icon
            name={iconName}
            size={16}
            className={`${actionColors[record.actionType] ?? "text-muted"} mt-0.5 shrink-0`}
            weight="fill"
          />
        )}
        <div className="w-px flex-1 bg-border" />
      </div>
      <div className="flex-1 min-w-0 pb-3">
        <p className="text-sm text-text-primary">{record.affectedRecord}</p>
        <p className="text-xs text-muted mt-0.5">{record.explanation}</p>
        <p className="text-[11px] text-muted mt-1">
          {record.source} · {formatRelativeTime(record.timestamp)}
        </p>
      </div>
    </div>
  );
}
