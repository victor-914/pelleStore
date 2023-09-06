import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isWishListOpen: false,
  wishList:[],
  items: [],
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToWishList: (state, action) => {
       console.log(action.payload,"catrtitself")
      state.wishList = [...state.wishList, action.payload.item];
    },

    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter((item) => item.id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.wishList = state.wishList.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.wishList = state.wishList.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    setIsWishListOpen: (state) => {
      console.log(state, "state@wishlist");
      state.isWishListOpen = !state.isWishListOpen;
    },
  },
});

export const {
  setItems,
  addToWishList,
  removeFromWishList,
  increaseCount,
  decreaseCount,
  setIsWishListOpen,
} = wishListSlice.actions;

export default wishListSlice.reducer;
