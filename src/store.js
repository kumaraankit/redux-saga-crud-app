import { configureStore } from "@reduxjs/toolkit";
import user from "../src/redux/slice/user";
import users from "../src/redux/slice/users";

const store = configureStore({
  reducer: {
    user,
    users,
  },
});

export default store;
