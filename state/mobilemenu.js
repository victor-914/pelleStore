import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobileMenuOpen: false,
};

export const mobileMenuSlice = createSlice({
  name: "mMenu",
  initialState,
  reducers: {

    setIsmMenuOpen: (state) => {
      console.log(state, "menu");
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
  },
});

export const {
  setIsmMenuOpen,
} =  mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
