import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CountUp from "react-countup";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const TotalCard = ({ total }) => {
  return (
    <Item>
      <Typography variant="h3" gutterBottom color="textSecondary">
        Ventas :
      </Typography>
      <Typography variant="h2" gutterBottom color="textPrimary">
        <CountUp
          start={0}
          end={total}
          duration={2}
          separator=","
          decimals={2}
          decimal="."
          prefix="$ "
        />
      </Typography>
    </Item>
  );
};

export default TotalCard;
