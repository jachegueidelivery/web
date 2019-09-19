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

function SignIn(props) {
  const inputRef = useRef();

  const [isEditing, setEditing] = useState(false);
  const [_emailOrFone, set_EmailOrFone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (!isEditing) {
      inputRef.current.focus();
      setEditing(!0);
    }
  }, [isEditing]);

  const classes = useStyles();

  /**
   * Define o email ou celular do cliente:
   */
  useEffect(() => {
    props.emailOrPhone(_emailOrFone);
  }, [_emailOrFone]);

  /**
   * Define o endereço:
   */
  useEffect(() => {
    props.endereco(address);
  }, [address]);

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
            onChange={ev => set_EmailOrFone(ev.target.value)}
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
            onChange={ev => setAddress(ev.target.value)}
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

var ws = null;

export default function SimpleDialog(props) {

  const { onClose, open } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const [isConnected, setConnected] = useState(false);
  const [emailOrFone, setEmailOrFone] = useState("");
  const [address, setAddress] = useState("");

  function handleClose() {
    onClose(true);
  }

  function startChat() {
    ws = adonis.Ws("ws://127.0.0.1:3333").connect();

    ws.on("open", () => {
      console.log("connected");
      subscribeToChannel();
    });

    ws.on("error", () => {
      console.log("connected");
    });
  }

  useEffect(() => {
    if (isConnected == false) {
      startChat();
      setConnected(true);
    }
  }, [isConnected]);

  function subscribeToChannel() {
    const chat = ws.subscribe("chat");

    chat.on("error", () => {
      console.log("connected");
    });

    chat.on("message", message => {
      console.log(JSON.stringify(message));
    });
  }

  var id = 0;

  function enviarPedido() {
    ++id;

    ws.getSubscription("chat").emit("message", {
      id_client: id,
      username: emailOrFone,
      address: address,
      amount: LocalStorageHandler.getDataByKey("products").length,
      demand: JSON.stringify(LocalStorageHandler.getDataByKey("products")),
    });
    LocalStorageHandler.remove("products");
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
        <SignIn
          emailOrPhone={emailOrFone => {
            setEmailOrFone(emailOrFone);
          }}
          endereco={address => {
            setAddress(address);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="default" variant="contained">
          Fechar
        </Button>
        <Button
          onClick={enviarPedido}
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
