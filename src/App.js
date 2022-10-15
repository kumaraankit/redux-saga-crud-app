import { Grid } from "@mui/material";
import { Provider } from "react-redux";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <Form />
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Table />
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;
