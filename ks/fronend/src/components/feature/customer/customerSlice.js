import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  updateForm: [],
  updateChage: 0,
};
export const customerSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    isUpdateForm: (state, action) => {
      state.updateForm = action.payload;
    },
    isUpadeChage: (state) => {
      state.updateChage += 1;
    },
  },
});

export const { isUpdateForm, isUpadeChage } = customerSlice.actions;

export default customerSlice.reducer;
