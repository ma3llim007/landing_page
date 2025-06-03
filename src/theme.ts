import { createTheme } from "@mui/material";
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';


const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#0D0D0D",
            paper: "#1A1A1A",
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#B3B3B3",
        },
        primary: {
            main: "#FFFFFF",
        },
        grey: {
            500: "#505050",
            700: "#333333",
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export default theme;
