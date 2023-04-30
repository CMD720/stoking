import React, { FC } from 'react';
import {Button, Typography} from "@mui/material";

type joinUsButtonProps = {
    openModal?: ()=>void
    align?:string
    children?: string
}
const JoinUsButton: FC<joinUsButtonProps> =
    ({
         openModal,
         align = 'left',
         children,
    }) => {
    return (
        <Typography align='center' my='12px'
                    sx={{
                        order: {xs: '1', sm: '0'},
                    }}
        >
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
                {children}
            </Button>
        </Typography>
    );
};

export default JoinUsButton;