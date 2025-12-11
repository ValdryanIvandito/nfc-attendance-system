import { Menu } from "lucide-react";
import type { FC } from "react";

interface TopbarProps {
  onOpenMobile: () => void;
}

const Topbar: FC<TopbarProps> = ({ onOpenMobile }) => {
  return (
    <header className="w-full h-16 bg-[#0F172A] border-b border-white/10 flex items-center justify-between px-4 lg:px-6">
      {/* Left: mobile menu button (visible on small screens) */}

      <div className="flex items-center gap-3">
        <button
          className="lg:hidden text-white p-1"
          onClick={onOpenMobile}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        <div className="text-white font-semibold text-lg">Dashboard</div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-white/80 text-sm">Administrator</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
