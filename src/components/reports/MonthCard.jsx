import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MonthCard = ({ monthData }) => {
  let data = {
    labels: monthData.label,
    datasets: [
      {
        label: "Ventas",
        data: monthData.data,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Mensual",
      },
    },
  };

  return (
    <Item>
      <Line options={options} data={data} />
    </Item>
  );
};

export default MonthCard;
