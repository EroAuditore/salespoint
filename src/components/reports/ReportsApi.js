import apiCall from "../../redux/api/index";

export function SalesDay() {
  try {
    apiCall("sales/day", null, null, "GET");
  } catch (error) {
    console.log("Error al traer datos");
  }
}

export function SalesWeek() {
  try {
    apiCall("sales/week", null, null, "GET");
  } catch (error) {
    console.log("Error al traer datos");
  }
}

export function SalesMonth() {
  try {
    apiCall("sales/month", null, null, "GET");
  } catch (error) {
    console.log("Error al traer datos");
  }
}
