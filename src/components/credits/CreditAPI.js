import apiCall from "../../redux/api/index";

function CloseCredit(credit) {
  try {
    apiCall("credit/close", credit, null, "PUT");
  } catch (error) {
    console.log("Error al guardar", error);
  }
}

export { CloseCredit };
