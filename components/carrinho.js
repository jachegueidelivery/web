import React, { useState, useEffect, createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import LocalStorageHandler from "./LocalStorageHandler";
import LazyLoad from "./LazyLoad";
import Loadable from "react-loadable";

const DialogFormConfirm = Loadable({
  loader: () => import("./DialogFormConfirm"),
  loading() {
    return <LazyLoad height="30px" margintop="5px" />;
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    margin: "auto",
    maxWidth: 500,
    minWidth: 500
  },
  image: {
    width: 128,
    height: "110.129px"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  Div: {
    display: "flex",
    justifyContent: "center",
    width: "200px",
    margin: "0px",
    border: "1px outset pink"
  }
}));

const Carrinho = props => {
  const classes = useStyles();

  const [data, setData] = useState(null);

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("products")));
  });

  const remover = id => {
    LocalStorageHandler.removeByIdInArray(id, "products");
    setData(JSON.parse(localStorage.getItem("products")));
  };

  let valorTotal = 0;

  let conteudo = null;

  if (data !== null) {

    if (data.length > 0) {

      conteudo = data.map((produto, _k) => {

        let quant = produto.quantidade;

        let valTotal = produto.preco * quant;

        valorTotal += valTotal;

        return (
          <React.Fragment key={_k}>
            <Paper className={classes.paper}>
              <Grid container spacing={1}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={produto.imagem}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={1}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        <b>{produto.nome}</b>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {/*Descrição aqui*/}
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography
                        onClick={ev => remover(produto.productId)}
                        size="small"
                        variant="body2"
                        style={{ cursor: "pointer" }}
                        color="primary"
                        title="Clique para remover este item do carrinho"
                      >
                        Remover
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      <b>Quant: {quant}</b>
                    </Typography>
                    <Typography variant="subtitle1">
                      <b>R$ {produto.preco.toFixed(2)}</b>
                    </Typography>
                    <Typography variant="subtitle1" title="Valor Total">
                      <b>V.T.: R$ {valTotal.toFixed(2)}</b>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <hr style={{ border: 0, borderTop: "1px solid #ddd" }} />
          </React.Fragment>
        );
      });
    }
  }

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            <b>MEU CARRINHO</b>
          </Typography>
        </Toolbar>
      </AppBar>
      {conteudo}
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid item xs={12} sm container>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                <p>
                  <b>VALOR TOTAL: R$ {valorTotal.toFixed(2)}</b>
                </p>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              align=""
              size="large"
              onClick={ev => setOpenDialog(true)}
              color="primary"
              className={classes.button}
            >
              <b>CONCLUIR PEDIDO</b>
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
      <DialogFormConfirm
        open={openDialog}
        onClose={() => {
          setOpenDialog(false);
        }}
      />
    </React.Fragment>
  );
};

export default Carrinho;
