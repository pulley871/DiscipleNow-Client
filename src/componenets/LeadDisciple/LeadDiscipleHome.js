import { Avatar, Fab, ListItemAvatar, ListSubheader } from "@mui/material";
import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import "./LeadStyles.css"
import SendIcon from '@mui/icons-material/Send';
import SettingsIcon from '@mui/icons-material/Settings';
import { LeadDoughnutChart } from "./DoughnutChart";
import {useNavigate} from "react-router-dom"
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MailIcon from '@mui/icons-material/Mail';
export const LeadDiscipleHome = () => {
    const [data, setData] = useState({})
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [disciples, setDisciples] = useState([])
    const [needToContact, setToContact] = useState([])
    const nav = useNavigate()
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    useEffect(()=> {
        return fetch("http://localhost:8000/lead-dashboard",
            {headers: {
                "Authorization": "Token fa2eba9be8282d595c997ee5cd49f2ed31f65bed "
            }}
        )
            .then(res => res.json())
            .then((data) => {
              
                setData(data)
                setDisciples(data.group?.group_disciples)
                setToContact(data.need_to_contact)

            })
    },[])
    return(<>
      <div id="lead-home__header">
        <div id="lead-home__header__avatar">
          <Avatar/>
          <h3>{data.lead_disciple?.user?.first_name} {data.lead_disciple?.user?.last_name}</h3>
          </div>
        <div id="lead-home__header__buttons">
          <Fab  color="primary" size="medium" onClick={()=> nav("/lead/journal")}>
            <MenuBookSharpIcon />  
          </Fab>
          <Fab  color="primary" size="medium" onClick={()=> nav("/lead/adddisciple")}>
            <PersonAddAlt1Icon />  
          </Fab>
          <Fab color="primary" size="medium" onClick={()=> nav("/lead/messages")}>
            <MailIcon />
          </Fab>
        </div>
      </div>
      {disciples.length >0 ?
      <div id="lead-home-groups__container">
      
      <LeadDoughnutChart disciples={Math.round(((disciples.length - needToContact.length) / disciples.length) * 100) }/>
      
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#bbdefb', margin: 'auto', borderRadius: "16px", marginTop: "2em"}}>
      <nav aria-label="main mailbox folders">
        <List
          subheader={<ListSubheader sx={{bgcolor: '#bbdefb', color: "black", borderRadius: "16px"}}>Your Disciples</ListSubheader>}
        >
          <Divider/>
          {disciples?.map((disciple)=>{
            return(
              <ListItem disablePadding >
                <ListItemButton onClick={()=>nav(`/lead/selecteddisciple/${disciple.id}`)}>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={`${disciple.user?.first_name} ${disciple.user?.last_name}`} />
                <ListItemIcon><SettingsIcon/></ListItemIcon>
                </ListItemButton>
              </ListItem>
            )
          })}
          
        </List>
      </nav>
    </Box>
    {needToContact.length > 0 ?
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#ffcdd2', margin: 'auto', borderRadius: "16px", marginTop: "2em"}}>
      <nav aria-label="main mailbox folders">
        <List
          subheader={<ListSubheader sx={{bgcolor: '#ffcdd2', color: "black", borderRadius: "16px"}}>Disciples Not On Track</ListSubheader>}
        >
          <Divider/>
          {needToContact?.map((disciple)=>{
            return(
              <ListItem disablePadding >
                <ListItemButton>
                <ListItemAvatar>
                  <Avatar/>
                </ListItemAvatar>
                <ListItemText primary={`${disciple.user?.first_name} ${disciple.user?.last_name}`} />
                <ListItemIcon>
                  <SendIcon/>
                </ListItemIcon>
                </ListItemButton>
              </ListItem>
            )
          })}
          
        </List>
      </nav>
    </Box>:""}
    
    </div>
    :
      
      <CircularProgress sx={{mt:2, ml:"45%"}}/>
      
      }
    </>)
}