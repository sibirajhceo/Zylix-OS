import { Sidebar } from "./Sidebar";
import { BottomNav } from "../navigation/BottomNav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex">
      <Sidebar />
      <main className="flex-1 lg:pl-56 pb-14 lg:pb-0 min-w-0">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
