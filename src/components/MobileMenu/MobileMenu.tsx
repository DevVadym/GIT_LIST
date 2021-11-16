import React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { components } from "../../helpers/MenuItems"
import { useMenu } from "../../helpers/useMenu"
import Button from "@mui/material/Button"
import { useLogout } from "../../helpers/useLogout"

type Anchor = "top"

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false
    })
    const {color, getItemType} = useMenu()
    const logout = useLogout()

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === "keydown" &&
                    ((event as React.KeyboardEvent).key === "Tab" ||
                        (event as React.KeyboardEvent).key === "Shift")
                ) {
                    return
                }

                setState({...state, top: open})
            }

    const list = (anchor: Anchor) => (
        <Box
            sx={{width: anchor === "top" ? "auto" : 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            style={{position: "relative", top: "65px"}}
        >
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
                <Button style={{margin:"0 0 0 15px"}} onClick={logout} variant={"contained"} color={"secondary"}>Logout</Button>
            </List>
        </Box>
    )

    return (
        <>
            {(["top"] as const).map((anchor) => (
                <div key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)} style={{color: "white"}}>
                        <MenuIcon/>
                    </IconButton>
                    <Drawer
                        anchor={anchor}
                        open={state.top}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </div>
            ))}
        </>
    )
}