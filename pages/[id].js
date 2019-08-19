import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
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
import {
  Menu,
  Search,
  AccessAlarm,
  AccessibilityRounded,
  AccountBalanceSharp
} from "@material-ui/icons";
import { useRouter } from "next/router";
import { green } from "@material-ui/core/colors";
import Footer from "../components/Footer";
import Hidden from "@material-ui/core/Hidden";
import LocalStorageHandler from "../components/LocalStorageHandler";
import MyMenu from "../components/Menu";
import ApiRest from "../components/ApiRest";
import SpinnerDelivery from "../components/SpinnerDelivery";
import AlertNotHasProducts from "../components/AlertNotHasProducts";
import TotalPedidos from "../components/TotalPedidos";
import Produtos from "../components/Produtos";
import LazyLoad from "../components/LazyLoad";
import Loadable from "react-loadable";

const NavigationBottom = Loadable({
  loader: () => import("../components/NavigationBottom"),
  loading() {
    return (<><LazyLoad height="30px" margintop="5px" /><LazyLoad height="30px" margintop="5px" /></>);
  }
});


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

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      background: "url(../static/background.jpg)",
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
  root: {
    padding: theme.spacing(0, 0, 0)
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
    margin: "0px auto",
    paddingLeft: 0,
    paddingRight: 0,
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
  footerNavigationBottom:{
    background:'white'
  }
}));

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

  const [empresa, setEmpresa] = useState({ config: [] });

  const [nome_fantasia, setNomeFantasia] = useState("Carregando...");

  const [produtos, setProdutos] = useState({ dados: [], isLoading: false });

  const [empresaId, setEmpresaId] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("products")));
    onAtualizarCount();
    if (iniciar == true) {
      setIniciar(false);
      //setProdutosAsObject(props.shows);
    }
  });

  /*
BUSCA OS DADOS DA EMPRESA
*/
  useEffect(() => {
    let id = router.query.id;
    const fetchData = async () => {
      const result = await ApiRest.get("/empresas/" + id);
      setEmpresa(result.data);
    };
    fetchData();
  }, []);

  /**
   * PRODUTOS
   */

  useEffect(() => {
    const fetchData = async () => {
      if (empresaId !== null) {
        const result = await ApiRest.get("/produtos/empresa/" + empresaId);
        setProdutos({ data: result.data, isLoading: true });
      }
    };
    fetchData();
  }, [empresaId]);

  useEffect(() => {
    if (!empresa.config) {
      setNomeFantasia(empresa["0"].nome_fantasia);
      setEmpresaId(empresa["0"].id);
    }
  });

  function onChangeInputSearch(ev) {
    let valor = ev.target.value;

    setSearch(valor.toUpperCase());

    if (valor.trim() !== "") {
      /*let adults = Object.values(props.shows).filter(produto => {
				if (produto.id !== undefined) {
					if (produto.nome.toUpperCase().includes(valor.toUpperCase())) {
						return produto;
					}
				}
			});
			setProdutosAsObject(adults);*/
    } else {
      //setProdutosAsObject(props.shows);
    }
    if (ev.keyCode == 27) {
      //setProdutosAsObject(props.shows);
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
            <Link href="../">
              {produtos.isLoading == false ? (
                <>
                  <LazyLoad />
                </>
              ) : (
                <>{nome_fantasia}</>
              )}
            </Link>
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
            </Button>
          </Hidden>
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
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            aria-label="Simple tabs example"
          >
            <Tab label="PRODUTOS" icon={<AccessAlarm />} {...a11yProps(0)} />
            <Tab
              label="SEUS PEDIDOS"
              icon={<AccessibilityRounded />}
              {...a11yProps(1)}
            />
            <Tab
              label="AVALIAÇÕES"
              icon={<AccountBalanceSharp />}
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        {/* TAB 1 */}
        <TabPanel value={value} index={0} className={classes.root}>
          <Container
            maxWidth="lg"
            component="main"
            className={classes.heroContent}
          >
            {produtos.isLoading == false && (
              <>
                <SpinnerDelivery label="Carregando Produtos, aguarde, por favor." />
              </>
            )}
          </Container>
          {produtos.isLoading == true && empresaId != null && (
            <>
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
              <br />
              {produtos.data.hasOwnProperty("erro") && produtos.data ? (
                <>
                  <AlertNotHasProducts label="Não há Produtos para esta empresa." />
                  {console.log(produtos.data)}
                </>
              ) : (
                <>
                  {Object.values(produtos.data).map((product, _key) => {
                    return (
                      <React.Fragment key={_key}>
                        <Produtos
                          produto={product}
                          id={product.id}
                          nome={product.nome.toUpperCase()}
                          imagem={product.imagem}
                          precoUnitario={product.preco}
                          descricao={product.descricao}
                        />
                      </React.Fragment>
                    );
                  })}{" "}
                </>
              )}
            </>
          )}
        </TabPanel>
        {/* TAB 2 */}
        <TabPanel value={value} index={1}>
          Tab 2
        </TabPanel>
        {/* TAB 3 */}
        <TabPanel value={value} index={2}>
          Tab 3
        </TabPanel>
      </Container>
      {/* Footer */}
      <Container className={classes.footerNavigationBottom} maxWidth="lg">
        <Footer />
      </Container>
      {/* End footer */}
      <MyMenu
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        abrir={isMenuOpen}
      />
      <NavigationBottom/>
    </React.Fragment>
  );
};

Index.getInitialProps = async function(ctx) {
  const configSite = await import("../db/config.dev.json");
  return {
    config: configSite
  };
};

export default Index;
