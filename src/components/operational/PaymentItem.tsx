import { Payment } from "@/types";
import { formatCurrency, formatDate, getStatusColor } from "@/lib/utils";
import { CurrencyInr } from "@phosphor-icons/react/ssr";

const stateLabels: Record<string, string> = {
  pending: "Pending",
  overdue: "Overdue",
  paid: "Paid",
  partial: "Partial",
};

export function PaymentCard({ payment }: { payment: Payment }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <CurrencyInr size={18} className="text-muted mt-0.5 shrink-0" weight="regular" />
          <div className="min-w-0">
            <h3 className="text-sm font-medium text-text-primary">
              {payment.client}
            </h3>
            {payment.projectName && (
              <p className="text-xs text-text-secondary mt-0.5">
                {payment.projectName}
              </p>
            )}
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-sm font-semibold text-text-primary">
            {formatCurrency(payment.amount)}
          </p>
          <span
            className={`text-xs font-mono ${getStatusColor(payment.state)}`}
          >
            {stateLabels[payment.state]}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-3 text-xs">
        <span className="text-muted">Due {formatDate(payment.dueDate)}</span>
        {payment.followUp && (
          <span className="text-muted">Next: {payment.followUp}</span>
        )}
      </div>

      {payment.notes && (
        <p className="mt-2 text-xs text-text-secondary border-t border-border pt-2">
          {payment.notes}
        </p>
      )}
    </div>
  );
}
