import Button from '@mui/material/Button'
import { useEffect, useState } from "react"
import { AddandEditEntry } from '../Entries/AddEntry'
import { EntriesList } from "../Entries/EntriesList"
import { NotHomeNav } from "./LeadNotHomeNav"

export const LeadJournal = () => {
    const [entries, setEntries] = useState([])
    const [lead, setLead] = useState({})
    const [addEntry, setAddEntry] = useState(false)
    const render = () =>{
    return fetch("http://localhost:8000/lead-dashboard",
            {headers: {
                "Authorization": "Token fa2eba9be8282d595c997ee5cd49f2ed31f65bed "
            }}
        )
            .then(res => res.json())
            .then((data)=> {
                setEntries(data.lead_disciple.entries)
                setLead(data.lead_disciple)
            })

        }
    useEffect(() => {
        render()
    },[])
    return(<>
    <NotHomeNav lead={lead} />
    {addEntry ? 
    <AddandEditEntry edit={false} setTog={setAddEntry} render={render}/>
    :""}
    <h3>Your Entries</h3>
    <EntriesList entries={entries}/>
    {addEntry ? "":
    <Button variant="contained"color="success" sx={{marginTop:"1em", left:"35%"}} onClick={()=> setAddEntry(true)}>Add Entry</Button>
    }
    </>)
    
}