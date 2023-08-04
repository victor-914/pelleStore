import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

function Editcatergory() {
  return <div>editcatergory</div>;
}

export default Editcatergory;
Editcatergory.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
