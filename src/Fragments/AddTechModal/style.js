import styled from "styled-components";


export const StyledModalOverlayDiv = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;

    width:100%;
    height: 100vh;

    background-color: rgba(0,0,0,.3);

`
export const StyledModalboxDiv = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
    padding: 0;
    background-color: var(--color-grey-3);

    border-radius: var(--radius);
    overflow: hidden;

`

export const CloseDiv = styled.div`
    width: 100%;
    color: var(--color-white);
    background-color: var(--color-grey-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    font-size: 1.8rem;

    button{
        width: 4rem;
        height: 4rem;
        background-color: var(---color-grey-2);
        color: var(--color-white);
        border: none;
    }
`

export const ContentDiv = styled.div`
    padding: 1rem;
    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
`

export const TotalDiv = styled.div`
    padding: 1rem;
    border-top: 2px solid var(--color-grey-100);

    div{
        display:flex;
        justify-content: space-between;
    }
    h2{
        font-size: 1.4rem;
        font-weight: 600;
    }
    span{
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--color-grey-300)
    }
    button{
        margin-top: 1rem;
        width: 100%;
        height: 6rem;
        background-color: var(--color-grey-100);
        color:var(--color-grey-300);
        border: none;
        border-radius: var(--radius)
    }
`