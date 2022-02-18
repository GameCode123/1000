import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  padding: "5px",
  marginBottom: "20px",
  //  marginLeft:"21vw",
  //  marginRight:"21vw",
  borderRadius: 50,
  // [theme.breakpoints.down("md")]: {
  //   marginLeft:"5px",
  //   marginRight:"5px",
  // },
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#c8cbce",
    // theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 50,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
