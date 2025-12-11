import type { ReactNode } from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MobileSidebar from "./MobileSidebar";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex bg-[#0B1120] text-white min-h-screen">
      {/* Desktop sidebar (hidden on small screens) */}
      <Sidebar />

      {/* Mobile drawer */}
      <MobileSidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Content area */}
      <div className="flex-1 flex flex-col">
        <Topbar onOpenMobile={() => setMobileOpen(true)} />
        <main className="p-4 lg:p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
