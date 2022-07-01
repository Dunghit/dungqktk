import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  updateForm: [],
  updateChage: 0,
};
export const fetchRoomSlice = createSlice({
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

export const { isUpdateForm, isUpadeChage } = fetchRoomSlice.actions;

export default fetchRoomSlice.reducer;
