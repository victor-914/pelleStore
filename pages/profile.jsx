import React, { useState } from "react";
import Profile from "../components/profile/Profile";
import ProfileLayout from "../layouts/ProfileLayout";


function ProfilePage() {
  const [userInfo, setUserInfo] = useState();
  const [showAddAddressForm, setSH] = useState();

  return (
    <>
    <ProfileLayout/>
    </>
  );
}

export default ProfilePage;









