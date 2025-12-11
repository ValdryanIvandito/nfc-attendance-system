import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0d1425]">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        className="w-72 px-4 py-2 rounded-md bg-white/5 border border-white/10 
                   focus:outline-none focus:border-purple-500"
      />

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <div className="relative cursor-pointer">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </div>

        {/* User */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">Admin User</span>
        </div>
      </div>
    </header>
  );
}
