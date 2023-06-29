import { Route, Routes  } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"

import { ProtectedRoutes } from "../components/ProtectedRoutes/index"
import { PublicRoutes } from "../components/PublicRoutes"
export const RoutesMain = () => {
    
    return (
        <Routes>
            <Route element={<PublicRoutes/>}>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Route>
            <Route element={<ProtectedRoutes/>}>
                <Route path="/home" element={<HomePage/>} />
            </Route>
        </Routes>
    )
}