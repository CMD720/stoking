import React from 'react';
import {Card, CardMedia} from "@mui/material";
import {useAppSelector} from "../redux/storeHooks";
import {itemDataSelector} from "../redux/Item/selector";

const CardBrand = () => {
    const {items, status, totalCount} = useAppSelector(itemDataSelector)
    const {width, height, path, name} = items[0].thumbnail.sizes[0]
    return (
        <Card
            sx={{
                width:'181px',
                height:'115px',
                padding:'auto'
            }}
        >
            <CardMedia
                sx={{
                    width: {width},
                    height: {height},
                }}
                component="img"
                image={path}
                title={name}
                alt={name}
            />

        </Card>
    );
};

export default CardBrand;