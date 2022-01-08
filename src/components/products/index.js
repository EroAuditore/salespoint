import React, { useState, useCallback } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TableItems from "./TableItems";
import { useSelector, useDispatch } from "react-redux";
import { object, string, number } from "yup";

import ProductForm from "./ProductForm";
import { updateProducts, createProducts } from "./../../redux/actions/products";
import Toast from "./../common/Toast";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "590px",
}));
const Products = () => {
  const { data } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState({});
  const [newProduct, setNewProduct] = useState(true);
  const [product, setProduct] = useState({
    id: 0,
    description: "",
    code: "",
    sale_price: "",
    purchase_price: "",
    bulk_price: "",
    bulk: false,
  });

  const schema = object({
    description: string().required("Desscripción es requerida"),
    code: string().required("Codigo es requerido"),
    sale_price: number()
      .typeError("Precio debe ser numero")
      .required("Precio de venta requerido"),
    purchase_price: number()
      .typeError("Precio debe ser numero")
      .required("Precio de venta requerido"),
    bulk_price: number().typeError("Precio debe ser numero minimo 0"),
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

  const editProduct = () => {
    dispatch(updateProducts(product));
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
    setNewProduct(true);
  };

  const createProduct = () => {
    dispatch(createProducts(product));
    setProducts([...products, product]);
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

  const handleSave = async () => {
    let er = {};
    if (!newProduct) {
      editProduct();
    } else {
      await schema
        .validate(product, { abortEarly: false })
        .catch(function (err) {
          err.inner.forEach((e) => {
            er = {
              ...er,
              [e.path]: e.message,
            };

            setErrors(er);
          });
        })
        .then(() => {
          if (Object.keys(er).length === 0) {
            setErrors({});
            createProduct();
          }
        });
    }
  };

  const handleEdit = useCallback(
    (product) => () => {
      setNewProduct(false);
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
          <Grid container spacing={2}>
            <Grid item xs={10}>
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
            <Grid item xs={2}>
              <Button variant="contained" fullWidth height="100">
                Buscar
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <ProductForm
              errors={errors}
              handleChange={handleChange}
              product={product}
              handleSave={handleSave}
              newProduct={newProduct}
            />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <TableItems items={products} editProduct={handleEdit} />
          </Item>
        </Grid>
        <Toast />
      </Grid>
    </>
  );
};

export default Products;
