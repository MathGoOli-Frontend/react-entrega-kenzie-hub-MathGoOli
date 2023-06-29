import { styled } from "styled-components";


export const PlusButton = styled.button`
    width: 3rem;
    height: 3rem;

    font-size: 1.8rem;
    font-weight: 500;

    background-color: var(--color-grey-2);
`

export const StyledTechDiv = styled.div`
    width: 96%;
    display: flex;
    align-items: center;

    justify-content: space-between;

    @media (min-width: 600px) {
        width: clamp(400px, 60vw, 100%);
    }

`


