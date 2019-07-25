import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Chip from "@material-ui/core/Chip";

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
	backgroundColor:'rgba(245,245,245,0.8)'
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
    textAlign: "center"
  }
}));

function _toUpperCase(str) {
  return str;
}

function ListaProdutos(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div className={classes.demo}>
            {Object.values(props.shows).map(produto => (
              <>
                {produto.id != undefined && (
                  <div
                    className={classes.listaProdutos}
                    key={produto.id}
                    title={"Clique para entrar em " + produto.nome}
                  >
                    <div className={classes.itemAvatar}>
                      <img
                        className={classes.itemAvatarImg}
                        alt=""
                        src={produto.imagem}
                      />
                    </div>
                    <div className={classes.itemContent}>
                      <Typography>
                        <b>{_toUpperCase(produto.nome)}</b>
                      </Typography>
                      <Typography>
                        <span>{produto.descricao}</span>
                      </Typography>
                      <sub>
                        <strong>Kg</strong>
                      </sub>
                      <FormControl>
                        <InputLabel htmlFor="my-input">Observação:</InputLabel>
                        <Input
                          id="my-input"
                          aria-describedby="my-helper-text"
                        />
                      </FormControl>
                    </div>
                    <div className={classes.itemAcoes}>
                      <br />
                      <Typography>
                        Preço <br /> <b>R$ {produto.preco}</b>
                      </Typography>
                      <small>Quantidade:</small>
                      <ButtonGroup
                        variant="contained"
                        color="primary"
                        aria-label="Split button"
                      >
                        <Button>-</Button>
                        <input
                          value={1}
                          size="2"
                          className={classes.inputQuantidade}
                        />
                        <Button
                          color="primary"
                          variant="contained"
                          size="small"
                          aria-haspopup="true"
                          value="+"
                        >
                          +
                        </Button>
                      </ButtonGroup>
                      <br />
                      <Chip
                        className={classes.chip}
                        color="primary"
                        label={`Valor a pagar${"\n\n"}R$ ${produto.preco}`}
                      />
                      <br />
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function MediaControlCard(theme, classes) {
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardMedia
          className={classes.cover}
          image="https://material-ui.com/static/images/cards/paella.jpg"
          title="Live from space album cover"
        />
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="Previous">
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>
          <IconButton aria-label="Play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="Next">
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

const Index = props => {
  const router = useRouter();

  const [value, setValue] = React.useState(0);
  const [dense, setDense] = React.useState(!1);
  const [secondary, setSecondary] = React.useState(!1);

  const theme = useTheme();

  const classes = useStyles();

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  const handleClick = () => {
    console.log("this is:", this);
  };

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
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Sair
          </Button>
          <IconButton
            aria-label="Account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <ShoppingCartOutlined />
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
            {/* <Typography
          component="h4"
          variant="h4"
          align="center"
          color="primary"
          gutterBottom
        >
          Pesquise produtos aqui...
          <br />
        </Typography> */}

            {/* INPUT */}
            <Paper className={classes.rootinput}>
              <IconButton className={classes.iconButton} aria-label="Menu">
                <Menu />
              </IconButton>
              <InputBase
                className={classes.textFieldInput}
                placeholder={`Pesquise produtos aqui...`}
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
          {ListaProdutos(props)}
        </TabPanel>
        {/* TAB 2 */}
        <TabPanel value={value} index={1}>
          <Typography>Tab 2</Typography>
        </TabPanel>
        {/* TAB 3 */}
        <TabPanel value={value} index={2}>
          Tab 3
        </TabPanel>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {Footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
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
          {MadeWithLove(props)}
        </Box>
      </Container>
      {/* End footer */}
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
