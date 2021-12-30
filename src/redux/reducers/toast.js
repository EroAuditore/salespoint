import { createSlice } from "@reduxjs/toolkit";
const initialState = { open: false, severity: "", message: "" };

const toastReducer = createSlice({
  name: "toastReducer",
  initialState,
  reducers: {
    openToast(state, action) {
      state.open = true;
      state.severity = action.payload.severity;
      state.message = action.payload.message;
    },
    closeToast(state) {
      state.open = false;
    },
  },
});

export const { openToast, closeToast } = toastReducer.actions;
export default toastReducer.reducer;
