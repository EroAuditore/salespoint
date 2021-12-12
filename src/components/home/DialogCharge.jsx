import React, { useEffect } from "react";
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
import TextField from "@mui/material/TextField";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
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

const DialogCharge = ({
  handleClose,
  open,
  Total,
  cambio,
  cantidad,
  handleChange,
}) => {
  useEffect(() => {
    console.log("renreded");
  }, [open]);

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Cobrar
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h2" gutterBottom color="textPrimary">
              Total:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2" gutterBottom color="textPrimary">
              <CountUp
                start={Total}
                end={Total}
                duration={2}
                separator=","
                decimals={2}
                decimal="."
                prefix="$ "
              />
            </Typography>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-number"
              label="Cantidad"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              onChange={handleChange}
              value={cantidad}
              inputRef={(input) => {
                if (input != null) {
                  input.focus();
                }
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2" gutterBottom color="textPrimary">
              Cambio:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2" gutterBottom color="textPrimary">
              {cambio}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cobrar
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default DialogCharge;
