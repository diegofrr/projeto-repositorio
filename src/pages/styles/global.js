import { createGlobalStyle } from "styled-components";

// POPPINS FONTS
import PoppinsThin from '../../fonts/Poppins/Poppins-Thin.ttf';
import PoppinsLight from '../../fonts/Poppins/Poppins-Light.ttf';
import PoppinsRegular from '../../fonts/Poppins/Poppins-Regular.ttf';
import PoppinsSemiBold from '../../fonts/Poppins/Poppins-SemiBold.ttf';

export default createGlobalStyle`

    @font-face {
        font-family: 'PoppinsThin';
        src: url(${PoppinsThin});
    }

    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsRegular});
    }

    @font-face {
        font-family: 'PoppinsSemiBold';
        src: url(${PoppinsSemiBold});
    }

    @font-face {
        font-family: 'PoppinsLight';
        src: url(${PoppinsLight});
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    
    *:focus {
        outline: none;
    }

    html, body, #root {
        min-height: 100%;
    }
    
    body {
        background-color: #000;
        font-size: 14px;
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Poppins', sans-serif;
    }

    body, input, button {
        color: #222;
        font-size: 14px;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

`;