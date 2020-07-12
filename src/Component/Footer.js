import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import  Facebook from "@material-ui/icons/Facebook";
import  GitHub from "@material-ui/icons/GitHub";
import  LinkedIn from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { facebookURL, linkedInURL, githubURL } from "../utils/social";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#3f51b5",
    color: theme.palette.secondary.contrastText,
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: theme.spacing(1),

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  btn: {
    color: theme.palette.secondary.contrastText,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <Typography>Design By : Farrukh Khan</Typography>
        <div>
          <IconButton className={classes.btn} aria-label="facebook">
            <Link href={facebookURL} color="inherit" target="_blank">
              <Facebook />
            </Link>
          </IconButton>
          <IconButton className={classes.btn} aria-label="github">
            <Link href={githubURL} color="inherit" target="_blank">
              <GitHub />
            </Link>
          </IconButton>
          <IconButton className={classes.btn} aria-label="linkedin">
            <Link href={linkedInURL} color="inherit" target="_blank">
              <LinkedIn />
            </Link>
          </IconButton>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;