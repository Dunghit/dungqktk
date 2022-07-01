import axios from "axios";
import { isLogin } from "./LoginSlice";
import { isValidate } from "./LoginSlice";
export const fetchLogin = async (account, dispatch, navigate) => {
  const URL = "http://localhost:5000/api";
  try {
    const response = await axios.post(`${URL}/auth/login`, {
      username: account.username,
      password: account.password,
    });
    console.log(response.data);
    const customer_id = response.data.id;
    if (response.status === 200) {
      const customerInfor = await axios.get(`${URL}/auth/me/`, {
        headers: {
          Authorization: `Bearer ${customer_id}`,
        },
      });
      const data = customerInfor.data.customer;
      localStorage.setItem("customer", JSON.stringify(data));
      dispatch(isLogin(data));
      navigate("/");
      dispatch(isValidate(""));
    }
  } catch (error) {
    if (
      error.response.data.error === "wrong password" ||
      error.response.data.error === "Customer not found"
    ) {
      dispatch(isValidate(error.response.data.error));
    }
  }
};
