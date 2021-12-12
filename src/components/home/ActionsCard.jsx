import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
const grdStyle = {
  display: "flex",
  justifyContent: "center",
};

const ActionsCard = ({ handleOpen }) => {
  return (
    <Item>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={grdStyle}>
          <Button variant="contained" size="large" onClick={handleOpen}>
            Cobrar
          </Button>
        </Grid>
        <Grid item xs={6} sx={grdStyle}>
          <Button variant="contained" size="large" onClick={handleOpen}>
            Credito
          </Button>
        </Grid>
      </Grid>
    </Item>
  );
};

export default ActionsCard;
