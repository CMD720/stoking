import React from 'react';
import {Box, CardMedia, Container, CssBaseline, Grid} from "@mui/material";
import track2 from '../img/track2.png';
import trackDash2 from '../img/track2_dash.png';
import track1 from '../img/track1.png';
import trackDash1 from '../img/track1_dash.png';

const Banner = () => {
    return (
        <>
            {/*<CssBaseline />*/}
            <Container maxWidth="md"
                       sx={{
                           my: '12px',
                           // padding:'0px'
                           // maxWidth:'850px',
                       }}
            >
                <Grid container sx={{px:{xs:'0',sm:'50px'}, py: '20px', justifyContent: 'center', position:'relative'}}>
                    <CardMedia
                        sx={{
                            height: 28, width: 28, position:'absolute',
                            top:'7px',
                            left:'265px'
                        }}
                        image="/img/icon1.png"
                        title="package"
                    />
                    <CardMedia
                        sx={{
                            height: 28, width: 28, position:'absolute',
                            bottom:'7px',
                            right:'265px'
                         }}
                        image="/img/icon2.png"
                        title="money"
                    />
                    <Box>
                        {/*<CardMedia*/}
                        {/*    sx={{*/}
                        {/*        display:{xs:'none', sm:'block'},*/}
                        {/*        height: {xs:27,sm:41},*/}
                        {/*        width: {xs:360,sm:559}*/}
                        {/*    }}*/}
                        {/*    image="/img/track1.png"*/}
                        {/*    title="track"*/}
                        {/*/>*/}
                        {/*<CardMedia*/}
                        {/*    sx={{*/}
                        {/*        display:{xs:'block', sm:'none'},*/}
                        {/*        height:27,*/}
                        {/*        width:360,*/}
                        {/*    }}*/}
                        {/*    image="/img/track1_dash.png"*/}
                        {/*    title="track"*/}
                        {/*/>*/}
                        <CardMedia
                            sx={{
                                height: {xs:27,sm:41},
                                width: {xs:360,sm:559},
                                backgroundImage: {xs:`url(${trackDash1})`, sm:`url(${track1})`}
                            }}
                            title="track"
                        />
                    </Box>
                    <Grid container
                          sx={{justifyContent: 'space-between', justifyItems: 'center', alignItems: 'center'}}>
                        <CardMedia
                            sx={{
                                height: {xs:70,sm:102},
                                width: {xs:87,sm:127},
                                // height: 102,
                                // width: 127
                            }}
                            image="/img/stock.png"
                            title="stock"
                        />
                        <CardMedia
                            sx={{
                                height: {xs:37,sm:59},
                                width: {xs:72,sm:120},
                                // height: 59,
                                // width: 120
                            }}
                            image="/img/truck.png"
                            title="truck"
                        />
                        <CardMedia
                            sx={{
                                height: {xs:39,sm:53},
                                width: {xs:118,sm:152},
                                // height: 53,
                                // width: 152
                            }}
                            image="/img/customer.png"
                            title="customer"
                        />
                    </Grid>
                    <Box>
                        {/*<CardMedia*/}
                        {/*    sx={{*/}
                        {/*        display:{xs:'none', sm:'block'},*/}
                        {/*        height: {xs:27,sm:41},*/}
                        {/*        width: {xs:360,sm:559}*/}
                        {/*    }}*/}
                        {/*    image="/img/track2.png"*/}
                        {/*    title="track"*/}
                        {/*/>*/}
                        {/*<CardMedia*/}
                        {/*    sx={{*/}
                        {/*        display:{xs:'block', sm:'none'},*/}
                        {/*        height:27,*/}
                        {/*        width:360,*/}
                        {/*        height: {xs:27,sm:41},*/}
                        {/*        width: {xs:360,sm:559},*/}
                        {/*    }}*/}
                        {/*    image="/img/track2_dash.png"*/}
                        {/*    title="track"*/}
                        {/*/>*/}
                        <CardMedia
                            sx={{
                                height: {xs:27,sm:41},
                                width: {xs:360,sm:559},
                                backgroundImage: {xs:`url(${trackDash2})`, sm:`url(${track2})`}
                            }}
                            title="track"
                        />
                    </Box>
                </Grid>
            </Container>
        </>
    );
};

export default Banner;