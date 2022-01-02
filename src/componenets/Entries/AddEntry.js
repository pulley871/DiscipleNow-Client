import { Button, Stack, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import "./Entries.css"

export const AddandEditEntry = ({edit, editEntry, setTog}) => {
    const [entry, setEntry] = useState({hear:"", engage:"", apply:"", respond:"", reference:""})

    useEffect(()=>{
        if (edit){
            let object = {hear: editEntry.hear, engage:editEntry.engage, apply:editEntry.apply, respond:editEntry.respond, reference: editEntry.reference}
            setEntry(object)
        }
    
    },[])
    return(<>
        <TextField 
                    id="outlined-textarea"
                    label="Hear"
                    value={entry.hear}
                    placeholder= "Enter your Message here"
                    multiline
                    rows={4}
                    sx={{mt:2}}
                    fullWidth
                    onChange={(event)=> {
                        const copy = {...entry}
                        copy.hear = event.target.value
                        setEntry(copy)}}
                />
        
        <TextField 
                    id="outlined-textarea"
                    label="Engage"
                    value={entry.engage}
                    placeholder= "Enter your Message here"
                    multiline
                    rows={4}
                    sx={{mt:2}}
                    fullWidth
                    onChange={(event)=> {
                        const copy = {...entry}
                        copy.hear = event.target.value
                        setEntry(copy)}}
                />
        <TextField 
                    id="outlined-textarea"
                    label="Apply"
                    value={entry.apply}
                    placeholder= "Enter your Message here"
                    multiline
                    rows={4}
                    sx={{mt:2}}
                    fullWidth
                    onChange={(event)=> {
                        const copy = {...entry}
                        copy.hear = event.target.value
                        setEntry(copy)}}
                />
        <TextField 
                    id="outlined-textarea"
                    label="Respond"
                    value={entry.respond}
                    placeholder= "Enter your Message here"
                    multiline
                    rows={4}
                    sx={{mt:2}}
                    fullWidth
                    onChange={(event)=> {
                        const copy = {...entry}
                        copy.hear = event.target.value
                        setEntry(copy)}}
                />
        <div id="add-entry__buttons">
            <Button variant="contained" color="success">Submit</Button>
            <Button variant="contained" color="error" onClick={()=>setTog(false)}>Cancel</Button>
        </div>
    </>)
}