import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign:"center",
    boxShadow:"0px 0px 15px 0px rgba(10,10,10,0.1)"
  },
}));

export default function TypographyTheme(props) {
  const classes = useStyles();
  return <div className={classes.root}><b>{props.label}</b></div>;
}