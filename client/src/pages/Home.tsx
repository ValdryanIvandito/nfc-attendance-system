import { useDashboard } from "@/hooks/useDashboard";
import { StatCard } from "@/components/StatCard";
import {
  Users,
  UserX,
  HeartPulse,
  Baby,
  Plane,
  AlertTriangle,
  Percent,
} from "lucide-react";

export default function Home() {
  const { dashboardData } = useDashboard();
  console.log(dashboardData);
  return (
    <>
      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Active"
          value={Number(dashboardData?.totalActive)}
          accent="text-emerald-400"
          icon={<Users className="h-6 w-6 text-emerald-400" />}
        />
        <StatCard
          title="Inactive"
          value={Number(dashboardData?.totalInactive)}
          accent="text-slate-300"
          icon={<UserX className="h-6 w-6 text-slate-300" />}
        />
        <StatCard
          title="Sick Leave"
          value={Number(dashboardData?.totalSick)}
          accent="text-rose-400"
          icon={<HeartPulse className="h-6 w-6 text-rose-400" />}
        />
        <StatCard
          title="Maternity Leave"
          value={Number(dashboardData?.totalMaternity)}
          accent="text-pink-400"
          icon={<Baby className="h-6 w-6 text-pink-400" />}
        />
        <StatCard
          title="Vacation Leave"
          value={Number(dashboardData?.totalVacation)}
          accent="text-yellow-400"
          icon={<Plane className="h-6 w-6 text-yellow-400" />}
        />
        <StatCard
          title="Emergency Leave"
          value={Number(dashboardData?.totalEmergency)}
          accent="text-orange-400"
          icon={<AlertTriangle className="h-6 w-6 text-orange-400" />}
        />
        <StatCard
          title="Attendance Today"
          value={`${Math.round(
            (Number(dashboardData?.presentToday) /
              Number(dashboardData?.totalActive)) *
              100
          )}%`}
          accent="text-violet-400"
          icon={<Percent className="h-6 w-6 text-violet-400" />}
        />
      </div> */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Attendance Today"
          value={
            dashboardData?.totalActive
              ? `${Math.round(
                  (Number(dashboardData.presentToday) /
                    Number(dashboardData.totalActive)) *
                    100
                )}%`
              : "0%"
          }
          accent="text-violet-400"
          icon={<Percent className="h-6 w-6 text-violet-400" />}
        />

        <StatCard
          title="Present Today"
          value={Number(dashboardData?.presentToday ?? 0)}
          accent="text-sky-400"
          icon={<Users className="h-6 w-6 text-sky-400" />}
        />

        <StatCard
          title="Total Leave"
          value={Number(dashboardData?.totalLeave ?? 0)}
          accent="text-amber-400"
          icon={<Plane className="h-6 w-6 text-amber-400" />}
        />

        <StatCard
          title="Active"
          value={Number(dashboardData?.totalActive ?? 0)}
          accent="text-emerald-400"
          icon={<Users className="h-6 w-6 text-emerald-400" />}
        />

        <StatCard
          title="Inactive"
          value={Number(dashboardData?.totalInactive ?? 0)}
          accent="text-slate-300"
          icon={<UserX className="h-6 w-6 text-slate-300" />}
        />

        <StatCard
          title="Sick Leave"
          value={Number(dashboardData?.totalSick ?? 0)}
          accent="text-rose-400"
          icon={<HeartPulse className="h-6 w-6 text-rose-400" />}
        />

        <StatCard
          title="Maternity Leave"
          value={Number(dashboardData?.totalMaternity ?? 0)}
          accent="text-pink-400"
          icon={<Baby className="h-6 w-6 text-pink-400" />}
        />

        <StatCard
          title="Vacation Leave"
          value={Number(dashboardData?.totalVacation ?? 0)}
          accent="text-yellow-400"
          icon={<Plane className="h-6 w-6 text-yellow-400" />}
        />

        <StatCard
          title="Emergency Leave"
          value={Number(dashboardData?.totalEmergency ?? 0)}
          accent="text-orange-400"
          icon={<AlertTriangle className="h-6 w-6 text-orange-400" />}
        />
      </div>
    </>
  );
}
