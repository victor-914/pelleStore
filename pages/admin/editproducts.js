import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

function Editproducts() {
  return <div>E</div>;
}

export default Editproducts;
Editproducts.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
