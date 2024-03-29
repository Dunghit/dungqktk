import React from "react";
import { Box, Container } from "@mui/system";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { fetchRegister } from "./fetchRegister";
import { useDispatch } from "react-redux";
import { isUpadeChage } from "./../feature/customer/customerSlice";
import Button from "@mui/material/Button";
const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [cnnd, setCnnd] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const validateForm = () => {
    let error = [];
    let phone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    let whiteSpace = /^\s+|\s+$/g;
    let speacialcharater =
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g;
    if (!fullname) {
      error.push("nameError");
    }
    if (!username) {
      error.push("userNameError");
    }
    if (!username) {
      error.push("userNameError");
    }
    if (username.indexOf(" ") >= 0) {
      error.push("whiteSpace");
    }
    if (username.match(speacialcharater)) {
      error.push("specialcharacters");
    }
    if (!password) {
      error.push("passwordError");
    }
    if (!birthday) {
      error.push("birthdayError");
    }
    if (!phonenumber) {
      error.push("phoneError");
    }
    if (!cnnd) {
      error.push("cnndError");
    }
    if (!phonenumber.match(phone)) {
      error.push("wrongphonenum");
    }
    setErrors(error);
    console.log(error);
    if (error.length === 0) {
      fetchRegister(fullname, username, password, birthday, phonenumber, cnnd);
      dispatch(isUpadeChage());
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        marginY: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "70%" }}>
        <FormControl
          fullWidth
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <TextField
            error={errors.includes("nameError")}
            sx={{ helperText: "color:red" }}
            label="fullname"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            helperText={
              errors.includes("nameError") ? "please fill fullname" : null
            }
          />
          <TextField
            error={
              errors.includes("userNameError") ||
              errors.includes("whiteSpace") ||
              errors.includes("specialcharacters")
            }
            sx={{ helperText: "color:red" }}
            label="username"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            helperText={
              errors.includes("userNameError")
                ? "please fill usename"
                : null || errors.includes("whiteSpace")
                ? "your text contain whiteSpace"
                : null || errors.includes("specialcharacters")
                ? "your text cantain speacial charater"
                : null
            }
          />
          <TextField
            error={errors.includes("passwordError")}
            id="outlined-password-input"
            label="Password"
            type="password"
            InputLabelProps={{
              shrink: true,
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText={
              errors.includes("passwordError") ? "please fill password" : null
            }
          />
          <TextField
            error={errors.includes("birthdayError")}
            sx={{ helperText: "color:red" }}
            label="Birthday"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            helperText={
              errors.includes("birthdayError") ? "please fill birthday" : null
            }
          />
          <TextField
            error={
              errors.includes("phoneError") || errors.includes("wrongphonenum")
            }
            label="Phone number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            helperText={
              errors.includes("phoneError")
                ? "please fill phonenumber"
                : null || errors.includes("wrongphonenum")
                ? "numberphone is not invalid"
                : null
            }
          />
          <TextField
            error={errors.includes("cnndError")}
            label="CNND"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={cnnd}
            onChange={(e) => setCnnd(e.target.value)}
            helperText={
              errors.includes("cnndError") ? "please fill cnnd" : null
            }
          />
          <Button variant="contained" onClick={validateForm}>
            Đăng ký
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Register;
