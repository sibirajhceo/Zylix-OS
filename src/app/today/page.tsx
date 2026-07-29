import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { focusTasks, remainingTasks, overdueTasks } from "@/data/mock-tasks";
import { TaskCard } from "@/components/operational/TaskCard";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata: Metadata = {
  title: "Today",
};

export default function TodayPage() {
  const allTasks = [...focusTasks, ...remainingTasks, ...overdueTasks].filter(
    (t, i, arr) => arr.findIndex((x) => x.id === t.id) === i
  );

  if (allTasks.length === 0) {
    return (
      <div className="p-4 lg:p-6 max-w-3xl mx-auto">
        <EmptyState
          icon="CalendarCheck"
          title="No tasks for today"
          description="Everything is up to date. Use the assistant to add new tasks."
        />
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-2.5 mb-6">
        <Icon name="CalendarCheck" size={20} className="text-accent" weight="fill" />
        <h1 className="text-lg font-semibold tracking-tight">Today</h1>
      </div>

      <div className="space-y-6">
        {focusTasks.length > 0 && (
          <section>
            <h2 className="text-xs font-medium text-muted uppercase tracking-wider mb-3">
              Focus · {focusTasks.length}
            </h2>
            <div className="space-y-2">
              {focusTasks.map((task) => (
                <TaskCard key={task.id} task={task} isPriority />
              ))}
            </div>
          </section>
        )}

        {overdueTasks.length > 0 && (
          <section>
            <h2 className="text-xs font-medium text-danger uppercase tracking-wider mb-3">
              Overdue · {overdueTasks.length}
            </h2>
            <div className="space-y-2">
              {overdueTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </section>
        )}

        {remainingTasks.filter(
          (t) => !focusTasks.some((f) => f.id === t.id) && !overdueTasks.some((o) => o.id === t.id)
        ).length > 0 && (
          <section>
            <h2 className="text-xs font-medium text-muted uppercase tracking-wider mb-3">
              Remaining
            </h2>
            <div className="space-y-2">
              {remainingTasks
                .filter(
                  (t) =>
                    !focusTasks.some((f) => f.id === t.id) &&
                    !overdueTasks.some((o) => o.id === t.id)
                )
                .map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
