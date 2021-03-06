import { createGlobalStyle, ThemeProvider } from "styled-components";
import Theme from "./src/themes/theme";
import React from "react";

const GlobalStyles =createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-family: ${props => props.theme.fonts.body};
        height: 100%;
        background-color: ${props => props.theme.colors.primary};
    }
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles/>
        {element}
    </ThemeProvider>
)