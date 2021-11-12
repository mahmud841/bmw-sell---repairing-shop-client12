import { Container } from '@material-ui/core';
import React from 'react';
import img from '../../../image/footerbg.jpg'
import FooterBottom from './FooterBottom';
import FooterMiddle from './FooterMiddle';
import FooterTop from './FooterTop';
const Footer = () => {
    const footerStyle = {
        background: `url(${img}),
            linear-gradient(rgba(12,12, 12, 0.7), rgba(17,17, 17, 0.7))`,
        backgroundBlendMode: 'overlay',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#ffff'
    }
    return (
        <footer style={footerStyle}>
            <Container>
                <FooterTop />
                <FooterMiddle />
            </Container>
            <FooterBottom />
        </footer>
    );
};

export default Footer;