import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  wishlist: [],
  userDetails:{
    username:"",
    email:"",
  },
  isLoggedIn:false,
  orders:[]
};

export const userSlice = createSlice({
  name: "user",
  initialUserState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },

    addToWishlist: (state, action) => {
      state.user.wishlist = [...state.user.wishlist, action.payload.item];
    },

    removeFromWishList: (state, action) => {
      state.user.wishlist = state.user.wishlist.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const {
  setUserDetails,
  addToWishlist,
  removeFromWishList,
} = userSlice.actions;

export default userSlice.reducer;
