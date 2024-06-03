import { Anchor } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import ChecklistTwoToneIcon from '@mui/icons-material/ChecklistTwoTone';
import PublicIcon from '@mui/icons-material/Public';
import BookIcon from '@mui/icons-material/Book';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import React from 'react'

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
            <ListItemText primary={"Home"}/>
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding >
        <ListItemButton>
            <ListItemIcon>
              <ChecklistTwoToneIcon/>
            </ListItemIcon>
            <ListItemText primary={"Features"}/>
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding >
        <ListItemButton>
            <ListItemIcon>
                <PublicIcon/>
            </ListItemIcon>
            <ListItemText primary={"Ecosystem"}/>
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding >
        <ListItemButton>
            <ListItemIcon>
               <LiveHelpIcon/>
            </ListItemIcon>
            <ListItemText primary={"FAQ"}/>
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding >
        <ListItemButton>
            <ListItemIcon>
                <BookIcon/>
            </ListItemIcon>
            <ListItemText primary={"Blogs"}/>
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding >
        <ListItemButton>
            <ListItemIcon>
                <MailIcon/>
            </ListItemIcon>
            <ListItemText primary={"Contact Us"}/>
        </ListItemButton>
    </ListItem>

   </List>
   </Box>
  );