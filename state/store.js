import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mobileReducers from "../state/mobilemenu";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import cartReducer from "./index";
import wishListReducer from "./wishlist";
import userReducer from "./profile";


const reducers = combineReducers({
  cart: cartReducer,
  mMenu: mobileReducers,
  wishList: wishListReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedCartReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedCartReducer,
  //   devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);

export default store;
