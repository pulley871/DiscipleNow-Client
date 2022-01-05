import { useState, useEffect } from "react"
import { MessageList } from "../componenets/Messages/MessageList"
import { DiscipleNav } from "./DiscipleNav"
import { getDisciplHome } from "./DiscipleProvider"

export const DiscipleMessages = () => {
    const [disciple, setDisciple] = useState({})
    
    const render = () => {
        getDisciplHome()
        .then((data) => setDisciple(data))
    }
    useEffect(()=>{
        render()
    },[])
    return(<>
    {disciple != {}? <>
        <DiscipleNav disciple={disciple} home={false}/>
        {disciple.messages?.length > 0 ? 
        <MessageList messages={disciple.messages} />
        :<h3 sx={{mt:2}}>You have no messages</h3>}
        </>
        :""}
    </>)
}