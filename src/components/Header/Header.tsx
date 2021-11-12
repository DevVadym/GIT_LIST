import React, { useMemo } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useResize } from "../../helpers/windowResize"
import { logoutF } from "../../API/userApi"
import { userThunk } from "../User/UserSlice/userThunk"

const style = {
    commonStyle: {
        flexGrow: 1,
        width: "100%",
        height: "70px",
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
        display: "flex",
        alignItems: "center"
    }
} as const

export const Header: React.FC = () => {
    const isLoginUser = useSelector<RootState, boolean | null>(state => state.home.initUser)
    const dispatch = useDispatch()

    const width = useResize()
    const isMobile = width < 1000

    const burgerMenu = useMemo(() => {
        if (isMobile) {
            return <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 2}}
            >
                <MenuIcon/>
            </IconButton>
        }
    }, [isMobile])

    const logoutHandler = () => {
        logoutF()
        dispatch(userThunk())
    }

    const logout = useMemo(() => {
        if (isLoginUser && !isMobile) {
            return <Button onClick={logoutHandler} variant={"contained"} color={"secondary"}>Logout</Button>
        }
    }, [isLoginUser, isMobile])

    return (
        <Box>
            <AppBar sx={style.commonStyle} position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={style.siteTitle}>
                        <span>InCodeApp</span>
                    </Typography>
                    {logout}
                    {burgerMenu}
                </Toolbar>
            </AppBar>
        </Box>
    )
}