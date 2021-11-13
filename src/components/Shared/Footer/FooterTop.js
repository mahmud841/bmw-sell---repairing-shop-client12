import { Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../../../image/logo.jpg'
import PhoneIcon from '@material-ui/icons/Phone';
import PublicIcon from '@material-ui/icons/Public';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link } from 'react-router-dom';
const FooterTop = () => {
    const quickLinks = [
        { text: 'FAQ' },
        { text: 'Vlogs' },
        { text: 'Help desk' },
        { text: 'Our Support' },
        { text: 'Contact' },
    ];
    const topServices = [
        { text: 'M8 Competition Coupe' },
        { text: '4 Series Convertible' },
        { text: 'M4 Competition Convertible' },
        { text: 'Z4 Roadster' },
        { text: '8 Series Convertible' },
    ];
    const openingHours = [
        { text: 'Mon - Tue : 7.00 am - 10.00 pm' },
        { text: 'Wed - Thu : 9.00 am - 7.00 pm' },
        { text: 'Fri :  3.00 pm - 7.00 pm' },
        { text: 'Sun :  Closed' },
    ];
    return (
        <Grid container spacing={3} style={{ padding: '20px 0', marginTop: 0 }}>
            <Grid item md={3} sm={6} xs={12}>
                <img width="100%" src={logo} alt="logo" />
                <Typography variant="body1">207, Sports building,Nanjing Street, Dhanmondi, Dhaka</Typography>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText>
                            123-456-789
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <MailOutlineIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText>
                            contact@thecar.corner
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PublicIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText>
                            www.car-corner.com
                        </ListItemText>
                    </ListItem>
                </List>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <Typography variant="h5" style={{ color: '#fff' }}>Quick Links</Typography>
                <ListItems list={quickLinks} />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <Typography variant="h5" style={{ color: '#fff' }}>Top Services</Typography>
                <ListItems list={topServices} />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <Typography variant="h5" style={{ color: '#fff' }}>Opening Hours</Typography>
                <ListItems list={openingHours} />
            </Grid>
        </Grid>
    );
};
const ListItems = ({ list }) => {
    return (
        <List>
            {
                list.map((item, i) =>
                    <ListItem key={i} style={{ borderBottom: '1px dashed #808080' }}>
                        <ListItemText>
                            <Link style={{ textDecoration: 'none', color: '#808080' }}>{item.text}</Link>
                        </ListItemText>
                    </ListItem>)
            }
        </List>
    )
}

export default FooterTop;