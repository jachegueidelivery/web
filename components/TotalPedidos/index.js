import Badge from "@material-ui/core/Badge";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import LocalStorageHandler from "../LocalStorageHandler";

const TotalPedidos = props => {
  const [countPedidosLocal, setCountPedidosLocal] = useState(!1);

  useEffect(() => {
    setCountPedidosLocal(LocalStorageHandler.count("products"));
  });

  if (props.countProdutos) {
    return (
      <Badge
        color="secondary"
        badgeContent={
          <>
              {props.countProdutos}
          </>
        }
        showZero
      >
        <ShoppingCartOutlined />
      </Badge>
    );
  } else {
    //Tela Inicial
    return (
      <Badge badgeContent={countPedidosLocal} showZero color="secondary">
        <ShoppingCartOutlined />
      </Badge>
    );
  }
};

export default TotalPedidos;
