import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import type { FC } from "react";
import { LayoutDashboard, Users2, Clock } from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } lg:hidden`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0F172A] text-white border-r border-white/10 z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
        aria-hidden={!isOpen}
      >
        <div className="p-6 font-bold text-xl flex items-center justify-between">
          <span>📇 NFC Attendance</span>
          <button onClick={onClose} aria-label="Close menu" className="p-1">
            <X />
          </button>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          <NavLink
            to="/"
            onClick={onClose}
            className="block p-3 rounded-lg hover:bg-white/10"
          >
            <div className="flex items-center gap-2">
              <LayoutDashboard size={18} />
              <div>Dashboard</div>
            </div>
          </NavLink>
          <NavLink
            to="/employees"
            onClick={onClose}
            className="block p-3 rounded-lg hover:bg-white/10"
          >
            <div className="flex items-center gap-2">
              <Users2 size={18} />
              <div>Employees</div>
            </div>
          </NavLink>
          <NavLink
            to="/attendance"
            onClick={onClose}
            className="block p-3 rounded-lg hover:bg-white/10"
          >
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <div>Attendance</div>
            </div>
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default MobileSidebar;
