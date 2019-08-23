import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import styled, { keyframes } from "styled-components";
import Box from '@material-ui/core/Box';
const rotate = keyframes`0% {opacity: 1;}50% {opacity: 0.4;}100% {opacity: 1;}`;

const Rotate = styled.div`
  -webkit-animation-duration: 2s !important;
  animation-duration: 2s !important;
  -webkit-animation-fill-mode: forwards !important;
  animation-fill-mode: forwards !important;
  -webkit-animation-iteration-count: infinite !important;
  animation-iteration-count: infinite !important;
  -webkit-animation-timing-function: linear !important;
  animation-timing-function: linear !important;
  -webkit-animation-name: ${rotate} !important;
  animation-name: ${rotate} !important;
  background: #3e3e3e;
  background: linear-gradient(
    to right,
    #f3f3f3 2%,
    #e9e8e8 18%,
    #f3f3f3 33%
  ) !important;
  border-radius: 0px;
  min-height: ${props => props.height || "10px"}
  width:100%;
  margin-top: ${props => props.margintop || "5px"}
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    border: "0px solid lime"
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #ff8ef53 90%)",
    border: 0,
    borderRadius: 3,
    borderShadow: "0 3px 5px 2px rgba(255,105,135,.3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "transparent",
    boxShadow: "0px 0px 0px 0px rgba(255,255,255,0)"
  }
}));

const defaultProps = {
  bgcolor: 'background.paper',
  m: 12,
  borderColor: 'text.primary',
};

const SpinnerDelivery = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs >
          <Rotate />
          <Rotate />
          <Rotate />
          <Rotate />
          <CircularProgress size={40} />
          <Typography><Box fontSize={30} fontWeight="fontWeightBold" boxShadow={30}>{props.label}</Box></Typography>
        </Grid>
      </Grid>
  </Paper> );
};

export default SpinnerDelivery;