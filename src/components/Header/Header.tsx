import React, { useMemo } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useResize } from "../../helpers/windowResize"
import { useLogout } from "../../helpers/useLogout"
import Button from "@mui/material/Button"
import MobileMenu from "../MobileMenu/MobileMenu"

const style = {
    commonStyle: {
        flexGrow: 1,
        width: "100%",
        height: "70px",
        zIndex: "2000",
        position: "fixed",
        background: "linear-gradient(90deg, #cfecd0, #ffc5ca)"

},
    headerIconButton: {
        mr: 2
    },
    siteTitle: {
        position: "relative",
        height: "70px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        color:"black"
    }
} as const


export const Header: React.FC = () => {
    const isLoginUser = useSelector<RootState, boolean | null>(state => state.home.initUser)

    const width = useResize()
    const isMobile = width < 1025
    const logout = useLogout()

    const burgerMenu = useMemo(() => {
        if (isMobile && isLoginUser) {
            return <MobileMenu/>
        }
        return null
    }, [isMobile, isLoginUser])


    const logoutButton = useMemo(() => {
        if (isLoginUser && !isMobile) {
            return <Button onClick={logout} variant={"contained"} color={"secondary"}>Logout</Button>
        }
    }, [isLoginUser, isMobile, logout])


    return (
        <Box>
            <AppBar sx={style.commonStyle} position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={style.siteTitle}>
                        <span>InCodeApp</span>
                    </Typography>
                    {logoutButton}
                    {burgerMenu}
                </Toolbar>
            </AppBar>
        </Box>
    )
}