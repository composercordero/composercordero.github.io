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

export const yellow = {
    100: "#f9efcc",
    200: "#f3de99",
    300: "#edce67",
    400: "#e7bd34",
    500: "#e1ad01",
    600: "#b48a01",
    700: "#876801",
    800: "#5a4500",
    900: "#2d2300",
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
    100: "#ccffe9",
    200: "#99ffd3",
    300: "#66ffbd",
    400: "#33ffa7",
    500: "#00ff91",
    600: "#00cc74",
    700: "#009957",
    800: "#00663a",
    900: "#00331d"
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