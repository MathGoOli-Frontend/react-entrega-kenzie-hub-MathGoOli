import logo from '../../assets/LogoKenzieHub.svg'
import {StyledDiv} from './style'

export const Loading = () => {


    return (
        <StyledDiv>
            <div>
                <img src={logo}/>
                <h2>Carregando...</h2>
            </div>
        </StyledDiv>
            
        
    )
}