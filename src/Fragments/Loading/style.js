import { styled } from "styled-components";


export const StyledDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: glow 3s infinite alternate;

    div{
        width: 60%;
        display: flex;
        flex-direction: column;
    }
    img{
        width: 100%;
        
    }
    h2{
        color: var(--color-color-primary);
    }

    @keyframes glow {
        from {
            opacity: 0;
            
        }
        to {
            opacity: 1;
        }  
    }

`