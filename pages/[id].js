import { makeStyles, useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Menu, Search } from "@material-ui/icons";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Skeleton from "@material-ui/lab/Skeleton";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loadable from "react-loadable";
import AlertNotHasProducts from "../components/AlertNotHasProducts";
import ApiRest from "../components/ApiRest";
import Categorias from "../components/Categorias";
import Footer from "../components/Footer";
import LocalStorageHandler from "../components/LocalStorageHandler";
import MyMenu from "../components/Menu";
import Produtos from "../components/Produtos";
import SpinnerTeste from "../components/SpinnerTeste/Produtos";
import TotalPedidos from "../components/TotalPedidos";
import useReplaceString from "../components/useReplaceString";
import useWidth from "../components/useWidth";
import Fab from "@material-ui/core/Fab";
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const NavigationBottom = Loadable({
  loader: () => import("../components/NavigationBottom"),
  loading() {
    return (
      <>
        <Skeleton height="80%" width="100%" />
      </>
    );
  }
});

const dataCategorias = [
  {
    nome: "ALIMENTOS",
    quantidade: parseInt(2),
    mostrar: !0
  },
  {
    nome: "BEBIDAS",
    quantidade: parseInt(3),
    mostrar: !0
  },
  {
    nome: "BAZAR",
    quantidade: parseInt(5),
    mostrar: !0
  },
  {
    nome: "DESCARTÁVEIS",
    quantidade: parseInt(8),
    mostrar: !0
  },
  {
    nome: "MATINAIS",
    quantidade: parseInt(4),
    mostrar: !0
  },
  {
    nome: "PERECÍVEIS",
    quantidade: parseInt(45),
    mostrar: !0
  },
  {
    nome: "HIGIENE",
    quantidade: parseInt(4),
    mostrar: !0
  },
  {
    nome: "LIMPEZA",
    quantidade: parseInt(8),
    mostrar: !0
  }
];

const drawerWidth = 240;

const useStylesDrawer  = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function DataASt(props){

  const classes = useStylesDrawer();

const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

function handleDrawerClose() {
	props.handleDrawerClose(false);
  }

return(
<>
 <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
</>
);
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
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    border: "0px solid blue"
  },
  rootinput: {
    borderRadius: 0,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
     width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "96%"
    },
    [theme.breakpoints.up("md")]: {
    },
    [theme.breakpoints.up("lg")]: {
      width: "96%",
    },
    margin: "0px auto",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  textFieldInput: {
    backgroundColor: theme.palette.common.white,
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },
  footerNavigationBottom: {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    background: "white",
    border: "0px solid gold",
    "& p": {
      border: "0px solid red",
      "& span": {}
    },
    "& div": {
      border: "0px solid lime"
    }
  },
  categorias: {
    backgroundColor: "white"
  }
}));

const Index = props => {
  const router = useRouter();
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [produtosAsObject, setProdutosAsObject] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [countPedidosLocal, setCountPedidosLocal] = useState(!1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [data, setData] = useState([]);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [iniciar, setIniciar] = useState(true);
  const [empresa, setEmpresa] = useState({ config: [] });
  const [nome_fantasia, setNomeFantasia] = useState("Carregando...");
  const [produtos, setProdutos] = useState({ dados: [], isLoading: false });
  const [empresaId, setEmpresaId] = useState(null);
  const [daaaaaaata, setDaaaaaaata] = useState(null);
  const [abrirDrawer, setAbrirDrawer] = useState(!1);

  let screenSize = useWidth();

  const isMenuOpen = Boolean(anchorEl);

  function goBack() {
    window.history.back();
  }

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("products")));
    onAtualizarCount();
    if (iniciar == true) {
      setIniciar(false);
      //setProdutosAsObject(props.shows);
    }
  }, []);

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
      if (screenSize === "xs") {
        setNomeFantasia(useReplaceString(empresa["0"].nome_fantasia, 2));
      } else {
        setNomeFantasia(empresa["0"].nome_fantasia);
      }
      setEmpresaId(empresa["0"].id);
    }
  }, [empresa]);

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
    if (LocalStorageHandler.count("products") > 0) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
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
<DataASt  open={abrirDrawer} handleDrawerClose={(valor)=>setAbrirDrawer(valor)}/>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
{ /*         <IconButton onClick={goBack} className={classes.margin}>
            <ArrowBackIcon color="default" fontSize="large"/>
          </IconButton>*/}
<IconButton onClick={()=>{setAbrirDrawer(!0)}}>
	<MenuIcon color="primary" fontSize="default"/>
 </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link href="../">
              {produtos.isLoading == false ? (
                <>
                  <Skeleton variante="text" height={20} width={200} />
                </>
              ) : (
                <>
                  <Grid>{nome_fantasia}</Grid>
                </>
              )}
            </Link>
          </Typography>
          {!1 && (
            <>
              <Button
                onClick={confirmarPedido}
                href="#"
                color="primary"
                variant="outlined"
                className={classes.link}
              >
                CONFIRMAR PEDIDO
              </Button>
            </>
          )}
          <IconButton
            onClick={handleProfileMenuOpen}
            aria-label="Account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <TotalPedidos countProdutos={countPedidosLocal} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" className={classes.cardGrid}>
        {produtos.isLoading == false && (
          <>
            <br />
            <SpinnerTeste data={[1, 2, 3, 4, 5, 6, 7]} />
          </>
        )}
        {produtos.isLoading == true && empresaId != null && (
          <>
            <br />
            {produtos.data.hasOwnProperty("erro") && produtos.data ? (
              <>
                <AlertNotHasProducts label="Não há Produtos para esta empresa." />
              </>
            ) : (
              <>
                <Grid container justify="center">
  <Hidden only={['xs']}>                
<Grid  xs="12" sm="4" md="3" className={classes.categorias}>
                    <Grid item>
                      <Categorias datacat={dataCategorias} />
                    </Grid>
                  </Grid>
  </Hidden>  
                  <Grid xs="12" sm="8"  md="9">
                    <Grid item>
                      <Grid container justify="center">
                        <Grid container>
                          <Paper className={classes.rootinput}>
                            <IconButton
                              className={classes.iconButton}
                              aria-label="Menu"
                            >
                              <Menu />
                            </IconButton>
                            <InputBase
                              className={classes.textFieldInput}
                              placeholder="Pesquisar"
                              inputProps={{
                                "aria-label": "Search Google Maps"
                              }}
                            />
                            <Divider className={classes.divider} />
                            <IconButton
                              className={classes.iconButton}
                              aria-label="Search"
                            >
                              <Search />
                            </IconButton>
                          </Paper>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      {Object.values(produtos.data).map((product, _key) => {
                        return (
                          <React.Fragment key={_key}>
                            <Produtos
                              callbackParent={valor =>
                                setCountPedidosLocal(valor)
                              }
                              produto={product}
                              id={product.id}
                              nome={product.nome.toUpperCase()}
                              imagem={product.imagem}
                              precoUnitario={product.preco}
                              descricao={product.descricao}
                            />
                          </React.Fragment>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
          </>
        )}
      </Container>
      <Container className={classes.footerNavigationBottom} maxWidth="xl">
        <Footer />
      </Container>
      <MyMenu
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        abrir={isMenuOpen}
      />
      {/* <NavigationBottom totalPro={countPedidosLocal} /> */}
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
