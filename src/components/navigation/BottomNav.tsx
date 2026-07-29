"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";

const navItems = [
  { href: "/", label: "Assistant", icon: "ChatCircleDots" },
  { href: "/today", label: "Today", icon: "CalendarCheck" },
  { href: "/projects", label: "Projects", icon: "Folder" },
  { href: "/waiting", label: "Waiting", icon: "Hourglass" },
  { href: "/payments", label: "Payments", icon: "CurrencyInr" },
  { href: "/activity", label: "Activity", icon: "ClockCounterClockwise" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-canvas pb-safe lg:hidden"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-around h-14 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-12 py-1 rounded-md transition-colors ${
                isActive
                  ? "text-accent"
                  : "text-muted hover:text-text-secondary"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon
                name={item.icon}
                size={20}
                weight={isActive ? "fill" : "regular"}
              />
              <span className="text-[10px] leading-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
