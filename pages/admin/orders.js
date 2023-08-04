import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
function Orders() {
  return <div>O</div>;
}

export default Orders;

Orders.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
