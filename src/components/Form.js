import React from "react";
import { Container, Input, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setUserSlice } from "../redux/slice/user";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/types";

function Form() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (props) => (event) => {
    dispatch(setUserSlice({ ...user, [props]: event.target.value }));
  };

  const handleSubmit = () => {
    user.id === 0
      ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } })
      : dispatch({ type: UPDATE_USER_BY_ID, user });
    dispatch(
      setUserSlice({
        id: 0,
        name: "",
        email: "",
        password: "",
      })
    );
  };
  return (
    <Container>
      <Input value={user.id} disabled fullWidth />
      <Input
        value={user.name}
        placeholder="Enter Name"
        fullWidth
        onChange={handleChange("name")}
      />
      <Input
        value={user.email}
        placeholder="Enter Email"
        fullWidth
        onChange={handleChange("email")}
      />
      <Input
        value={user.password}
        placeholder="Enter Password"
        fullWidth
        onChange={handleChange("password")}
      />
      <Button onClick={() => handleSubmit()} fullWidth variant="contained">
        Submit
      </Button>
    </Container>
  );
}

export default Form;
