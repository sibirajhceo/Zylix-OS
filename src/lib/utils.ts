export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(amount: number, currency = "INR") {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function formatRelativeTime(date: string) {
  const now = new Date();
  const d = new Date(date);
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatDate(date);
}

export function getUrgencyColor(urgency: string) {
  switch (urgency) {
    case "critical": return "text-danger";
    case "high": return "text-warning";
    case "medium": return "text-accent";
    default: return "text-muted";
  }
}

export function getStatusColor(status: string) {
  switch (status) {
    case "completed":
    case "paid": return "text-success";
    case "overdue":
    case "critical": return "text-danger";
    case "in_progress":
    case "active": return "text-accent";
    case "paused":
    case "partial": return "text-warning";
    default: return "text-muted";
  }
}

export function getHealthColor(health: string) {
  switch (health) {
    case "good": return "text-success";
    case "attention": return "text-warning";
    case "critical": return "text-danger";
    default: return "text-muted";
  }
}
