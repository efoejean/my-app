import React from "react";
import { AppBar, Typography } from "@material-ui/core"; 
import { Link } from "react-router-dom"; // 


import useStyles from "./styles";

 const Navbar = () => {

const classes = useStyles();

    return(
        // using material-ui to styles the AppBar, import it from styles.js
        <AppBar className={classes.appbar} position="static" color="inherit"> 
        <div className={classes.brandContainer}>
        <Typography  className={classes.heading} variant="h2" align="center">
          Welcome to React 
        </Typography>
        </div>
        <toolbar className={classes.toolbar}>

        </toolbar>
    </AppBar>
    );
  
};

export default Navbar;