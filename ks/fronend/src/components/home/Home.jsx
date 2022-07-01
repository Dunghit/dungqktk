import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          paddingY: "50px",
          backgroundColor: "#F0FFF0",
          width: "100%",
        }}
      >
        <Container>
          <Typography
            sx={{
              fontSize: "2rem",
              fontFamily: "Arial",
              fontWeight: 700,
              margin: 0,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Tìm chỗ nghỉ tiếp theo
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontFamily: "Arial",
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Tìm ưu đãi khách sạn, chỗ nghỉ dạng nhà và nhiều hơn nữa...
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "10px",
              paddingTop: "20px",
            }}
          >
            <TextField
              label={"Nhập thành phố"}
              id="margin-none"
              sx={{ width: "20rem" }}
            />
            <TextField
              id="date"
              label="Nhập và trả phòng"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button variant="contained">Tìm kiếm</Button>
          </Box>
        </Container>
      </Box>
      <Container>
        <Typography
          sx={{
            fontSize: "2rem",
            fontFamily: "Arial",
            fontWeight: 600,
            letterSpacing: ".1rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Tìm kiếm theo loại phòng
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="350px"
                image="https://webbox.imgix.net/images/owvecfmxulwbfvxm/c56a0c0d-8454-431a-9b3e-f420c72e82e3.jpg"
                alt="Paella dish"
                width="100%"
              />
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontFamily: "Arial",
                  fontWeight: 600,
                  letterSpacing: ".1rem",
                  color: "white",
                  textDecoration: "none",
                  position: "absolute",
                  top: "40%",
                  left: "24%",
                }}
              >
                Phòng Gường đơn
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="350px"
                image="https://webbox.imgix.net/images/owvecfmxulwbfvxm/c56a0c0d-8454-431a-9b3e-f420c72e82e3.jpg"
                alt="Paella dish"
                width="100%"
              />
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontFamily: "Arial",
                  fontWeight: 600,
                  letterSpacing: ".1rem",
                  color: "white",
                  textDecoration: "none",
                  position: "absolute",
                  top: "40%",
                  left: "24%",
                }}
              >
                Phòng Gường đơn
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="350px"
                image="https://webbox.imgix.net/images/owvecfmxulwbfvxm/c56a0c0d-8454-431a-9b3e-f420c72e82e3.jpg"
                alt="Paella dish"
                width="100%"
              />
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontFamily: "Arial",
                  fontWeight: 600,
                  letterSpacing: ".1rem",
                  color: "white",
                  textDecoration: "none",
                  position: "absolute",
                  top: "40%",
                  left: "24%",
                }}
              >
                Phòng Gường đôi
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="350px"
                image="https://webbox.imgix.net/images/owvecfmxulwbfvxm/c56a0c0d-8454-431a-9b3e-f420c72e82e3.jpg"
                alt="Paella dish"
                width="100%"
              />
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontFamily: "Arial",
                  fontWeight: 600,
                  letterSpacing: ".1rem",
                  color: "white",
                  textDecoration: "none",
                  position: "absolute",
                  top: "40%",
                  left: "24%",
                }}
              >
                Phòng Gường đơn
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
