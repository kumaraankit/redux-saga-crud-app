import { Grid } from "@mui/material";
import { Provider } from "react-redux";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import store from "./store";
import {Typography} from '@mui/material'

function App() {
  return (
    <Provider store={store} >
       <Typography variant="h4" className="heading">CRUD APP </Typography>
      <Grid container spacing={2} className="main-container">
        <Grid item  md={4}  >
          <Form />
        </Grid>
        <Grid item md={9} >
          <Table />
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;
