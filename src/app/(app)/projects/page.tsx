import type { Metadata } from "next";
import { Folder } from "@phosphor-icons/react/ssr";
import { mockProjects } from "@/data/mock-projects";
import { ProjectCard } from "@/components/operational/ProjectCard";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata: Metadata = {
  title: "Projects",
};

const statusOrder = ["active", "waiting", "paused", "completed"];
const statusLabels: Record<string, string> = {
  active: "Active",
  waiting: "Waiting",
  paused: "Paused",
  completed: "Completed",
};

export default function ProjectsPage() {
  const grouped = statusOrder
    .map((status) => ({
      status,
      label: statusLabels[status],
      projects: mockProjects.filter((p) => p.status === status),
    }))
    .filter((g) => g.projects.length > 0);

  if (grouped.length === 0) {
    return (
      <div className="p-4 lg:p-6 max-w-3xl mx-auto">
        <EmptyState
          icon={<Folder size={32} weight="light" />}
          title="No projects yet"
          description="Projects will appear here once you create them."
        />
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-2.5 mb-6">
        <Folder size={20} className="text-accent" weight="fill" />
        <h1 className="text-lg font-semibold tracking-tight">Projects</h1>
      </div>

      <div className="space-y-6">
        {grouped.map((group) => (
          <section key={group.status}>
            <h2 className="text-xs font-medium text-muted uppercase tracking-wider mb-3">
              {group.label} · {group.projects.length}
            </h2>
            <div className="space-y-2">
              {group.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
