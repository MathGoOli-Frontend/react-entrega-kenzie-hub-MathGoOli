import { styled } from "styled-components";


export const StyledPasswordInputDiv = styled.div`
    height: 4.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: var(--color-grey-1);

    border: 2px solid var(--color-grey-0);
    border-radius: var(--radius);
    label{
        font-size: 1.2rem;
    }
    input{
        width: 92%;
        height: 100%;
        background-color: var(--color-grey-1);
        border: none;
        color: var(#fff);
        font-size: 1.2rem;
    }
    img{
        width: 2rem;
    }
    button{
        width: 3rem;
        background-color: transparent;
    }
`

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input{
        width: 100%;
        height: 4.8rem;
        background-color: var(--color-grey-1);
        border: none;
        color: var(#fff);
        font-size: 1.2rem;

    }

`

export const StyledPasswordDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`