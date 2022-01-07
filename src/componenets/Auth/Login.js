import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LoginCheck } from "./AuthProvider"
import logo from "../../images/dnow.png"
import "./auth.css"
export const Login = () =>  {
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const nav = useNavigate()
    return (<>
        <img id="logo"src={logo} alt="Logo"/>
        <TextField
        id="outlined-textarea"
        label="UserName"
        // value={entry.respond}
        placeholder= "Enter your Username here"
        multiline
        rows={1}
        sx={{mt:2}}
        fullWidth
        onChange={(event)=> setUserName(event.target.value)}
        />
        <TextField
        id="outlined-textarea"
        label="Password"
        // value={entry.respond}
        placeholder= "Enter your Password here"
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