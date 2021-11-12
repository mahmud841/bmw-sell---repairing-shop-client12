import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import bgImg from '../../../image/achievementImg.jpg'
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import SectionTitle from '../../Shared/SectionTitle';
import achievementIcon from '../../../image/icon/achievement.png'
import CountUp from 'react-countup';
const useStyle = makeStyles({
    root: {
        background: `url(${bgImg}),
        linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))`,
        backgroundBlendMode: 'overlay',
        padding: '150px 15px',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#fff'
    },
})
const data = [
    {
        Icon: DriveEtaOutlinedIcon,
        count: 954,
        text: 'Total Vehicles Sold '
    },
    {
        Icon: PeopleOutlineOutlinedIcon,
        count: 775,
        text: 'Happy Clients'
    },
    {
        Icon: ThumbUpOutlinedIcon,
        count: 1559,
        text: 'People Given Liked'
    },
    {
        Icon: CardGiftcardOutlinedIcon,
        count: 35,
        text: 'Our Awards'
    },
]
const OurAchievement = () => {
    const { root } = useStyle()
    return (
        <div id="achievement">
            <Container>
                <SectionTitle icon={achievementIcon} text={'Our Success Details'} />
            </Container>
            <section className={root}>
                <Container>
                    <Grid container spacing={5} justify='center'>
                        {
                            data.map(({ Icon, count, text }, i) =>
                                <Grid key={i} item md={3} sm={6} xs={12} style={{ textAlign: 'center' }}>
                                    <Icon style={{ color: '#F2184F', fontSize: 55 }} />
                                    <Typography variant="h3">
                                        <CountUp end={count} duration={2.80} />
                                    </Typography>
                                    <Typography variant="body1">{text}</Typography>
                                </Grid>)
                        }
                    </Grid>
                </Container>
            </section>
        </div>
    );
};

export default OurAchievement;