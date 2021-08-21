import { Box, Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { CastForEducation } from "@material-ui/icons";
import ShortTextIcon from "@material-ui/icons/ShortText";
import Education from "./Education";
const useStyles = makeStyles({
  boxx: {
    marginTop: 80,
  },
  boxxx: {
    marginTop: 60,
  },
  heading: {
    marginTop: 20,
    // marginBottom: 40,
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
  padding: {
    padding: 20,
    textAlign: "center",
    background: "#424242",
  },
  padding1: {
    padding: 20,
    background: "#424242",
  },
  bgcolorchild: {
    backgroundColor: "#212121",
    padding: 20,
    textAlign: "center",
    color: "white",
  },
});
const Skill = () => {
  const classes = useStyles();
  const lists = ["ReactJs", "HTML", "CSS", "SaSS", "Redux", "NextJs"];
  const listes = [
    "JavaScript",
    "Bootstrap",
    "Tailwind CSS",
    "Git/Github",
    "Material-Ui",
    "React Testing Library",
    "TypeScript",
    "Firebase",
    "React Query",
  ];
  return (
    <Box className={classes.boxx}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box className={classes.heading}>
            <Typography
              variant="h4"
              fontWeight="200"
              className={classes.headingname}
            >
              Skills
            </Typography>
            <Box>
              <ShortTextIcon className={classes.headingicon} color="primary" />
            </Box>
          </Box>
          <Box>
            <Paper className={classes.padding} elevation={3}>
              <Grid container spacing={4}>
                {lists.map((list) => {
                  return (
                    <Grid item xs={6} md={3}>
                      <Paper className={classes.bgcolorchild} elevation={5}>
                        {list}
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
              <Grid container spacing={4}>
                {listes.map((list) => {
                  return (
                    <Grid item xs={12} md={4}>
                      <Paper className={classes.bgcolorchild} elevation={5}>
                        {list}
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.heading}>
            <Typography
              variant="h4"
              fontWeight="200"
              className={classes.headingname}
            >
              Education
            </Typography>
            <Box>
              <ShortTextIcon className={classes.headingicon} color="primary" />
            </Box>
          </Box>
          <Paper className={classes.padding1}>
            <Education />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skill;

{
  /* <Grid container>
  <Grid item xs={12} md={12}>
    <Paper className={classes.padding1}>
      <Education />
    </Paper>
  </Grid>
</Grid>; */
}
