import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Typography, useTheme } from "@mui/material";
import { Grid, Box, useMediaQuery } from "@material-ui/core";
import { createBreakpoints } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { BorderLinearProgress } from "../Components/BorderLinearProgress";
import { Link } from "react-router-dom";
const breakpoints = createBreakpoints({});
const urlofoffer =
  "https://opaldownloads.com/show.php?l=0&u=551662&id=36877&tracking_id=";
const useStyles = makeStyles({
  textprogresbar: {
    fontFamily: "Lato !important",
    width: "100%",
    textAlign: "center",
    marginBottom: "12px",
    fontWeight: "bold",
  },
  step: {
    height: "100%",
    width: "100%",
    backgroundColor: "#599fe4",

    borderRadius: "10px",
    paddingRight: "20px",
  },
  item: {
    marginTop: "10px",
  },
});
const theme = createTheme({
  breakpoints,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "100px",
          [breakpoints.down("md")]: {
            height: "130px",
          },
          width: "100%",
          fontSize: "25px",
          backgroundColor: "#FFFF",
          color: "#2b292b",
          fontWeight: "bold",
          marginTop: "15px",
          "&:hover": {
            backgroundColor: "#FFFF",
            color: "#2b292b",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Lato !important",

    h1: {
      fontWeight: "500",
      color: "#535153",
      fontSize: "90px",
      textAlign: "center",
      [breakpoints.down("md")]: {
        fontSize: "40px !important",
      },
    },
    h2: {
      textAlign: "center",
      fontWeight: "300",
      fontSize: "40px",
      color: "#535153",
      [breakpoints.down("md")]: {
        fontSize: "20px !important",
      },
    },
    body2: {
      color: "#0a68bb",
      display: "inline-block",
      fontWeight: "600",
      fontSize: "80px",
      [breakpoints.down("md")]: {
        fontSize: "50px !important",
      },
    },
    body1: {
      fontWeight: "600",
      color: "#535153",
      fontSize: "40px",
      display: "inline-block",
      [breakpoints.down("md")]: {
        fontSize: "20px !important",
      },
    },
    subtitle1: {
      color: "white",
      fontWeight: "600",
      fontSize: "30px",
    },
    subtitle2: {
      color: "white",
      opacity: "0.7",
      fontSize: "24px",
      [breakpoints.down("md")]: {
        fontSize: "18px !important",
      },
    },
  },
});
// function responsive(desktop, mobile, tablet) {
//   if (desktop) {
//     console.log("desktop");
//     return "10px";
//   } else if (mobile || tablet) {
//     console.log("mobile");
//     return "10px";
//   }
// }
function Step3() {
  const theme2 = useTheme();
  const desktop = useMediaQuery(theme2.breakpoints.up("xl"));
  // const tablet = useMediaQuery(theme2.breakpoints.up("md"));
  // const mobile = useMediaQuery(theme2.breakpoints.up("xs"));
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box pr={"20px"} pl={"20px"} mb={"30px"}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minWidth: "100%" }}
        >
          <Grid item className={classes.item}>
            <Typography variant="h1">
              Congratulations! This is the{" "}
              <Typography variant="body2">last step</Typography>{" "}
              <Typography variant="body1">...</Typography>
            </Typography>
          </Grid>
          <Grid item className={classes.item}>
            <Typography variant="h2">
              <Typography variant="body1">STEP 3 :</Typography> Press the button
              below to enter the giveaway! ????
            </Typography>
          </Grid>

          <Grid
            item
            style={{ flexGrow: 1, width: "100%", marginTop: "60px" }}
            className={classes.item}
          >
            <div className={classes.textprogresbar}> 66 % Completed</div>
            <BorderLinearProgress variant="determinate" value={66} />
          </Grid>
          <Grid item className={classes.step}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{ padding: "30px" }}
            >
              <Grid item xs={desktop ? 4 : 10}>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <Typography variant="subtitle1"> STEP 3/3 </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2">
                      Click the Button on the right when you finish the step
                      number 3.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {desktop ? <Grid item xs={6}></Grid> : ""}

              <Grid item xs={desktop ? 2 : false} style={{ flexGrow: 1 }}>
                <Grid container>
                  <Link
                    to={{ pathname: urlofoffer }}
                    target="_blank"
                    style={{ textDecoration: "none", flexGrow: 1 }}
                  >
                    <Button variant="contained">CLICK HERE TO ENTER</Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Step3;
