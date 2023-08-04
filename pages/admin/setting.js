import React from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
function Setting() {
  return <div>S</div>;
}

export default Setting;
Setting.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
