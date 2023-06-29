import { styled } from "styled-components";
import { Link } from "react-router-dom"

export const StyledHeader= styled.header`
    height: 20vh;
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 24.4rem;
    }
    @media (min-width: 600px) {
        width: clamp(400px, 20vw, 100%);
    }

`

export const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 1rem;

`

export const StyledSection = styled.section`
    width: 96%;
    background-color: var(--color-grey-3);
    padding: 5rem 2rem 3rem 2rem;
    border-radius: var(--radius);

    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    h2{
        font-size: 1.8rem;
    }
    p{
        color: var(--color-grey-1)
    }
    form{
        width: 100%;
        
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    
    @media (min-width: 600px) {
        width: clamp(400px, 20vw, 100%);
    }
`

export const StyledLink = styled(Link)`
    width: 6.8rem;
    height: 4rem;
    text-decoration: none;
    color: var(--color-grey-0);
    background-color: var(--color-grey-3);
    border-radius: var(--radius);
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    :visited{
        text-decoration: none;
    }

`