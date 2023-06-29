import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import {StyledModalOverlayDiv, StyledModalboxDiv, CloseDiv, ContentDiv, TotalDiv} from "./style"
import { useContext } from "react"
import { ModalContext } from '../../providers/ModalContext'
import { zodResolver } from "@hookform/resolvers/zod"
import { UserContext } from "../../providers/UserContext"

import {Label} from '../Form/Label/index'
import { Input } from "../Form/Input"
import { Select } from "../Form/Select"
import { formEdit } from './editModalSchema'
import { StyledButtonsDiv, StyledButtonsEdit, StyledButtonsDelete } from './style'


export const EditModal = ({setIsOpen, cart, removeItemToCard}) =>{
    const modalRef = useRef(null)
    const { isEditTechModal, setEditTechModal, editTechModalInfo, setEditTechModalInfo } = useContext(ModalContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formEdit)
    })

    const { userEditTech, userDeleteTech } = useContext(UserContext)

    
    const submitFunc = async (id, formData) => {
        await userEditTech(id, formData)
        setEditTechModal(false)
    }
    const deleteButtonFunc = async (id) => {
        await userDeleteTech(id)
        setEditTechModal(false)
    }
    useEffect(()=> {
        const handleOutClick = (event) => {
            if(!modalRef.current?.contains(event.target)){
                setEditTechModal(false)
                
            }
        }
        window.addEventListener("mousedown", handleOutClick)

        return () =>{
            window.removeEventListener("mousedown", handleOutClick)
        }
    },[])

    if(isEditTechModal){
        return(
            <StyledModalOverlayDiv role="dialog">
                <StyledModalboxDiv ref={modalRef}>
                    <CloseDiv>
                        <h2>Cadastrar Tecnologias</h2>
                        <button onClick={() => setEditTechModal(false)} >X</button>
                    </CloseDiv>
                    <ContentDiv>
                        <form onSubmit={handleSubmit((formData) => submitFunc(editTechModalInfo.id, formData) )}>
                            <Label label="Nome" value={editTechModalInfo.title}/>
                            <Select
                                type="text"
                                id="title"
                                {...register("status")}
                                label="Selecionar Status"
                                
                            >
                                
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </Select>

                            <StyledButtonsDiv> 
                                <StyledButtonsEdit type="submit">Editar Tecnologia</StyledButtonsEdit>
                                <StyledButtonsDelete type="button" onClick={() => deleteButtonFunc(editTechModalInfo.id)}>Excluir</StyledButtonsDelete>
                            </StyledButtonsDiv>
                        </form>
    
                    </ContentDiv>
                </StyledModalboxDiv>
    
            </StyledModalOverlayDiv>
        )
    }

}