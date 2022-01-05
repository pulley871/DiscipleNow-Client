import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ApplicationView } from "./Appview"
import { LoginView } from "./LoginView"

export const DiscipleNow = () => {
    const nav = useNavigate()
    const {path} = useLocation()
    
    const routeToLogin = () => {
        if (path !== "/login" || path !== "/register"){
            if (!localStorage.getItem("dn-token")){
                nav("/login")
            }
        }
    }
    useEffect(()=>{
        routeToLogin()
    },[])
    return (<>
        {localStorage.getItem("dn-token")?
        <ApplicationView/>
        :<LoginView />}
    </>)
}