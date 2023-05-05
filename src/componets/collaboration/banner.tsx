import React, {useRef} from 'react';
import {Box, CardMedia, Container, Grid, keyframes, styled, useTheme} from "@mui/material";
import track2 from '../../img/track2.png';
import trackDash2 from '../../img/track2_dash.png';
import track1 from '../../img/track1.png';
import trackDash1 from '../../img/track1_dash.png';

const Banner = () => {

    const trackOneRef = useRef<HTMLDivElement>()
    console.log(trackOneRef.current?.clientWidth);
    const trackOneTwo = useRef()

    const IconOneKeyFrames = styled("div")({

        '@keyframes boxSolid': {
            "0%": {

            },
            "15%": {
                transform: "translateY(-25px)",

            },
            "35%": {
                transform: "translate(275px, -25px)",
            },
            "50%": {
                transform: "translateX(275px)"
            },
            "75%": {
                transform: "translate(275px, -25px)",
            },
            "85%": {
                transform: "translate(555px, -25px)",
            },
            "95%": {

            },
            "100%": {
                transform: "translateX(555px)"

            },
        },

        '@keyframes boxDash': {
            "0%": {

            },
            "15%": {
                transform: "translateY(-25px)",

            },
            "35%": {
                transform: "translate(175px, -25px)",
            },
            "50%": {
                transform: "translateX(175px)"
            },
            "75%": {
                transform: "translate(175px, -25px)",
            },
            "85%": {
                transform: "translate(355px, -25px)",
            },
            "95%": {

            },
            "100%": {
                transform: "translateX(355px)"

            },
        },
        '@keyframes moneySolid': {
            "0%": {

            },
            "15%": {
                transform: "translateY(25px)",

            },
            "35%": {
                transform: "translate(-275px, 25px)",
            },
            "50%": {
                transform: "translateX(-275px)"
            },
            "75%": {
                transform: "translate(-275px, 25px)",
            },
            "85%": {
                transform: "translate(-555px, 25px)",
            },
            "95%": {

            },
            "100%": {
                transform: "translateX(-555px)"

            },
        },

        '@keyframes moneyDash': {
            "0%": {

            },
            "15%": {
                transform: "translateY(25px)",

            },
            "35%": {
                transform: "translate(-175px, 25px)",
            },
            "50%": {
                transform: "translateX(-175px)"
            },
            "75%": {
                transform: "translate(-175px, 25px)",
            },
            "85%": {
                transform: "translate(-355px, 25px)",
            },
            "95%": {

            },
            "100%": {
                transform: "translateX(-355px)"

            },
        }

    });

    return (
        <>
            <IconOneKeyFrames/>
            <Container maxWidth="md"
                       sx={{
                           my: '12px',
                       }}
            >
                <Grid container
                      sx={{px: {xs: '0', sm: '50px'}, py: '20px', justifyContent: 'center', position: 'relative'}}>
                    <Box ref={trackOneRef}>
                        <CardMedia
                            component='div'
                            sx={{
                                position: 'relative',
                                height: {xs: 27, sm: 41},
                                width: {xs: 360, sm: 559},
                                backgroundImage: {xs: `url(${trackDash1})`, sm: `url(${track1})`}
                            }}
                            title="track"
                        >
                            <CardMedia
                                component='img'
                                sx={{
                                    height: 28, width: 28, position: 'absolute',
                                    top: '15px',
                                    left: '-10px',

                                    animationName: {xs: 'boxDash', sm: 'boxSolid'},
                                    animationDuration: '5s',
                                    animationTimingFunction: 'ease-in',
                                    animationIterationCount: 'infinite',
                                }}
                                image="/img/icon1.png"
                                title="package"
                            />


                        </CardMedia>

                    </Box>
                    <Grid container
                          sx={{justifyContent: 'space-between', justifyItems: 'center', alignItems: 'center'}}>
                        <CardMedia
                            component='img'
                            sx={{
                                height: {xs: 70, sm: 102},
                                width: {xs: 87, sm: 127},
                            }}
                            image="/img/stock.png"
                            title="stock"
                        />
                        <CardMedia
                            component='img'
                            sx={{
                                height: {xs: 37, sm: 59},
                                width: {xs: 72, sm: 120},
                            }}
                            image="/img/truck.png"
                            title="truck"
                        />
                        <CardMedia component='img'
                                   sx={{
                                       height: {xs: 39, sm: 53},
                                       width: {xs: 118, sm: 152},
                                   }}
                                   image="/img/customer.png"
                                   title="customer"
                        />
                    </Grid>
                    <Box>
                        <CardMedia component='div'
                                   sx={{
                                       position: 'relative',
                                       height: {xs: 27, sm: 41},
                                       width: {xs: 360, sm: 559},
                                       backgroundImage: {xs: `url(${trackDash2})`, sm: `url(${track2})`}
                                   }}
                                   title="track"
                        >

                            <CardMedia
                                component='img'
                                sx={{
                                    height: 28, width: 28, position: 'absolute',
                                    bottom: '20px',
                                    right: '-10px',

                                    animationName: {xs: 'moneyDash', sm: 'moneySolid'},
                                    animationDuration: '5s',
                                    animationTimingFunction: 'ease-in',
                                    animationIterationCount: 'infinite',

                                }}
                                image="/img/icon2.png"
                                title="money"
                            />
                        </CardMedia>

                    </Box>
                </Grid>
            </Container>
        </>
    );
};

export default Banner;