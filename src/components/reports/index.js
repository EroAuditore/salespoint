import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import TotalCard from "./TotalCard";
import WeekCard from "./WeekCard";
import { SalesDay, SalesWeek, SalesMonth } from "./ReportsApi";

const Reports = () => {
  const [totalDia, setTotalDia] = useState(0);
  const [weekData, setWeekData] = useState([]);

  useEffect(() => {
    const getSalesDay = async () => {
      const response = await SalesDay();
      const { data } = response.data;
      setTotalDia(data[0].total);
    };

    const getSalesWeek = async () => {
      const response = await SalesWeek();
      const { data } = response.data;
      console.log("data week", data);
    };
    const getSalesMonth = async () => {
      const response = await SalesMonth();
      const { data } = response.data;
      setTotalDia(data[0].total);
    };
    getSalesDay();
    getSalesWeek();
  });
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TotalCard total={totalDia} />
        </Grid>

        <Grid item xs={6}>
          <WeekCard data={weekData} />
        </Grid>

        <Grid item xs={6}>
          Mes
        </Grid>
      </Grid>
    </>
  );
};

export default Reports;
