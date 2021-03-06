import React, {useState} from 'react'

import { Avatar,Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'; // npm install @material-ui/icons sepeartely
import useStyles from './styles';

import Input from './Input';

 const Auth = () => {

    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);

     const isSignup = true;

     // to toggle the password show/hide
     const handleShowPassword = () => setShowPassword((prev) => !prev);

     const handleSubmit = (e) => {

     };

     const handleChange = (e) => {

     };
    return (
        <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
            {isSignup && (
                <>
                  <Input name="name" label="Name" autoFocus={true} type="text" handleChange={handleChange} autoFocus xs={12} />
                  <Input name="email" label="Email" autoFocus={false} type="email" handleChange={handleChange}/>
                  
                </>
            )}
            <Input name="email" label="Email" autoFocus={true} type="email" handleChange={handleChange}/>
            <Input password="password" label="password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}  />
            {isSignup &&  <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignup ? "Sign Up" : "Sign In"}</Button>
        </form>
        </Paper>

        </Container>
    );
};

 export default Auth;