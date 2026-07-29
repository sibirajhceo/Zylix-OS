export type TaskCategory = "money" | "delivery" | "personal" | "growth";

export type TaskStatus = "pending" | "in_progress" | "completed" | "overdue";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  category: TaskCategory;
  estimatedMinutes?: number;
  projectId?: string;
  projectName?: string;
  dueDate?: string;
  createdAt: string;
}

export type ProjectStatus = "active" | "waiting" | "paused" | "completed";

export type ProjectHealth = "good" | "attention" | "critical";

export interface Project {
  id: string;
  name: string;
  description: string;
  desiredOutcome: string;
  nextAction: string;
  status: ProjectStatus;
  health: ProjectHealth;
  deadline?: string;
  category: string;
  createdAt: string;
}

export type PaymentState = "pending" | "overdue" | "paid" | "partial";

export interface Payment {
  id: string;
  client: string;
  amount: number;
  currency: string;
  dueDate: string;
  state: PaymentState;
  projectId?: string;
  projectName?: string;
  followUp?: string;
  notes?: string;
  createdAt: string;
}

export type Urgency = "low" | "medium" | "high" | "critical";

export interface WaitingItem {
  id: string;
  title: string;
  person: string;
  dependency: string;
  projectId?: string;
  projectName?: string;
  waitingSince: string;
  followUpDate?: string;
  urgency: Urgency;
  notes?: string;
  createdAt: string;
}

export type ActionType =
  | "task_created"
  | "task_completed"
  | "project_paused"
  | "payment_recorded"
  | "deadline_updated"
  | "moved_to_waiting"
  | "ai_suggestion"
  | "project_created"
  | "payment_received";

export interface ActivityRecord {
  id: string;
  timestamp: string;
  actionType: ActionType;
  source: string;
  affectedRecord: string;
  explanation: string;
}

export type MessageRole = "user" | "assistant";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;
}

export interface SuggestedPrompt {
  id: string;
  text: string;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  updatedAt: string;
}
