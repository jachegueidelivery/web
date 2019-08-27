import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
/**
 * Componente categoria
 */
function Categorias(props) {
  return (
    <>
      <List style={{ border: "0px solid red", padding: "0" }}>
        <ListItem>
          <ListItemText
            primary={
              <b>
                CATEGORIAS
              </b>
            }
          />
          <ListItemSecondaryAction></ListItemSecondaryAction>
        </ListItem>
      </List>
      <Divider light variant="middle" />
      {props.datacat.map(item => {
        return (
          <>
            {item.mostrar && (
              <>
                <List style={{ border: "0px solid red", padding: "0" }}>
                  <ListItem>
                    <ListItemText
                     secondary={
                        <Typography color="secondary"><b>
                          {item.nome}
                        </b></Typography>
                      }
                    />
                    <ListItemSecondaryAction>
                      <Typography color="secondary">
                        <b>{item.quantidade}</b>
                      </Typography>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
                <Divider light variant="middle" />
              </>
            )}
          </>
        );
      })}
    </>
  );
}

export default Categorias;
