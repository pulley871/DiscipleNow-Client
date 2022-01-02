import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader, TextField } from "@mui/material"
import {useState, useEffect} from "react"
import { NotHomeNav } from "../LeadDisciple/LeadNotHomeNav"
import { getSearchedDisciple } from "./GroupProvider"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export const AddDisciple = () => {
    const [lead, setLead] = useState({})
    const [email, setEmail] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const render = () =>{
        return fetch("http://localhost:8000/lead-dashboard",
                {headers: {
                    "Authorization": "Token fa2eba9be8282d595c997ee5cd49f2ed31f65bed "
                }}
            )
                .then(res => res.json())
                .then((data)=> {
                    setLead(data.lead_disciple)
                })
    
            }
        useEffect(() => {
            render()
        },[])
        useEffect(() => {
            if(email !== ""){
                getSearchedDisciple(email).then((data)=> setSearchResults(data))
            }else{
                setSearchResults([])
            }
        },[email])
    return(<>
            <NotHomeNav lead={lead} />
            <Box sx={{mt:5}}>
                <TextField id="standard-basic" label="Search by Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}
                sx={{width:"100%"}}
                />
            </Box>
            
            {searchResults.length > 0?
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#bbdefb', margin: 'auto', borderRadius: "16px", marginTop: "2em"}}>
            <nav aria-label="main mailbox folders">
            <List
                subheader={<ListSubheader sx={{bgcolor: '#bbdefb', color: "black", borderRadius: "16px"}}>Results</ListSubheader>}
            >
            <Divider/>
            {searchResults?.map((disciple)=>{
            return(
              <ListItem disablePadding >
                <ListItemButton >
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={`${disciple.user?.first_name} ${disciple.user?.last_name}`} />
                <ListItemIcon><PersonAddAlt1Icon /></ListItemIcon>
                </ListItemButton>
              </ListItem>
            )
            
          })}
          </List>
            </nav>
          </Box>
          :""}
                
    </>)
}