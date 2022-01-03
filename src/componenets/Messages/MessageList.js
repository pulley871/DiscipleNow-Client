import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Alert, Avatar, Divider, Fab } from "@mui/material";
import { useState } from 'react';
export const MessageList = ({messages}) => {

    const [expanded, setExpanded] = useState(false)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
    return(<>
        {messages.length > 0 ? 
        <div id="entries-list">
            
        {messages?.map(message => {
            
            return(
                <Accordion expanded={expanded === `message${message.id}` } onChange={handleChange(`message${message.id}`)}
                sx={{ width: '100%', maxWidth: 360, bgcolor: message.is_read?'#bbdefb':"#ff4569", margin: 'auto'}}
                >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {message.date}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>From: {message.lead_disciple.user.first_name} {message.lead_disciple.user.last_name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <Typography >
                        {message.body}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            )
        })}
    
</div>
        :<h3>You have no messages</h3>}
            
  
    </>)
}