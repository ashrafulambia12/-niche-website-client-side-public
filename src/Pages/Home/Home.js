import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Review/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;