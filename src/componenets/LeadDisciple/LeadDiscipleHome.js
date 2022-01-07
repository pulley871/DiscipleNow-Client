import { Avatar, Button, Fab, ListItemAvatar, ListSubheader } from "@mui/material";
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
import avatar from "../../images/avatarcheck.jpg"
export const LeadDiscipleHome = () => {
    const [data, setData] = useState({})
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [disciples, setDisciples] = useState([])
    const [needToContact, setToContact] = useState([])
    const [noGroup, setNoGroup] = useState(true)
    const nav = useNavigate()
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    useEffect(()=> {
        return fetch("http://localhost:8000/lead-dashboard",
            {headers: {
                "Authorization": `Token ${localStorage.getItem("dn-token")}`
            }}
        )
            .then(res => res.json())
            .then((data) => {
              
                setData(data)
                if(data.group.group_disciples.length>0){
                  setDisciples(data.group?.group_disciples)
                  setToContact(data.need_to_contact)

                }else{
                  setNoGroup(false)
                }

            })
    },[])
    return(<>
      <div id="lead-home__header">
        <div id="lead-home__header__avatar">
          <Avatar src={avatar}/>
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
      
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#bbdefb', margin: 'auto', borderRadius: "16px", marginTop: "1em"}}>
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
                  <Avatar src={avatar}/>
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
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#ffcdd2', margin: 'auto', borderRadius: "16px", marginTop: "2em", }}>
      <nav aria-label="main mailbox folders">
        <List
          subheader={<ListSubheader sx={{bgcolor: '#ffcdd2', color: "black", borderRadius: "16px"}}>Disciples Not On Track</ListSubheader>}
        >
          <Divider/>
          {needToContact?.map((disciple)=>{
            return(
              <ListItem disablePadding sx={{mt:1.5, ml:2}}>
                
                <ListItemAvatar>
                  <Avatar src={avatar}/>
                </ListItemAvatar>
                <ListItemText primary={`${disciple.user?.first_name} ${disciple.user?.last_name}`} />
                
                
              </ListItem>
            )
          })}
          
        </List>
      </nav>
    </Box>:""}
    
    </div>
    :<>
      {noGroup ?  <CircularProgress sx={{mt:2, ml:"45%"}}/>:<Button variant="contained" color="success" sx={{mt:2, width:"50%", left:"25%"}}>Make Group</Button>}
     </>
      
      }
    </>)
}