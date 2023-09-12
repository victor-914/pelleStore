// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userInfo: {},
  shippingAddress: {},
  billingAddress: {},
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.user = {
        ...state.user,
        userInfo: action.payload,
      };
      console.log(state.user, "userInfo");
    },
    setShippingAddress: (state, action) => {
      state.user = {
        ...state.user,
        shippingAddress: action.payload.shippingAddress,
      };
      console.log(state.user, "shipping");
    },
    setBillingAddress: (state, action) => {
      state.user = {
        ...state.user,
        billingAddress: action.payload.billingAddress,
      };
      console.log(state.user, "shipping");
      //   const { name, email, phoneNumber, shippingAddress } = action.payload;
      //   state.user.billingAdd..ress = action.payload;
    },
  },
});

export const { setUserDetails, setShippingAddress, setBillingAddress } =
  userSlice.actions;
export default userSlice.reducer;
