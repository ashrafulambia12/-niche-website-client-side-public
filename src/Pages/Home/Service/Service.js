import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const Service = (props) => {
    const { name, description, img } = props.service;

    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{ widows: 'auto', margin: '0 auto' }}
                    image={img}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Book Now</Button>
                </CardActions>
            </Card>

        </Grid>
    );
};

export default Service;