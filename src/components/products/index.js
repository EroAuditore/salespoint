import React, { useState, useCallback } from "react";
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

  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    id: 0,
    description: "",
    code: "",
    sale_price: "",
    purchase_price: "",
    bulk_price: "",
    bulk: false,
  });
  const handleChange = (e) => {
    if (e.target.name === "bulk") {
      setProduct({ ...product, [e.target.name]: e.target.checked });
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleChangeSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setProducts(findProduct(e.target.value));
    }
  };

  const handleSave = () => {
    setProducts((prevRows) =>
      prevRows.map((row) =>
        row.id === product.id ? { ...row, ...product } : row
      )
    );
    setProduct({
      id: 0,
      description: "",
      code: "",
      sale_price: "",
      purchase_price: "",
      bulk_price: "",
      bulk: false,
    });
  };

  const handleEdit = useCallback(
    (product) => () => {
      setProduct({ ...product.row });
    },
    []
  );

  const findProduct = (prod) => {
    let productFilter = data.filter((product) =>
      product.description.toLowerCase().includes(prod.toLowerCase())
    );

    return productFilter;
  };

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
            value={searchText}
            onChange={handleChangeSearch}
            onKeyDown={handleKeyDown}
          />
        </Grid>

        <Grid item xs={4}>
          <Item>
            <ProductForm
              handleChange={handleChange}
              product={product}
              handleSave={handleSave}
            />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <TableItems items={products} editProduct={handleEdit} />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Products;
