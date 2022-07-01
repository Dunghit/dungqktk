import axios from "axios";

export const fetchCustomer = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/customer/customer/list"
    );
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};
export const deleteCustomer = async (id) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/customer/customer/delete?id=${id}`
    );
    alert("xóa thành công");
    return response;
  } catch (e) {
    console.log(e);
  }
};
