import React from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        bgcolor: "rgb(25,118,210)",
        overflow: "hidden",
        marginTop: "2rem",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30%",
        }}
      >
        <Button sx={{ color: "white", outline: "1px solid white" }}>
          Đăng ký chỗ nghỉ của quý khách
        </Button>
      </Container>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ListItemText
              primary="Các quốc gia"
              sx={{
                cursor: "pointer",
                color: "white",
              }}
            />
            <ListItemText
              primary="Khu vực"
              sx={{
                cursor: "pointer",
                color: "white",
              }}
            />
            <ListItemText
              primary="Thành phố"
              sx={{
                cursor: "pointer",
                color: "white",
              }}
            />
            <ListItemText
              primary="Quận"
              sx={{
                cursor: "pointer",
                color: "white",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <ListItemText
              primary="Nhà"
              sx={{
                cursor: "pointer",
                color: "white",
              }}
            />
            <ListItemText
              primary="Căn hộ"
              sx={{
                cursor: "pointer",
                color: "white",
              }}
            />
            <ListItemText
              primary="Resort"
              sx={{
                cursor: "pointer",
                color: "white",
              }}
            />
            <ListItemText
              primary="Biệt thự"
              sx={{
                cursor: "pointer",
                color: "white",
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <ListItemText
              primary="Những chỗ nghỉ độc đáo"
              sx={{
                cursor: "pointer",
                color: "white",
              }}
            />
            <ListItemText
              primary="Tất cả các điểm đến"
              sx={{
                cursor: "pointer",
                color: "white",
              }}
            />
            <ListItemText
              primary="Khám phá"
              sx={{
                cursor: "pointer",
                color: "white",
              }}
            />
            <ListItemText
              primary="Đánh giá của khách"
              sx={{
                cursor: "pointer",
                color: "white",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
