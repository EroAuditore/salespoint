import React from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const ProductForm = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="txtDescription"
            name="txtDescription"
            label="Descripcion"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField id="txtCodigo" label="Codigo" name="txtCodigo" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">
              Precio compra
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              //   value={values.amount}
              //   onChange={handleChange("amount")}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Precio compra"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">
              Precio venta
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              //   value={values.amount}
              //   onChange={handleChange("amount")}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Precio venta"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">
              Precio granel
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              //   value={values.amount}
              //   onChange={handleChange("amount")}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Precio granel"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Venta a granel" />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth>
            Guardar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductForm;
