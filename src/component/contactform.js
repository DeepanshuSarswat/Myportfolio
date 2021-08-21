import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

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
});
const Contactform = () => {
  const classes = useStyles();
  return (
    <Box>
      <form>
        <Box className={classes.textFeild}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
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
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                required
                className={classes.bgcolor}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
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
                id="outlined-basic"
                label="Your Message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={6}
                className={classes.bgcolor}
              />
            </Grid>
          </Grid>
        </Box>
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendRoundedIcon />}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default Contactform;
