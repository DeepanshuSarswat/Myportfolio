import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardActions from "@material-ui/core/CardActions";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import GitHubIcon from "@material-ui/icons/GitHub";
const useStyles = makeStyles({
  avatar: {
    backgroundColor: "#212121",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  bgcolor: {
    background: "#424242",
  },
  title: {
    color: "white",
    fontWeight: 600,
  },
  whtcolor: {
    color: "white",
  },
  righbutton: {
    marginLeft: 20,
  },
});
const Projectcard = ({ cardata }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Card className={classes.bgcolor}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {cardata.heading[0]}
            </Avatar>
          }
          title={cardata.heading}
          className={classes.title}
        />
        <CardMedia
          className={classes.media}
          image={cardata.image}
          title="Deepanshu Sarswat"
        />

        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className={classes.whtcolor} />
          </IconButton>
        </CardActions>

        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          className={classes.whtcolor}
        >
          <CardContent>
            <Typography paragraph>Project Description :</Typography>
            {/* <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography> */}

            <Typography paragraph>{cardata.text}</Typography>
            <Typography paragraph>
              <a href={cardata.livelink} className="LiveProject">
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<RemoveRedEyeIcon />}
                >
                  Live
                </Button>
              </a>
              <a href={cardata.Sourcelink} className="LiveProject">
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.righbutton}
                  startIcon={<GitHubIcon />}
                >
                  Source Code
                </Button>
              </a>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default Projectcard;
