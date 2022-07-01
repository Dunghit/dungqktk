import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./components/feature/login/LoginSlice";
import customerSlice from "./components/feature/customer/customerSlice";
import fetchRoomSlice from "./components/feature/fetchrooms/fetchRoomSlice";
export const store = configureStore({
  reducer: {
    LoginSlice,
    customerSlice,
    fetchRoomSlice,
  },
});
