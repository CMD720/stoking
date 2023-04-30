import React from 'react';
import './scss/app.scss'
import Header from "./componets/header";
import { ThemeProvider } from '@mui/material/styles';
import {myTheme} from "./theme/Theme";
import {Container} from "@mui/material";
import Collaboration from "./componets/collaboration";
import WorkStages from "./componets/workStages";
import Banner2 from "./componets/banner2";
import Brands from "./componets/brands";

const App = () => {
    return (
        <ThemeProvider theme={myTheme}>
            <Container
                // className='mainContainer'
                // maxWidth='xl'
                sx={{
                    border: '1px dashed',
                    maxWidth:'1250px',
                    padding: {xs:myTheme.spacing(0, 2)}
                }}
            >
                <Header/>
                <Collaboration/>
                <WorkStages/>
                <Banner2/>
                <Brands/>
            </Container>
        </ThemeProvider>
    );
};

export default App;