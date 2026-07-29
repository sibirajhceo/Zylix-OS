import { Conversation, SuggestedPrompt } from "@/types";

export const mockConversations: Conversation[] = [
  {
    id: "conv1",
    title: "Morning planning",
    updatedAt: "2026-07-28T08:00:00Z",
    messages: [
      {
        id: "m1",
        role: "user",
        content: "What should I focus on today?",
        timestamp: "2026-07-28T08:00:00Z",
      },
      {
        id: "m2",
        role: "assistant",
        content:
          "Based on your priorities:\n\n1. **Acuboutique content delivery** — due in 2 days, still needs final asset handover\n2. **Follow up with Aliza** — payment is overdue since July 20\n3. **Manoj editor test reel** — waiting on this, follow up today\n\nYour highest-impact move right now is completing the Acuboutique assets.",
        timestamp: "2026-07-28T08:00:05Z",
      },
    ],
  },
  {
    id: "conv2",
    title: "Project review",
    updatedAt: "2026-07-27T16:00:00Z",
    messages: [
      {
        id: "m3",
        role: "user",
        content: "How is Zylix Edit House tracking?",
        timestamp: "2026-07-27T16:00:00Z",
      },
      {
        id: "m4",
        role: "assistant",
        content:
          "Zylix Edit House is **active and healthy**. You're scaling with new editors. Key next step is reviewing Manoj's test reel.\n\nPending: ₹25,000 monthly retainer collection due Aug 1.\n\nBlockers: None critical. Editor onboarding workflow needs documentation.",
        timestamp: "2026-07-27T16:00:05Z",
      },
    ],
  },
];

export const suggestedPrompts: SuggestedPrompt[] = [
  { id: "sp1", text: "What should I focus on today?" },
  { id: "sp2", text: "Show overdue client commitments." },
  { id: "sp3", text: "What payments are still pending?" },
  { id: "sp4", text: "Organise this brain dump." },
  { id: "sp5", text: "What is blocking Zylix Edit House?" },
  { id: "sp6", text: "Review my active projects." },
];
