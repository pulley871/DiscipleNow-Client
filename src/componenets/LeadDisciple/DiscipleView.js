import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSelectedDisciple, ProviderRender } from "./LeadProvider"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Alert, Avatar, Divider, Fab } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./LeadStyles.css"
import { EntriesList } from "../Entries/EntriesList";
import { NotHomeNav } from "./LeadNotHomeNav";
export const SelectedDisciple = () => {
    const {discipleId} = useParams()
    const [expanded, setExpanded] = useState(false)
    const [disciple, setDisciple] = useState({})
    const [lead, setLead] = useState({})
    
    useEffect(() => {
        getSelectedDisciple(discipleId).then((data) => setDisciple(data))
        ProviderRender().then((data)=>setLead(data))
    },[])
    return(<>
        <NotHomeNav lead={lead}/>
        <div id="selected-header">
            <div id="selected-avatar">
            <Avatar/>
            <h2>{disciple.user?.first_name} {disciple.user?.last_name}</h2>
            </div>
            {disciple.is_lead ? 
                <Fab color="primary" size="medium">
                    <StarIcon />
                </Fab>
            :
                <Fab color="primary" size="medium">
                    <StarBorderIcon />
                </Fab>
            }
            
        </div>
        {disciple.has_posted ? "" : <Alert severity="error">Disciple Hasn't Hit their 7 day goal</Alert>}
        {disciple.entries?.length > 0 ? <EntriesList entries={disciple.entries}/>
    //     <div>
    //         <h3>Entries</h3>
    //         {disciple.entries.map(entry => {
                
    //             return(
    //                 <Accordion expanded={expanded === `entry${entry.id}` } onChange={handleChange(`entry${entry.id}`)}
    //                 sx={{ width: '100%', maxWidth: 360, bgcolor: '#bbdefb', margin: 'auto', borderRadius: "16px", marginTop: "2em"}}
    //                 >
    //                     <AccordionSummary
    //                     expandIcon={<ExpandMoreIcon />}
    //                     aria-controls="panel1bh-content"
    //                     id="panel1bh-header"
    //                     >
    //                     <Typography sx={{ width: '33%', flexShrink: 0 }}>
    //                         {entry.date}
    //                     </Typography>
    //                     <Typography sx={{ color: 'text.secondary' }}>Reference: {entry.reference}</Typography>
    //                     </AccordionSummary>
    //                     <AccordionDetails >
    //                     <Typography >
    //                         Hear: {entry.hear} <br/>
    //                         <Divider />
    //                         Engage: {entry.engage} <br/>
    //                         <Divider />
    //                         Apply: {entry.apply} <br />
    //                         <Divider />
    //                         Respond: {entry.respond} <br />
    //                     </Typography>
    //                     </AccordionDetails>
    //                 </Accordion>
    //             )
    //         })}
        
    // </div>
    :""}
    
    
    </>)
}