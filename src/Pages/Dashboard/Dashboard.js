import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, } from '@mui/material';
import {
    Route,
    Switch,
    Link,
    useRouteMatch
} from "react-router-dom"

import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddService from '../Services/AddService';
import Orders from '../Orders/Orders';
import Navigation from '../Shared/Navigation/Navigation';
import Services from '../Services/Services';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import AddReview from '../Review/AddReview';
import SingleOrder from '../Orders/SingleOrder'
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            {
                !admin && <Box>
                    <Link style={{ textDecoration: 'none', color: '#1976d2' }} to={`${url}`}>
                        <Button color="inherit">MORE SERVICES</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: '#1976d2' }} to={`${url}/pay`}>
                        <Button color="inherit">MAKE PAYMENT</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: '#1976d2' }} to={`${url}/addreview`}>
                        <Button color="inherit">MAKE REVIEW </Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: '#1976d2' }} to={`${url}/singleOrder`}>
                        <Button color="inherit">MY ORDERS </Button>
                    </Link>
                </Box>
            }



            {
                admin && <Box>
                    <Link style={{ textDecoration: 'none', color: '#1976d2' }} to={`${url}/makeAdmin`}>
                        <Button color="inherit">MAKE ADMIN</Button>
                    </Link>

                    <Link style={{ textDecoration: 'none', color: '#1976d2' }} to={`${url}/orders`}>
                        <Button color="inherit">MANAGE ORDERS</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: '#1976d2' }} to={`${url}/addService`}>
                        <Button color="inherit">ADD SERVICES</Button>
                    </Link>
                </Box>
            }
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <Navigation></Navigation>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer

                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                    {<Services></Services>}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <Services></Services>
                    </Route>

                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>

                    <AdminRoute path={`${path}/addService`}>
                        <AddService></AddService>
                    </AdminRoute>
                    <AdminRoute path={`${path}/orders`}>
                        <Orders></Orders>
                    </AdminRoute>

                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/singleOrder`}>
                        <SingleOrder></SingleOrder>
                    </Route>
                    <Route path={`${path}/addreview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/placeorder`}>
                        <PlaceOrder></PlaceOrder>
                    </Route>
                </Switch>


            </Box>
        </Box >
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
