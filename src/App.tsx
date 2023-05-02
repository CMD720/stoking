import React from 'react';
import './scss/app.scss'
import Header from "./componets/header";
import { ThemeProvider } from '@mui/material/styles';
import {myTheme} from "./theme/Theme";
import {Container} from "@mui/material";
import Collaboration from "./componets/collaboration/collaboration";
import WorkStages from "./componets/workStages";
import Middle from "./componets/middle";
import Brands from "./componets/brands/brands";
import Footer from "./componets/footer";
import Items from "./componets/items/items";

const App = () => {
    return (
        <ThemeProvider theme={myTheme}>
            <Container
                // className='mainContainer'
                // maxWidth='xl'
                sx={{
                    // border: '1px dashed',
                    maxWidth:'1250px',
                    padding: {xs:myTheme.spacing(0, 2)}
                }}
            >
                <Header/>
                <Collaboration/>
                <WorkStages/>
                <Middle/>
                <Brands/>
                <Items/>
                <Footer/>
            </Container>
        </ThemeProvider>
    );
};

export default App;