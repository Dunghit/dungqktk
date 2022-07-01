import React from "react";
import { Box, Container, fontSize } from "@mui/system";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { fetchOrderRoom } from "./fetchOrderRoom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { fetchUpdateOrder } from "./fetchOrderRoom";
const OrderList = () => {
  const loginStatus = useSelector((state) => state.LoginSlice.loginStatus);
  const [roomOrder, setRoomOrder] = useState([]);
  useEffect(() => {
    const customerId = localStorage.getItem("customer")
      ? JSON.parse(localStorage.getItem("customer")).id
      : null;
    if (loginStatus) {
      fetchOrderRoom(customerId).then((response) => {
        setRoomOrder(response.data);
      });
    }
    fetchOrderRoom();
  }, [loginStatus]);
  fetchOrderRoom();
  // cancel room
  const handleCancelRoom = (id) => {
    if (id && loginStatus) {
      fetchUpdateOrder(id);
      const customerId = localStorage.getItem("customer")
        ? JSON.parse(localStorage.getItem("customer")).id
        : null;
      if (loginStatus) {
        fetchOrderRoom(customerId).then((response) => {
          setRoomOrder(response.data);
        });
      }
      fetchOrderRoom();
    }
  };
  return (
    <Box>
      {roomOrder.map((val, index) => {
        return (
          <Box
            sx={{
              width: "100%",
              border: 0.5,
              borderColor: "gray",
              position: "relative",
              marginBottom: "1rem",
            }}
            key={index}
          >
            <Typography variant="h5" color="green">
              {val.items[0].room.name}
            </Typography>
            <Box>
              <ListItemText
                primary={`Ngày đặt:${val.items[0].start}`}
                sx={{
                  textAlign: "left",
                  cursor: "pointer",
                }}
              />
              <ListItemText
                primary={`Hạn:${val.items[0].start} to ${val.items[0].end}`}
                sx={{
                  textAlign: "left",
                  cursor: "pointer",
                  color: "red",
                }}
              />
              <ListItemText
                primary={val.total}
                sx={{
                  textAlign: "left",
                  cursor: "pointer",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "2px",
                  right: "2px",
                  height: "20px",
                }}
              >
                {(val.status === "cancel" && (
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ fontSize: "10px" }}
                  >
                    Đã hủy
                  </Button>
                )) ||
                  (val.status === "book" && (
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ fontSize: "10px" }}
                      onClick={() => handleCancelRoom(val.items[0].order_id)}
                    >
                      Hủy đặt
                    </Button>
                  )) ||
                  (val.status === "payment" && (
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{ fontSize: "10px" }}
                    >
                      Đã thanh toán
                    </Button>
                  ))}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default OrderList;
