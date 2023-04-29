import React from 'react';
import {Box, Grid, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from '../header/header.module.scss'
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

type searchProps = {
    value?: string,
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchStyle = styled('div')(({ theme }) => ({
    position: 'relative',
    // marginRight: theme.spacing(2),
    marginRight: '25px',
    // width: '50%',
    [theme.breakpoints.up('xl')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
        // flexGrow: 1,
        // alignSelf: 'flex-end',
        width: 'auto',
        marginRight:'0px',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    top:'0px',
    right:'0px',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    border: '1px solid #DFDFE1',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    '&:hover':{
        border: '1px solid #a6a6a6',
    },
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 1, 1),
        // vertical padding + font size from searchIcon
        paddingRight: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.down('xl')]: {
            width: '100%',
        },
    },
}));
const Search = (props: searchProps) => {
    const {value, onChange} = props
    return (
        <>
            <SearchStyle>
                <StyledInputBase
                    placeholder="Поиск по товарам"
                    inputProps={{ 'aria-label': 'search' }}
                    type='search'
                    value={value}
                    onChange={onChange}
                />
                <SearchIconWrapper >
                    <SearchIcon sx = {{color:'#D0D0D0'}} />
                </SearchIconWrapper>
            </SearchStyle>
        </>

    );
};

export default Search;