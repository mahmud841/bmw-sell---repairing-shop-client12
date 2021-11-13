import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Contact2 from './Contact/Contact2';
import HowItWorks from './HowItWorks/HowItWorks';
import OurAchievement from './OurAchivement/OurAchievement';
import OurCar from './OurCar/OurCar';
import OurExpert from './OurExpert/OurExpert';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import WhyUs from './WhyUs/WhyUs';

const Home = () => {
    return (
        <>
            <Banner />
            <WhyUs/>
            <Services />
            <OurCar/>
            <HowItWorks/>
            <OurExpert />
            <OurAchievement />
            <Testimonial />
            <Contact />
            <Contact2/>
        </>
    );
};

export default Home;