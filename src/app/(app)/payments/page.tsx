import type { Metadata } from "next";
import { CurrencyInr } from "@phosphor-icons/react/ssr";
import { mockPayments, totalPending } from "@/data/mock-payments";
import { PaymentCard } from "@/components/operational/PaymentItem";
import { EmptyState } from "@/components/ui/EmptyState";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Payments",
};

const stateOrder = ["overdue", "pending", "partial", "paid"];

export default function PaymentsPage() {
  const sorted = [...mockPayments].sort(
    (a, b) => stateOrder.indexOf(a.state) - stateOrder.indexOf(b.state)
  );

  if (sorted.length === 0) {
    return (
      <div className="p-4 lg:p-6 max-w-3xl mx-auto">
        <EmptyState
          icon={<CurrencyInr size={32} weight="light" />}
          title="No payments"
          description="Payment records will appear here."
        />
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-2.5 mb-6">
        <CurrencyInr size={20} className="text-accent" weight="fill" />
        <h1 className="text-lg font-semibold tracking-tight">Payments</h1>
      </div>

      <div className="rounded-lg border border-border bg-surface p-4 mb-6">
        <p className="text-xs text-text-secondary">Total pending</p>
        <p className="text-2xl font-semibold text-text-primary mt-1">
          {formatCurrency(totalPending)}
        </p>
      </div>

      <div className="space-y-2">
        {sorted.map((payment) => (
          <PaymentCard key={payment.id} payment={payment} />
        ))}
      </div>

      <p className="text-[11px] text-muted text-center mt-6">
        This is a preview. No bank or payment gateway is connected.
      </p>
    </div>
  );
}
