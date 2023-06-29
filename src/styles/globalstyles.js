import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-color-primary: #ff577f;
	    --color-color-primary-50: #ff427f;
	    --color-color-primary-disable: #59323f;
	    --color-grey-4: #121214;
	    --color-grey-3: #212529;
	    --color-grey-2: #343b41;
	    --color-grey-1: #868e96;
	    --color-grey-0: #f8f9fa;
	    --color-sucess: #3fe864;
	    --color-negative: #e83f5b;

        --input-font-size: 1.6rem;

        --radius: 4px;

        font-size: 62.5%;
    }

    *{
        box-sizing: border-box;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;

        font: inherit;
        vertical-align: baseline;
        font-family: "Inter";
        text-decoration: none;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section, button {
        display: block;
    }
    body {
        line-height: 1;
        background-color: var(--color-grey-4);
        color: var(--color-grey-0)

    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    label{
        font-size: 1.6rem;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    input::placeholder{
        color: var(--color-grey-0);
    }
    input {
        color: var(--color-grey-0);
    }
    label{
        font-size: 1.2rem;
    }
    button{
        width: 100%;
        height: 4.8rem;
        cursor: pointer;
        background-color: var(--color-color-primary-50);
        color: var(--color-grey-0);
        font-size: 1.6rem;
        border: none;
        border-radius: var(--radius)
    }
    textarea:focus, input:focus{
        outline: none;
    }
    h1 {
	    font-size: 1.8rem;
	    font-family: "Inter";
	    font-weight: 700;
	    font-style: normal;
	    line-height: 2.8rem;
	    text-decoration: none;
	    text-transform: none;
    }
    h2 {
	    font-size: 1.6rem;
	    font-family: "Inter";
	    font-weight: 700;
	    font-style: normal;
	    line-height: 2.6rem;
	    text-decoration: none;
	    text-transform: none;
    }
    h3 {
	    font-size: 1.4rem;
	    font-family: "Inter";
	    font-weight: 700;
	    font-style: normal;
	    line-height: 2.4rem;
	    text-decoration: none;
	    text-transform: none;
    }

    .text-style-headline {
	    font-size: 12px;
	    font-family: "Inter";
	    font-weight: 400;
	    font-style: normal;
	    line-height: 22px;
	    text-decoration: none;
	    text-transform: none;
    }
    .text-style-headline-bold {
	    font-size: 12px;
	    font-family: "Inter";
	    font-weight: 700;
	    font-style: normal;
	    line-height: 18px;
	    text-decoration: none;
	    text-transform: none;
    }
    .text-style-headline-italic {
	    font-size: 12px;
	    font-family: "Inter";
	    font-weight: 400;
	    font-style: italic;
	    line-height: 18px;
	    text-decoration: none;
	    text-transform: none;
    }

`