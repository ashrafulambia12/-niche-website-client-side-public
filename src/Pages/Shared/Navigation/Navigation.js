import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const style = {
        'textDecoration': 'none',
        'color': 'white',
        'padding': '10px',
        fontWeight: "bold",
    }
    const activeStyle = {
        color: "#ff9800"
    }
    const { user, admin, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={style} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink activeStyle={activeStyle} style={style} to="/home">The Car Connection</NavLink>
                    </Typography>
                    <NavLink activeStyle={activeStyle} style={style} to="/home">HOME</NavLink>
                    <NavLink activeStyle={activeStyle} style={style} to="/services">MORE SERVICES</NavLink>
                    {user?.email && <NavLink activeStyle={activeStyle} style={style} to="/dashboard">DASHBOARD</NavLink>}
                    {
                        admin && <Box>
                            <NavLink style={{ textDecoration: 'none', color: '#1976d2' }} to="/makeAdmin">
                                <Button color="inherit">MAKE ADMIN</Button>
                            </NavLink>

                            <NavLink style={{ textDecoration: 'none', color: '#1976d2' }} to="/orders">
                                <Button color="inherit">MANAGE ORDERS</Button>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: '#1976d2' }} to="/addService">
                                <Button color="inherit">ADD SERVICES</Button>
                            </NavLink>
                        </Box>
                    }
                    <NavLink style={style} to='#'>{user.displayName}</NavLink>

                    {
                        user?.email ?

                            <Button onClick={logout} sx={{ m: 1, }} style={{ textDecoration: 'none', color: 'black' }} variant='contained' color="inherit">Logout</Button>

                            :


                            <NavLink to="login" style={{ textDecoration: 'none', color: 'white' }}>
                                <Button sx={{ width: '75%', m: 1, }} color="inherit">Login</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;