import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.text};
}
`;

const lightTheme = {
    colors: {
        body: '#fff',
        text: '#444',
        white: '#fff',
        accentColor: {
            100: "#ffcce6",
            200: "#ff99cc",
            300: "#ff66b3",
            400: "#ff3399",
            500: "#ff0080",
            600: "#cc0066",
            700: "#99004d",
            800: "#660033",
            900: "#33001a"}
    },
    fonts: ['Poppins', 'sans-serif'],
    fontSizes:{
        xs: '0.875rem',
        s: '1rem',
        m: '1.5rem',
        l: '2rem',
        xl: '3rem',
        xxl: '4.5rem',
        xxxl: '6rem',
    },
    fontWeights:{
        light: 200,
        normal: 300,
        bold: 500,
        bolder: 700,
    },
}

const darkTheme = {
    colors: {
        body: '#1c1c1c',
        text: '#ffffff',
        white: '#fff',
        accentColor: {
            100: "#ffcce6",
            200: "#ff99cc",
            300: "#ff66b3",
            400: "#ff3399",
            500: "#ff0080",
            600: "#cc0066",
            700: "#99004d",
            800: "#660033",
            900: "#33001a"}
    },
    fonts: ['Poppins', 'sans-serif'],
    fontSizes:{
        xs: '0.875rem',
        s: '1rem',
        m: '1.5rem',
        l: '2rem',
        xl: '3rem',
        xxl: '4.5rem',
        xxxl: '6rem',
    },
    fontWeights:{
        light: 200,
        normal: 300,
        bold: 500,
        bolder: 700,
    },
}

export default function Theme({children, isDarkTheme}){
    return  <>
        <ThemeProvider theme = { isDarkTheme ? darkTheme : lightTheme } >
            <GlobalStyles />
            {children}
        </ThemeProvider>
    </>}