"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChatCircleDots,
  CalendarCheck,
  Folder,
  Hourglass,
  CurrencyInr,
  ClockCounterClockwise,
  Command,
} from "@phosphor-icons/react/ssr";
import { LogoutButton } from "../auth/LogoutButton";

const navItems = [
  { href: "/", label: "Assistant", icon: ChatCircleDots },
  { href: "/today", label: "Today", icon: CalendarCheck },
  { href: "/projects", label: "Projects", icon: Folder },
  { href: "/waiting", label: "Waiting", icon: Hourglass },
  { href: "/payments", label: "Payments", icon: CurrencyInr },
  { href: "/activity", label: "Activity", icon: ClockCounterClockwise },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden lg:flex flex-col w-56 border-r border-border bg-surface h-dvh fixed left-0 top-0 z-30"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-2.5 px-5 h-14 border-b border-border">
        <Command size={18} className="text-accent" weight="fill" />
        <span className="text-sm font-semibold tracking-tight">Zylix OS</span>
        <span className="ml-auto px-1.5 py-0.5 text-[10px] font-mono text-muted border border-border rounded">
          α
        </span>
      </div>

      <div className="flex-1 flex flex-col gap-0.5 p-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const IconComponent = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                isActive
                  ? "bg-accent-muted text-accent font-medium"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <IconComponent
                size={18}
                weight={isActive ? "fill" : "regular"}
              />
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="p-2 border-t border-border">
        <LogoutButton />
      </div>
    </aside>
  );
}
