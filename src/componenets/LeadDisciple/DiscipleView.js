import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSelectedDisciple, PromoteToLead, ProviderRender } from "./LeadProvider"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Alert, Avatar, Button, Divider, Fab } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./LeadStyles.css"
import { EntriesList } from "../Entries/EntriesList";
import { NotHomeNav } from "./LeadNotHomeNav";
import { addToGroup } from "../Group/GroupProvider";
export const SelectedDisciple = () => {
    const {discipleId} = useParams()
    const [expanded, setExpanded] = useState(false)
    const [disciple, setDisciple] = useState({})
    const [lead, setLead] = useState({})
    const nav = useNavigate()
    useEffect(() => {
        getSelectedDisciple(discipleId).then((data) => setDisciple(data))
        ProviderRender().then((data)=>setLead(data))
    },[])
    return(<>
        <NotHomeNav lead={lead}/>
        <div id="selected-header" >
            <div id="selected-avatar">
            <Avatar/>
            <h2>{disciple.user?.first_name} {disciple.user?.last_name}</h2>
            </div>
            {disciple.is_lead ? 
                <Fab color="primary" size="medium" id="selected-lead-icon">
                    <StarIcon />
                </Fab>
            :
                <Fab color="primary" size="medium" id="selected-lead-icon" onClick={()=> PromoteToLead(disciple.id)}>
                    <StarBorderIcon />
                </Fab>
            }
            
        </div>
        {disciple.has_posted ? "" : <Alert severity="error">Disciple Hasn't Hit their 7 day goal</Alert>}
        {disciple.entries?.length > 0 ? <EntriesList entries={disciple.entries}/>
    :""}
    <Button variant="contained"color="error"sx={{mt:2, left:"24%"}}onClick={()=>{ 
                    let object = {discipleId: disciple.id}
                    addToGroup(object).then(()=> nav("/leadhome"))}}>Remove From Group</Button>
    
    
    </>)
}