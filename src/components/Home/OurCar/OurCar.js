import { Container, Grid } from '@material-ui/core';
import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import ourExpertIcon from '../../../image/icon/mechanic.png';
import car1 from '../../../image/services/1.jpg';
import car2 from '../../../image/services/2.jpg';
import car3 from '../../../image/services/3.jpg';
import car4 from '../../../image/services/4.jpg';
import car5 from '../../../image/services/5.jpg';
import car6 from '../../../image/services/6.jpg';
import car7 from '../../../image/services/7.jpg';
import car8 from '../../../image/services/8.jpg';
import OurCar2 from './OurCar2';
const OurCar = () => {

    const ourCars= [
        {
            img: car1,
            name: 'X5 M Sports Activity Carr  ',
            price: '$43,700 Starting MSRP'
        },
        {
            img: car2,
            name: 'X5 M Sports Vehicle',
            price: '$105,900 Starting MSRP'
        },
        {
            img: car3,
            name: 'iX Sports Activity Vehicle',
            price: '$83,200 Starting MSRP'
        },
        {
            img: car4,
            name: '3 Series Sedan Activity Vehicle',
            price: '$41,450 Starting MSRP'
        },
        {
            img: car5,
            name: '5 Series Sedan Activity Vehicle',
            price: '$54,200 Starting MSRP'
        },
        {
            img: car6,
            name: '4 Series Gran Coupe Vehicle',
            price: '$45,200 Starting MSRP'
        },
        {
            img: car7,
            name: 'M8 Competition Gran Coupe',
            price: '$130,000 Starting MSRP'
        },
        {
            img: car8,
            name: 'M4 Competition Convertible',
            price: '$86,300 Starting MSRP'
        },
    ]
    return (
        <Container>
            <SectionTitle icon={ourExpertIcon} text={'Our Show Room '} />
            <Grid container spacing={3}>
                {
                    ourCars.map((car, i) => <Grid key={i} item md={3} sm={6} xs={12}>
                        <OurCar2 car={car} />
                    </Grid>)
                }

            </Grid>
        </Container>
    );
};

export default OurCar;