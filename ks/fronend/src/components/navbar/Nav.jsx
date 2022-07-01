import * as React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import LoginIcon from "@mui/icons-material/Login";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { useDispatch, useSelector } from "react-redux";
import { isLogout } from "../feature/login/LoginSlice";
import { useNavigate } from "react-router";
export default function Navbar() {
  const userName = useSelector((state) => state.LoginSlice.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("are you sure")) {
      //eslint-disable-line
      dispatch(isLogout());
      localStorage.removeItem("customer");
      navigate("/login");
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ height: "8rem", paddingX: "40px", backgroundColor: "003580" }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontSize: "2rem",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Booking.com
          </Typography>
          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {userName ? (
              <ListItemText
                primary={`hello ${userName}`}
                sx={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={handleLogout}
              />
            ) : (
              <>
                <Link to="register">
                  <ListItemText
                    primary="Register"
                    sx={{
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  />{" "}
                </Link>
                <AppRegistrationIcon />
                <Link to="login">
                  <ListItemText
                    primary="Login"
                    sx={{
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </>
            )}

            <LoginIcon />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "10rem",
            width: "70%",
          }}
        >
          <Link to="">
            <ListItemText
              primary="Trang chủ"
              sx={{
                textAlign: "center",
                cursor: "pointer",
              }}
            />
          </Link>
          <Link to="room">
            <ListItemText
              primary="Khách sạn"
              sx={{ textAlign: "center", cursor: "pointer" }}
            />
          </Link>
          <Link to="person">
            <ListItemText
              primary="Cá nhân"
              sx={{ textAlign: "center", cursor: "pointer" }}
            />
          </Link>
          <Link to="news">
            <ListItemText
              primary="Tin Tức"
              sx={{ textAlign: "center", cursor: "pointer" }}
            />
          </Link>
          <Link to="contact">
            <ListItemText
              primary="Liên hệ"
              sx={{ textAlign: "center", cursor: "pointer" }}
            />
          </Link>
        </Box>
      </AppBar>
    </Box>
  );
}
