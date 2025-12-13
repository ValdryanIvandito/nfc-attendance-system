// src/services/attendanceService.js
import prisma from "../utils/prisma.js";

class AttendanceService {
  static async createAttendance(payload) {
    return prisma.attendance.create({
      data: payload,
      include: {
        Employee: true,
      },
    });
  }

  static async updateAttendance(attendance_id) {
    return prisma.attendance.update({
      where: { attendance_id: Number(attendance_id) },
      data: { check_out_at: new Date() },
      include: {
        Employee: true,
      },
    });
  }

  static async getAllAttendances({ page, limit, search, department, date }) {
    const skip = (page - 1) * limit;

    const where = {
      AND: [
        ...(search
          ? [
              {
                Employee: {
                  full_name: {
                    contains: search,
                    mode: "insensitive",
                  },
                },
              },
            ]
          : []),

        ...(department
          ? [
              {
                Employee: {
                  department: {
                    equals: department,
                    mode: "insensitive",
                  },
                },
              },
            ]
          : []),

        ...(date
          ? [
              {
                check_in_at: {
                  gte: new Date(`${date}T00:00:00.000Z`),
                  lte: new Date(`${date}T23:59:59.999Z`),
                },
              },
            ]
          : []),
      ],
    };

    const [total, attendances] = await Promise.all([
      prisma.attendance.count({ where }),
      prisma.attendance.findMany({
        where,
        skip,
        take: limit,
        orderBy: { attendance_id: "desc" },
        include: { Employee: true },
      }),
    ]);

    return {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      data: attendances,
    };
  }

  static async getAttendanceById(attendance_id) {
    return prisma.attendance.findUnique({
      where: { attendance_id: Number(attendance_id) },
      include: { Employee: true },
    });
  }

  static async getAttendanceByDateNow(uid) {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    return prisma.attendance.findFirst({
      where: {
        uid: uid,
        check_in_at: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        Employee: true,
      },
      orderBy: { check_in_at: "asc" },
    });
  }
}

export default AttendanceService;
