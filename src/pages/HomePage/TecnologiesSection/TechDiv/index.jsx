import { StyledTechDiv, PlusButton } from './style'
import { useContext } from "react"
import { ModalContext } from '../../../../providers/ModalContext'

export const TechDiv = () =>{
    const { setAddTechModal, setEditTechModal } = useContext(ModalContext)

    return(
        
        
            <StyledTechDiv>
                <h2>Tecnologias</h2>

               <PlusButton onClick={()=> { setAddTechModal(true) }}>+</PlusButton>
            </StyledTechDiv>
            
        
    )
}