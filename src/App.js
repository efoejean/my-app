import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

const App = () => {
  return (
  <Container maxWidth="lg">
    <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Welcome to React 
        </Typography>
    </AppBar>

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