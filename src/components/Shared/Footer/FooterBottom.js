import { Typography } from '@material-ui/core';
import React from 'react';

const FooterBottom = () => {
    return (
        <div style={{ background: '#181818', textAlign: 'center', padding: '20px 0' }}>
            <Typography variant="caption">Copyright &copy; {new Date().getFullYear()} The Car Corner. All Rights Reserved. Developed by Mahmud Hassan </Typography>
        </div>
    );
};

export default FooterBottom;