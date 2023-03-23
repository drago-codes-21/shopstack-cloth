import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        @media screen and (max-width : 800px) {
            padding : 10px
        }
    }
`;
