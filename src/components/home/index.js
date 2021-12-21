import React, { useState } from "react";
import uuid from "react-uuid";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import TotalCard from "./TotalCard";
import TableItems from "./TableItems";
import ActionsCard from "./ActionsCard";
import DialogCharge from "./DialogCharge";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "500px",
}));

const Home = () => {
  const [barCode, setBarcode] = useState("");
  const [purchase, setPurchase] = useState([]);
  const data = useSelector((state) => state.products);
  const [total, setTotal] = useState(0);
  const [cambio, setCambio] = useState(0);
  const [cantidad, setCantidad] = useState("");
  const [open, setOpen] = React.useState(false);

  const findProduct = () => {
    const { data: productos } = data;
    const product = productos.find((product) => product.code === barCode);
    return product;
  };

  const handleOnChange = (e) => {
    setBarcode(e.target.value);
  };

  const handleChange = (e) => {
    setCantidad(e.target.value);
    setCambio(e.target.value - total);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const product = Object.create(findProduct());
      if (product !== typeof "undefined") {
        product.id = uuid();
        product.quantity = 1;
        //Sub total is for bulk items
        product.sub_total = product.sale_price;
        product.total = product.sub_total * product.quantity;
        setTotal(total + product.total);
        setPurchase([...purchase, product]);
        setBarcode("");
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="codeBarText"
            name="codeBarText"
            label="Code bar"
            variant="outlined"
            fullWidth
            value={barCode}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
          />
        </Grid>
        <Grid item xs={9}>
          <Item>
            <TableItems items={purchase} />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TotalCard total={total} />
            </Grid>
            <Grid item xs={12}>
              <ActionsCard handleOpen={handleOpen} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <DialogCharge
        handleClose={handleClose}
        open={open}
        Total={total}
        cantidad={cantidad}
        cambio={cambio}
        handleChange={handleChange}
      />
    </Box>
  );
};

export default Home;
