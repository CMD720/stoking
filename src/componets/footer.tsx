import React from 'react';
import {Box, CardMedia, Typography} from "@mui/material";

const Footer = () => {

    const texts = [
        'Сотрудничество', 'Доставка и возврат', 'Оплата', 'Контакты', 'Публичная оферта', 'Политика конфиденциальности',
    ]
    const icons = [
        '/img/home.png','/img/catalog.png','/img/cart.png','/img/favorite.png','/img/profile.png',
    ]

    const styleFooterLink ={
        fontSize: '14px',
        color: '#909090',
        cursor:'pointer',
        display:{xs:'none',md:'block'},
    }
    const styleIconMenu = {
        height: 'auto',
        width: 'auto',
        cursor:'pointer',
        display:{xs:'block',md:'none'},
    }
    const styleFooterCopyright ={
        fontSize: '12px',
        color: '#3A3A3A',
        mt: '20px',
    }
    const textMenu = texts.map((text) => (
        <Typography component='span' noWrap sx={styleFooterLink} key={text}>
            {text}
        </Typography>
    ))
    const iconMenu = icons.map((icon, index) => (
        <CardMedia sx={styleIconMenu} key={index}
                   component="img"
                   image={icon}
        />
    ))
    return (
        <Box
            sx={{
                minHeight:'126px',
                borderTop:'1px solid #BFBCBC',
                bgcolor:'#F5F5F5',
                mt:'20px',
                pt:'30px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-around',
            }}
        >
            <Box
                sx={{
                    display:'flex',
                    justifyContent:'space-around',
                }}
            >
                {textMenu}
                {iconMenu}

            </Box>

            <Box sx={{alignSelf:'center',display:{xs:'none',md:'block'} }}>
                <Typography component='div' noWrap sx={styleFooterCopyright}>
                    ООО «‎Хитинвест» by Spaceport 2022‎
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;