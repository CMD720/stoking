import React, {createRef, useEffect, useRef, useState} from 'react';
import {Box, Card, CardMedia, Grid} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {itemDataSelector} from "../redux/Item/selector";
import Loader from "./loader/loader";
import {fetchItems} from "../redux/Item/fetchItem";

const CardBrand = () => {

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


    useEffect(() => {
        const interval = setInterval(() => {
            // const height = brandBlock2.current?.children[0].clientHeight ?? 48.2;
            const height = 10
            console.log('HEIGHT',height);
            brandBlock2.current?.scrollTo({
                top: brandBlock2.current?.scrollTop + height,
                // top: brandB.current + height,
                behavior: "smooth",
            })
            // scroll()
        }, 1000);

        return () => clearInterval(interval);
    }, [])
    // const brandBlock:React.RefObject<HTMLDivElement> = createRef()
    const brandBlock2 = useRef<HTMLDivElement>(null)
    const brandB = useRef(10)
    // const height = brandBlock2.current?.children[0].clientHeight ?? 48.2;
    const height = brandBlock2.current?.scrollTop;
    console.log('HEIGHT - aaaa', height);

    // console.log('REF',brandBlock);
    console.log('REF', brandBlock2);

    // window.onload = function(){
    //
    //         document.getElementById('scroll').scrollTop = 9999;
    //
    // }
    // window.onload = function(){
    const scroll = () => {
        const height = brandBlock2.current?.children[0].clientHeight ?? 48.2;
        // console.log('AAAAAAAAA')
        // if(brandBlock.current){
        //     brandBlock.current.scrollTop = 9999;
        // }
        brandBlock2.current?.scrollTo({
            // top: brandBlock2.current?.scrollTop + height,
            top: 1518,
            behavior: "smooth",
        })
    }

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
                <CardMedia sx={{height: 'auto', width: 'auto',}}
                           component="img"
                           image={item.thumbnail.sizes[0].path}
                           title={item.name}
                />
            </Card>
        </Grid>
    ))

    return (
        <Grid container
              ref={brandBlock2}
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
                  // scrollbarWidth: '5px',
                  // scrollBehavior: 'smooth',
              }}
        >
            {/*<Box ref={brandBlock2}>*/}
            {
                status === 'loading'
                    ? <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100vw'
                    }}><Loader/></Box>
                    : cardBrand
            }
            {/*</Box>*/}
            {
                status === 'loading'
                    ? <></>
                    : <Box sx={{bgcolor: "#FAD395FF", height: '20px', width: '100%'}}></Box>
            }

        </Grid>

    );
};

export default CardBrand;