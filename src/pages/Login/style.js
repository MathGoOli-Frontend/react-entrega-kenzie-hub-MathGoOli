import { styled } from "styled-components";
import { Link } from "react-router-dom"

export const StyledHeader= styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 1rem;

`

export const StyledSection = styled.section`
    width: 40vw;
    background-color: var(--color-grey-3);
    padding: 1rem;
    border-radius: var(--radius);

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    
    form{
        width: 100%;
        
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

`

export const StyledLink = styled(Link)`
    width: 100%;
    height: 4.8rem;
    text-decoration: none;
    color: var(--color-grey-0);
    background-color: var(--color-grey-1);
    border-radius: var(--radius);

    display: flex;
    align-items: center;
    justify-content: center;

    :visited{
        text-decoration: none;
    }

`