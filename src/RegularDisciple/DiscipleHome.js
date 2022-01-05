import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { AddandEditEntry } from "../componenets/Entries/AddEntry"
import { EntriesList } from "../componenets/Entries/EntriesList"
import { DiscipleNav } from "./DiscipleNav"
import { getDisciplHome } from "./DiscipleProvider"

export const DiscipleHome = () =>{
    const [disciple, setDisciple] = useState({})
    const [editMode, setAddEntry] = useState(false)
    const render = () => {
        getDisciplHome()
        .then((data) => setDisciple(data))
    }
    useEffect(()=>{
        render()
    },[])
    return (<>{disciple != {}? <>
        <DiscipleNav disciple={disciple} home={true}/>
        {editMode ? <AddandEditEntry edit={false} setTog={setAddEntry} render={render}/>:
        <Button variant="contained"color="success" sx={{marginTop:"1em", left:"35%"}} onClick={()=> setAddEntry(true)}>Add Entry</Button>
        }
        
        
        {disciple.entries?.length>0? <EntriesList entries={disciple?.entries} />:""}
        
        
        
        </>
        :""}
    </>)
}