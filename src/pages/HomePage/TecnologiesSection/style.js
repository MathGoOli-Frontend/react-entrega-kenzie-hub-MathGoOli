import { styled } from "styled-components";


export const StyledSection = styled.section`
    padding-top: 1rem;
`

export const TechDiv = styled.div`
    display: flex;
    align-items: center;

    justify-content: space-between;

`

export const TechDeck = styled.ul`
    width: 96%;
    
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: var(--color-grey-3);
    gap: .5rem;

    @media (min-width: 600px) {
        width: clamp(400px, 60vw, 100%);
    }

`
export const StyledWrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;

    gap: 1rem;
`