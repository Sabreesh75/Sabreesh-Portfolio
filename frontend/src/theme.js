import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00e5ff', // Cyan accent
        },
        secondary: {
            main: '#f50057', // Pink accent
        },
        background: {
            default: '#0a1929', // Deep blue/black
            paper: '#132f4c',   // Slightly lighter blue
        },
        text: {
            primary: '#fff',
            secondary: '#b2bac2',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '3rem',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2.5rem',
            marginBottom: '1rem',
        },
        h3: {
            fontWeight: 600,
            fontSize: '2rem',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 600,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.4)',
                },
            },
        },
    },
});

export default theme;
