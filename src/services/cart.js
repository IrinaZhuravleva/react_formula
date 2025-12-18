import { apiFetch } from "./apiFetch";

export const getCartPlants = () => apiFetch("GET", "/cart");

export const postPlantById = ({ id, quantity, pot_color }) =>
  apiFetch("POST", `/cart/plants/${id}`, { quantity, pot_color });

export const removePlantById = ({ id }) =>
  apiFetch("DELETE", `/cart/${id}`); 
// DELETE - /cart/:cartItemId