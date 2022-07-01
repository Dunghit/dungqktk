import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { fetchLogin } from ".././feature/login/apiLogin";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validateform = useSelector((state) => state.LoginSlice.validate);
  const handleLogin = () => {
    const account = {
      username: user,
      password: password,
    };
    console.log(account);
    fetchLogin(account, dispatch, navigate);
  };
  function validate() {
    const errors = [];
    const status = [];
    if (user.length === 0) {
      errors.push({ errorUser: "Please fill value name" });
      status.push({ userStatus: true });
    }
    if (password.length === 0) {
      errors.push({ errorPassword: "Please fill value password" });
      status.push({ passwordStatus: true });
    }

    if (user.length > 0 && password.length) {
      handleLogin();
    }
    setStatus(status);
    setErrors(errors);
    return errors;
  }

  return (
    <Box>
      <Container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginY: "5rem",
            padding: "3rem",
            width: "25rem",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <FormControl
            sx={{
              m: 1,
              width: "20rem",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: "20px",
            }}
            variant="outlined"
          >
            <TextField
              error={
                status.map((status) => status.userStatus).includes(true) ||
                validateform === "Customer not found"
                  ? true
                  : null
              }
              sx={{ helperText: "color:red" }}
              label="Tài khoản"
              fullWidth
              value={user}
              onChange={(event) => setUser(event.target.value)}
              helperText={
                validateform === "Customer not found"
                  ? "your account is not correct"
                  : errors.map((value) =>
                      value.errorUser ? value.errorUser : null
                    )
              }
            />

            <TextField
              error={
                status.map((status) => status.passwordStatus).includes(true) ||
                validateform === "wrong password"
                  ? true
                  : null
              }
              label="Mật khẩu"
              fullWidth
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              helperText={
                validateform === "wrong password"
                  ? "wrong password"
                  : errors.map((value) =>
                      value.errorPassword ? value.errorPassword : null
                    )
              }
            />
            <Button
              variant="contained"
              type="submit"
              onClick={() => validate()}
            >
              login
            </Button>
          </FormControl>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
