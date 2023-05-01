import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, Card, CardMedia, Grid, ListItemText, Typography} from "@mui/material";
import CardBrand from "./cardBrand";
import JoinUsButton from "./UI/joinUsButton";
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {fetchItems} from "../redux/Item/fetchItem";
import {itemDataSelector} from "../redux/Item/selector";
import Loader from './loader/loader';

const Brands = () => {

    const dispatch = useAppDispatch()
    const {items, status, totalCount} = useAppSelector(itemDataSelector)
    // const {width, height, path} = item.thumbnail.sizes[0]


    const openModal = () => {
        console.log('Open Modal Window')
    }
    const getItems = () => {
        dispatch(fetchItems())
    }
    useEffect(() => {
        getItems()
    }, [])
    const brandBlock = useRef()
    let isPaused = false;
    window.setInterval(function(){
        if(!isPaused){
            window.scrollTo(0, document.body.scrollHeight);
        }
    }, 500);
    const cardBrand = items.map((item: any, index: number) => (
        <Grid item xs={4} md={4}>
            <Card
                sx={{
                    width: '181px',
                    height: '115px',
                    boxShadow: '0px 0px 15px rgba(77, 77, 77, 0.15)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <CardMedia
                    sx={{
                        // width: '70%',
                        // height: '50%',
                        height: 'auto',
                        width: 'auto',
                    }}
                    component="img"
                    image={item.thumbnail.sizes[0].path}
                    title={item.name}
                />
            </Card>
        </Grid>
    ))
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: {xs: 'column', md: 'row'},
                // alignItems: {xs:'none',sm:'center',md:'none'},
                // justifyContent: 'center',
                // position:'relative',
                // justifyContent: 'space-between',
            }}
        >
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
                    {totalCount} брендов
                </Typography>

                <ListItemText sx={{mb: '20px'}} secondary="Официальный дилер мировых брендов-производителей."/>

                <Typography my='12px'>
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
            {/************************************************************************************************/}
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
                >
                </Box>
                {/*<Box component='div'*/}
                {/*<Grid container*/}
                {/*    // spacing={2}*/}
                {/*      rowSpacing={2}*/}
                {/*      columnSpacing={2}*/}
                {/*    // columns={{sx:3, md:3}}*/}
                {/*    // ref={brandBlock}*/}
                {/*      sx={{*/}
                {/*          pl: {xs: '0', md: '2.5%'},*/}
                {/*          pr: {xs: '0', md: '1.5%'},*/}
                {/*          minHeight: '518px',*/}
                {/*          maxHeight: '518px',*/}
                {/*          overflow: {xs: 'scroll hidden', md: 'hidden scroll'},*/}
                {/*          // scrollbarWidth: '5px',*/}
                {/*          scrollBehavior: 'smooth',*/}
                {/*      }}*/}
                {/*>*/}
                {/*    {*/}
                {/*        status === 'loading'*/}
                {/*            ? <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw'}}><Loader/></Box>*/}
                {/*            : cardBrand*/}
                {/*    }*/}
                {/*    {*/}
                {/*        status === 'loading'*/}
                {/*            ? <></>*/}
                {/*            : <Box sx={{bgcolor: "#FAD395FF", height: '20px', width: '100%'}}></Box>*/}
                {/*    }*/}
                {/*</Grid>*/}
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
                >

                </Box>
            </Box>
        </Box>
    );
};

export default Brands;