import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ShortTextIcon from "@material-ui/icons/ShortText";

import Skill from "./Skill";

const useStyles = makeStyles({
  heading: {
    paddingTop: 100,
    paddingBottom: 40,
  },
  headingicon: {
    fontSize: 60,
    marginLeft: -5,
  },
  headingname: {
    marginBottom: -20,
    fontWeight: 500,
    color: "white",
  },
  display: {
    display: "inline",
    color: "white",
  },
  display1: {
    display: "inline",
    color: "#BE185D",
  },
  nicemeet: {
    marginBottom: 20,
  },
  color: {
    color: "white",
  },
  wraper: {
    backgroundColor: "#212121",
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <Box className={classes.wraper}>
      <Container>
        <Box className={classes.heading}>
          <Typography
            variant="h4"
            fontWeight="200"
            className={classes.headingname}
          >
            About Me
          </Typography>
          <Box>
            <ShortTextIcon className={classes.headingicon} color="primary" />
          </Box>
        </Box>
        <Box className={classes.hello}>
          <Box className={classes.nicemeet}>
            <Typography variant="h3" className={classes.display} gutterBottom>
              Hi, I’m Deepanshu.{" "}
              <Typography variant="h3" className={classes.display1}>
                Nice to meet you.
              </Typography>
            </Typography>
          </Box>

          <Typography variant="body1" gutterBottom className={classes.color}>
            Hello 👋! I am <strong>Deepanshu Sarswat</strong>, currently Third
            year computer science undergraduate student at Shri Mata Vaishno
            Devi University, Katra, Jammu. I am working as a{" "}
            <strong>Front End Web Developer</strong>. I enjoy building
            everything from small sites and landing pages to rich interactive
            web apps. I love creating visually stunning and responsive websites.
            I always try to combine aesthetic with functional aspects, looking
            for the right balance to communicate without annoying.
          </Typography>
          <Typography variant="body1" gutterBottom className={classes.color}>
            I enjoy the collaborative nature of working with a team on building
            a product. The feedback, discussion, and review in this environment
            brings out the best in each individual member, and is a crucial
            component in our own personal development.
            <strong> I'm ready to jump</strong> onto a supportive team and begin
            contributing. I also enjoy programming and the coding world and
            conducted various programming and open-source related events in my
            University.
          </Typography>
        </Box>
        <Box>
          <Skill />
        </Box>
      </Container>
    </Box>
  );
}
