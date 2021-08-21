import React from "react";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import CardMedia from "@material-ui/core/CardMedia";
import GitHubIcon from "@material-ui/icons/GitHub";
import CardActions from "@material-ui/core/CardActions";

import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";

import Card from "@material-ui/core/Card";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  home: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#1F2937",
  },
  root: {
    width: 250,
    backgroundColor: "#212121",
  },
  media: {
    height: 70,
    borderRadius: "50%",
    paddingTop: "56.25%", // 16:9

    border: "6px solid white",

    margin: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: 23,
    color: "white",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  word: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
  cardaction: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    padding: 12,
  },
  buttoncolor: {
    color: "#BE185D",
  },
});

export default function Homechild() {
  const classes = useStyles();
  return (
    <Box className={classes.center}>
      <Box>
        <Card className={classes.root} elevation={0}>
          <CardMedia
            elevation={7}
            className={classes.media}
            image="https://media-exp1.licdn.com/dms/image/C4E03AQG9Jn2tcpBT9A/profile-displayphoto-shrink_400_400/0/1613406079537?e=1633564800&v=beta&t=KiyJB_4kXVvI_Q17zqFZzY9RVjXxmgsuqIceyHXrpOo"
            title="Deepanshu Sarswat"
          />
          <CardContent className={classes.content}>
            <Typography
              variant="h6"
              component="p"
              className={classes.text}
              gutterBottom
            >
              Deepanshu Sarswat
            </Typography>
            <Typography className={classes.word} color="textSecondary">
              I'm a Front End Web Developer
            </Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.cardaction}>
            <IconButton>
              <LinkedInIcon className={classes.buttoncolor} />
            </IconButton>
            <IconButton>
              <GitHubIcon className={classes.buttoncolor} />
            </IconButton>
            <IconButton>
              <InstagramIcon className={classes.buttoncolor} />
            </IconButton>

            <IconButton>
              <TwitterIcon className={classes.buttoncolor} />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}
