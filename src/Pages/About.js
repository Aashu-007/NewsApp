import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import devs from "../Devs/devs";

const About = () => {
    return (
        <>
            <Container disableGutters maxWidth={false}>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 2, boxShadow: 1 }}
                    maxWidth={900}
                    m="auto"
                >
                    <Typography
                        variant="h2"
                        sx={{ flexGrow: 1 }}
                        color="primary"
                    >
                        About
                    </Typography>
                    <Divider />
                    <Typography
                        variant="body1"
                        sx={{ flexGrow: 1, mt: 3, mb: 4, textAlign: "justify" }}
                        color="text.primary"
                    >
                        Web-based News Application aka. ANN News is an online
                        web application that retrieves news from API
                        [newsapi.org]. There are several categories within the
                        site including General, Business, Entertainment, World,
                        Science, Sports, Technology, Politics, Automobiles,
                        Education, Fashion and Miscellaneous. We developed this
                        application as one of the most interesting applications
                        so far. AI integration is done to make work even easier.
                        Instead of having to read all the news oneself, an AI
                        can handle it automatically. With the integrated AI, you
                        can receive news according to the genre, as well as
                        receive updates about the weather by location, get time
                        updates, and solve basic mathematical problems.
                    </Typography>
                    <Divider>
                        <Chip label="People Behind This Wonderful Project" />
                    </Divider>
                    <Grid container spacing={3} sx={{ pt: 2 }}>
                        {devs.map((data, index) => {
                            return (
                                <>
                                    <Grid item xs={12} md={4} sm={6}>
                                        <Card
                                            sx={{
                                                maxWidth: 340,
                                                borderRadius: 5,
                                                boxShadow: 3,
                                            }}
                                            raised
                                        >
                                            <CardMedia
                                                component="img"
                                                height="190"
                                                image={data.img}
                                                alt={data.name}
                                            />
                                            <CardHeader
                                                title={data.name}
                                                sx={{ mb: -3 }}
                                            />
                                            <CardContent>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{
                                                        textAlign: "justify",
                                                    }}
                                                >
                                                    {data.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <IconButton
                                                    onClick={() => {
                                                        window.open(
                                                            data.ln,
                                                            "_blank"
                                                        );
                                                    }}
                                                    aria-label="follow on linkedin"
                                                >
                                                    <LinkedInIcon
                                                        sx={{
                                                            color: "#0e76a8",
                                                        }}
                                                    />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => {
                                                        window.open(
                                                            data.git,
                                                            "_blank"
                                                        );
                                                    }}
                                                    aria-label="follow on GitHub"
                                                >
                                                    <GitHubIcon
                                                        sx={{
                                                            color: "#171515",
                                                        }}
                                                    />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => {
                                                        window.open(
                                                            data.fb,
                                                            "_blank"
                                                        );
                                                    }}
                                                    aria-label="follow on facebook"
                                                >
                                                    <FacebookRoundedIcon
                                                        sx={{
                                                            color: "#3b5998",
                                                        }}
                                                    />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => {
                                                        window.open(
                                                            data.tw,
                                                            "_blank"
                                                        );
                                                    }}
                                                    aria-label="follow on twitter"
                                                >
                                                    <TwitterIcon
                                                        sx={{
                                                            color: "#00acee",
                                                        }}
                                                    />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => {
                                                        window.open(
                                                            data.yt,
                                                            "_blank"
                                                        );
                                                    }}
                                                    aria-label="subscribe on youtube"
                                                >
                                                    <YouTubeIcon
                                                        sx={{
                                                            color: "#c4302b",
                                                        }}
                                                    />
                                                </IconButton>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </>
                            );
                        })}
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default About;
