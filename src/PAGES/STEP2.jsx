import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Typography, useTheme } from "@mui/material";
import { Grid, Box, useMediaQuery } from "@material-ui/core";
import { createBreakpoints } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { BorderLinearProgress } from "../Components/BorderLinearProgress";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RedditIcon from "@mui/icons-material/Reddit";
import {
  FacebookShareButton,
  RedditShareButton,
  // TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  LinkedinShareButton,
} from "react-share";

const breakpoints = createBreakpoints({});
const url = "https://1000giv.vercel.app/";
const quote = "Don't Miss this Opportunity : Earn : 1000 $ Giveaway";
const hashtag = [
  "#makemoneyfast",
  "#entrepreneur",
  "#onlinebusiness",
  "#makemoney",
  "#millionairemindset",
  "#money",
  "#inspiration",
  "#freedom",
  "#workfromhome",
  "#makemoneyonline",
  "#traveling",
  "#quotes",
  "#motivation",
  "#picoftheday",
  "#millionaire",
  "#gymlife",
  "#affiliatemarketing",
  "#earn",
  "#makemoneyquick",
  "#entrepreneurship",
  "#workandtravel",
  "#millionairemotivation",
  "#onlinetrading",
  "#makemoneymoves",
  "#bosswoman",
  "#makemoneyfromhome",
  "#internetmarketing",
  "#giveaway",
  "#1000$",
  "#onlinebusiness",
];
const mediaurl =
  "https://github.com/GameCode123/1000/blob/master/public/earn100$.jpg?raw=true";
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
    // marginTop: "40px",
  },
  socialmedia: {
    marginBottom: "18px",
    marginTop: "60px",
    // paddingRight:'35px',
    // paddingLeft:"35px",
    paddingTop: "40px",
    cursor: "pointer",
    width: "120px",
    height: "160px",
    backgroundColor: (props) => props.backgroundcolor, // #4c629e
    borderRadius: "10px",
  },
  socialmediaicon: {
    transform: "scale(3)",
    color: "white",
  },
});
const theme = createTheme({
  breakpoints,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "100px",
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
        fontSize: "50px !important",
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
//     return "10px";
//   } else if (mobile || tablet) {
//     return "10px";
//   }
// }
const SocialMedia = ({ ...props }) => {
  const { socialmedia } = useStyles(props);
  const { icon, share } = props;
  return (
    <Grid
      container
      direction="column"
      className={socialmedia}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>{icon}</Grid>
      <Grid
        item
        style={{
          color: "white",
          fontSize: "25px",
          fontWeight: "300",
          fontFamily: "Lato !important",
          paddingTop: "35px",
        }}
      >
        {share}
      </Grid>
    </Grid>
  );
};
function Step2() {
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
            <Typography variant="h1">You are almost done !</Typography>
          </Grid>
          <Grid item className={classes.item}>
            <Typography variant="h2">
              <Typography variant="body1">STEP 2 :</Typography> Share this
              website on at least one the following social media platforms :{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1} justifyContent="center">
              <Grid item>
                <FacebookShareButton url={url} quote={quote} hashtag={hashtag}>
                  <SocialMedia
                    classes={classes}
                    backgroundcolor="#4c629e"
                    share={"Share"}
                    icon={<FacebookIcon className={classes.socialmediaicon} />}
                  />
                </FacebookShareButton>
              </Grid>
              <Grid item>
                <TwitterShareButton url={url} title={quote} hashtags={hashtag}>
                  <SocialMedia
                    classes={classes}
                    backgroundcolor="#58b1ea"
                    share={"Tweet"}
                    icon={<TwitterIcon className={classes.socialmediaicon} />}
                  />
                </TwitterShareButton>
              </Grid>

              <Grid item>
                <PinterestShareButton
                  url={url}
                  media={mediaurl}
                  description={quote}
                >
                  <SocialMedia
                    classes={classes}
                    backgroundcolor="#c33b39"
                    share={"Pin"}
                    icon={<PinterestIcon className={classes.socialmediaicon} />}
                  />
                </PinterestShareButton>
              </Grid>
              <Grid item>
                <LinkedinShareButton
                  source={"Earn 1000 $ Giveaway"}
                  url={url}
                  summary={quote}
                >
                  <SocialMedia
                    classes={classes}
                    backgroundcolor="#3e83b9"
                    share={"Share"}
                    icon={<LinkedInIcon className={classes.socialmediaicon} />}
                  />
                </LinkedinShareButton>
              </Grid>
              <Grid item>
                <WhatsappShareButton url={url} title={quote}>
                  <SocialMedia
                    classes={classes}
                    backgroundcolor="#3ac34e"
                    share={"Share"}
                    icon={<WhatsAppIcon className={classes.socialmediaicon} />}
                  />
                </WhatsappShareButton>
              </Grid>
              <Grid item>
                <RedditShareButton url={url} title={quote}>
                  <SocialMedia
                    classes={classes}
                    backgroundcolor="#ff4400"
                    share={"Share"}
                    icon={<RedditIcon className={classes.socialmediaicon} />}
                  />
                </RedditShareButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ flexGrow: 1, width: "100%", marginTop: "10px" }}>
            <div className={classes.textprogresbar}> 33 % Completed</div>
            <BorderLinearProgress variant="determinate" value={33} />
          </Grid>
          <Grid
            item
            style={{ flexGrow: 1, width: "100%" }}
            className={classes.step}
          >
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              style={{ padding: "30px", flexGrow: 1 }}
            >
              <Grid item xs={desktop ? 4 : 10}>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <Typography variant="subtitle1"> STEP 2/3 </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2">
                      Click the Button on the right when you finish the step
                      number 2.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {desktop ? <Grid item xs={6}></Grid> : ""}

              <Grid item xs={desktop ? 2 : false}>
                <Grid container>
                  <Link
                    to="/step3"
                    style={{ textDecoration: "none", flexGrow: 1 }}
                  >
                    <Button variant="contained">NEXT STEP</Button>
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

export default Step2;
