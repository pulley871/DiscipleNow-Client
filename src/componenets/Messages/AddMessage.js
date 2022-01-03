import { useEffect, useState } from "react"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Stack, TextField } from "@mui/material"
import { PostMessage } from "./MessageProvider";

export const AddMessage = ({disciples, setTog}) => {
    const [body, setBody] = useState("")
    const [selectedDiscipleId, setSelectedDiscipleId] = useState(0)


    return(
        <div>
            <FormControl sx={{ m: "auto",mt:2, width: "100%" }}>
            <InputLabel id="demo-simple-select-autowidth-label">Disciples</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                // value={age}
                onChange={(evt)=> setSelectedDiscipleId(evt.target.value)}
                autoWidth
                label="Disciples"
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                {disciples?.map((disciple)=><MenuItem value={disciple.id}>{disciple.user.first_name} {disciple.user.last_name}</MenuItem>)}
                
            </Select>
            </FormControl>
            <TextField 
                    id="outlined-textarea"
                    label="Enter Your Message Here"
                    // value={entry.respond}
                    placeholder= "Enter your Message here"
                    multiline
                    rows={4}
                    sx={{mt:2}}
                    fullWidth
                    onChange={(event)=> setBody(event.target.value)}
                />
            <div id="add-entry__buttons">
                <Button variant="contained" color="success" onClick={()=>{
                    let message = {discipleId: selectedDiscipleId, body: body}
                    PostMessage(message).then(()=> setTog(false))
                }}>Submit</Button>
                <Button variant="contained" color="error" onClick={()=>setTog(false)}>Cancel</Button>
            </div>
      </div>
    )
}