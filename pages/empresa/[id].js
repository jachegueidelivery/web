import React from "react";
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
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { Menu, Search, ShoppingCartOutlined } from '@material-ui/icons';
import { useRouter } from "next/router";

import cards from "../../../empresas";

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

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"]
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one"
    ]
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource"
    ]
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"]
  }
];
const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      background:
        "url(https://res.cloudinary.com/delivery-com/image/fetch/https%3A%2F%2Fs3.amazonaws.com%2Fs3.delivery.com%2FHomepage%2Fdefault-small.jpg)",
      backgroundRepeat: "repeat",
      backgroundSize: "contain",
      backgroundPosition: "5% 1%"
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
    width:400,
    margin:"0px auto",
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5
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
  }
}));

export default function Pricing() {
  
  const router = useRouter();

  const handleClick = () => {
    console.log("this is:", this);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
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
            Delivery  {router.query.id}</Link>
          </Typography>
          <nav>
            {/* <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Support
            </Link>*/}
          </nav>
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
      {/* Hero unit */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h4"
          variant="h4"
          align="center"
          color="primary"
          gutterBottom
        >
          Onde está a sua fome?
          <br />
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
        >
          <br />
          {/* Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default Material-UI components
          with little customization. */}
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container className={classes.cardGrid} maxWidth="md">
      {router.query.id}
        {/* End hero unit */}
        <Grid container spacing={4} style={{cursor:"pointer"}}>
          {cards.map((card, id) => (
            <Grid item key={card.id} title={"Clique para entrar em " + card.title} xs={12} sm={6} md={4} onClick={()=>{
              console.log(card);
              window.location ="/post/"+card.id
            }}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.img}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography>
                  {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    dataobj={card}
                    onClick={handleClick}
                  >
                    Detalhes...
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
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
      {/* End footer */}
    </React.Fragment>
  );
}