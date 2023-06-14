import { Route, Routes  } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"

export const RoutesMain = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<HomePage/>}/>
        </Routes>
    )
}