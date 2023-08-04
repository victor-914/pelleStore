import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

function AddProducts() {
  return <div>ddhdh</div>;
}

export default AddProducts;

AddProducts.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
