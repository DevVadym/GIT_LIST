import React from "react"
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, TextField, Toolbar } from "@mui/material"
import s from "./Sidebar.module.css"
import { components } from "../../helpers/MenuItems"
import { useMenu } from "../../helpers/useMenu"
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search"
import { useFormik } from "formik"

const drawerWidth = 240

export const Sidebar: React.FC = () => {
    const {color, getItemType} = useMenu()
    const formik = useFormik({
        initialValues: {
            search: ""
        },

        onSubmit: (values, e) => {
            e.resetForm()
        }
    })

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)"
                }
            }}
            className={s.sidebar}
        >
            <Toolbar className={s.toolbar}/>
            <Box sx={{overflow: "auto"}}>
                <List>
                    <form onSubmit={formik.handleSubmit} style={{padding: "5px"}}>
                        <TextField
                            {...formik.getFieldProps("search")}
                            fullWidth
                            placeholder={"Search..."}
                            size={"small"}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon/>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </form>
                </List>
                <Divider/>
                <List>
                    {components.map(c => <ListItem key={c.id} button onClick={getItemType(c.type)}>
                        <ListItemIcon>
                            <c.Icon color={color(c.type)}/>
                        </ListItemIcon>
                        <ListItemText primary={c.primary}/>
                    </ListItem>)}
                </List>
            </Box>
        </Drawer>
    )
}