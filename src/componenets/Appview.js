import { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { DiscipleHome } from "../RegularDisciple/DiscipleHome"
import { DiscipleMessages } from "../RegularDisciple/DiscipleMessages"
import { AddDisciple } from "./Group/AddDisciple"
import { SelectedDisciple } from "./LeadDisciple/DiscipleView"
import { LeadDiscipleHome } from "./LeadDisciple/LeadDiscipleHome"
import { LeadJournal } from "./LeadDisciple/LeadJournal"
import { Messages } from "./Messages/Messages"
import {useNavigate} from "react-router-dom"
export const ApplicationView = () => {
    const {pathname} = useLocation()
    const [pathCheck, setCheck] = useState()
    const nav = useNavigate()
    const checker = () =>{
        return fetch("http://localhost:8000/leadcheck",
            {headers: {
                "Authorization": `Token ${localStorage.getItem("dn-token")}`
            }}
        )
            .then(res => res.json())
            .then((data)=>{
                setCheck(data.check)})
    }
    const pathCheckAndRedirect = () =>{
        if (pathCheck === false && pathname.startsWith("/lead")){
            nav("/home")
        }else if (pathCheck === true && pathname.startsWith("/lead") === false){
            nav("/leadhome")
        }else if (pathname ==="/" && pathCheck === false){
            nav("/home")
        }else if (pathname ==="/" && pathCheck === true){
            nav("/leadhome")
        }
    }
    
    useEffect(()=>{
        
        checker()
        
        if (pathname === "/"){
            pathCheckAndRedirect()
        }
    },[])
    useEffect(()=>{
        
        checker()
    },[pathname])
    useEffect(()=>{
        pathCheckAndRedirect()
    },[pathCheck])
    return(<>
        {pathCheck ?
        <Routes>
            <Route exact path="/leadhome" element={<LeadDiscipleHome/>}/>
            <Route exact path="/lead/selecteddisciple/:discipleId" element={<SelectedDisciple/>}/>
            <Route exact path="/lead/journal" element={<LeadJournal />}/>
            <Route exact path="/lead/adddisciple" element={<AddDisciple/>}/>
            <Route exact path="/lead/messages" element={<Messages/>}/>
            
        </Routes>
        :
        <Routes>
            <Route exact path="/home" element={<DiscipleHome />}/>
            <Route exact path="/messages" element={<DiscipleMessages />}/>
        </Routes>
}
    </>)
}