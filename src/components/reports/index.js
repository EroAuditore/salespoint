import React, { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import TotalCard from "./TotalCard";
import WeekCard from "./WeekCard";
import { SalesDay, SalesWeek, SalesMonth } from "./ReportsApi";
import MonthCard from "./MonthCard";

const Reports = () => {
  const [totalDia, setTotalDia] = useState(0);
  const [weekData, setWeekData] = useState({ label: [], data: [] });
  const [monthData, setMonthData] = useState({ label: [], data: [] });

  useEffect(() => {
    const getSalesDay = async () => {
      const response = await SalesDay();
      const { data } = response.data;
      setTotalDia(data[0].total);
    };

    const getSalesWeek = async () => {
      const response = await SalesWeek();
      const { data } = response.data;
      const labels = [];
      const info = [];
      const weekday = [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo",
      ];

      data.forEach((point) => {
        const d = new Date(point.date);
        let day = weekday[d.getDay()];
        labels.push(day);
        info.push(point.total);
      });

      setWeekData({
        ...weekData,
        label: [...labels],
        data: [...info],
      });
    };
    const getSalesMonth = async () => {
      const response = await SalesMonth();
      const { data } = response.data;
      console.log(data);
      const labels = [];
      const info = [];
      data.forEach((point) => {
        labels.push(point.date);
        info.push(point.total);
      });

      setMonthData({
        ...monthData,
        label: [...labels],
        data: [...info],
      });
    };
    getSalesDay();
    getSalesWeek();
    getSalesMonth();
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TotalCard total={totalDia} />
        </Grid>

        <Grid item xs={6}>
          <WeekCard weekData={weekData} />
        </Grid>

        <Grid item xs={6}>
          <MonthCard monthData={monthData} />
        </Grid>
      </Grid>
    </>
  );
};

export default Reports;
