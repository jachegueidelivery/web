import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Loadable from "react-loadable";
import LazyLoad from "../LazyLoad";
import LocalStorageHandler from "../LocalStorageHandler";
import CloseSharpIcon from '@material-ui/icons/CloseSharp';


const DialogFormConfirm = Loadable({
  loader: () => import("../DialogFormConfirm"),
  loading() {
    return <LazyLoad height="30px" margintop="5px" />;
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    border:'0px solid lime'
  },
  quantidade: {
    textAlign: "right",
    width: 40,
    paddingTop: 5,
    paddingBottom: 5,
    display: "inline",
    border: "0",
    borderBottom: "1px solid #ccc",
    position: "relative",
    top: -4
  },
  cardAvatar: {
    border: "1px solid red"
  },
  cardContent: {
    border: "1px solid lime"
  },
  cardActions: {
    border: "1px solid blue"
  },
  valorUnitario: {
    border: "0px solid red",
    color: "rgb(244,67,54)",
    [theme.breakpoints.up("xs")]: {
      fontWeight: "bold"
    }
  },
  mdlCard: {
    flexDirection: "column",
    fontSize: "16px",
    fontWeight: 400,
    overflow: "hidden",
    zIndex: 1,
    position: "relative",
    background: "#fff",
    borderRadius: "2px",
    boxSizing: "border-box"
  },
  cardItemMenu: {
    [theme.breakpoints.up("xs")]: {
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: 450
    },
    [theme.breakpoints.up("md")]: {
      width: 450
    },
    [theme.breakpoints.up("lg")]: {
      width: 450
    },
    [theme.breakpoints.up("xl")]: {
      width: 450
    },
    margin: "0px auto",
    minHeight: "10px"
  },
  info_item: {
    float: "none"
  },
  nomeItemMenu: {
    fontFamily: "Lato",
    color: "#444",
    fontSize: "18px",
    margin: "0",
    padding: "0",
    marginTop: "0px",
    verticalAlign: "baseline",
    textTransform: "capitalize",
    fontWeight: "bold",
    lineHeight: "35px"
  },
  descItemMenu: {
    fontFamily: "Lato",
    color: "#444",
    fontSize: "12px",
    margin: 0,
    padding: 0,
    marginTop: "0px",
    verticalAlign: "baseline",
    lineHeight: "14px",
    textTransform: "capitalize"
  },
  img_prod: {
    width: "80px",
    height: "80px",
    float: "left",
    margin: "10px",
    borderRadius: "5px",
    maxWidth: "100%"
  },
  mdlCard__actions: {
    fontSize: "12px",
    lineHeight: "normal",
    width: "100%",
    backgroundColor: "transparent",
    padding: "0px",
    boxSizing: "border-box",
    borderTop: "0px solid rgba(0,0,0,.1)",
    borderBottom: "1px solid rgba(0,0,0,.1)"
  },
  myButton: {
    color: "rgb(244,67,54)",
    border: "none",
    borderRadius: "2px",
    display: "block",
    width: 40,
    minWidth: "30px",
    padding: 0,
    margin: 0
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

const Carrinho = props => {

  const classes = useStyles();

  const [data, setData] = useState(null);
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);
  const [observacao, setObservacao] = useState("");
  const [openDialog, setOpenDialog] = useState(!1);

  let produtos = [];

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("products")));
  },[]);

  const remover = id => {
    LocalStorageHandler.removeByIdInArray(id, "products");
    setData(JSON.parse(localStorage.getItem("products")));
  };

  function addProduct(produto_id, qtd) {
    if (localStorage.getItem("products")) {
      produtos = JSON.parse(localStorage.getItem("products"));
    }
    //Pega o index
    let objIndex = produtos.findIndex(
      pedido => pedido.productId === produto_id
    );
    //products[objIndex].productId = produto_id;
    produtos[objIndex].quantidade = qtd;
    produtos[objIndex].observacao = "";
    produtos[objIndex].descricao = "";
    localStorage.setItem("products", JSON.stringify(produtos));
  }

  function add(produto_id, qtd) {
    let quant = parseInt(quantidade) + 1;

    setQuantidade(quant);

    let d = parseInt(qtd) + 1;

    addProduct(produto_id, d);
  }

  function subtract(produto_id, qtd) {
    let qt = parseInt(qtd) - 1;

    setQuantidade(qt);

    addProduct(produto_id, qt);
  }

  function onChangeQuantidade(ev) {
    let quant = parseInt(ev.target.value);
    setQuantidade(quant);
    addProduct();
    setValorTotal((props.precoUnitario * parseInt(quant)).toFixed(2));
  }

  function alterarTextoTextArea(ev) {
    setObservacao(ev.target.value);
  }

  useEffect(() => {
    if (quantidade <= 0 || isNaN(parseInt(quantidade))) {
      setValorTotal(0);
      setQuantidade(0);
    }
    // props.callbackParent(LocalStorageHandler.count("products"));
  }, [quantidade]);

  let _valorTotal = 0;

  let conteudo = null;

  if (data !== null) {
    if (data.length > 0) {
      conteudo = data.map((produto, index) => {
        let produto_id = produto.productId;

        let quant = produto.quantidade;

        let valTotal = produto.preco * quant;

        _valorTotal += valTotal;

        return (
          <React.Fragment key={index}>
            <div
              className={classes.cardItemMenu}
              id={produto_id}
              title={produto.nome}
            >
              <div className={classes.mdlCard}>
                <div className={classes.info_item}>
                  <Avatar
                    alt={""}
                    src={produto.imagem}
                    className={classes.img_prod}
                  />
                  <p className={classes.nomeItemMenu}>
                    {produto.nome}
                    <IconButton
                      edge="end"
                      className={classes.menuButton}
                      color="primary"
                      size="small"
                      onClick={() => remover(produto_id)}
                      title={`Clique para remover ${produto.nome} do carrinho.`}
                    >
                      <DeleteSharpIcon />
                    </IconButton>
                  </p>
                  <p className={classes.descItemMenu}>
                    {produto.descricao.length == 0 ? (
                      <>{produto.nome}</>
                    ) : (
                      <>{produto.descricao}</>
                    )}
                  </p>
                </div>
                <Grid container className={classes.mdlCard__actions}>
                  <Grid item xs={7}>
                    <Button className={classes.valorUnitario}>
                      <b>
                        R${" "}
                        {produto.preco != undefined
                          ? produto.preco.toFixed(2)
                          : null}
                      </b>
                    </Button>
                    {quant > 0 && <>Subtotal: R$ {valTotal.toFixed(2)}</>}
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    xs={5}
                  >
                    <Button
                      onClick={() => {
                        subtract(produto_id, quant);
                      }}
                      disabled={quant < 1}
                      className={classes.myButton}
                    >
                      <RemoveCircleOutlineRoundedIcon />
                    </Button>
                    <input
                      type="number"
                      onChange={ev => onChangeQuantidade(ev)}
                      value={quant}
                      className={classes.quantidade}
                    />
                    <Button
                      className={classes.myButton}
                      onClick={() => {
                        add(produto_id, quant);
                      }}
                    >
                      <AddCircleOutlineIcon />
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
            {/* <hr
              style={{
                border: 0,
                borderTop: "1px solid #ddd",
                margin: 0,
                padding: 0
              }}
            /> */}
          </React.Fragment>
        );
      });
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ position: "relative" }}>
        <AppBar position="static">
          <Toolbar variant="dense" style={{padding:0, paddingLeft:15, paddingRight:5}}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ShoppingCartSharpIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.title}>
              <b>MEU CARRINHO</b>
            </Typography>
            <IconButton
             edge="end"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
              onClick={()=>{props.fecharMenu(true)}}
            >
              <CloseSharpIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div>{conteudo}</div>
        <AppBar position="static">
          <Toolbar variant="dense" style={{padding:0, paddingLeft:15, paddingRight:5}}>
            <Grid item xs={7} sm={7}>
              <b>VALOR TOTAL: R$ {_valorTotal.toFixed(2)}</b>
            </Grid>
            <Grid item xs={5} sm={5}>
              <Button
                variant="contained"
                align="right"
                onClick={ev => setOpenDialog(true)}
                color="primary"
                className={classes.button}
              >
                <b>CONCLUIR PEDIDO</b>
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
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
