import axios from "axios";
const URL = "http://localhost:5000/api";
export const fetchRegister = async (
  fullname,
  username,
  password,
  birthday,
  phonenumber,
  cnnd
) => {
  try {
    const response = await axios.post(`${URL}/customer/customer/create`, {
      name: fullname,
      username: username,
      role: "customer",
      birthday: birthday,
      cccd: cnnd,
      phone: phonenumber,
    });

    setPassword(response.data.id, password);
  } catch (e) {
    if (e.response.data.error === "Customer already exists") {
      alert("Tên tài khoản đã tồn tại");
    }
  }
};
export const setPassword = async (id, password) => {
  try {
    const response = await axios.post(`${URL}/auth/customer/set_password`, {
      customer_id: id,
      password: password,
    });
    alert("Đăng ký tài khoản thành công");
    return response;
  } catch (e) {
    console.log(e);
  }
};
