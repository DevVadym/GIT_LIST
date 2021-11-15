import React from "react"
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import s from "./Sidebar.module.css"
import { components } from "../../helpers/MenuItems"
import { useMenu } from "../../helpers/useMenu"

const drawerWidth = 240

export const Sidebar: React.FC = () => {
    const {color, getItemType} = useMenu()

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: "border-box"}
            }}
            className={s.sidebar}
        >
            <Toolbar className={s.toolbar}/>
            <Box sx={{overflow: "auto"}}>
                <List>
                    {components.map(c => <ListItem key={c.id} button onClick={getItemType(c.type)}>
                        <ListItemIcon>
                            <c.Icon color={color(c.type)}/>
                        </ListItemIcon>
                        <ListItemText primary={c.primary}/>
                    </ListItem>)}
                </List>
                <Divider/>
                <List>

                </List>
            </Box>
        </Drawer>
    )
}