import { Container, Typography } from "@material-ui/core";
import { useState } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import ShortTextIcon from "@material-ui/icons/ShortText";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Projectcard from "./Projectcard";
const useStyles = makeStyles({
  headingicon: {
    fontSize: 60,
    marginLeft: -5,
  },
  headingname: {
    marginBottom: -20,
    fontWeight: 500,
    color: "white",
  },
  heading: {
    paddingTop: 100,
    paddingBottom: 40,
  },
  marginBotm: {
    paddingBottom: 30,
  },
});

export default function Projects() {
  const classes = useStyles();
  let [carddata, setcarddata] = useState([
    {
      heading: "Gmail Clone",
      image:
        "https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97",
      text: `Hello folks 😃 ,
      I made Gmail clone using #Reactjs , #Mui , and #Firebase .
      I have tried that it should have the functionality of Gmail, as well as add some additional functionality to it.
      In this I have also added the functionality of Darkmode and the functionality of Short Mail. as shown in the video below 👇🏻.`,

      livelink: "https://d-note-c4650.web.app/",
      Sourcelink: "https://github.com/DeepanshuSarswat/supermail",
    },
    {
      heading: "Linkedin Clone",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlua2VkaW58ZW58MHx8MHx8&w=1000&q=80",
      text: `Hello folks 😃 ,
      I made Linkedin clone using #Reactjs , #Mui , and #Firebase .
      I have tried that it should have the functionality of Linkedin as well as add some additional functionality to it.
      In this I have also added the functionality of Darkmode and the functionality.
      in this we can share imgaes , videos , files as a post.
      Also it has Signin and Signout functionality .
      I have tried that its user interface is simple and beautiful.`,

      livelink: "https://linkdin-clone-791e8.web.app/",
      Sourcelink: "https://github.com/DeepanshuSarswat/Linkdin-clone",
    },
    {
      heading: "Amazon Clone",
      image:
        "https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg",
      text: `
      Hello folks 😃 ,
      I made Amazon clone using #Reactjs , #Mui , and #Firebase .
      I have tried that it should have the functionality of Amazon as well as add some additional functionality to it.
      I have tried that its user interface is simple and beautiful.
      `,

      livelink: "https://e-d9642.web.app/",
      Sourcelink: "https://github.com/DeepanshuSarswat/supermail",
    },
    {
      heading: "Netflix Clone",
      image: "https://wallpapercave.com/wp/wp5063339.png",
      text: `Hello folks 😃 ,
      I made Netflix clone using #Reactjs , #Mui , and #Firebase .
      I have tried that it should have the functionality of Netflix.
      In this I have used IMDB api as shown in the video below 👇🏻.`,

      link: "https://www.linkedin.com/in/deepanshu-sarswat-b356121a6/",
      livelink: "https://netflixx-8f159.web.app/",
    },
  ]);
  return (
    <Container>
      <Box className={classes.heading}>
        <Box>
          <Typography
            variant="h4"
            fontWeight="200"
            className={classes.headingname}
          >
            Projects
          </Typography>
        </Box>
        <Box>
          <ShortTextIcon className={classes.headingicon} color="primary" />
        </Box>
      </Box>
      <Box className={classes.marginBotm}>
        <Grid container spacing={3}>
          {carddata.map((cardata) => {
            return (
              <Grid item xs={12} md={4}>
                <Paper>
                  <Box>
                    <Projectcard cardata={cardata} />
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
