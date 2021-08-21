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
      heading: "Twitter Clone",
      image:
        "https://www.pngitem.com/pimgs/m/439-4398200_twitter-logo-grey-no-background-transparent-cartoons-twitter.png",
      text: "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender,5 to 7 minutes more.",

      link: "https://www.linkedin.com/in/deepanshu-sarswat-b356121a6/",
    },
    {
      heading: "Netflix Clone",
      image: "https://wallpapercave.com/wp/wp5063339.png",
      text: "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender,5 to 7 minutes more.",

      link: "https://www.linkedin.com/in/deepanshu-sarswat-b356121a6/",
    },
    {
      heading: "YouTube Clone",
      image:
        "https://cdn.pixabay.com/photo/2015/01/05/16/48/hands-589475__480.png",
      text: "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender,5 to 7 minutes more.",

      link: "https://www.linkedin.com/in/deepanshu-sarswat-b356121a6/",
    },
    {
      heading: "YouTube Clone",
      image:
        "https://cdn.pixabay.com/photo/2015/01/05/16/48/hands-589475__480.png",
      text: "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender,5 to 7 minutes more.",

      link: "https://www.linkedin.com/in/deepanshu-sarswat-b356121a6/",
    },
    {
      heading: "spotify clone",
      image:
        "https://www.wired.com/wp-content/uploads/2015/08/zfHNFDb5-1200x630.jpg",
      text: "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender,5 to 7 minutes more.",

      link: "https://www.linkedin.com/in/deepanshu-sarswat-b356121a6/",
    },
    {
      heading: "Amazon Clone",
      image:
        "https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg",
      text: "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender,5 to 7 minutes more.",

      link: "https://www.linkedin.com/in/deepanshu-sarswat-b356121a6/",
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
