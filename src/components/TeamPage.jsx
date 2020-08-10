import React from "react";
import SectionOne from "./SectionOne";
import GradientBackground from "./GradientBackground";
import NavBar from "./NavBar";
import About from "./About";
import TestimonialsSnippet from "./TestimonialsSnippet";
import {
  Container,
  Tooltip,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardNedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "50%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "40%",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const TeamPage = () => {
  const classes = useStyles();

  return (
    <GradientBackground>
      <Card className={classes.root} align="center">
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              I am actually great with old women. In fact, for the longest time
              my best friend was my grandmother. And then she met Harriet. And
              now she thinks she better than everybody. No, no, no. I don't
              wanna hear moaning. This is a good day. You guys accomplished
              something big. You lost a ton of weight, literally. A lot of
              weight. And I don't care what any stupid scale says, you guys are
              all gigantic losers. Business to business. The old fashion way. No
              blackberries. No websites. I would like to see a website deliver
              baskets of food to people.
            </Typography>
          </CardContent>
        </div>
        <img
          className={classes.cover}
          src="https://static.billboard.com/files/media/jatavia-johnson-city-girls-artist-visit-vibe-may-14-2018-billboard-1548-768x433.jpg"
          title="Live from space album cover"
        />
      </Card>
    </GradientBackground>
  );
};

export default TeamPage;
