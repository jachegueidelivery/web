import React, {Fragment, useState, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

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
  appBarBottom: {
    top: "auto",
    bottom: 0
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
  carregando: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
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
    backgroundColor: "rgba(245,245,245,0.8)"
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
    textAlign: "center",
    width: 40
  }
}));


const SpinnerDelivery = (props) => {
	
const classes = useStyles();
/*const [labelIni, setLabelIni] = useState("Carregando produtos, aguarde, por gentileza... ");

useEffect(()=>{
 setLabelIni(props.label);
})
*/

	return(

	<Fragment>
		<Grid className={classes.carregando}>
              <Chip
                avatar={<CircularProgress disableShrink size={20} />}
                label={props.label}
                variant="outlined"
                style={{ border: 0 }}
              />
            </Grid>
	</Fragment>
);
	
}

export default SpinnerDelivery;