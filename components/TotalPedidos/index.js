import React, { useState, useEffect } from "react";
import Badge from "@material-ui/core/Badge";
import { ShoppingCartOutlined } from "@material-ui/icons";
import LocalStorageHandler from "../LocalStorageHandler";
import CircularProgress from "@material-ui/core/CircularProgress";

const TotalPedidos = props => {
  const [countPedidosLocal, setCountPedidosLocal] = useState(!1);
  const [carregado, setCarregado] = useState(!1);

  useEffect(() => {
    setCarregado(true);
    setCountPedidosLocal(LocalStorageHandler.count("products"));
  });

  if (props.countProdutos) {
    return (
      <Badge badgeContent={props.countProdutos} showZero color="primary">
        <ShoppingCartOutlined />
      </Badge>
    );
  } else {
    //Tela Inicial
    return (
      <Badge badgeContent={countPedidosLocal} showZero color="primary">
        <ShoppingCartOutlined />
      </Badge>
    );
  }
};

export default TotalPedidos;
