import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
//values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
const useStyles = makeStyles(theme => ({
  root: {
    border: "0px solid #ccc",
    marginBottom: 4,
    boxShadow: theme.shadows[3],
    backgroundColor: "rgba(245,245,245,0.8)"
  },
  imageBox: {
    width: "100%",
    height: 140,
    flex: 1,
    [theme.breakpoints.up("xs")]: {
      border: "0px solid green"
    },
    [theme.breakpoints.up("sm")]: {
      border: "0px solid red"
    },
    [theme.breakpoints.up("md")]: {
      border: "0px solid lime"
    },
    [theme.breakpoints.up("lg")]: {
      border: "0px solid gold"
    }
  },
  bigAvatar: {
    height: 100,
    borderRadius: 5,
    [theme.breakpoints.up("xs")]: {
      border: "1px solid green",
      margin: 0,
      width: 80
    },
    [theme.breakpoints.up("sm")]: {
      margin: 10,
      width: 100
    },
    [theme.breakpoints.up("md")]: {
      margin: 10,
      width: 100
    },
    [theme.breakpoints.up("lg")]: {
      margin: 10,
      width: 100
    }
  },
  quantidade: {
    textAlign: "center",
    width: 30,
    paddingTop: 5,
    paddingBottom: 5,
    display: "inline",
    border: "0",
    borderBottom: "1px solid #ccc"
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
  subtotal: {
    border: "0px solid red",
    paddingRight: 12,
    fontSize: "12px"
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
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "96%",
    },
    [theme.breakpoints.up("md")]: {
      width: "96%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "96%",
    },
    margin: "10px auto",
    minHeight: "10px",
    border: "0px solid red"
  },
  info_item: {
    float: 'none',
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
    lineHeight:"35px"
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
    borderRadius: "2px",
    display: "block",
    width: 40,
    minWidth: "30px"
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

  function alterarTextoTextArea(ev) {
    setObservacao(ev.target.value);
  }

  useEffect(() => {
    if (quantidade <= 0 || isNaN(parseInt(quantidade))) {
      setValorTotal(0);
      setQuantidade(0);
    }
    props.callbackParent(quantidade);
  });

  return (
    <>
      <div className={classes.cardItemMenu}
      id={props.id}
      title={"Clique para entrar em " + props.nome}
      >
        <div className={classes.mdlCard}>
          <div className={classes.info_item}>
            <Avatar
              alt="Remy Sharp"
              src={props.imagem}
              className={classes.img_prod}
            />
            <p className={classes.nomeItemMenu}>{props.nome}</p>
            <p className={classes.descItemMenu}>
              {props.descricao.length == 0 ? (
                <>
                  {props.nome}
                </>
              ) : (
                <>{props.descricao}</>
              )}
            </p>
          </div>
          <Grid container className={classes.mdlCard__actions}>
            <Grid item xs="7">
              <Button className={classes.valorUnitario}>
                <b>
                  R${" "}
                  {props.precoUnitario != undefined
                    ? props.precoUnitario.toFixed(2)
                    : null}
                </b>
              </Button>{quantidade > 0 && <>Subtotal: R$ {valorTotal}</>}
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              xs="5"
            >
              <Button 
              onClick={subtract}
              disabled={quantidade < 1}
              className={classes.myButton}>
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

/*<Grid container wrap="nowrap">
          <FormControl fullWidth>
            <InputLabel htmlFor="my-input">Observação:</InputLabel>
            <Input
              onChange={ev => {
                alterarTextoTextArea(ev);
              }}
              value={observacao}
            />
          </FormControl>
        </Grid>*/
{/*
    <Grid
      container
      item
      direction="row"
      alignItems="stretch"
      alignContent="flex-start"
      xs={12}
      sm={12}
      md={12}
      lg={12}
      className={classes.root}
      id={props.id}
      title={"Clique para entrar em " + props.nome}
    >
      <Grid xs={3} sm={3} md={3} lg={2} item>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.imageBox}
        >
          <Avatar
            alt="Remy Sharp"
            src={props.imagem}
            className={classes.bigAvatar}
          />
        </Grid>
      </Grid>
      <Grid xs={5} sm={5} md={6} lg={7} item className={classes.cardContent}>
        <Grid item>
          <Typography>
            <b>{props.nome}</b>
          </Typography>
          <sub>
            <strong>{props.medida}</strong>
          </sub>
          <Typography>{props.descricao}</Typography>
        </Grid>
        {observacao.length === 0 && (
          <>
            <br />
            <br />
            <br />
          </>
        )}
        
      </Grid>
      <Grid
        xs={4}
        sm={4}
        md={3}
        lg={3}
        item
        container
        alignItems="baseline"
        justify="flex-end"
        className={classes.cardActions}
      >
        <Grid item>
          <Typography className={classes.valorUnitario}>
            <b>
              Preço: R${" "}
              {props.precoUnitario != undefined
                ? props.precoUnitario.toFixed(2)
                : null}
            </b>
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            onClick={subtract}
            disabled={quantidade < 1}
            color="primary"
            aria-label="add to shopping cart"
          >
            <RemoveShoppingCartIcon />
          </IconButton>
          <input
            type="number"
            onChange={ev => onChangeQuantidade(ev)}
            value={quantidade}
            className={classes.quantidade}
          />
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={add}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Grid>
        <br />
        <Grid item>
          <br />
         
        </Grid>
      </Grid>
    </Grid>
     */         
}
