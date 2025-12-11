// src/pages/Employee.tsx

import { employeeAPI } from "@/api/employee.api";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Employee = {
  employee_id: number;
  uid: string;
  full_name: string;
  department: string;
  position: string;
  status: string;
  created_at: string;
  update_at?: string | null;
};

export default function Employee() {
  const [employeeData, setEmployeeData] = useState<Employee[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await employeeAPI.getAll(page, limit);

      console.log("EMPLOYEE API RESPONSE:", res);

      setEmployeeData(res.employees);
      setTotalPages(res.totalPages);
    };

    fetchEmployees();
  }, [page, limit]);

  return (
    <>
      <Card className="bg-[#0F172A] text-white border border-white/10 mb-6 px-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>UID</TableHead>
              <TableHead>FULL NAME</TableHead>
              <TableHead>DEPARTMENT</TableHead>
              <TableHead>POSITION</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>ACTION</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {employeeData.map((emp) => (
              <TableRow key={emp.employee_id}>
                <TableCell>{emp.employee_id}</TableCell>
                <TableCell>{emp.uid}</TableCell>
                <TableCell>{emp.full_name}</TableCell>
                <TableCell>{emp.department}</TableCell>
                <TableCell>{emp.position}</TableCell>
                <TableCell>{emp.status}</TableCell>
                <TableCell>
                  <Button>Edit Status</Button>
                </TableCell>
                <TableCell>
                  <Button>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* PAGINATION BAR */}
      <Card className="bg-[#0F172A] text-white border border-white/10">
        <div className="flex items-center justify-between px-4">
          {/* LEFT - PER PAGE INPUT */}
          <div className="flex items-center gap-2">
            <input
              type="number"
              className="w-20 px-2 py-1 rounded border border-white/30 bg-transparent text-white"
              value={limit}
              min={1}
              onChange={(e) => {
                const newLimit = Number(e.target.value);
                if (newLimit > 0) {
                  setLimit(newLimit);
                  setPage(1);
                }
              }}
            />
            <span className="text-white/70 text-sm">Per Page</span>
          </div>

          {/* RIGHT - PAGINATION CONTROL */}
          <div className="flex items-center gap-3">
            {/* Prev Button */}
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className={`px-3 py-1 rounded ${
                page === 1
                  ? "bg-white/10 text-white/40 cursor-not-allowed"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Prev
            </button>

            {/* PAGE DISPLAY */}
            <span className="text-white/80 text-sm">
              {page} / {totalPages}
            </span>

            {/* Next Button */}
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className={`px-3 py-1 rounded ${
                page === totalPages
                  ? "bg-white/10 text-white/40 cursor-not-allowed"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </Card>
    </>
  );
}
