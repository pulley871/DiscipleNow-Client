import {useNavigate} from "react-router-dom"
import { Avatar, Fab, ListItemAvatar, ListSubheader } from "@mui/material";
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import WestIcon from '@mui/icons-material/West';
import MailIcon from '@mui/icons-material/Mail';
import "./LeadStyles.css"
export const NotHomeNav = ({lead}) => {
    const nav = useNavigate()
    return(
        <div id="lead-home__header">
            
            <div id="lead-home__header__avatar__not">
            <Fab color="primary" size="medium" onClick={()=> nav("/leadhome")}>
                <WestIcon/>
            </Fab>
            <Avatar size="medium" sx={{ width: 48, height: 48 }}/>
            {/* <h3>{lead?.user?.first_name} {lead?.user?.last_name}</h3> */}
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
    )
}