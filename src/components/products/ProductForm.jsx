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

const ProductForm = ({ handleChange, product, handleSave }) => {
  const { description, code, sale_price, purchase_price, bulk_price, bulk } =
    product;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="txtDescription"
            name="description"
            label="Descripcion"
            fullWidth
            value={description}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="txtCodigo"
            name="code"
            value={code}
            onChange={handleChange}
            label="Codigo"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">
              Precio compra
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              name="purchase_price"
              value={purchase_price}
              onChange={handleChange}
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
              name="sale_price"
              value={sale_price}
              onChange={handleChange}
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
              name="bulk_price"
              value={bulk_price}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Precio granel"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={bulk} name="bulk" onChange={handleChange} />
              }
              label="Venta a granel"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth onClick={handleSave}>
            Guardar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductForm;
