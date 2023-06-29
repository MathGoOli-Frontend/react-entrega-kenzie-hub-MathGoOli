import { createContext, useEffect, useState } from "react"

import { api } from "../Api/ApiAxios"



export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setLoading] = useState(true)
    
    
    const loadUser = async () => {
        const token = localStorage.getItem("@kenzieHub:Token")

        if(token){
        
            try {
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                
                
            } catch (error) {
                console.error(error)
            }

        }
        
    }

    useEffect(() => {
        const userFunc = async () =>{
            await loadUser()
        setLoading(false)
        }
        userFunc()

    },[])


    const userLoguinSubmit = async (formData) => {
        try {
            const { data } = await api.post("/sessions", formData)
            localStorage.setItem("@kenzieHub:Token", data.token)
            localStorage.setItem("@kenzieHub:User", JSON.stringify(data.user))

            loadUser()
            
        } catch (error) {
            console.error(error)
        }

    }

    const userLogoff = () => {
        localStorage.removeItem("@kenzieHub:Token")
        localStorage.removeItem("@kenzieHub:User")
        setUser(null)
        
    }

    const userAddTech = async (formData) => {
        const token = localStorage.getItem("@kenzieHub:Token")
        
        try {
            const {data} = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            loadUser()

        } catch (error) {
            console.error(error)
        }

    }

    const userEditTech = async (id, formData) => {
        const token = localStorage.getItem("@kenzieHub:Token")

        try {
            const { data } = await api.put(`/users/techs/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
            }})

            loadUser()
        } catch (error) {
            console.error(error)
        }
    }

    const userDeleteTech = async (id) => {
        const token = localStorage.getItem("@kenzieHub:Token")

        try {
            const{ data } = await api.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            loadUser()

        } catch (error) {
            console.error(error)
        }

    }
    return (
        <UserContext.Provider value={{user, userLoguinSubmit, userLogoff, userAddTech, userDeleteTech, userEditTech, isLoading, setLoading}}>
            {children}
        </UserContext.Provider>
    )
}