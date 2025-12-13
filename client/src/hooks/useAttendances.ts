/* eslint-disable @typescript-eslint/no-explicit-any */
// src/hooks/useAttendances.ts
import { useCallback, useEffect, useState } from "react";
import type {
  Attendance,
  AttendanceListResponse,
} from "@/types/attendance.type";
import { attendanceAPI } from "@/api/attendance.api";
import { toLocalDateISO } from "@/lib/utils";

type UseAttendancesParams = {
  initialPage?: number;
  initialLimit?: number;
  initialSearch?: string;
  initialDepartment?: string;
  initialDate?: Date | undefined;
};

export function useAttendances({
  initialPage = 1,
  initialLimit = 6,
  initialSearch = "",
  initialDepartment = "",
  initialDate = new Date(),
}: UseAttendancesParams = {}) {
  const [attendanceData, setAttendanceData] = useState<Attendance[]>([]);
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState(initialSearch);
  const [department, setDepartment] = useState(initialDepartment);
  const [date, setDate] = useState<Date | undefined>(initialDate);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetch = useCallback(async () => {
    try {
      console.log(
        "PAGE:",
        page,
        "LIMIT:",
        limit,
        "SEARCH:",
        search,
        "DEPT:",
        department,
        "DATE ORI:",
        date,
        "DATE CONVERT:",
        toLocalDateISO(date)
      );

      setLoading(true);
      setError(null);
      const res: AttendanceListResponse = await attendanceAPI.getAll(
        page,
        limit,
        search,
        department,
        toLocalDateISO(date)
      );
      console.log("Fetched attendances:", res);
      setAttendanceData(res.attendances);
      setTotalPages(res.totalPages);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [page, limit, search, department, date]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    attendanceData,
    page,
    setPage,
    limit,
    setLimit,
    totalPages,
    search,
    setSearch,
    department,
    setDepartment,
    date,
    setDate,
    loading,
    error,
  };
}
