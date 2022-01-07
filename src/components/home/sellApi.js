import apiCall from "./../../redux/api/index";

export default function SaveSell(sell) {
  try {
    const result = apiCall("sell/new", sell, null, "POST");
  } catch (error) {
    console.log("Error al guardar");
  }
}
