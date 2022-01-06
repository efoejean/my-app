import React from 'react'

import { Avatar,Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'; // npm install @material-ui/icons sepeartely
import useStyles from './styles';

 const Auth = () => {

    const classes = useStyles();

     const isSignup = false;

    return (
        <Container component="main" maxWidth="xg">
        <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          
        </Avatar>
        <Typography component="h1" variant="h5">
        Sign In
        </Typography>
        </Paper>

        </Container>
    );
};

 export default Auth;