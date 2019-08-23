import React, { useState, useEffect, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import { GridOn, ReorderRounded } from "@material-ui/icons";
import ApiRest from "../ApiRest";
import { makeStyles } from "@material-ui/core/styles";
import LazyLoad from "react-lazyload";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: "center",
    boxShadow: "0px 0px 15px 0px rgba(10,10,10,0.1)"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer !important"
  },
  _grid: {
    cursor: "pointer !important"
  }
}));

/**
 * Mostra os ícones das empresas
 */
export default function MostrarEmpresas(props) {
  const [empresas, setEmpresas] = useState({ hits: [] });

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const result = await ApiRest.get("/empresas");
      setEmpresas(result.data);
      props.onLoadedComplete(!0);
    };
    fetchData();
  }, []);

  function mouseOverStyle(ev) {
    ev.preventDefault();
    ev.target.classList.add("hoverUp");
  }

  function mouseOutStyle(ev, id) {
    ev.preventDefault();
    ev.target.classList.remove("hoverDown");
  }

  return (
    <Fragment>
      {/* {empresas.length === undefined && (
        <>
          <SpinnerDelivery label=" Carregando empresas, aguarde, por gentileza... " />
        </>
      )} */}
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar2}>
          <Typography
            variant="h6"
            color="textPrimary"
            noWrap
            className={classes.toolbarTitle}
          />
          <IconButton
            aria-label="Account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
          >
            <GridOn />
          </IconButton>
          <Divider className={classes.divider} />
          <IconButton
            aria-label="Account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
          >
            <ReorderRounded />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        {Object.values(empresas).map((empresa, _key) => (
          <Grid
            item
            key={_key}
            title={"Clique para entrar em " + empresa.nome_fantasia}
            xs={12}
            sm={6}
            md={4}
            className={classes._grid}
            onClick={() => {
              window.location.href = empresa.url.toLowerCase();
            }}
          >
            <Card
              className={classes.card}
              onMouseOut={ev => mouseOutStyle(ev, empresa.id)}
              onMouseOver={ev => mouseOverStyle(ev, empresa.id)}
            >
              <LazyLoad>
                <CardMedia
                  className={classes.cardMedia}
                  image={empresa.logomarca}
                />
              </LazyLoad>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {empresa.nome_fantasia}
                </Typography>
                <div> {empresa.telefone}</div>
                <Typography>{empresa.descricao}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" dataobj={empresa}>
                  IR PARA A LOJA
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}
