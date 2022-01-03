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
  FormHelperText,
} from "@mui/material";

const ProductForm = ({
  handleChange,
  product,
  handleSave,
  newProduct,
  errors,
}) => {
  const { description, code, sale_price, purchase_price, bulk_price, bulk } =
    product;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            error={errors["description"] ? true : false}
            helperText={errors["description"]}
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
            error={errors["code"] ? true : false}
            helperText={errors["code"]}
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
              error={errors["purchase_price"] ? true : false}
            />
            <FormHelperText
              id="outlined-weight-helper-text"
              error={errors["purchase_price"] ? true : false}
            >
              {errors["purchase_price"]}
            </FormHelperText>
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
              error={errors["sale_price"] ? true : false}
            />
            <FormHelperText
              id="outlined-weight-helper-text"
              error={errors["sale_price"] ? true : false}
            >
              {errors["sale_price"]}
            </FormHelperText>
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
              error={errors["bulk_price"] ? true : false}
            />
          </FormControl>
          <FormHelperText
            id="outlined-weight-helper-text"
            error={errors["bulk_price"] ? true : false}
          >
            {errors["bulk_price"]}
          </FormHelperText>
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
            {!newProduct ? "Editar producto" : "Crear producto"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductForm;
