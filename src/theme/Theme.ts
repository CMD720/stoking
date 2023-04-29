import {createTheme, ThemeProvider} from '@mui/material/styles';

export const myTheme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#ED7117',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
        iconcolor: {
            main: '#D0D0D0',
            contrastText: '#a6a6a6',
        },
    },
});

declare module '@mui/material/styles' {
    interface Palette {
        iconcolor: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        iconcolor?: PaletteOptions['primary'];
    }
}
// declare module '@mui/material/Button' {
//     interface ButtonPropsColorOverrides {
//         iconcolor: true;
//     }
// }
declare module '@mui/icons-material/Search' {
    interface IconPropsColorOverrides {
        iconcolor: true;
    }
}