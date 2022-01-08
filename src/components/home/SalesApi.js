import apiCall from "../../redux/api/index";

export default function SalveSale(sell) {
  try {
    apiCall("sale/new", sell, null, "POST");
  } catch (error) {
    console.log("Error al guardar");
  }
}
