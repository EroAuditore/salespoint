import React, { useState, useRef, useEffect, useCallback } from "react";
import uuid from "react-uuid";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import TotalCard from "./../common/TotalCard";
import TableItems from "./TableItems";
import ActionsCard from "./ActionsCard";
import DialogCharge from "./DialogCharge";
import DialogBulk from "./DialogBulk";
import {
  SaveSale,
  fetchClients,
  SaveCredit,
  getClientCreditInfo,
} from "./SalesApi";

import DialogCredit from "./DialogCredit";
import DialogAlert from "./../common/DialogAlert";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "550px",
}));

const Home = () => {
  const [barCode, setBarcode] = useState("");
  const [purchase, setPurchase] = useState([]);
  const [clientsList, setClientsList] = useState([]);
  const [selectedClient, setSelectedClient] = useState("0");
  const data = useSelector((state) => state.products);
  const [total, setTotal] = useState(0);
  const [totalCredito, setTotalCredito] = useState(0);
  const [montoTotal, setMontoTotal] = useState(0);
  const [cambio, setCambio] = useState(0);
  const [cantidad, setCantidad] = useState("");
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openCredit, setOpenCredit] = useState(false);
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

  const handleCloseCredit = () => {
    setTimeout(() => {
      setSelectedClient("");
      setOpenCredit(false);
      setTotalCredito(0);
      setMontoTotal(0);
      toggleAlert();
    }, 100);

    setTimeout(() => {
      codeRef.current.focus();
    }, 200);
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

  const handleOpenCredit = () => {
    setOpenCredit(true);
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

  const closeSale = () => {
    let todayDate = new Date().toISOString();
    let ticket = JSON.parse(JSON.stringify(purchase));

    let sale = {
      sale: {
        total: total,
        date: todayDate,
        credit: false,
      },
      ticket,
    };

    let json = JSON.stringify(sale);

    SaveSale(json);
    setTotal(0);
    setCambio(0);
    setPurchase([]);
    handleClose();
  };

  const closeCredit = () => {
    let todayDate = new Date().toISOString();
    let ticket = JSON.parse(JSON.stringify(purchase));

    let sale = {
      sale: {
        total: total,
        date: todayDate,
        credit: true,
      },
      ticket,
      total: montoTotal,
      client_id: selectedClient,
    };
    let json = JSON.stringify(sale);
    console.log("credit save", json);
    SaveCredit(json);
    setTotal(0);
    setCambio(0);
    setTotalCredito(0);
    setMontoTotal(0);
    setPurchase([]);
    handleCloseCredit();
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

  const loadClients = async () => {
    const result = await fetchClients();
    setClientsList(result.data.data);
  };

  useEffect(() => {
    codeRef.current.focus();
    loadClients();
  }, []);

  const OnKeyDown = (e) => {
    if (e.key === "Enter") {
      if (openBulk) {
        addBulkProduct();
      }
      if (open) {
        closeSale();
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

  const getClientInfo = async (ClientID) => {
    const { data } = await getClientCreditInfo(ClientID);
    console.log("data info", data.data);
    setTotalCredito(parseFloat(data.data.total));
    setMontoTotal(parseFloat(data.data.total) + parseFloat(total));
  };

  const handleChangeClient = (event) => {
    setSelectedClient(event.target.value);
    getClientInfo(event.target.value);
  };
  /**alert handlers ***/
  const toggleAlert = () => {
    setOpenAlert(!openAlert);
  };

  /*******************/
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
        <Grid item md={9} xs={12}>
          <Item>
            <TableItems items={purchase} remove={deleteItem} />
          </Item>
        </Grid>
        <Grid item md={3} xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TotalCard total={total} />
            </Grid>
            <Grid item xs={12}>
              <ActionsCard
                handleOpen={handleOpen}
                handleOpenCredit={handleOpenCredit}
              />
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
        closeSale={closeSale}
      />
      <DialogCredit
        handleClose={handleCloseCredit}
        open={openCredit}
        Total={total}
        totalCredito={totalCredito}
        montoTotal={montoTotal}
        closeCredit={toggleAlert}
        clientsList={clientsList}
        selectedClient={selectedClient}
        handleChange={handleChangeClient}
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
      <DialogAlert
        handleClose={toggleAlert}
        handleOk={closeCredit}
        text={"Se va a cargar al credito de:"}
        open={openAlert}
      />
    </Box>
  );
};

export default Home;
