import { ThemeProvider } from "styled-components"
import { createGlobalStyle } from 'styled-components';
import currentColor from "./App"

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.text};
    }
`;

export const pink = {
    100: "#ffcce6",
    200: "#ff99cc",
    300: "#ff66b3",
    400: "#ff3399",
    500: "#ff0080",
    600: "#cc0066",
    700: "#99004d",
    800: "#660033",
    900: "#33001a",
};

export const purple = {
    100: "#f3cce7",
    200: "#e799d0",
    300: "#dc66b8",
    400: "#d033a1",
    500: "#c40089",
    600: "#9d006e",
    700: "#760052",
    800: "#4e0037",
    900: "#27001b"
};

export const yellow = {
    100: "#fef3cc",
    200: "#fde699",
    300: "#fcda67",
    400: "#fbcd34",
    500: "#fac101",
    600: "#c89a01",
    700: "#967401",
    800: "#644d00",
    900: "#322700"
};

export const blue = {
    100: "#cce7ff",
    200: "#99cfff",
    300: "#66b8ff",
    400: "#33a0ff",
    500: "#0088ff",
    600: "#006dcc",
    700: "#005299",
    800: "#003666",
    900: "#001b33"
};

export const green = {
    100: "#cce8dc",
    200: "#99d1b9",
    300: "#66bb96",
    400: "#33a473",
    500: "#008d50",
    600: "#007140",
    700: "#005530",
    800: "#003820",
    900: "#001c10"
};


export const orange = {
    100: "#ffe0cc",
    200: "#ffc299",
    300: "#ffa366",
    400: "#ff8533",
    500: "#ff6600",
    600: "#cc5200",
    700: "#993d00",
    800: "#662900",
    900: "#331400"
};

function Theme({children, isDarkTheme, lightTheme, darkTheme}){
    return  <>
        <ThemeProvider theme = { isDarkTheme ? darkTheme : lightTheme } >
            <GlobalStyles />
            {children}
        </ThemeProvider>
    </>}

export default Theme