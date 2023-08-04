import React from "react";
import AdminCompLayout from "../../components/adminf/AdminComp";
import DashboardLayout from "../../components/layout/DashboardLayout";

export default function AdminPage() {
  return <AdminCompLayout />;
}

AdminPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
