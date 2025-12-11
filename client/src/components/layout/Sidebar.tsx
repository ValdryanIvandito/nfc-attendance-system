import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users2, Clock } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col w-64 bg-[#0F172A] text-white border-r border-white/10">
      <div className="p-6 font-bold text-xl flex items-center gap-2">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-purple-600 p-2 rounded-lg">🎫</div>
          <h1 className="text-lg font-semibold">Company Logo</h1>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition 
             ${
               isActive
                 ? "bg-white/10 text-white"
                 : "text-gray-400 hover:text-white"
             }`
          }
        >
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>

        <NavLink
          to="/employees"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition 
             ${
               isActive
                 ? "bg-white/10 text-white"
                 : "text-gray-400 hover:text-white"
             }`
          }
        >
          <Users2 size={18} /> Employees
        </NavLink>

        <NavLink
          to="/attendance"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition 
             ${
               isActive
                 ? "bg-white/10 text-white"
                 : "text-gray-400 hover:text-white"
             }`
          }
        >
          <Clock size={18} /> Attendance
        </NavLink>
      </nav>
    </div>
  );
}
