import React, {useEffect, useRef, useState} from 'react';
import {Box, Card, CardMedia, Grid} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/storeHooks";
import {itemDataSelector} from "../../redux/Item/selector";
import Loader from "../loader/loader";
import {fetchItems} from "../../redux/Item/fetchItem";
import axios from "axios";
import {ItemsSliceProps, Titem} from "../../redux/Item/types";

const CardBrand = () => {
    const dispatch = useAppDispatch()
    const {items, status,links ,meta} = useAppSelector(itemDataSelector)
    const [brands, setBrands] = useState<Titem[]>([])
    const brandBlock = useRef<HTMLDivElement>(null)
    // console.log(links.next.href);

    const getItems = async() => {
        console.log("CALL GET ITEM")
        const path = meta.currentPage === meta.pageCount || meta.currentPage === 0 ? links.first.href : links.next.href
        dispatch(fetchItems({path}))
        const {data} = await axios.get<ItemsSliceProps>(`${path}`)
        setBrands([...brands, ...data.items])
    }

    const cardBrand = brands.map((item: Titem, index: number) => (
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

    const [currentPage , setCurrentPage] = useState(1)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//     const lastElement = useRef<any>(null)
//     const observer = useRef<IntersectionObserver | null>(null)
//     console.log(lastElement.current);
//
//     useEffect(() => {
//
//             if(observer.current) {
//                 // console.log('observe disconnect')
//                 observer.current?.disconnect()
//             };
//             var callback = function (entries: any, observer: any) {
//                 if (entries[0].isIntersecting ) {
//                     console.log("DIV is visible zone")
//                     console.log('pageNumber', meta.currentPage);
//                     setCurrentPage(meta.currentPage)
//                     // console.log('pageNumber', page);
//                 }
//             };
//             observer.current = new IntersectionObserver(callback);
//             observer.current.observe(lastElement.current as HTMLDivElement)
//
//     }, [status])


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




    useEffect(() => {
        getItems()
    }, [currentPage])



    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // const height = brandBlock.current?.children[0].clientHeight ?? 48.2;
    //         const height = 525
    //         console.log('HEIGHT', brandBlock.current?.scrollTop);
    //         // if(brandBlock.current?.scrollTop > (1050 * currentPage )  ){setCurrentPage(currentPage + 1)}
    //         brandBlock.current?.scrollTo({
    //             top: brandBlock.current?.scrollTop + height,
    //             behavior: "smooth",
    //         })
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, [])

    return (
        <Grid container
              ref={brandBlock}
              rowSpacing={2}
              columnSpacing={2}
              sx={{
                  pl: {xs: '0', md: '2.5%'},
                  pr: {xs: '0', md: '1.5%'},
                  mt: '20px',
                  minHeight: '518px',
                  maxHeight: '518px',
                  // overflow: {xs: 'scroll hidden', md: 'hidden scroll'},
                  overflow:'scroll',
              }}
        >
            {
                status === 'loading' &&
                    <Box component='div'
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100vw'
                        }}
                    >
                        <Loader/>
                    </Box>
            }
            {cardBrand}
            {/*{*/}
            {/*    status === 'loading'*/}
            {/*        ? <></>*/}
            {/*        : <Box component='div' ref={lastElement} sx={{bgcolor: "#FAD395FF", height: '20px', width: '100%'}}></Box> //for observer*/}
            {/*}*/}

        </Grid>

    );
};

export default CardBrand;