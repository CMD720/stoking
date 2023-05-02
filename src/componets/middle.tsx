import React from 'react';
import {Box, CardMedia, Container, ListItemText, Typography} from "@mui/material";

const Middle = () => {

    const texts:string[] = [
        'Stoking — маркетплейс инженерно-промышленного оборудования.',
        'Рынок промышленного оборудования изменяется. Появляются новые, качественные бренды, формируются большие склады, меняется политика компаний, ускоряются процессы логистики оборудования.',
        'Стокинг это более 50 инженеров, создавших сервис-проводник в сегменте промышленного оборудования.',
        'Мы хотим знать что вы производите, продаете и донести это миру.',
    ]

    return (
        <Box
            sx={{
                display: ' flex',
                alignItems: 'center',
                height: {xs: 'auto', md: '436px'},
                my: '40px',
                position: 'relative',
            }}
        >
            <CardMedia
                sx={{
                    height: 436,
                    width: 221,
                    display: {xs: 'none', md: 'block'},
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    mr: '7.5%',
                    flexGrow: 1,
                }}
                image="/img/phone.png"
                title="customer"
            />


            <Box
                sx={{
                    padding: {xs: '40px 16px', md: '45px 327px 45px 76px'},
                    bgcolor: '#F8F8F8',
                }}
            >
                {texts.map((text,i) => (
                    <Box key={i} sx={{
                        mb: '18px',
                    }}>
                        <Typography
                            sx={{
                                display: 'inline',
                                fontSize: {xs: '14px', sm: '16px'},
                            }}
                            component="span"
                            variant="body1"
                            color="text.primary"
                        >
                            {text}
                        </Typography>
                    </Box>
                ))}
            </Box>

        </Box>
    );
};

export default Middle;