import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { Icon } from '@mui/material';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import "./footer.css"
import { useNavigate } from 'react-router-dom';
export const Footer = () => {
    
    const nav = useNavigate()
      
    return (
        <Box sx={{ height:"2.5em",width: "100%",position: 'absolute', bottom: 10, left: 0, right: 0,}}>
        <BottomNavigation
            showLabels
            value=""
            sx={{backgroundColor:"#2196f3"}}
            onClick={()=> {
                localStorage.clear()
                nav("/login")
            }}
        >
            <BottomNavigationAction  icon={<LogoutIcon title="Logout"sx={{color:"#f5f5f5"}}/>} />
            
        </BottomNavigation>
        </Box>
    );
}