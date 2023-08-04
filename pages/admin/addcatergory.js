import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

function Addcatergory() {
  return <div>addcatergory</div>;
}

export default Addcatergory;
Addcatergory.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
