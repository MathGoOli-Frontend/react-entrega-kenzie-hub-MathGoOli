import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import {StyledModalOverlayDiv, StyledModalboxDiv, CloseDiv, ContentDiv, TotalDiv} from "./style"
import { useContext } from "react"
import { ModalContext } from '../../providers/ModalContext'
import { zodResolver } from "@hookform/resolvers/zod"
import { UserContext } from "../../providers/UserContext"

import { Input } from "../Form/Input"
import { Select } from "../Form/Select"
import { formAdd } from './addModalSchema'

export const AddModal = () =>{
    const modalRef = useRef(null)
    const { isAddTechModal, setAddTechModal } = useContext(ModalContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(formAdd)
    })

    const { userAddTech } = useContext(UserContext)

    
    useEffect(()=> {
        const handleOutClick = (event) => {
            if(!modalRef.current?.contains(event.target)){
                setAddTechModal(false)
            }
        }
        window.addEventListener("mousedown", handleOutClick)

        return () =>{
            window.removeEventListener("mousedown", handleOutClick)
        }
    },[])

    if(isAddTechModal){
        return(
            <StyledModalOverlayDiv role="dialog">
                <StyledModalboxDiv ref={modalRef}>
                    <CloseDiv>
                        <h2>Cadastrar Tecnologias</h2>
                        <button onClick={() => setAddTechModal(false)} >X</button>
                    </CloseDiv>
                    <ContentDiv>
                        <form onSubmit={handleSubmit(userAddTech)}>
                            <Input
                                type="text"
                                id="title"
                                placeholder="Nome da tecnologia"
                                label="Nome"
                                {...register("title")}
                            />
                            <Select
                                type="text"
                                id="title"
                                {...register("status")}
                                label="Selecionar Status"
                            >
                                <option value="">Selecione o status</option>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </Select>

                            <button type="submit">Cadastrar Tecnologia</button>
                        </form>
    
                    </ContentDiv>
                </StyledModalboxDiv>
    
            </StyledModalOverlayDiv>
        )
    }

}