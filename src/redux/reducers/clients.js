import { createSlice } from "@reduxjs/toolkit";
const initialState = { clients: [] };

const clientsReducer = createSlice({
  name: "client",
  initialState,
  reducers: {
    fetch() {},
    addClient() {},
    addClientSuccess(state, action) {
      const { data } = action.payload.data;
      state.clients.push(data);
    },
    fetchSuccess(state, action) {
      const { data } = action.payload.data;
      state.clients = [...data];
    },
    removeClient() {},
    removeClientSucess(state, action) {
      state = state.filter(() => state._id !== action.payload._id);
    },
  },
});

export const {
  addClient,
  addClientSuccess,
  fetchSuccess,
  removeClient,
  removeClientSucess,
  fetch,
} = clientsReducer.actions;
export default clientsReducer.reducer;
