import apiCall from "../../redux/api/index";

export function SalesDay() {
  try {
    return apiCall("sales/day", null, null, "GET");
  } catch (error) {
    console.log("Error al traer datos");
  }
}

export function SalesWeek() {
  try {
    return apiCall("sales/week", null, null, "GET");
  } catch (error) {
    console.log("Error al traer datos");
  }
}

export function SalesMonth() {
  try {
    return apiCall("sales/month", null, null, "GET");
  } catch (error) {
    console.log("Error al traer datos");
  }
}
