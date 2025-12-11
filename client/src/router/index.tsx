import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/pages/Home";
import Employee from "@/pages/Employee";
import Attendance from "@/pages/Attendance";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/employee",
    element: (
      <MainLayout>
        <Employee />
      </MainLayout>
    ),
  },
  {
    path: "/attendance",
    element: (
      <MainLayout>
        <Attendance />
      </MainLayout>
    ),
  },
]);
