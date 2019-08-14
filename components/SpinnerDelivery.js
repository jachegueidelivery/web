import React, { Fragment, useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
 root: {
    flexGrow: 1,
textAlign: 'center',
border:'0px solid lime'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const SpinnerDelivery = props => {

  const classes = useStyles();

  return (
  	<div className={classes.root}>
 	 <Chip
icon={<CircularProgress  size={20} />}
        label={props.label}
        className={classes.chip}
        variant="outlined"
      />
          </div>
  );

};

export default SpinnerDelivery;
