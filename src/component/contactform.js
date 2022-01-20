import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { useState } from "react";
import { db } from "./firebase";

const useStyles = makeStyles({
  button: {
    marginBottom: 60,
  },
  textFeild: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  bgcolor: {
    background: "#424242",
    borderRadius: 5,
    outline: "none",
    color: "white",
  },
  input: {
    color: "white",
  },
});
const Contactform = () => {
  const classes = useStyles();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [msg, setmsg] = useState("");
  const [sucess, setsucess] = useState(false);
  const submitform = (e) => {
    e.preventDefault();
    db.collection("Data").add({
      name,
      email,
      subject,
      msg,
    });
    setname("");
    setemail("");
    setsubject("");
    setmsg("");
    setsucess(true);
  };
  return (
    <Box>
      <form id="my-form" onSubmit={submitform}>
        <Box className={classes.textFeild}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                value={name}
                name="name"
                onChange={(e) => setname(e.target.value)}
                inputProps={{ className: classes.input }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
                required
                className={classes.bgcolor}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                onChange={(e) => setemail(e.target.value)}
                value={email}
                type="email"
                name="email"
                inputProps={{ className: classes.input }}
                id="outlined-basic"
                color="textSecondary"
                label="Email"
                variant="outlined"
                fullWidth
                required
                className={classes.bgcolor}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                onChange={(e) => setsubject(e.target.value)}
                value={subject}
                name="subject"
                inputProps={{ className: classes.input }}
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                fullWidth
                required
                className={classes.bgcolor}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                value={msg}
                onChange={(e) => setmsg(e.target.value)}
                id="outlined-basic"
                name="msg"
                label="Your Message"
                variant="outlined"
                fullWidth
                required
                inputProps={{ className: classes.input }}
                multiline
                rows={6}
                className={classes.bgcolor}
              />
            </Grid>
          </Grid>
          {sucess && <p id="status">*Your message has been sent</p>}
        </Box>

        <Button
          size="large"
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendRoundedIcon />}
        >
          Send Message
        </Button>
      </form>
      {/* <div id="status">{sucess && <p>Your message has besn sent</p>}</div> */}
    </Box>
  );
};

export default Contactform;
