import { Project } from "@/types";
import { formatDate, getHealthColor, getStatusColor } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

const statusLabels: Record<string, string> = {
  active: "Active",
  waiting: "Waiting",
  paused: "Paused",
  completed: "Completed",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <Icon name="Folder" size={18} className="text-accent shrink-0" weight="fill" />
          <div>
            <h3 className="text-sm font-medium text-text-primary">
              {project.name}
            </h3>
            <p className="text-xs text-text-secondary mt-0.5 line-clamp-1">
              {project.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span
            className={`text-xs font-mono ${getHealthColor(project.health)}`}
          >
            ●
          </span>
          <span
            className={`text-[11px] px-1.5 py-0.5 rounded border font-mono ${getStatusColor(project.status)} border-current/20`}
          >
            {statusLabels[project.status]}
          </span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-border">
        <div className="text-xs">
          <span className="text-muted">Next: </span>
          <span className="text-text-secondary">{project.nextAction}</span>
        </div>
        <div className="flex items-center gap-3 mt-1.5">
          {project.deadline && (
            <span className="text-xs text-muted">
              Due {formatDate(project.deadline)}
            </span>
          )}
          <span className="text-[11px] text-muted px-1.5 py-0.5 bg-surface-elevated rounded">
            {project.category}
          </span>
        </div>
      </div>

      <div className="mt-3 flex justify-end">
        <span className="flex items-center gap-1 text-xs text-accent">
          View details <Icon name="ArrowRight" size={12} weight="bold" />
        </span>
      </div>
    </div>
  );
}
