import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Alert, Avatar, Divider, Fab } from "@mui/material";
import { useState } from 'react';
export const EntriesList = ({entries})=>{
    const [expanded, setExpanded] = useState(false)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
    return(<>
        <div id="entries-list">
            
            {entries.map(entry => {
                
                return(
                    <Accordion expanded={expanded === `entry${entry.id}` } onChange={handleChange(`entry${entry.id}`)}
                    sx={{ width: '100%', maxWidth: 360, bgcolor: '#bbdefb', margin: 'auto'}}
                    >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {entry.date}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Reference: {entry.reference}</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                        <Typography >
                            Hear: {entry.hear} <br/>
                            <Divider />
                            Engage: {entry.engage} <br/>
                            <Divider />
                            Apply: {entry.apply} <br />
                            <Divider />
                            Respond: {entry.respond} <br />
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        
    </div>
    
    </>)
}