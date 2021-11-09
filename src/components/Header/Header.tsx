import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

const style = {
    commonStyle: {
        flexGrow: 1,
        width: "100%",
        height:"70px",
        zIndex: "2000",
        position: "fixed"
    },
    headerIconButton: {
        mr: 2
    },
    siteTitle: {
        position: "relative",
        height: "70px",
        width: "100%",
        display:"flex",

        alignItems: "center"
    }
} as const

export const Header: React.FC = () => {
    return (
        <Box>
            <AppBar sx={style.commonStyle} position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={style.siteTitle}>
                       <span>InCodeApp</span>
                    </Typography>
                    <Button variant={"contained"} color={"secondary"}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}