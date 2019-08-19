import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

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
    <Typography variant="body2" color="textSecondary" align="center">
      Criado por{" "}
      <Link color="inherit" href="#">
        LINK AQUI
      </Link>{" "}
      equipe
    </Typography>
  );
}

const useStyles = makeStyles({
  footer: {
    background: "white"
  }
});

/**
 * Footer (Rodapé)
 */
function Footer(props) {
  let _footer = props.footer == undefined ? Footers : props.footer;

  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" component="footer" p={0}>
        <Grid
          container
          spacing={2}
          alignContent="center"
          justify="space-evenly"
          p={0}
        >
          {_footer.map((footer, key) => (
            <Grid
              item
              xs={6}
              lg={2}
              sm={4}
              direction="row"
              justify="flex-start"
              alignItems="center"
              key={key}
            >
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item, key) => {
                  return (
                    <li key={key}>
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
      <Divider />
      <Container maxWidth="lg" component="footer" p={0}>
        <Box mt={0}>
          <MadeWithLove />
        </Box>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Footer;
