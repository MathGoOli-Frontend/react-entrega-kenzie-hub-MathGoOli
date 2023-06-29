import { styled } from "styled-components";


export const StyledPasswordInputDiv = styled.div`
    height: 4.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: var(--color-grey-2);

    border: 2px solid var(--color-grey-0);
    border-radius: var(--radius);
    label{
        font-size: 1.6rem;
    }
    input{
        width: 92%;
        height: 100%;
        padding: 0 1rem 0 1rem;
        background-color: var(--color-grey-2);
        border: none;
        font-size: 1.6rem;

        
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
        padding: 0 1rem 0 1rem;

        background-color: var(--color-grey-2);
        border: 2px solid var(--color-grey-0);
        border-radius: var(--radius);
        font-size: 1.6rem;

    }

    label{
        font-size: 1.6rem;
    }

`

export const StyledPasswordDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    overflow: hidden;
`