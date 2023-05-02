import React, {createRef, useEffect, useRef, useState} from 'react';
import {Box, Card, CardMedia, Grid} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/storeHooks";
import {itemDataSelector} from "../../redux/Item/selector";
import Loader from "../loader/loader";
import {fetchItems} from "../../redux/Item/fetchItem";

const CardBrand = () => {
    const dispatch = useAppDispatch()
    const {items, status, totalCount} = useAppSelector(itemDataSelector)

    const brandBlock = useRef<HTMLDivElement>(null)
    const openModal = () => {
        console.log('Open Modal Window')
    }
    const getItems = () => {
        dispatch(fetchItems())
    }


    console.log('REF', brandBlock);

    // const brandBlock = useRef()
    // let isPaused = false;
    // window.setInterval(function(){
    //     if(!isPaused){
    //         window.scrollTo(0, document.body.scrollHeight);
    //     }
    // }, 500);


    const cardBrand = items.map((item: any, index: number) => (
        <Grid item xs={4} md={4} key={index}>
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
                <CardMedia sx={{height: 'auto', width: 'auto',}}
                           component="img"
                           image={item.thumbnail.sizes[0].path}
                           title={item.name}
                />
            </Card>
        </Grid>
    ))


    useEffect(() => {
        getItems()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            const height = brandBlock.current?.children[0].clientHeight ?? 48.2;
            // const height = 525
            console.log('HEIGHT', height);
            brandBlock.current?.scrollTo({
                top: brandBlock.current?.scrollTop + height,
                behavior: "smooth",
            })
        }, 4000);
        return () => clearInterval(interval);
    }, [])

    return (
        <Grid container
              ref={brandBlock}
            // spacing={2}
              rowSpacing={2}
              columnSpacing={2}
            // columns={{sx:3, md:3}}
              sx={{
                  pl: {xs: '0', md: '2.5%'},
                  pr: {xs: '0', md: '1.5%'},
                  minHeight: '518px',
                  maxHeight: '518px',
                  overflow: {xs: 'scroll hidden', md: 'hidden scroll'},
                  // float:'left',
              }}
        >
            {
                status === 'loading'
                    ? <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100vw'
                        }}
                    >
                        <Loader/>
                    </Box>
                    : cardBrand
            }
            {
                status === 'loading'
                    ? <></>
                    //for oserver
                    : <Box sx={{bgcolor: "#FAD395FF", height: '20px', width: '100%'}}></Box> //for oserver
            }

        </Grid>

    );
};

export default CardBrand;