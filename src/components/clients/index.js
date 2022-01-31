import React, { useState, useCallback } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
// import TableItems from "./TableItems";
import { useSelector, useDispatch } from "react-redux";
import { object, string, number } from "yup";
import AddIcon from "@mui/icons-material/Add";

import { updateProducts, createProducts } from "./../../redux/actions/products";
import Toast from "./../common/Toast";
import { Drawer, Fab } from "@mui/material";
import Box from "@mui/material/Box";

const Clients = () => {
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
                // value={searchText}
                // onChange={handleChangeSearch}
                // onKeyDown={handleKeyDown}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                fullWidth
                height="100"
                // onClick={lookUpProduct}
                sx={{ height: "100%" }}
              >
                Agregar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Clients;
