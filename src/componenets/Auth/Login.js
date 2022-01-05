import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginCheck } from "./AuthProvider"

export const Login = () =>  {
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const nav = useNavigate()
    return (<>
        <TextField
        id="outlined-textarea"
        label="Enter Your Message Here"
        // value={entry.respond}
        placeholder= "Enter your Message here"
        multiline
        rows={1}
        sx={{mt:2}}
        fullWidth
        onChange={(event)=> setUserName(event.target.value)}
        />
        <TextField
        id="outlined-textarea"
        label="Enter Your Message Here"
        // value={entry.respond}
        placeholder= "Enter your Message here"
        multiline
        rows={1}
        sx={{mt:2}}
        fullWidth
        onChange={(event)=> setPassword(event.target.value)}/>
        <Button onClick={()=>{
            LoginCheck({userName:userName, password:password}).then(()=> nav("/"))
        }}>Login</Button>
        <Button>Register</Button>
</>
    )
    
}