import { Anchor } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import ChecklistTwoToneIcon from '@mui/icons-material/ChecklistTwoTone';
import PublicIcon from '@mui/icons-material/Public';
import BookIcon from '@mui/icons-material/Book';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import React from 'react'
import { Link } from 'react-router-dom';

export const drawerList = (anchor) => (
   <Box
   sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400}}
   role="presentation"
   >
   <List>
    <ListItem disablePadding >
        <ListItemButton>
            <ListItemIcon>
                <HomeIcon/>
            </ListItemIcon>
            <Link to='/' style={{textDecoration:"none",color:"black"}}>
            <ListItemText primary={"Home"}/>
            </Link>
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding >
        <ListItemButton>
            <ListItemIcon>
              <ChecklistTwoToneIcon/>
            </ListItemIcon>
            <Link to='/' style={{textDecoration:"none",color:"black"}}>
            <ListItemText primary={"Features"}/>
            </Link>
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding >
        <ListItemButton>
            <ListItemIcon>
                <PublicIcon/>
            </ListItemIcon>
            <Link to='/' style={{textDecoration:"none",color:"black"}}>
            <ListItemText primary={"Ecosystem"}/>
            </Link>
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding >
        <ListItemButton>
            <ListItemIcon>
               <LiveHelpIcon/>
            </ListItemIcon>
            <Link to='/faq' style={{textDecoration:"none",color:"black"}}>
            <ListItemText primary={"FAQ"}/>
            </Link>
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding >
        <ListItemButton>
            <ListItemIcon>
                <BookIcon/>
            </ListItemIcon>
            <Link to='/' style={{textDecoration:"none",color:"black"}}>
            <ListItemText primary={"Blogs"}/>
            </Link>
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding >
        <ListItemButton>
            <ListItemIcon>
                <MailIcon/>
            </ListItemIcon>
            <Link to='/' style={{textDecoration:"none",color:"black"}}>
            <ListItemText primary={"Contact Us"}/>
            </Link>
        </ListItemButton>
    </ListItem>

   </List>
   </Box>
  );