import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import CardActions from "@mui/material/CardActions"

const cards = [1, 2, 3]

const styles = {
    cardStyle: {height: "100%", display: "flex", flexDirection: "column"},
    cardMediaStyle: {pt: "56.25%"}, // 16:9
    cardContentStyle: {flexGrow: 1}
} as const

export const Cards: React.FC = () => {

    return (
        <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                        sx={styles.cardStyle}
                    >
                        <CardMedia
                            component="img"
                            sx={styles.cardMediaStyle}
                            image="https://source.unsplash.com/random"
                            alt="random"
                        />
                        <CardContent sx={styles.cardContentStyle}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Heading
                            </Typography>
                            <Typography>
                                This is a media card. You can use this section to describe the
                                content.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">View</Button>
                            <Button size="small">Edit</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}