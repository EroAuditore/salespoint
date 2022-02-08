import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TableItems from "./TableItems";
import Toast from "./../common/Toast";
import { fetchClients, getCreditTickets } from "../home/SalesApi";
import { FormControl, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TotalCard from "./../common/TotalCard";
import DialogAlert from "../common/DialogAlert";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "590px",
}));

const useStyles = makeStyles(() => ({
  formControl: {
    margin: "1rem",
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: "1rem",
  },
}));

const Credits = () => {
  const [clientsList, setClientsList] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [selectedClient, setSelectedClient] = useState("0");
  const [creditInfo, setCreditInfo] = useState({ total: 0 });
  const classes = useStyles();

  const toggleAlert = () => {
    setOpenAlert(!openAlert);
  };

  const handleCloseCredit = () => {
    toggleAlert();
    setTickets([]);
    setSelectedClient("0");
    setCreditInfo({ total: 0 });
    console.log("creditInfo", creditInfo);
  };

  const getClientInfo = async (ClientID) => {
    const { data } = await getCreditTickets(ClientID);

    const { credit, tickets } = data;
    setTickets(tickets);
    setCreditInfo({ ...credit });
  };

  const handleChangeClient = (event) => {
    setSelectedClient(event.target.value);
    getClientInfo(event.target.value);
  };

  const loadClients = async () => {
    const result = await fetchClients();
    setClientsList(result.data.data);
  };

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="clienteNombre"
                  id="clienteNombre"
                  value={selectedClient}
                  onChange={handleChangeClient}
                  fullWidth
                >
                  <MenuItem value="0" key="0">
                    Seleccionar cliente
                  </MenuItem>
                  {clientsList.map((c) => (
                    <MenuItem value={c.id} key={c.id}>
                      {c.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Grid>

        <Grid item xs={8}>
          <Item>
            <TableItems items={tickets} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <TotalCard total={creditInfo.total} />
          <Button
            variant="contained"
            onClick={toggleAlert}
            fullWidth
            sx={{ marginTop: "0.5rem" }}
          >
            Cerrar
          </Button>
        </Grid>
        <Toast />
        <DialogAlert
          handleClose={toggleAlert}
          handleOk={handleCloseCredit}
          text={"Deseas cerrar el credito?"}
          open={openAlert}
        />
      </Grid>
    </>
  );
};

export default Credits;
