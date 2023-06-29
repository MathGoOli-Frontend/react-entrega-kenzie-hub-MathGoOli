import { styled } from "styled-components";


export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    select{
        width: 100%;
        height: 4.8rem;
        padding: 0 1rem 0 1rem;

        outline: none;
        background-color: var(--color-grey-2);
        color: var(--color-grey-0);
        border: 2px solid var(--color-grey-0);
        border-radius: var(--radius);
        font-size: 1.6rem;
    }
    label{
        font-size: 1.6rem;
    }

`