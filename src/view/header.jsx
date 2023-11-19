import * as React from "react"; 
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar"; 
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton"; 
import HomeIcon from "@mui/icons-material/Home"; 
import AccountCircle from "@mui/icons-material/AccountCircle"
import { Link } from 'react-router-dom'
  
export default function Header() { 
    return (
    <AppBar position="relative" style={{ background: '#b1b2b3', height: '100px' }}>
        <Toolbar className="my-auto">
            <Link to="/dashboard-kurir">
                <IconButton>
                    <HomeIcon style={{fontSize: 40}}/>
                </IconButton>
            </Link>
            
            <Typography 
            variant="h3" 
            component="div" 
            sx={{ flexGrow: 1 }}
            style={{display: 'flex', justifyContent: 'center', fontWeight: 'bold'}}>
            OnlyFlorist
            </Typography>
            
            <Link to="/account-kurir">
                <IconButton>
                    <AccountCircle style={{fontSize: 40}}/>
                </IconButton>
            </Link>
        </Toolbar>
    </AppBar>
    ); 
}
