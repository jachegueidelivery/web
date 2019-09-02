import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

const useStyles = makeStyles(theme => ({
  flexContainer: {
    display: "flex",
    backgroundColor: "white",
    border: "0px solid red",
    padding: 0,
    margin: 0,
    marginBottom:5
  },
  div123: {
    backgroundColor: "transparent",
    margin: 0,
    textAlign: "left",
    padding: 0,
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  p1: {
    padding: 0,
    margin: 0,
    display: "block",
    width: "100%"
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.flexContainer}>
        <div className={classes.div123} style={{ flexGrow: "12" }}>
          <div className={classes.p1}>
            <Skeleton height={60}/>
          </div>
        </div>
      </div>
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
        return (
          <div className={classes.flexContainer} key={index}>
            <div className={classes.div123} style={{ flexBasis: "1" }}>
              <Skeleton width={80} height={80} />
            </div>
            <div className={classes.div123} style={{ flexGrow: "8" }}>
              <div className={classes.p1}>
                <Skeleton height={10} width="80%" />
              </div>
              <div className={classes.p1}>
                <Skeleton height={10} width="60%" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
