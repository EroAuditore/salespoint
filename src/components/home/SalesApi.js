import apiCall from "../../redux/api/index";

export default function SaveSale(Sale) {
  try {
    apiCall("sale/new", JSON.parse(Sale), null, "POST");
  } catch (error) {
    console.log("Error al guardar");
  }
}
