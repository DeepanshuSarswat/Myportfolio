import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import Typography from "@material-ui/core/Typography";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import EmailIcon from "@material-ui/icons/Email";
import ShortTextIcon from "@material-ui/icons/ShortText";
import Contactform from "./contactform";
const useStyles = makeStyles({
  mr: {
    marginRight: 5,
  },
  padding: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 15,
    paddingLeft: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#424242",
  },
  display: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    textAlign: "center",
    color: "white",
  },
  centere: {
    textAlign: "center",
    marginBottom: 9,
    fontSize: 20,
    color: "#BE185D",
  },
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
  round: {
    borderRadius: 20,
  },
});
export default function Contact() {
  const classes = useStyles();
  let [carddata, setcarddata] = useState([
    {
      icon: <PhoneIcon />,
      text: "Mobile",
      textdata: "8005542704",
    },
    {
      icon: <PersonPinCircleIcon />,
      text: "Address",
      textdata: "Noka Bikaner Rajasthan, Bharat ",
    },
    {
      icon: <EmailIcon />,
      text: "E-mail",
      textdata: "sarswatdeepanshu@gmail.com",
    },
  ]);
  return (
    <Container>
      <Box className={classes.heading}>
        <Typography
          variant="h4"
          fontWeight="200"
          className={classes.headingname}
        >
          Let's Talk
        </Typography>
        <Box>
          <ShortTextIcon className={classes.headingicon} color="primary" />
        </Box>
      </Box>
      <Grid container spacing={3}>
        {carddata.map((cardata) => {
          return (
            <Grid item xs={12} md={4}>
              <Paper elevation={6}>
                <Box className={classes.padding}>
                  <Box>
                    <Box
                      component="span"
                      display="block"
                      className={classes.centere}
                    >
                      {cardata.icon}
                    </Box>
                    <Typography className={classes.center} gutterBottom>
                      <strong>{cardata.text}</strong>
                    </Typography>
                    <Typography className={classes.center} gutterBottom>
                      {cardata.textdata}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Contactform />
    </Container>
  );
}
