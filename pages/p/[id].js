﻿import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Menu, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { useRouter } from "next/router";
import { green } from "@material-ui/core/colors";
import Footers from "../../components/footer";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";
import CircularProgress from "@material-ui/core/CircularProgress";
import Hidden from '@material-ui/core/Hidden';
//Carrinho
import LocalStorageHandler from "../../components/LocalStorageHandler";
import MyMenu from "../../components/Menu";

console.clear();

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function MadeWithLove(props) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Criado por "}
      <Link color="inherit" href="#">
        {props.config.empresa}
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      background:
        "url(https://res.cloudinary.com/delivery-com/image/fetch/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FHomepage%2Fdefault-small.jpg)",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  appBarBottom: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(0, 0, 0)
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardMediaList: {
    paddingTop: "56.25%", // 16:9
    marginRight: "20px"
  },
  cardContent: {
    flexGrow: 1
  },
  carregando: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  rootinput: {
    borderRadius: 40,
    display: "flex",
    alignItems: "center",
    width: "80%",
    margin: "0px auto",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  textFieldInput: {
    backgroundColor: theme.palette.common.white,
    fontSize: 16,
    padding: "10px 12px",
    width: "calc(100% - 24px)",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  input: {
    marginLeft: 8,
    flex: 1,
    borderRadius: 15,
    padding: 15
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },
  tabContent: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    position: "relative",
    minHeight: 600
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600]
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  icon: {
    margin: theme.spacing(2)
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  listaProdutos: {
    boxShadow:
      "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);",
    display: "flex",
    flexWrap: "nowrap",
    border: "0px solid red",
    flexDirection: "row",
    height: 160,
    marginTop: 10,
    backgroundColor: "rgba(245,245,245,0.8)"
  },
  itemAvatar: {
    width: "20%",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    border: "0px solid lime",
    padding: 4
  },
  itemAvatarImg: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    border: "0px solid lime"
  },
  itemContent: {
    width: "60%",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start",
    border: "0px solid lime",
    padding: 10
  },
  itemAcoes: {
    width: "20%",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "0px solid lime",
    padding: 10,
    textAlign: "center"
  },
  inputQuantidade: {
    border: 0,
    outline: 0,
    textAlign: "center",
    width: 40
  }
}));

/**
 * Component: Produtos
 */
function Produto(props) {
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [observacao, setObservacao] = useState("");
  const [countPedidosLocal, setCountPedidosLocal] = useState(!1);

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

    //props.handleTotal(-props.precoUnitario);

    setValorTotal(props.precoUnitario * quant);
  }

  function onChangeQuantidade(ev) {
    let quant = parseInt(ev.target.value);

    setQuantidade(quant);

    //props.handleTotal(props.precoUnitario);

    addProduct();

    setValorTotal(props.precoUnitario * parseInt(quant));
  }

  function alterarTextoTextArea(ev) {
    setObservacao(ev.target.value);
  }

  useEffect(() => {});

  const classes = useStyles();

  return (
    <div className={classes.root} id={props.id}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div className={classes.demo}>
            <div
              className={classes.listaProdutos}
              title={"Clique para entrar em " + props.nome}
            >
              <div className={classes.itemAvatar}>
                <img
                  className={classes.itemAvatarImg}
                  alt=""
                  src={props.imagem}
                />
              </div>
              <div className={classes.itemContent}>
                <Typography>
                  <b>{props.nome}</b>
                </Typography>
                <Typography>
                  <span>{props.descricao}</span>
                </Typography>
                <sub>
                  <strong>Kg</strong>
                </sub>
                <FormControl>
                  <InputLabel htmlFor="my-input">Observação:</InputLabel>
                  <Input
                    id="my-input"
                    onChange={ev => {
                      alterarTextoTextArea(ev);
                    }}
                    value={observacao}
                    aria-describedby="my-helper-text"
                  />
                </FormControl>
              </div>
              <div className={classes.itemAcoes}>
                <br />
                <Typography>
                  Preço <br /> <b>R$ {props.precoUnitario}</b>
                </Typography>
                <small>Quantidade:</small>
                <ButtonGroup
                  variant="contained"
                  color="primary"
                  aria-label="Split button"
                >
                  <Button onClick={subtract} disabled={quantidade < 1}>
                    -
                  </Button>
                  <input
                    type="number"
                    onChange={ev => onChangeQuantidade(ev)}
                    value={quantidade}
                    className={classes.inputQuantidade}
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    aria-haspopup="true"
                    value="+"
                    onClick={add}
                  >
                    +
                  </Button>
                </ButtonGroup>
                <br />
                <Chip
                  className={classes.chip}
                  color="primary"
                  label={`Valor a pagar${"\n\n"}R$ ${valorTotal}`}
                />
                <br />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const TotalPedidos = props => {
  const [countPedidosLocal, setCountPedidosLocal] = useState(!1);
  const [carregado, setCarregado] = useState(!1);

  useEffect(() => {
    setCarregado(true);
    setCountPedidosLocal(LocalStorageHandler.count("products"));
  });

  if (countPedidosLocal <= 0) {
    return (
      <Badge badgeContent={0} color="primary">
        <ShoppingCartOutlined />
      </Badge>
    );
  } else {
    if (!carregado) {
      return <CircularProgress disableShrink />;
    }
    return (
      <Badge badgeContent={countPedidosLocal} color="primary">
        <ShoppingCartOutlined />
      </Badge>
    );
  }
};
const Index = props => {
  const router = useRouter();

  const [value, setValue] = React.useState(0);

  const [produtosAsObject, setProdutosAsObject] = React.useState([]);

  const [search, setSearch] = React.useState("");

  const [countPedidosLocal, setCountPedidosLocal] = useState(!1);

  const [anchorEl, setAnchorEl] = useState(null);

  const [data, setData] = useState([]);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const [iniciar, setIniciar] = useState(true);

  const isMenuOpen = Boolean(anchorEl);

  const classes = useStyles();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("products")));
    onAtualizarCount();
    if (iniciar == true) {
      setIniciar(false);
      setProdutosAsObject(props.shows);
    }
  });

  function onChangeInputSearch(ev) {
    let valor = ev.target.value;

    setSearch(valor.toUpperCase());

    if (valor.trim() !== "") {
      let adults = Object.values(props.shows).filter(produto => {
        if (produto.id !== undefined) {
          if (produto.nome.toUpperCase().includes(valor.toUpperCase())) {
            return produto;
          }
        }
      });
      setProdutosAsObject(adults);
    } else {
      setProdutosAsObject(props.shows);
    }
    if (ev.keyCode == 27) {
      setProdutosAsObject(props.shows);
      setSearch("");
    }
  }

  function onAtualizarCount() {
    setCountPedidosLocal(LocalStorageHandler.count("products"));
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleProfileMenuOpen(event) {
    //onAtualizarCount();
    if (LocalStorageHandler.count("products") > 0) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    //onAtualizarCount();
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function confirmarPedido() {
    alert(JSON.stringify(LocalStorageHandler.getDataByKey("products")));
    LocalStorageHandler.remove("products");
  }

  return (
    <React.Fragment>
      <CssBaseline />
      {/* MENU DE BARRA SUPERIOR */}
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link href="../">Delivery {router.query.id}</Link>
          </Typography>
          <Hidden lgDown>
          <Button
            onClick={confirmarPedido}
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            CONFIRMAR PEDIDO
          </Button></Hidden>
          <IconButton
            onClick={handleProfileMenuOpen}
            aria-label="Account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <TotalPedidos />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className={classes.cardGrid} maxWidth="md">
        <br />
        {/* INÍCIO DO TAB CONTENT */}
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Simple tabs example"
          >
            <Tab label="PRODUTOS" {...a11yProps(0)} />
            <Tab label="SEUS PEDIDOS" {...a11yProps(1)} />
            <Tab label="AVALIAÇÕES" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        {/* TAB 1 */}
        <TabPanel value={value} index={0}>
          <Container
            maxWidth="sm"
            component="main"
            className={classes.heroContent}
          >
            {/* INPUT */}

            <Paper className={classes.rootinput}>
              <IconButton className={classes.iconButton} aria-label="Menu">
                <Menu />
              </IconButton>
              <InputBase
                className={classes.textFieldInput}
                placeholder={`Pesquise produtos aqui...`}
                onChange={ev => onChangeInputSearch(ev)}
                onKeyUp={ev => onChangeInputSearch(ev)}
                value={search}
                inputProps={{ "aria-label": "Search Google Maps" }}
              />
              <Divider className={classes.divider} />
              <IconButton className={classes.iconButton} aria-label="Search">
                <Search />
              </IconButton>
            </Paper>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              component="p"
            >
              <br />
            </Typography>
          </Container>
          {Object.values(produtosAsObject).length <= 0 && (
            <Grid className={classes.carregando}>
              <Chip
                avatar={<CircularProgress disableShrink size={20} />}
                label=" Carregando produtos, aguarde, por gentileza... "
                className={classes.chip}
                variant="outlined"
                style={{ border: 0 }}
              />
            </Grid>
          )}
          {Object.values(produtosAsObject).map((product, _key) => {
            if (product.id != undefined) {
              return (
                <React.Fragment key={_key}>
                  <Produto
                    produto={product}
                    id={product.id}
                    nome={product.nome.toUpperCase()}
                    imagem={product.imagem}
                    precoUnitario={product.preco}
                    descricao={product.descricao}
                  />
                </React.Fragment>
              );
            }
            /**/
          })}
        </TabPanel>
        {/* TAB 2 */}
        <TabPanel value={value} index={1}>
          {/*<Carrinho />*/}
        </TabPanel>
        {/* TAB 3 */}
        <TabPanel value={value} index={2}>
          Tab 3
        </TabPanel>
      </Container>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        className={classes.appBarBottom}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          />
          <Hidden lgDown>
          <Button
            onClick={confirmarPedido}
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            CONFIRMAR PEDIDO
          </Button></Hidden>
          <IconButton
            onClick={handleProfileMenuOpen}
            aria-label="Account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <TotalPedidos />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {Footers.map((footer, key) => (
            <Grid item xs={6} sm={3} key={key}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>{MadeWithLove(props)}</Box>
      </Container>
      {/* End footer */}
      <MyMenu
        anchorEl={anchorEl}
        data={data}
        handleMenuClose={handleMenuClose}
        abrir={isMenuOpen}
      />
    </React.Fragment>
  );
};

Index.getInitialProps = async function(ctx) {
  const res = await import("../../db/produtos.json");
  const configSite = await import("../../db/config.dev.json");
  return {
    shows: res,
    config: configSite
  };
};

export default Index;
