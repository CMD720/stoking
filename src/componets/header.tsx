import React, {useEffect, useRef, useState} from 'react';
import {Box, Typography} from "@mui/material";
import CatalogButton from "./UI/CatalogButton";
import Search from "./UI/Search";
import IconMenu from "./UI/IconMenu";

const Header = () => {

    const [search, setSearch] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setSearch('');
            return;
        }
        setSearch(e.target.value);
    };

    useEffect(() => {
            const userLang = navigator.language;
            localStorage.setItem('lang', userLang)
    }, [])

    console.log(search);
    return (
        <Box sx={{
            flexDirection: {xs: 'column', sm: 'row'},
            py: '30px',
            display: 'flex',
            // alignItems:'center',

        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: {xs: 'space-between', sm: 'center'}
            }}>
                <Typography align='left' variant="h5" component="span"
                            sx={{
                                mr: '29px',
                                ml: {xs: '40%', sm: 0},
                                fontSize: '26px',
                            }}
                >
                    Stoking
                </Typography>
                <CatalogButton/>
            </Box>
            <Box sx={{
                flexGrow: {xs: 1, sm: 0},
                width: '100%',
            }}>
                <Search
                    value={search}
                    onChange={handleChange}
                />
            </Box>
            <Box sx={{display: {xs: 'none', md: 'flex'},}}>
                <IconMenu/>
            </Box>

        </Box>
    );
};

export default Header;