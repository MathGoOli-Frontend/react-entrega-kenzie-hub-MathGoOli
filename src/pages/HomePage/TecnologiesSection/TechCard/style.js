import { styled } from "styled-components";


export const StyledLi = styled.li`
    width: 100%;
    height: 5rem;
    background-color: var(--color-grey-4);

    border-radius: var(--radius);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 2rem 0 2rem;

    span{
        font-size: 1.6rem;
    }
    &:hover{
        background-color: var(--color-grey-2);
    }
    div{
        display: flex;
        gap: .5rem;
        align-items: center;
    }
    button{
        width: 3rem;
        height: 3rem;

        background-color: var(--color-grey-3);

        display: flex;
        align-items: center;
    }

`