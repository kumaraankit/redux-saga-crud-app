import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "users",
  initialState: [
    {
      id: 0,
      name: "",
      email: "",
      password: "",
    },
  ],
  reducers: {
    getUserSlice: (state, action) => {
      return state;
    },
    addUserSlice: (state, action) => {
      state.push(action.payload);
      return state;
    },
    editUserSlice: (state, action) => {
      state = state.map((i) =>
        i.id === i.action.paload.id ? action.payload : i
      );
      return state;
    },
    deleteUserSlice: (state, action) => {
      state = state.filter((i) => i.id !== i.action.paload);
      return state;
    },
  },
});

export const { getUserSlice, addUserSlice, editUserSlice, deleteUserSlice } =
  users.actions;
export default users.reducer;
