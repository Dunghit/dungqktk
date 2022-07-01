import axios from "axios";
import { isUpadeChage } from "../../../components/feature/customer/customerSlice";
export const fetchUpdateCustomer = async (
  fullname,
  username,
  birthday,
  phonenumber,
  cnnd,
  updateCustomer,
  dispatch
) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/customer/customer/update?id=${updateCustomer.id}`,
      {
        name: fullname,
        role: "customer",
        birthday: birthday,
        cccd: cnnd,
        phone: phonenumber,
        username: username,
      }
    );
    console.log(response);
    dispatch(isUpadeChage());
    alert("update thành công");
    return response;
  } catch (e) {
    console.log(e);
  }
};
