import React, { useState, useCallback, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TableItems from "./TableItems";
import { useDispatch, useSelector } from "react-redux";

import { addClient, fetch, removeClient } from "../../redux/reducers/clients";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "590px",
}));

const Clients = () => {
  const [client, setClient] = useState("");
  const dispatch = useDispatch();

  const hanldeAddClient = () => {
    let cliente = {
      name: client,
    };
    dispatch(addClient(cliente));
    setClient("");
  };
  const handleChangeClient = (e) => {
    setClient(e.target.value);
  };

  const items = useSelector((sate) => sate.clients.clients);
  const deleteCliente = useCallback(
    (cliente) => () => {
      dispatch(removeClient(cliente.row));
    },
    []
  );

  useEffect(() => {
    dispatch(fetch());
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                id="txtClient"
                name="txtClient"
                label="Nombre del cliente"
                variant="outlined"
                fullWidth
                value={client}
                onChange={handleChangeClient}
                // onKeyDown={handleKeyDown}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                fullWidth
                height="100"
                onClick={hanldeAddClient}
                sx={{ height: "100%" }}
              >
                Agregar
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <TableItems items={items} deleteCliente={deleteCliente} />
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Clients;
