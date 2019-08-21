import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Home, ShoppingCartOutlined, Check } from "@material-ui/icons";
import TotalPedidos from "./TotalPedidos";
import Loadable from "react-loadable";
import MyMenu from "./Menu";
import LazyLoad from "./LazyLoad";

const DialogFormConfirm = Loadable({
  loader: () => import("./DialogFormConfirm"),
  loading() {
    return <LazyLoad height="30px" margintop="5px" />;
  }
});
const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor:"#f5f5f5",
    boxShadow:"0px 0px 30px 0px rgba(0,0,0,0.2)"
  }
});

export default function LabelBottomNavigation(props) {

  const classes = useStyles();

  const [value, setValue] = useState("recents");
  
  const [anchorEl, setAnchorEl] = useState(null);
  
  const [openDialog, setOpenDialog] = useState(false);

  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  return (
    <Fragment>
     <MyMenu
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        abrir={open}
      />
      <BottomNavigation
        value={value}
        className={classes.stickToBottom}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction
          label="INÍCIO"
          value="recents"
          icon={<Home color="primary" fontSize="small" />}
          onClick={()=>window.location.href="../"}
        />
        <BottomNavigationAction
          label="CARRINHO"
          value="favorites"
          onClick={handleMenu}
          icon={<TotalPedidos countProdutos={props.totalPro}/>}
        />
        <BottomNavigationAction
          label="CONCLUIR PEDIDO"
          value="nearby"
          onClick={()=>setOpenDialog(true)}
          icon={<Check color="primary" fontSize="small" />}
        />
      </BottomNavigation>
      <DialogFormConfirm
        open={openDialog}
        onClose={() => {
          setOpenDialog(false);
        }}
      />
    </Fragment>
  );
}
