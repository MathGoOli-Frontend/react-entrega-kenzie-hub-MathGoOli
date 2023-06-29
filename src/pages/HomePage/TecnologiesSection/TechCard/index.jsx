import { useContext } from 'react'
import { StyledLi } from './style'

import trash from '../../../../assets/trashcan.svg'

import { UserContext } from '../../../../providers/UserContext'
import { ModalContext } from '../../../../providers/ModalContext'

export const TechCard = ({props}) => {
    const { userDeleteTech } = useContext(UserContext)
    const { setEditTechModal, editTechModalInfo, setEditTechModalInfo } = useContext(ModalContext)

    const openModal = (e) => {
        
        setEditTechModalInfo({ ...props })
        setEditTechModal(true)
    }

    return (
        <StyledLi onClick={(e) => {openModal(e)}}>
            <span>{props.title}</span>
            <div>
                <button onClick={() => {userDeleteTech(props.id)}}>
                    <img src={trash}/>
                </button>
                <span>{props.status}</span>
            </div>
        </StyledLi>
    )
}