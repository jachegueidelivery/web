import React, { useState, useEffect } from "react";
import Menu from "@material-ui/core/Menu";
import Carrinho from "./Carrinho";
import LocalStorageHandler from "./LocalStorageHandler";

const renderMenu = props => {

  const [countPedidosLocal, setCountPedidosLocal] = useState(0);

  function onAtualizarCount() {
    setCountPedidosLocal(LocalStorageHandler.count("products"));
  }

  useEffect(() => {
    onAtualizarCount();
  }, []);

  const menuId = "primary-search-account-menu-dois";

  return (
    <Menu
      anchorEl={props.anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={props.abrir}
      onClose={props.handleMenuClose}
    >
      <div style={{ padding: 10 }}>
       <Carrinho count={countPedidosLocal} />
      </div>
    </Menu>
  );
};

export default renderMenu;
