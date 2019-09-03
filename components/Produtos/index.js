import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
import React, { useEffect, useState } from "react";
import LocalStorageHandler from "../LocalStorageHandler";

//values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
const useStyles = makeStyles(theme => ({
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
    boxSizing: "border-box",
    border: "0px solid red"
  },
  cardItemMenu: {
    [theme.breakpoints.up("xs")]: {
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "96%"
    },
    [theme.breakpoints.up("md")]: {
      width: "96%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "96%"
    },
    margin: "10px auto",
    minHeight: "10px",
    border: "0px solid red"
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
    padding: "8px",
    boxSizing: "border-box",
    borderTop: "1px solid rgba(0,0,0,.1)"
  },
  myButton: {
    color: "rgb(244,67,54)",
    border: "none",
    display: "block",
    width: 35,
    minWidth: "30px",
    padding: 0
  }
}));

/**
 * Component: Produtos
 */
export default function Produtos(props) {
  const classes = useStyles();
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);
  const [observacao, setObservacao] = useState("");

  function addProduct() {
    let products = [];

    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    }

    //Desestruturação Javascript
    const { id, nome, imagem, precoUnitario, descricao } = props;

    //Pega o index
    let objIndex = products.findIndex(pedido => pedido.productId === id);

    //Caso não exista
    if (objIndex === -1) {
      products.push({
        productId: id,
        nome: nome,
        imagem: imagem,
        quantidade: quantidade + 1,
        observacao: observacao,
        preco: precoUnitario,
        descricao: descricao
      });

      localStorage.setItem("products", JSON.stringify(products));
    } else {
      products[objIndex].productId = id;
      products[objIndex].quantidade = quantidade + 1;
      products[objIndex].observacao = observacao;
      products[objIndex].nome = nome;
      products[objIndex].imagem = imagem;
      products[objIndex].preco = precoUnitario;
      products[objIndex].descricao = descricao;
      localStorage.setItem("products", JSON.stringify(products));
    }
  }

  function add() {
    let quant = parseInt(quantidade) + 1;
    setQuantidade(quant);
    addProduct();
    setValorTotal((props.precoUnitario * quant).toFixed(2));
  }

  function subtract() {
    let quant = parseInt(quantidade) - 1;
    setQuantidade(quant);
    addProduct();
    setValorTotal(props.precoUnitario * quant);
  }

  function onChangeQuantidade(ev) {
    let quant = parseInt(ev.target.value);
    setQuantidade(quant);
    addProduct();
    setValorTotal((props.precoUnitario * parseInt(quant)).toFixed(2));
  }

  useEffect(() => {
    if (quantidade <= 0 || isNaN(parseInt(quantidade))) {
      setValorTotal(0);
      setQuantidade(0);
    }
    props.callbackParent(LocalStorageHandler.count("products"));
  }, [quantidade]);



  return (
    <>
      <div className={classes.cardItemMenu} id={props.id} title={props.nome}>
        <div className={classes.mdlCard}>
          <div className={classes.info_item}>
            <Avatar
              alt="Remy Sharp"
              src={props.imagem}
              className={classes.img_prod}
            />
            <div className={classes.nomeItemMenu}>{props.nome}</div>
            <div className={classes.descItemMenu}>
              {props.descricao.length == 0 ? (
                <>{props.nome}</>
              ) : (
                <>{props.descricao}</>
              )}
            </div>
          </div>
          <Grid container className={classes.mdlCard__actions}>
            <Grid item xs={7}>
              <Button className={classes.valorUnitario}>
                <b>
                  R${" "}
                  {props.precoUnitario != undefined
                    ? props.precoUnitario.toFixed(2)
                    : null}
                </b>
              </Button>
              {quantidade > 0 && <>Subtotal: R$ {valorTotal}</>}
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              item
              xs={5}
            >
              <Button
                onClick={subtract}
                disabled={quantidade < 1}
                className={classes.myButton}
              >
                <RemoveCircleOutlineRoundedIcon />
              </Button>
              <input
                type="number"
                onChange={ev => onChangeQuantidade(ev)}
                value={quantidade}
                className={classes.quantidade}
              />
              <Button className={classes.myButton} onClick={add}>
                <AddCircleOutlineIcon />
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
