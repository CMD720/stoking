import React from 'react';
import {Box, Button, Divider, IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import IconMenu from "./IconMenu";

const CatalogButton = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Typography
                variant="body1"
                noWrap
                component="span"
                color="inherit"
                sx={{
                display: {xs: 'inline-flex', sm: 'none'},

            }}
            >
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                        pr:0
                    }}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon/>
                </IconButton>

            </Typography>

            <Button variant="contained"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    size="medium"
                    sx={{
                        boxShadow:'none',
                        display: {xs: 'none', sm: 'inline-flex'},
                        mr: '25px',
                        height:'39px',
                        textTransform:'none'
                    }}
            >
                <MenuIcon sx={{
                    mr: {xs: 0, sm: 1},
                }}/>
                <Typography
                    variant="subtitle2"
                    noWrap
                    component="span"
                    color="inherit"
                    sx={{display: {xs: 'none', sm: 'block'}}}
                >
                    Каталог
                </Typography>
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{
                    mt: 1
                }}
            >
                <Box sx={{display:{xs: 'flex', md: 'none'} }}>
                    <IconMenu/>
                </Box>
                <Divider />
                <MenuItem onClick={handleClose}>Menu ctegory 1</MenuItem>
                <MenuItem onClick={handleClose}>Menu ctegory 2</MenuItem>
                <MenuItem onClick={handleClose}>Menu ctegory 3</MenuItem>


            </Menu>
        </>
    );
};

export default CatalogButton;