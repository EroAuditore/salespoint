import apiCall from "../../redux/api/index";

function SaveSale(Sale) {
  try {
    apiCall("sale/new", JSON.parse(Sale), null, "POST");
  } catch (error) {
    console.log("Error al guardar");
  }
}

function fetchClients() {
  try {
    return apiCall("clients", null, null, "GET");
  } catch (error) {
    console.log("Error al guardar");
  }
}

function SaveCredit(Sale) {
  try {
    apiCall("credit/client/add", JSON.parse(Sale), null, "POST");
  } catch (error) {
    console.log("Error al guardar");
  }
}

function getClientCreditInfo(clientID) {
  try {
    const data = apiCall(`credit/client/${clientID}`, null, null, "GET");
    return data;
  } catch (error) {
    console.log("Error al guardar");
  }
}

function getCreditTickets(clientID) {
  try {
    const data = apiCall(`credit/tickets/${clientID}`, null, null, "GET");
    return data;
  } catch (error) {
    console.log("Error al guardar");
  }
}
export {
  SaveSale,
  fetchClients,
  SaveCredit,
  getClientCreditInfo,
  getCreditTickets,
};
