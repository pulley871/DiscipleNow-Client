import { useEffect, useState } from "react"
import { NotHomeNav } from "../LeadDisciple/LeadNotHomeNav"
import { ProviderRender } from "../LeadDisciple/LeadProvider"



export const Messages = () => {
    const [lead, setLead] = useState({})
    useEffect(()=>{
        ProviderRender().then(data=>setLead(data.lead_disciple))
    },[])
    return(<>
    <NotHomeNav lead={lead}/>
    Messages</>)
}