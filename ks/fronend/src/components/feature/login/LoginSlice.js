import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loginStatus: false,
  userLogin: "",
  customer_id: "",
  validate: "",
  userInfor: "",
};
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    isLogin: (state, action) => {
      state.loginStatus = true;
      state.userLogin = action.payload.username;
      state.userInfor = action.payload;
    },
    isValidate: (state, action) => {
      state.validate = action.payload;
    },
    isLogout: (state) => {
      state.loginStatus = true;
      state.userLogin = "";
      state.userInfor = "";
    },
  },
});

export const { isLogin, isValidate, isLogout } = loginSlice.actions;

export default loginSlice.reducer;
