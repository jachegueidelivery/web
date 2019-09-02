import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState, useEffect, useRef } from "react";
import LocalStorageHandler from "../LocalStorageHandler";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  root: {
    textAlign: "center"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  }
}));

function SignIn() {
  
  const inputRef = useRef();

  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    if (!isEditing) {
      inputRef.current.focus();
      setEditing(!0);
    }
  }, [isEditing]);

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            id="email"
            label="Email ou Telefone"
            name="email"
            autoFocus
            inputRef={inputRef}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="endereco"
            label="Endereco"
            type="text"
            id="endereco"
          />
        </form>
      </div>
    </Container>
  );
}

export default function SimpleDialog(props) {
  const { onClose, open } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  function handleClose() {
    onClose(true);
  }

  function onCloncluirPedido() {
    alert(
      JSON.stringify(LocalStorageHandler.getDataByKey("products")) +
        "\n\n" +
        LocalStorageHandler.remove("products")
    );
    onClose(!0);
  }

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
      <DialogTitle id="responsive-dialog-title" className={classes.root}>
        <Box justifyContent="center">Concluir Pedido</Box>
      </DialogTitle>
      <DialogContent>
        <Typography>
          Verificaremos que você não está logado ou que não possui uma conta,
          então, para proseguir, digite seu número de telefone e endereço, e o
          seu pedido será feito.
        </Typography>
        <SignIn />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="default" variant="contained">
          Fechar
        </Button>
        <Button
          onClick={onCloncluirPedido}
          color="primary"
          variant="contained"
          autoFocus
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
