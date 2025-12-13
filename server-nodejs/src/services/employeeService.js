// src/services/employeeService.js
import prisma from "../utils/prisma.js";
import eventBus from "../utils/eventBus.js";

class EmployeeService {
  static async createEmployee(payload) {
    const employee = prisma.employee.create({
      data: payload,
    });

    eventBus.emit("employee:created", employee);

    return employee;
  }

  static async updateEmployee(payload) {
    const employee = await prisma.employee.update({
      where: { employee_id: Number(payload.employee_id) },
      data: { status: payload.status },
    });

    eventBus.emit("employee:updated", employee);

    return employee;
  }

  static async deleteEmployee(payload) {
    return prisma.employee.update({
      where: { employee_id: Number(payload.employee_id) },
      data: { status: "INACTIVE" },
    });
  }

  static async getAllEmployees({ page, limit, search, department, status }) {
    const skip = (page - 1) * limit;

    const where = {
      AND: [
        search
          ? {
              OR: [
                { full_name: { contains: search, mode: "insensitive" } },
                { uid: { contains: search, mode: "insensitive" } },
              ],
            }
          : {},

        department
          ? { department: { equals: department, mode: "insensitive" } }
          : {},

        status ? { status } : {},
      ],
    };

    const [total, employees] = await Promise.all([
      prisma.employee.count({ where }),
      prisma.employee.findMany({
        where,
        skip,
        take: limit,
        orderBy: { employee_id: "asc" },
      }),
    ]);

    return {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      data: employees,
    };
  }

  static async getEmployeeById(employee_id) {
    return prisma.employee.findUnique({
      where: { employee_id: Number(employee_id) },
      include: { Attendance: true },
    });
  }

  static async getEmployeeByUid(uid) {
    return prisma.employee.findUnique({
      where: { uid: uid },
      include: { Attendance: true },
    });
  }
}

export default EmployeeService;
