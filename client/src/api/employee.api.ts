// src/api/employee.api.ts

import { axiosClient } from "./_axiosClient";

export interface Employee {
  employee_id: number;
  uid: string;
  full_name: string;
  department: string;
  position: string;
  status: string;
  created_at: string;
  update_at?: string | null;
}

export interface PaginatedEmployee {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Employee[];
}

export const employeeAPI = {
  /** GET ALL PAGINATED */
  getAll: async (page: number, limit: number) => {
    const res = await axiosClient.get(`/employee?page=${page}&limit=${limit}`);

    return {
      page: res.data.data.page,
      limit: res.data.data.limit,
      total: res.data.data.total,
      totalPages: res.data.data.totalPages,
      employees: res.data.data.data, // ⬅=== ARRAY EMPLOYEE
    };
  },

  /** GET PAGINATED */
  getPaginated: async (
    page: number,
    limit: number
  ): Promise<PaginatedEmployee> => {
    const res = await axiosClient.get("/employee", {
      params: { page, limit },
    });
    return res.data;
  },

  create: async (data: Partial<Employee>) => {
    const res = await axiosClient.post("/employee", data);
    return res.data.data;
  },

  update: async (data: Partial<Employee>) => {
    const res = await axiosClient.patch("/employee", data);
    return res.data.data;
  },

  delete: async (uid: string) => {
    const res = await axiosClient.delete("/employee", {
      data: { uid },
    });
    return res.data.data;
  },
};
