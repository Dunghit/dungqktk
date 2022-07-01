import axios from "axios";
const URL = "http://localhost:5000/api";
export const fetchOrderRoom = async (id) => {
  try {
    const response = await axios.get(
      `${URL}/order/order/list?customer_id=${id}`
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
export const fetchUpdateOrder = async (id) => {
  console.log(id);
  try {
    const response = await axios.post(`${URL}/order/order/update?id=${id}`, {
      status: "cancel",
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};
