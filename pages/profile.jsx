import React, { useState } from "react";
import Profile from "../components/profile/Profile";




const WishlistItem = () => {
  let product = { }
  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <img src={product.image} alt={product?.name} className="w-16 h-16 rounded-md mr-4" />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{product?.name}</h3>
        <p className="text-gray-500">{product?.price}</p>
        <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded-md">Remove</button>
      </div>
    </div>
  );
};


function ProfilePage() {
  const [userInfo, setUserInfo] = useState();
  const [showAddAddressForm, setSH] = useState();

  return (
    <>
    
    </>
  );
}

export default ProfilePage;









