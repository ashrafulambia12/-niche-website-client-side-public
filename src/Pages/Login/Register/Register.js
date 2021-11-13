import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginIm from '../../../Images/img_08.jpg'


const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const history = useHistory()
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...registerData };
        newLoginData[field] = value;
        setRegisterData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('your password did not match');
            return;
        }
        registerUser(registerData.email, registerData.password, registerData.name, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
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
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained"> Register</Button>
                        <NavLink style={{ textDecoration: "none" }} to="login">
                            <Button variant="text">Already Registerd ? Please Login</Button>
                        </NavLink>
                    </form>}
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
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginIm} alt="" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default Register;