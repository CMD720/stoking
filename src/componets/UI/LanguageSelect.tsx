import {Box, CardMedia, ListItemText, MenuItem, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';

const LanguageSelect = () => {
    const languages = [
        {
            flag: '/img/rus.png',
            label: 'Русский',
        },
        {
            flag: '/img/eng.png',
            label: 'Английский',
        },
        {
            flag: '/img/tr.png',
            label: 'Турецкий',
        },
    ];

    const [lang, setLang] = useState(languages[0])

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="standard-select-currency"
                        select
                        defaultValue={lang.label}
                        variant="standard"
                        size='small'
                        // sx={{width:'150px'}}
                    >
                        {languages.map((language) => (
                            <MenuItem key={language.label} value={language.label }>
                                <Typography component="div" noWrap={true} sx={{display:'flex', alignItems: 'center'}} >
                                    <CardMedia
                                        sx={{height: 16, width: 24, mr:1}}
                                        image={language.flag}
                                        title={language.label}
                                    />
                                    {language.label}
                                </Typography>
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </Box>
        </>
    );
};

export default LanguageSelect;