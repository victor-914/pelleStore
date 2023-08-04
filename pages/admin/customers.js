import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

function Customers() {
  return <div>C</div>;
}

export default Customers;
Customers.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
