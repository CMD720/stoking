import React from 'react';
import {Box, Button, CardMedia, ListItemText, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/storeHooks";
import {itemDataSelector} from "../../redux/Item/selector";
import CardBrand from './cardBrand';

const Brands = () => {

    const {meta} = useAppSelector(itemDataSelector)
    const {totalCount} = meta


    const openModal = () => {
        console.log('Open Modal Window')
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: {xs: 'column', md: 'row'},
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
                        image="/img/brands_lable.png"
                        title="brands_lable"
                    />
                    {meta.totalCount} брендов
                </Typography>

                <ListItemText sx={{mb: '20px'}} secondary="Официальный дилер мировых брендов-производителей."/>

                <Typography component='div' my='12px'>
                    <Button variant="contained"
                            fullWidth
                            id="collabaration-button"
                            onClick={openModal}
                            size="small"
                            sx={{
                                boxShadow: 'none',
                                height: '35px',
                                width: {xs: '100%', sm: '213px'},
                                fontSize: '12px',
                                textTransform: 'none',
                            }}
                    >
                        Стать продавцом на Stoking
                    </Button>
                </Typography>
            </Box>
            {/*--------------------------RIGHT--------------------------*/}
            <Box
                sx={{
                    maxHeigth: '518px',
                    width: {xs: 'auto', md: '50%'},
                    position: 'relative',
                }}
            >
                <Box component='div'
                     sx={{
                         display: {xs: 'none', md: 'block'},
                         height: '62px',
                         width: '100%',
                         bgcolor: '#FFFF',
                         filter: 'blur(2px)',
                         opacity: '0.85',
                         position: 'absolute',
                         // top: '0',
                         top: '-20px',
                     }}
                />

                <CardBrand/>

                <Box component='div'
                     sx={{
                         display: {xs: 'none', md: 'block'},
                         height: '62px',
                         width: '100%',
                         bgcolor: '#FFFF',
                         filter: 'blur(2px)',
                         opacity: '0.85',
                         transform: 'matrix(1, 0, 0, -1, 0, 0)',
                         position: 'absolute',
                         // bottom: '0',
                         bottom: '-20px',
                     }}
                />

            </Box>
        </Box>
    );
};

export default Brands;