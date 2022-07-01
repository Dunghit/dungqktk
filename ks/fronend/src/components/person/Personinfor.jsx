import React from "react";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useState } from "react";
const Personinfor = () => {
  const personInfor = useSelector((state) => state.LoginSlice.userInfor);
  return (
    <Box>
      <Box>
        <ListItemText
          primary={`Họ và tên:${
            personInfor.username ? personInfor.username : ""
          }`}
          sx={{
            textAlign: "left",
            cursor: "pointer",
          }}
        />
        <ListItemText
          primary={`Số điện thoại:${
            personInfor.phone ? personInfor.phone : ""
          }`}
          sx={{
            textAlign: "left",
            cursor: "pointer",
          }}
        />
        <ListItemText
          primary={`Ngày sinh:${
            personInfor.birthday ? personInfor.birthday : ""
          }`}
          sx={{
            textAlign: "left",
            cursor: "pointer",
          }}
        />
        <ListItemText
          primary={`Số chứng minh nhân dân:${
            personInfor.cccd ? personInfor.cccd : ""
          }`}
          sx={{
            textAlign: "left",
            cursor: "pointer",
          }}
        />
      </Box>
    </Box>
  );
};

export default Personinfor;
