import { Task } from "@/types";
import { formatDate } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

const categoryIcons: Record<string, string> = {
  money: "CurrencyInr",
  delivery: "Truck",
  personal: "User",
  growth: "TrendUp",
};

const categoryColors: Record<string, string> = {
  money: "text-warning",
  delivery: "text-accent",
  personal: "text-text-secondary",
  growth: "text-success",
};

export function TaskCard({
  task,
  isPriority = false,
}: {
  task: Task;
  isPriority?: boolean;
}) {
  const iconName = categoryIcons[task.category];

  return (
    <div
      className={`rounded-lg border ${
        isPriority ? "border-accent/30 bg-accent-muted/30" : "border-border bg-surface"
      } p-3.5 transition-colors`}
    >
      <div className="flex items-start gap-3">
        <Icon
          name={iconName}
          size={16}
          className={`${categoryColors[task.category]} mt-0.5 shrink-0`}
          weight="fill"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-text-primary">{task.title}</h4>
          {task.description && (
            <p className="text-xs text-text-secondary mt-1 line-clamp-2">
              {task.description}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {task.estimatedMinutes && (
              <span className="flex items-center gap-1 text-xs text-muted">
                <Icon name="ClockCounterClockwise" size={12} weight="regular" />
                {task.estimatedMinutes}m
              </span>
            )}
            {task.projectName && (
              <span className="text-xs text-muted">{task.projectName}</span>
            )}
            {task.dueDate && (
              <span className="text-xs text-muted">Due {formatDate(task.dueDate)}</span>
            )}
            {task.status === "overdue" && (
              <span className="text-xs font-medium text-danger">Overdue</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
