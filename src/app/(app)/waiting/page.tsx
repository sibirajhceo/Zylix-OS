import type { Metadata } from "next";
import { Hourglass } from "@phosphor-icons/react/ssr";
import { mockWaitingItems } from "@/data/mock-waiting";
import { WaitingItemCard } from "@/components/operational/WaitingItem";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata: Metadata = {
  title: "Waiting",
};

const urgencyOrder = ["critical", "high", "medium", "low"];

export default function WaitingPage() {
  const sorted = [...mockWaitingItems].sort(
    (a, b) => urgencyOrder.indexOf(a.urgency) - urgencyOrder.indexOf(b.urgency)
  );

  if (sorted.length === 0) {
    return (
      <div className="p-4 lg:p-6 max-w-3xl mx-auto">
        <EmptyState
          icon={<Hourglass size={32} weight="light" />}
          title="Nothing waiting"
          description="You're not waiting on anything right now."
        />
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-2.5 mb-6">
        <Hourglass size={20} className="text-accent" weight="fill" />
        <h1 className="text-lg font-semibold tracking-tight">Waiting</h1>
      </div>

      <div className="space-y-2">
        {sorted.map((item) => (
          <WaitingItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
