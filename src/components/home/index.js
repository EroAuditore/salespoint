import React, { useState, useRef, useEffect, useCallback } from "react";
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
import DialogBulk from "./DialogBulk";
import SaveSell from "./sellApi";

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
  const [open, setOpen] = useState(false);
  const [openBulk, setOpenbulk] = useState(false);
  const [bulkProduct, setBulkProduct] = useState({
    id: 0,
    description: "",
    code: "",
    sale_price: "",
    purchase_price: "",
    bulk_price: "",
    bulk: false,
    sub_total: 0,
  });
  const inputChargeRef = useRef();
  const codeRef = useRef();
  const bulkRef = useRef();

  const findProduct = () => {
    const { data: productos } = data;
    const product = productos.find((product) => product.code === barCode);
    return product || {};
  };

  const handleOnChange = (e) => {
    setBarcode(e.target.value);
  };

  const handleChange = (e) => {
    setCantidad(e.target.value);
    setCambio(e.target.value - total);
  };

  const handleOpen = () => {
    setTimeout(() => {
      inputChargeRef.current.focus();
    }, 100);
    setOpen(true);
  };
  const handleClose = () => {
    setTimeout(() => {
      setOpen(false);
    }, 100);
    setCantidad("");
    setTimeout(() => {
      codeRef.current.focus();
    }, 200);
  };

  const handleOpenBulk = () => {
    setOpenbulk(true);
    setTimeout(() => {
      bulkRef.current.focus();
    }, 100);
  };

  const addBulkProduct = () => {
    setTotal(parseFloat(total) + parseFloat(bulkProduct.total));
    setPurchase([...purchase, bulkProduct]);
    setOpenbulk(false);
    setTimeout(() => {
      codeRef.current.focus();
    }, 100);
  };

  const closeSell = () => {
    let todayDate = new Date().toISOString();
    let sell = {
      sell: {
        total: total,
        date: todayDate,
        credit: false,
      },
    };
    SaveSell(sell);
    setTotal(0);
    setCambio(0);
    setPurchase([]);
    handleClose();
  };

  const handleCloseBulk = () => {
    setBarcode("");
    setOpenbulk(false);
    setTimeout(() => {
      codeRef.current.focus();
    }, 100);
  };
  const handleChangeBulk = (e) => {
    setBulkProduct({
      ...bulkProduct,
      sub_total: e.target.value,
      total: e.target.value,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const product = { ...findProduct() };
      if (Object.keys(product).length !== 0) {
        product.id = uuid();
        product.quantity = 1;
        if (product.bulk === true) {
          //display bulk dialog to get the price
          setBulkProduct({ ...product });
          handleOpenBulk();
        } else {
          //Sub total is for bulk items
          product.sub_total = product.sale_price;
          product.total = product.sub_total * product.quantity;
          setTotal(parseFloat(total) + parseFloat(product.total));
          setPurchase([...purchase, product]);
        }
      }
      setBarcode("");
    }
    if (e.key === "F2" || e.key === "c" || e.key === "C") {
      handleOpen();
    }
  };

  useEffect(() => {
    codeRef.current.focus();
  }, []);

  const OnKeyDown = (e) => {
    if (e.key === "Enter") {
      if (openBulk) {
        addBulkProduct();
      }
      if (open) {
        closeSell();
      }
    }
  };
  const deleteItem = useCallback(
    (product) => () => {
      setTotal(total - product.row.total);
      setPurchase(purchase.filter((item) => item.id !== product.id));
    },
    [purchase, total]
  );

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
            inputRef={codeRef}
          />
        </Grid>
        <Grid item xs={9}>
          <Item>
            <TableItems items={purchase} remove={deleteItem} />
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
        inputChargeRef={inputChargeRef}
        handleKeyDown={OnKeyDown}
        closeSell={closeSell}
      />
      <DialogBulk
        handleClose={handleCloseBulk}
        open={openBulk}
        sale_price={bulkProduct.sale_price}
        bulk_price={bulkProduct.bulk_price}
        cantidad={cantidad}
        handleChange={handleChangeBulk}
        inputChargeRef={bulkRef}
        handleKeyDown={OnKeyDown}
        addBulkProduct={addBulkProduct}
      />
    </Box>
  );
};

export default Home;
