import React from 'react';
import {Box, CardMedia, Grid, IconButton, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Grid2 from "@mui/material/Unstable_Grid2";

const IconMenu = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems:'flex-start'  }}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <CardMedia
                    sx={{height: 23, width: 23, mx: '10px'}}
                    image="/img/phone.svg"
                    title="call us"
                />
                <Typography component="div"  noWrap={true} >
                    8-(800)-500-90-52
                </Typography>
            </IconButton>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <CardMedia
                    sx={{height: 23, width: 23, mx: '10px'}}
                    image="/img/message.svg"
                    title="call us"
                />
                <Typography component="div"  noWrap={true} sx={{display: {xs: 'flex', md: 'none'}}}>
                    Сообщения
                </Typography>
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <CardMedia
                    sx={{height: 23, width: 23, mx: '10px'}}
                    image="/img/person.svg"
                    title="call us"
                />
                <Typography component="div"  noWrap={true} sx={{display: {xs: 'flex', md: 'none'}}}>
                    Личный кабинет
                </Typography>
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <CardMedia
                    sx={{height: 23, width: 23, mx: '10px'}}
                    image="/img/Frame42.svg"
                    title="call us"
                />
                <Typography component="div"  noWrap={true} sx={{display: {xs: 'flex', md: 'none'}}}>
                    Графики
                </Typography>
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <CardMedia
                    sx={{height: 23, width: 23, mx: '10px'}}
                    image="/img/favorites.svg"
                    title="call us"
                />
                <Typography component="div"  noWrap={true} sx={{display: {xs: 'flex', md: 'none'}}}>
                    Избранное
                </Typography>
            </IconButton>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <CardMedia
                    sx={{height: 23, width: 23, mx: '10px'}}
                    image="/img/cart.svg"
                    title="call us"
                />
                <Typography component="div"  noWrap={true} sx={{display: {xs: 'flex', md: 'none'}}}>
                    Корзина
                </Typography>
            </IconButton>

            {/*************************************************************/}
            {/*<Typography component="div"  noWrap={true}>*/}
            {/*    <IconButton*/}
            {/*        size="large"*/}
            {/*        edge="start"*/}
            {/*        color="inherit"*/}
            {/*        aria-label="menu"*/}
            {/*        sx={{mr: 1}}*/}
            {/*    >*/}
            {/*        <CardMedia*/}
            {/*            sx={{height: 23, width: 23}}*/}
            {/*            image="/img/message.svg"*/}
            {/*            title="call us"*/}
            {/*        />*/}
            {/*    </IconButton>*/}
            {/*</Typography>*/}

            {/*<Typography component="div"  noWrap={true}>*/}
            {/*    <IconButton*/}
            {/*        size="large"*/}
            {/*        edge="start"*/}
            {/*        color="inherit"*/}
            {/*        aria-label="menu"*/}
            {/*        sx={{mr: 1}}*/}
            {/*    >*/}
            {/*        <CardMedia*/}
            {/*            sx={{height: 23, width: 23}}*/}
            {/*            image="/img/person.svg"*/}
            {/*            title="call us"*/}
            {/*        />*/}
            {/*    </IconButton>*/}
            {/*</Typography>*/}

            {/*<Typography component="div"  noWrap={true}>*/}
            {/*    <IconButton*/}
            {/*        size="large"*/}
            {/*        edge="start"*/}
            {/*        color="inherit"*/}
            {/*        aria-label="menu"*/}
            {/*        sx={{mr: 1}}*/}
            {/*    >*/}
            {/*        <CardMedia*/}
            {/*            sx={{height: 23, width: 23}}*/}
            {/*            image="/img/Frame42.svg"*/}
            {/*            title="call us"*/}
            {/*        />*/}
            {/*    </IconButton>*/}
            {/*</Typography>*/}

            {/*<Typography component="div"  noWrap={true}>*/}
            {/*    <IconButton*/}
            {/*        size="large"*/}
            {/*        edge="start"*/}
            {/*        color="inherit"*/}
            {/*        aria-label="menu"*/}
            {/*        sx={{mr: 1}}*/}
            {/*    >*/}
            {/*        <CardMedia*/}
            {/*            sx={{height: 23, width: 23}}*/}
            {/*            image="/img/favorites.svg"*/}
            {/*            title="call us"*/}
            {/*        />*/}
            {/*    </IconButton>*/}
            {/*</Typography>*/}

            {/*<Typography component="div"  noWrap={true}>*/}
            {/*    <IconButton*/}
            {/*        size="large"*/}
            {/*        edge="start"*/}
            {/*        color="inherit"*/}
            {/*        aria-label="menu"*/}
            {/*    >*/}
            {/*        <CardMedia*/}
            {/*            sx={{height: 23, width: 23}}*/}
            {/*            image="/img/cart.svg"*/}
            {/*            title="call us"*/}
            {/*        />*/}
            {/*    </IconButton>*/}
            {/*</Typography>*/}

        </Box>
    );
};

export default IconMenu;