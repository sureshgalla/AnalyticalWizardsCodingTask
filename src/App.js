import Grid from "@mui/material/Grid2";

import Header from "./components/Header";
import Table from "./components/Table";
import { WorkflowHeader } from "./components/WorkflowHeader";
import { WorkflowBody } from "./components/Workflow";
import data from "./data.json";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  console.log("data-inside-app-component", data);

  return (
    <Provider store={store}>
      <Grid container sx={{ backgroundColor: "#f4f6fc", height: "100vh" }}>
        <Grid item size={9}>
          <Header />
          <Table />
        </Grid>
        <Grid item size={3}>
          <WorkflowHeader />
          <WorkflowBody />
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;
