import { WaitingItem } from "@/types";
import { formatDate, getUrgencyColor } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

export function WaitingItemCard({ item }: { item: WaitingItem }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <Icon name="Hourglass" size={18} className="text-muted mt-0.5 shrink-0" weight="regular" />
          <div className="min-w-0">
            <h3 className="text-sm font-medium text-text-primary">{item.title}</h3>
            <p className="text-xs text-text-secondary mt-0.5">{item.dependency}</p>
          </div>
        </div>
        <span className={`text-xs font-mono shrink-0 ${getUrgencyColor(item.urgency)}`}>
          {item.urgency}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-3 text-xs">
        <span className="flex items-center gap-1.5 text-muted">
          <Icon name="User" size={12} weight="regular" />
          {item.person}
        </span>
        {item.projectName && (
          <span className="text-muted">{item.projectName}</span>
        )}
        <span className="flex items-center gap-1.5 text-muted">
          <Icon name="CalendarBlank" size={12} weight="regular" />
          Since {formatDate(item.waitingSince)}
        </span>
        {item.followUpDate && (
          <span className="text-muted">
            Follow up: {formatDate(item.followUpDate)}
          </span>
        )}
      </div>

      {item.notes && (
        <p className="mt-2 text-xs text-text-secondary border-t border-border pt-2">
          {item.notes}
        </p>
      )}
    </div>
  );
}
