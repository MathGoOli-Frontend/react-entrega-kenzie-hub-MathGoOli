import { styled } from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.header`
    width: 96%;
    height: 7.2rem;
    display: flex;
    justify-content: space-between;
    
    align-items: center;

    button{
        width: 5.5rem;
        height: 3.2rem;

        background-color: var(--color-grey-2);
        font-size: 1.2rem;
        font-weight: 600;
    }

    @media (min-width: 600px) {
        width: clamp(400px, 60vw, 100%);
    }

`

export const PageMain = styled.main`
    width: 100vw;

`

export const NameSection = styled.section`
    height: 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    
    border-top: 1px solid var(--color-grey-2);
    border-bottom: 1px solid var(--color-grey-2);
    padding-left: 2%;
    padding-right: 2%;
    

    p{
        color: var(--color-grey-1);
        font-size: 1.2rem;
        font-weight: 400;
    }

    @media (min-width: 600px) {
        padding-left: clamp(100px, 20vw, 50%);
        padding-right: clamp(100px, 20vw, 30%);
        

    }
`