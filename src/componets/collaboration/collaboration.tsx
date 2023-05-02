import React from 'react';
import {Box, Button, CardMedia, Container, Grid, IconButton, ListItemText, Typography} from "@mui/material";
import LanguageSelect from "../UI/LanguageSelect";
import {NavLink} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Banner from "./banner";
import JoinUsButton from "../UI/joinUsButton";

const Collaboration = () => {

    const openModal = () => {
        console.log('Open Modal Window')
    }

    return (
        <Box sx={{
            display: 'flex',
            // flexDirection: {xs: 'column', sm: 'row'},
            flexDirection: 'column',
            py: '30px',
            pt: {xs: '5px', sm: '30px'},
        }}>
            <Grid container mb='45px' sx={{justifyContent: 'center', alignItems: 'center'}}>
                {/*<NavLink to='/'>*/}
                <Typography
                    sx={{
                        fontSize: '14px',
                        color: '#939393',
                        cursor: 'pointer',
                        '&:hover': {
                            color: '#3A3A3A',
                        },
                        flexGrow: 1,

                    }}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <CardMedia
                            sx={{height: 13, width: 13}}
                            image="/img/home.svg"
                            title="home"
                        />
                    </IconButton>
                    — Сотрудничество Stoking
                </Typography>
                {/*</NavLink>*/}

                <ListItemText primary='Выберите язык:' sx={{display: {xs: 'none', sm: 'block'}, flexGrow: 0,}}/>

                <LanguageSelect/>
            </Grid>

            <Typography variant='h6'
                        component='span'
                        align='center'
                        mb='19px'
                        sx={{fontSize: {xs: '16px', sm: '26px'}, fontWeight:400}}
            >
                Stoking — маркетплейс промышленного оборудования
            </Typography>

            <Typography variant='h6' component='span' align='center' mb='12px'
                        sx={{
                            fontSize: {xs: '14px', sm: '16px'},
                        }}
            >
                Владеете складом промышленного оборудования или производите его? Начни продавать уже сейчас.
            </Typography>

            <JoinUsButton openModal={openModal}>
                Стать продавцом на Stoking
            </JoinUsButton>

            <Banner/>

        </Box>
    );
};

export default Collaboration;