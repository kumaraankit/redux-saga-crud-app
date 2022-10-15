import { Grid } from "@mui/material";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} md={4} lg={6}>
      <Form />
    </Grid>
    </Grid>
  );
}

export default App;
