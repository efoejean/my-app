import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
  <Container maxWidth="lg">
    <Navbar/>

    <Grow in>
        <Container maxWidth="lg">
        <Grid container spacing={3}>
            
        </Grid>
        </Container>
        </Grow>

    </Container>



  );
};

export default App;