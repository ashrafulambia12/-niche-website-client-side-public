import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginIm from '../../../Images/img_08.jpg'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);

        e.preventDefault();
    }
    const handleGoogleSignin = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained"> Login</Button>
                        <NavLink style={{ textDecoration: "none" }} to="register">
                            <Button variant="text">New User ? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {
                            user?.email && <Alert severity="success">
                                <AlertTitle>Success</AlertTitle>
                                User Created successfully ! — <strong>check it out!</strong>
                            </Alert>
                        }
                        {
                            authError && <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                {authError} — <strong>check it out!</strong>
                            </Alert>
                        }
                    </form>
                    <p>-------------------------------</p>
                    <Button sx={{ width: '75%', m: 1 }} onClick={handleGoogleSignin} variant="contained">Google Sign In</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginIm} alt="" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default Login;