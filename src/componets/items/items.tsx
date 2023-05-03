import React from 'react';
import {Box, CardMedia, ListItemText, Typography} from "@mui/material";
import CardItems from "./cardItems";

const Items = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: {xs: 'column', md: 'row'},
                mt:'70px',
                mb:'124px'
            }}
        >
            {/*--------------------------LEFT--------------------------*/}
            <Box component='div'
                 sx={{
                     width: {xs: '100%', md: '50%'},
                     pl: {xs: '0', md: '6.5%'},
                     textAlign: {xs: 'center', md: 'left'},
                     display: 'flex',
                     flexDirection: 'column',
                 }}
            >
                <Typography component='div'
                            noWrap
                            sx={{
                                display: 'flex',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                color: '#ED7117',
                                alignSelf: {xs: 'center', md: 'flex-start'}
                            }}
                >
                    <CardMedia
                        sx={{height: '27px', width: '27px', mr: '1%'}}
                        image="/img/boxClosed.png"
                        title="box_closed"
                    />
                    3465 товаров
                </Typography>

                <ListItemText sx={{mb: '20px'}} secondary="На нашем сайте, в наличии с актуальными ценами."/>

            </Box>
            {/*--------------------------RIGHT--------------------------*/}
            <Box
                sx={{
                    maxHeigth: '518px',
                    width: {xs: '100%', md: '50%'},
                    position: 'relative',
                    overflow:'hidden',
                }}
            >
                <CardItems/>
            </Box>
        </Box>
    );
};

export default Items;