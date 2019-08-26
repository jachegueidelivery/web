import React, { useState, Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: "center"
  },
  cardMedia: {
    backgroundColor: "transparent",
    margin: 15,
    height:200
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }
}));

/**
 * Mostra os ícones das empresas
 */
export default function MostrarEmpresas(props) {
  const [empresas, setEmpresas] = useState({ hits: [] });

  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={2}>
        {props.data.map((empresa, _key) => (
          <Grid item key={_key} xs={12} sm={6} md={4} className={classes._grid}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
              >
                <Skeleton height="100%" width="100%" />
              </CardMedia>
              <CardContent className={classes.cardContent}>
                <Skeleton height="80%" width="100%" />
                <Skeleton height="70%" width="90%" />
                <Skeleton height="60%" width="60%" />
              </CardContent>
              <CardActions>
                <br />
                <br />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}
