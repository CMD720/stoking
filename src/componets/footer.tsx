import React from 'react';
import {Box, Button, CardMedia, Grid, ListItemText, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const Footer = () => {

    const styleFooterLink ={
        fontSize: '14px',
        color: '#909090',
        cursor:'pointer'
    }
    const styleFooterCopyright ={
        fontSize: '12px',
        color: '#3A3A3A',
        mt: '20px',
    }


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
                    // flexDirection:'column',
                    // alignItems:'center',
                    justifyContent:'space-around',
                }}
            >
                <Typography component='span' noWrap sx={styleFooterLink}>
                    Сотрудничество
                </Typography>
                <Typography component='span' noWrap sx={styleFooterLink}>
                    Доставка и возврат
                </Typography>
                <Typography component='span' noWrap sx={styleFooterLink}>
                    Оплата
                </Typography>
                <Typography component='span' noWrap sx={styleFooterLink}>
                    Контакты
                </Typography>
                <Typography component='span' noWrap sx={styleFooterLink}>
                    Публичная оферта
                </Typography>
                <Typography component='span' noWrap sx={styleFooterLink}>
                    Политика конфиденциальности
                </Typography>

            </Box>

            <Box sx={{alignSelf:'center'}}>
                <Typography component='div' noWrap sx={styleFooterCopyright}>
                    ООО «‎Хитинвест» by Spaceport 2022‎
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;