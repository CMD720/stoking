import React from 'react';
import {Box, Button, CardMedia, Container, Grid, IconButton, Typography} from "@mui/material";
import LanguageSelect from "./UI/LanguageSelect";
import {NavLink} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Banner from "./banner";

const Collaboration = () => {
    return (
        <Box sx={{
            display: 'flex',
            // flexDirection: {xs: 'column', sm: 'row'},
            flexDirection: 'column',
            py: '30px',
            pt: {xs: '5px', sm: '30px'},
        }}>
            <Grid container mb='45px' sx={{justifyItems: 'center', alignItems: 'center'}}>
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
                            title="call us"
                        />
                    </IconButton>
                    — Сотрудничество Stoking
                </Typography>
                {/*</NavLink>*/}
                <Box sx={{display: {xs: 'none', sm: 'block'},}}>
                    <Typography>
                        Выберите язык:
                    </Typography>
                </Box>
                <LanguageSelect/>
            </Grid>
            <Typography variant='h5' component='span' align='center' mb='19px'
                        sx={{
                            fontSize: {xs: '16px', sm: '26px'},
                            // order: {xs:'1', sm:'0'}
                        }}
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
            <Typography align='center' my='12px'
                        sx={{
                            order: {xs:'1', sm:'0'},
                        }}
            >
                <Button variant="contained"
                        fullWidth
                        id="collabaration-button"
                    // onClick={}
                        size="small"
                        sx={{
                            boxShadow: 'none',
                            // display: {xs: 'none', sm: 'inline-flex'},
                            height: '35px',
                            width: {xs:'100%',sm:'213px'},
                            fontSize: '12px',
                            textTransform: 'none',


                        }}
                >
                    Стать продавцом на Stoking
                </Button>
            </Typography>
            <Banner/>
        </Box>
    );
};

export default Collaboration;