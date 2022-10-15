import React from "react";
import { Container, Input, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setUserSlice } from "../redux/slice/user";
import { addUserSlice, editUserSlice } from "../redux/slice/users";
import {nanoid} from '@reduxjs/toolkit'

function Form() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  // const [user, setUser] = useState();

  const handleChange = (props) => (event) => {
    //  console.log(props)
    // console.log({...user})
    dispatch(setUserSlice({ ...user, [props]: event.target.value }));
  };

  const handleSubmit = () => {
    console.log("calling")
    user.id ===0? dispatch(addUserSlice({...user,id:nanoid(8)})) : dispatch(editUserSlice(user));
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
      <Button onClick={()=>handleSubmit()} fullWidth variant="contained">
        Submit
      </Button>
    </Container>
  );
}

export default Form;
