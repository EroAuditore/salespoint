import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import TotalCard from "./TotalCard";
import WeekCard from "./WeekCard";
import { SalesDay } from "./ReportsApi";

const Reports = () => {
  const [totalDia, setTotalDia] = useState(0);
  const [weekData, setWeekData] = useState([]);

  useEffect(() => {
    const salesDay = SalesDay();
    console.log(salesDay);
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TotalCard total={totalDia} />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <WeekCard data={weekData} />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          Mes
        </Grid>
      </Grid>
    </>
  );
};

export default Reports;
