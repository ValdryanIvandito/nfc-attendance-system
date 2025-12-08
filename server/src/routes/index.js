// src/routes/index.js
import express from "express";
import EmployeeController from "../controllers/employeeController.js";
import AttendanceController from "../controllers/attendanceController.js";

const router = express.Router();

router.get("/attendance", AttendanceController.getAttendance);
router.post("/attendance", AttendanceController.createAttendance);
router.patch("/attendance", AttendanceController.updateAttendance);

router.get("/employee", EmployeeController.getEmployee);
router.post("/employee", EmployeeController.createEmployee);
router.patch("/employee", EmployeeController.updateEmployee);
router.delete("/employee", EmployeeController.deleteEmployee);

export default router;
