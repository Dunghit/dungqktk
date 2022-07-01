import React from "react";
import { Box, Container } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";
import { fetchOrderRoom } from "./fetchRooms";
const OrderRoom = (props) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const handleDate = () => {
    let today = new Date();
    let currentdate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    console.log(currentdate);
    console.log(startDate);
    let start = new Date(startDate);
    let end = new Date(endDate);
    let now = new Date(currentdate);
    if (end < start) {
      setError2(true);
    } else {
      setError2(false);
    }
    if (start < now) {
      setError(true);
    } else {
      setError(false);
    }
  };

  useEffect(() => {
    handleDate();
  }, [startDate, endDate]);
  // xử lý order phòng
  const handleOrderRoom = () => {
    const roomId = props.room.id;
    const customerId = localStorage.getItem("customer")
      ? JSON.parse(localStorage.getItem("customer")).id
      : null;
    console.log(roomId);
    if (!error && !error2 && startDate && endDate) {
      fetchOrderRoom(roomId, customerId, startDate, endDate);
    }
  };
  return (
    <Box>
      <Container
        sx={{ display: "flex", justifyContent: "center", marginY: "1rem" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
          <TextField
            error={error}
            id="date"
            label="Ngày bắt đầu"
            type="date"
            helperText={error ? "Ngày không hợp lệ" : ""}
            InputLabelProps={{ shrink: true, required: true }}
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
          <TextField
            error={error2}
            id="date"
            InputLabelProps={{ shrink: true, required: true }}
            label="Này kết thúc"
            type="date"
            helperText={error2 ? "Ngày không hợp lệ" : ""}
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
          <Button variant="outlined" onClick={handleOrderRoom}>
            Xác nhận
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OrderRoom;
