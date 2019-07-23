import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
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
import Zoom from "@material-ui/core/Zoom";
import { Footers } from "../components/footer";

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

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Criado por "}
      <Link color="inherit" href="https://material-ui.com/">
        Teste
      </Link>
      {" team."}
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
  }
}));

const Index = props => {
  const router = useRouter();

  const [value, setValue] = React.useState(0);

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

  /*const fabs = [
    {
      color: "primary",
      className: classes.fab,
      icon: <AddIcon />,
      label: "Add"
    },
    {
      color: "secondary",
      className: classes.fab,
      icon: <EditIcon />,
      label: "Edit"
    },
    {
      color: "inherit",
      className: clsx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
      label: "Expand"
    }
  ];*/

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
                placeholder={`Pesquise produtos aqui...${JSON.stringify(
                  router.query
                )}`}
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
          <Grid container spacing={4}>
            {props.shows.map(empresa => (
              <Grid
                item
                key={empresa.id}
                title={"Clique para entrar em " + empresa.nome_fantasia}
                xs={12}
                sm={6}
                md={4}
                className={classes._grid}
              >
                <Card className={classes.card}>
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
                    {/* <Button
                    variant="contained"
                    color="primary"
                  >
                   IR PARA A LOJA
                    <Icon className={classes.rightIcon}></Icon>
                  </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
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
          <MadeWithLove />
        </Box>
      </Container>
      {/* <div className={classes.tabContent}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="Action tabs example"
        >
          <Tab label="PRODUTOS" {...a11yProps(0)} />
          <Tab label="SEUS PEDIDOS" {...a11yProps(1)} />
          <Tab label="AVALIAÇÕES" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`
          }}
          unmountOnExit
        >
          <Fab
            aria-label={fab.label}
            className={fab.className}
            color={fab.color}
          >
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </div> */}
      {/* End footer */}
    </React.Fragment>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch("http://api.rsvtelecom.com.br/empresas");

  const data = await res.json();

  return {
    shows: data
  };
};

export default Index;
