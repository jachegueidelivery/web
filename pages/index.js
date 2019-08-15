import React, { useState, useEffect, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Footers from "../components/footer";
import LocalStorageHandler from "../components/LocalStorageHandler";
import MyMenu from "../components/Menu";
import ApiRest from "../components/ApiRest";
import SpinnerDelivery from "../components/SpinnerDelivery";
import {
  Menu,
  Search,
  GridOn,
  ReorderRounded,
  ShoppingCartOutlined
} from "@material-ui/icons";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Criado por "}
      <Link color="inherit" href="#">
        Teste
      </Link>
      {" team."}
    </Typography>
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
    padding: theme.spacing(8, 0, 6)
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
  cardMedia: {
    paddingTop: "56.25%" // 16:9
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
    justifyContent: "center",
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
  }
}));

/**
 * Footer (Rodapé)
 */
function Footer(classes) {
  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
      <Grid container spacing={4} justify="space-evenly">
        {Footers.map((footer, id) => (
          <Grid item xs={6} sm={3} key={id + 1}>
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
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
  );
}

/**
 * Mostra os ícones das empresas
 */
function MostrarEmpresas(props, classes) {

  const [empresas, setEmpresas] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await ApiRest.get("/empresas");
      setEmpresas(result.data);
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
   {empresas.length === undefined && (
	<SpinnerDelivery label=" Carregando empresas, aguarde, por gentileza... " />
      )}

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
            window.location = "/empresa/" + empresa.url.toLowerCase();
          }}
        >
          {empresa.nome_fantasia != null && (
            <Card
              className={classes.card}
              onMouseOut={ev => mouseOutStyle(ev, empresa.id)}
              onMouseOver={ev => mouseOverStyle(ev, empresa.id)}
            >
              <CardMedia
                className={classes.cardMedia}
                image={empresa.logomarca}
              />
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
          )}
        </Grid>
      ))}
    </Grid>
</Fragment>
  );
}

/*
 */

const Main = props => {

  const [anchorEl, setAnchorEl] = useState(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const [countPedidosLocal, setCountPedidosLocal] = useState(0);

  const [data, setData] = useState([]);

  const classes = useStyles();

  const isMenuOpen = Boolean(anchorEl);

  function onAtualizarCount() {
    setCountPedidosLocal(LocalStorageHandler.count("products"));
  }

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("products")));
    onAtualizarCount();
  });

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
            <Badge
              className={classes.margin}
              badgeContent={countPedidosLocal}
              color="primary"
            >
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <br />
        <Typography
          component="h4"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Alguma mensagem impactante aqui KKK
        </Typography>
        {/* INPUT */}
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
        <br />
        {/* End hero unit */}
        {MostrarEmpresas(props, classes)}
      </Container>
      {/* MenuFooter */}
      {Footer(classes)}
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

export default Main;
