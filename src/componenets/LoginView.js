import { Routes, Route } from "react-router-dom"
import { Login } from "./Auth/Login"

export const LoginView = () => {
    return (
        <Routes>
            <Route exact path = "/login" element={<Login/>}/>
        </Routes>
    )
}