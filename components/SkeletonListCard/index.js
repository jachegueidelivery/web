import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    margin: "auto",
    marginBottom: "10px",
    border:"1px solid red"
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function SkeletonCard(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.data.map(() => {
        return (
          <Grid container spacing={2} xs={12} sm={10} md={4} lg={4}>
            <Grid item xs={4} className={classes.image}>
              <Skeleton height="80%" width="90%" />
            </Grid>
            <Grid item xs={8} sm container>
              <Grid item xs={8}>
                <Skeleton height="15%" width="95%" />
                <Skeleton height="15%" width="80%" />
                <Skeleton height="15%" width="50%" />
              </Grid>
              <Grid item xs={4}>
                <Skeleton height="15%" width="100%" />
                <Skeleton height="15%" width="85%" />
                <Skeleton height="15%" width="70%" />
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}

SkeletonCard.propTypes = {
  data: PropTypes.array.isRequired,
};
