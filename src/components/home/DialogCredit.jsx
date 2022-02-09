import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CountUp from "react-countup";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { makeStyles } from "@mui/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
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

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const DialogCredit = ({
  handleClose,
  open,
  Total,
  totalCredito,
  montoTotal,
  closeCredit,
  clientsList,
  handleChange,
  selectedClient,
}) => {
  const classes = useStyles();
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Cargar a Credito
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h2" gutterBottom color="textPrimary">
              Cliente:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel id="clienteNombre">Nombre</InputLabel>
              <Select
                labelId="clienteNombre"
                id="clienteNombre"
                value={selectedClient}
                onChange={handleChange}
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
          <Grid item xs={4}>
            <Typography variant="h5" gutterBottom color="textSecondary">
              En credito
            </Typography>
            <Typography variant="h6" gutterBottom color="textPrimary">
              <CountUp
                start={0}
                end={totalCredito}
                duration={2}
                separator=","
                decimals={2}
                decimal="."
                prefix="$ "
              />
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" gutterBottom color="textSecondary">
              Total
            </Typography>
            <Typography variant="h6" gutterBottom color="textPrimary">
              <CountUp
                start={0}
                end={Total}
                duration={2}
                separator=","
                decimals={2}
                decimal="."
                prefix="$ "
              />
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" gutterBottom color="textSecondary">
              Total a cargar
            </Typography>
            <Typography variant="h6" gutterBottom color="textPrimary">
              <CountUp
                start={0}
                end={montoTotal}
                duration={2}
                separator=","
                decimals={2}
                decimal="."
                prefix="$ "
              />
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeCredit}>Cargar</Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default DialogCredit;
