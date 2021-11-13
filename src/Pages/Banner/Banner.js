import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bannerImage from '../../Images/1.jpg'
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Typography style={{ fontWeight: 'bold' }} variant='h2'>
                        Easy and fast way <br />
                        to rent your car
                    </Typography>
                    <Typography variant='h6' style={{ color: 'gray' }}>
                        The Car Connection is the most used Car rental service in the Canada.Based on ratings and reviews from real users.The Car Connection is the top-ranked car rental service company .if you are planing to rent a car you can trust us.
                    </Typography>
                    <Link to="/services" style={{ textDecoration: 'none', backgroundColor: 'tomato', padding: '15px', color: 'white' }}>
                        <Button sx={{ width: '75%', m: 1, }} color="inherit">Book A Car from here</Button>
                    </Link>

                </Grid>
                <Grid item xs={12} md={7}>
                    <img style={{ width: '600px', marginTop: '20px' }} src={bannerImage} alt="" />

                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;