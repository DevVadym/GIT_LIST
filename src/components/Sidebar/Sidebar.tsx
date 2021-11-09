import React from "react"
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import s from "./Sidebar.module.css"

const drawerWidth = 240;


export const Sidebar: React.FC = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: "border-box"},
            }}
            className={s.sidebar}
        >
            <Toolbar className={s.toolbar}/>
            <Box sx={{overflow: "auto"}}>
                <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}