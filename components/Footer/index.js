import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

let Footers = [
  {
    title: "Compania",
    description: [
      { label: "Quem somos", url: "#" },
      { label: "História", url: "#" },
      { label: "Fale conosco", url: "#" }
    ]
  },
  {
    title: "Características",
    description: [
      { label: "Cool stuff", url: "#" },
      { label: "Random feature", url: "#" },
      { label: "Team feature", url: "#" },
      { label: "Developer stuff", url: "#" },
      { label: "Another one", url: "#" }
    ]
  },
  {
    title: "Faça Parte",
    description: [
      { label: "Cadastrar Empresa", url: "#" },
      { label: "Resource name", url: "#" },
      { label: "Another resource", url: "#" },
      { label: "Final resource", url: "#" }
    ]
  },
  {
    title: "Siga-nos",
    description: [
      { label: "Facebook", url: "#" },
      { label: "Youtube", url: "#" },
      { label: "Twitter", url: "#" },
      { label: "Instagram", url: "#" },
      { label: "Linkedin", url: "#" }
    ]
  },
  {
    title: "Aplicativos",
    description: [
      { label: "Android", url: "#" },
      { label: "iPhone iOS", url: "#" }
    ]
  }
];

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary">
      &#169;Copyright 2019 - Empresa -<br />
      Todos os direitos reservados
      {/* <Link color="inherit" href="#">
        LINK AQUI
      </Link> */}
    </Typography>
  );
}

const useStylesMy = makeStyles(theme => ({
  footerEnd: {
    border:"0px solid lime !important", 
    padding:0,
    margin:0
  },
  footer2:{
    padding:0
  }
}));

/**
 * Footer (Rodapé)
 */
function Footer(props) {
  let _footer = props.footer == undefined ? Footers : props.footer;
  const classes = useStylesMy();
  return (
    <>
      <Container maxWidth="md" component="footer" p={0} className={classes.footer2}>
        <Grid
           container
           spacing={0}
           direction="row"
           justify="space-between"
           alignItems="flex-start"
           p={0}
        >
          {_footer.map((footer, key) => (
            <Grid item xs={6} lg={2} md={2} sm={2} key={key} style={{padding:0}}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item, subKey) => {
                  return (
                    <li key={subKey}>
                      <Link
                        href={item.url}
                        variant="subtitle1"
                        color="textSecondary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
      <br/><Divider /><br/>
      <Container maxWidth="md" component="footer" p={0}  className={classes.footer2}>
        <Grid
          container
          spacing={0}
          p={0}
          className={classes.footer2}
        >
          <Grid item xs={6} lg={8} sm={8} md={8} className={classes.footerEnd}>
            <MadeWithLove />
          </Grid>
          <Grid item xs={6} lg={2} sm={2} md={2} className={classes.footerEnd}/>
          <Grid item xs={6} lg={2} sm={2} md={2} className={classes.footerEnd}/>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Footer;
