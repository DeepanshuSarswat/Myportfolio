import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { typography } from "@material-ui/system";
import { useState } from "react";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
  clgname: {
    fontSize: 20,
    fontWeight: 500,
  },
  date: {
    fontSize: 13,
    textAlign: "right",
  },
  padding1: {
    padding: 20,
    backgroundColor: "#212121",
    color: "white",
  },
});
const Education = () => {
  const classes = useStyles();
  let [datas, setdatas] = useState([
    {
      date: " May-2023",
      names: "Shri Mata Vaishno Devi University, Katra, J&K",
      branch: "B.Tech in Computer Science",
      gpa: "CGPA:- 8.76",
    },
    {
      date: " May-2017",
      names: "Bhagwan Mahaveer Sr. Sec.School, Nokha",
      branch: "Senior Secondary Education",
      gpa: "Percentage:- 79.60",
    },
  ]);
  return (
    <div>
      {datas.map((data) => {
        return (
          <Box>
            <Grid container spacing={5}>
              <Grid item xs={12} md={12}>
                <Paper className={classes.padding1} elevation={5}>
                  <Typography className={classes.date} gutterBottom>
                    {data.date}
                  </Typography>
                  <Typography
                    variant="h4"
                    className={classes.clgname}
                    gutterBottom
                  >
                    {data.names}
                  </Typography>

                  <Typography gutterBottom>{data.branch}</Typography>
                  <Typography gutterBottom>{data.gpa}</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </div>
  );
};

export default Education;

{
  /* <Typography className={classes.date} gutterBottom></Typography>
<Typography
  variant="h5"
  className={classes.clgname}
  gutterBottom
></Typography>

<Typography gutterBottom></Typography>
<Typography gutterBottom></Typography> */
}
