import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { NotHomeNav } from "../LeadDisciple/LeadNotHomeNav"
import { ProviderRender } from "../LeadDisciple/LeadProvider"
import { AddMessage } from "./AddMessage"
import { MessageList } from "./MessageList"



export const Messages = () => {
    const [lead, setLead] = useState({})
    const [toggle, setToggle] = useState(false)
    const [disciplesList, setList] = useState([])
    const [messages, setMessages] = useState([])
    const render = () => {
        ProviderRender().then(data=>{
            setLead(data.lead_disciple)
            setList(data.group.group_disciples)
            setMessages(data.lead_disciple.messages)
            
        })
    }
    useEffect(()=>{
        render()
    },[])
    return(<>
    <NotHomeNav lead={lead}/>
    {toggle? <AddMessage disciples={disciplesList} setTog={setToggle}/>:""}
    {toggle? "":<Button onClick={()=> setToggle(true)} variant="contained" color="success"sx={{width:"100%", mt:4}}>Compose</Button>}
    <MessageList messages={messages} render={render}/>
    </>)
}