import { createContext, useState } from "react";



export const ModalContext = createContext({})

export const ModalProvider = ({children}) => {
    const [isAddTechModal, setAddTechModal] = useState(false)
    const [isEditTechModal, setEditTechModal] = useState(false)
    const [editTechModalInfo, setEditTechModalInfo ] = useState({})



    return (
        <ModalContext.Provider value={
            {isAddTechModal, setAddTechModal,
            isEditTechModal, setEditTechModal,
            editTechModalInfo, setEditTechModalInfo}}
        >
            {children}
        </ModalContext.Provider>
    )
}