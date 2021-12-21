import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import TableItems from "./TableItems";
import { useSelector } from "react-redux";
import ProductForm from "./ProductForm";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "500px",
}));
const Products = () => {
  const { data } = useSelector((state) => state.products);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="txtSearch"
            name="txtSearch"
            label="Busqueda producto"
            variant="outlined"
            fullWidth
            //   value={barCode}
            //   onChange={handleOnChange}
            //   onKeyDown={handleKeyDown}
          />
        </Grid>

        <Grid item xs={4}>
          <Item>
            <ProductForm />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <TableItems items={data} />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Products;
