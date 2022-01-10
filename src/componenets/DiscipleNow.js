import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Footer } from "../footer/Footer"
import { ApplicationView } from "./Appview"
import { LoginView } from "./LoginView"
import "./DiscipleNow.css"
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
        <div id="page-container">
            <div id="content-wrap">
                <ApplicationView/>
            </div>
            <div id="footer">
                <Footer/>
            </div>
        
        </div>
        :<LoginView />}
    </>)
}