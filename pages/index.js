import React, { useState, useEffect, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Loadable from "react-loadable";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import LocalStorageHandler from "../components/LocalStorageHandler";
import MyMenu from "../components/Menu";
import LazyLoad from "../components/LazyLoad";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TotalPedidos from "../components/TotalPedidos";
import Grid from '@material-ui/core/Grid';
import {
  Menu,
  Search,
  GridOn,
  ReorderRounded,
  ShoppingCartOutlined
} from "@material-ui/icons";

const Footer = Loadable({
  loader: () => import("../components/Footer"),
  loading() {
    return (
      <>
        <LazyLoad height="0px" margintop="5px" />
      </>
    );
  }
});

const NavigationBottom = Loadable({
  loader: () => import("../components/NavigationBottom"),
  loading() {
    return (
      <>
        <LazyLoad height="30px" margintop="5px" />
        <LazyLoad height="30px" margintop="5px" />
      </>
    );
  }
});

const MostrarEmpresas = Loadable({
  loader: () => import("../components/MostrarEmpresas"),
  loading() {
    return (
      <>
        <LazyLoad height="30px" margintop="5px" />
        <LazyLoad height="30px" margintop="5px" />
      </>
    );
  }
});

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
  SiteSearchPanel__Background: {
    background:
      "-webkit-gradient(linear, left top, left bottom, color-stop(2%, rgba(236, 233, 233, 0.7)), color-stop(30%, rgba(255,255,255,0)))",
    position: "absolute",
    top: "0",
    bottom: "60%",
    left: "0",
    right: "0",
    width: "100%"
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbar2: {
    flexWrap: "wrap",
    padding: 0,
    margin: 0
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 0)
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
    flexDirection: "column",
    cursor: "pointer !important"
  },
  _grid: {
    cursor: "pointer !important"
  },
  cardContent: {
    flexGrow: 1
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
  carregando: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
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
  button: {
    margin: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  hoverUp: {
    border: "5px solid red !important"
  },
  hoverDown: {
    border: "0px solid red !important"
  },
  footerNavigationBottom: {
    background: "white"
  }
}));

/*
 */

const Main = props => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const [countPedidosLocal, setCountPedidosLocal] = useState(0);

  const [data, setData] = useState([]);

  const [openDialog, setOpenDialog] = useState(false);

  const classes = useStyles();

  const isMenuOpen = Boolean(anchorEl);

  function onAtualizarCount() {
    setCountPedidosLocal(LocalStorageHandler.count("products"));
  }

  // useEffect(() => {
  //   setData(JSON.parse(localStorage.getItem("products")));
  //   onAtualizarCount();
  // });

  function handleProfileMenuOpen(event) {
    onAtualizarCount();
    if (LocalStorageHandler.count("products") > 0) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    onAtualizarCount();
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function onChangeToGrid() {
    alert("Implementatio by Grid");
  }
  function onChangeToList() {
    alert("Implementatio by List");
  }

  return (
    <React.Fragment>
      <CssBaseline />
      {/* BARRA DE MENU SUPERIOR */}
      <div className={classes.SiteSearchPanel__Background} />
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="textPrimary"
            noWrap
            className={classes.toolbarTitle}
          >
            Delivery
          </Typography>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Entrar
          </Button>
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
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <br /> <br />
        <Typography
          component="h4"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Alguma mensagem impactante aqui
        </Typography>
        <br />
        {/* INPUT */}
        <Grid>
          <Paper className={classes.rootinput}>
            <IconButton className={classes.iconButton} aria-label="Menu">
              <Menu />
            </IconButton>
            <InputBase
              className={classes.textFieldInput}
              placeholder="Pesquisar"
              inputProps={{ "aria-label": "Search Google Maps" }}
            />
            <Divider className={classes.divider} />
            <IconButton className={classes.iconButton} aria-label="Search">
              <Search />
            </IconButton>
          </Paper>
        </Grid>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        />
      </Container>
      {/* End hero unit */}
      <Container className={classes.cardGrid} maxWidth="md">
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
              onClick={onChangeToGrid}
            >
              <GridOn />
            </IconButton>

            <Divider className={classes.divider} />
            <IconButton
              aria-label="Account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="primary"
              onClick={onChangeToList}
            >
              <ReorderRounded />
            </IconButton>
          </Toolbar>
        </AppBar>
        <br />
        {/* End hero unit */}
        <MostrarEmpresas />
      </Container>
      {/* MenuFooter */}
      <Container
        fixed={true}
        className={classes.footerNavigationBottom}
        maxWidth="xl"
      >
        <Footer />
      </Container>
      {/* End footer */}
      <MyMenu
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        abrir={isMenuOpen}
      />
      <NavigationBottom />
    </React.Fragment>
  );
};

export default Main;
