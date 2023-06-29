import {TechDeck, StyledWrapper, StyledSection} from "./style"
import { ModalProvider } from "../../../providers/ModalContext"
import {AddModal} from '../../../Fragments/AddTechModal/index'

import { TechDiv } from './TechDiv/index'
import { useContext } from "react"
import { UserContext } from '../../../providers/UserContext'
import { TechCard } from './TechCard/index'
import { EditModal } from "../../../Fragments/EditTechModal"
export const TecnologiesSection = () => {
    const { user } = useContext(UserContext)
    
    
    return(
        <StyledSection>
            <ModalProvider>
                <AddModal/>
                <EditModal/>
                <StyledWrapper>
                    <TechDiv/>
                    <TechDeck>
                        {user.techs.map(({id, title, status}) => <TechCard key={id} props={{id, title, status}}/>)}

                    </TechDeck>
                </StyledWrapper>
            </ModalProvider>
        </StyledSection>
    )
}