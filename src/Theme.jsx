import { ThemeProvider } from "styled-components"

const lightTheme = {
    colors: {
        bgColor: '#fff',
        fontColor: '#444',
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
        xs: '0.8rem',
        s: '1rem',
        m: '1.5rem',
        l: '3rem',
        xl: '4.5rem',
    },
    fontWeights:{
        light: 100,
        normal: 300,
        bold: 500,
        bolder: 700,
    },
}

const darkTheme = {
    colors: {
        BgColor: '#fff',
        fontColor: '#444',
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
        xs: '0.8rem',
        s: '1rem',
        m: '1.5rem',
        l: '3rem',
        xl: '4.5rem',
    },
    fontWeights:{
        light: 100,
        normal: 300,
        bold: 500,
        bolder: 700,
    },
}

export default function Theme({children, isDarkTheme}){
    return  <>
        <ThemeProvider theme = { isDarkTheme ? darkTheme : lightTheme } >
            {children}
        </ThemeProvider>
    </>
}