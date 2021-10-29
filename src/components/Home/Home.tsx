import React from "react"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { HomeFooter } from "./Footer"
import { Cards } from "./Cards"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { Redirect } from "react-router-dom"

const style = {
    mainBox: {
        bgcolor: "background.paper",
        pt: 8,
        pb: 6
    },
    mainBoxStack: {
        pt: 4
    },
    mainContainer_Cards: {py: 8}

} as const

export const HomePage: React.FC = () => {
    const isLoginUser = useSelector<RootState, boolean>(state => state.home.initUser)


    if (isLoginUser) {
        return <Redirect to={"/login"}/>
    }


    return (
        <main>
            <Box sx={style.mainBox}>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Album layout
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Something short and leading about the collection below—its contents,
                        the creator, etc. Make it short and sweet, but not too short so folks
                        don&apos;t simply skip over it entirely.
                    </Typography>
                    <Stack
                        sx={style.mainBoxStack}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained">Main call to action</Button>
                        <Button variant="outlined">Secondary action</Button>
                    </Stack>
                </Container>
            </Box>
            <Container sx={style.mainContainer_Cards} maxWidth="md">
                <Cards/>
            </Container>
            <HomeFooter/>
        </main>
    )
}