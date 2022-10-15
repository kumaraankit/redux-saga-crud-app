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
        i.id === action.payload.id ? action.payload : i
      );
      return state;
    },
    deleteUserSlice: (state, action) => {
        console.log("delete")
      state = state.filter(i => i.id !== action.payload);
      console.log(state)
      return state;
    },
  },
});

export const { getUserSlice, addUserSlice, editUserSlice, deleteUserSlice } =
  users.actions;
export default users.reducer;
