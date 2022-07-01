import React from "react";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { fetchRooms } from "./fetchRooms";
import { useState } from "react";
import { useNavigate } from "react-router";
const price = [1500000, 2000000, 3000000, 4000000];
const types = ["single", "couple", "luxury"];
function Room() {
  const [rooms, setRooms] = useState([]);
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    let newRooms = [];
    fetchRooms().then((response) => {
      if (response.status === 200) {
        const pageSize = 4;

        const start = pageSize * page - pageSize;
        const end = pageSize * page;
        const emptyRoom = response.data.filter(
          (room) => room.status === "empty"
        );
        const numPage = Math.ceil(emptyRoom.length / pageSize);
        setNumPage(numPage);
        newRooms = emptyRoom.slice(start, end);
        setRooms(newRooms);
      }
    });
  }, [page]);
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Container sx={{ marginY: "2rem" }}>
        <Typography
          sx={{
            fontSize: "2rem",
            fontFamily: "Arial",
            fontWeight: 600,
            letterSpacing: ".1rem",
            color: "black",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Danh sách cách phong trống
        </Typography>
      </Container>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <TableContainer>
              <Table
                sx={{ width: "80%", border: 1, borderColor: "grey.500" }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Lọc theo giá tiền</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {price.map((price, index) => (
                    <TableRow sx={{ display: "flex" }} key={index}>
                      <TableCell>
                        <Checkbox defaultChecked />
                      </TableCell>
                      <TableCell
                        align="left"
                        width="100%"
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        {price} Đồng
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Table
              sx={{
                width: "80%",
                border: 1,
                borderColor: "grey.500",
                marginTop: "1rem",
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Loại phòng</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {types.map((types, index) => (
                  <TableRow sx={{ display: "flex" }} key={index}>
                    <TableCell>
                      <Checkbox defaultChecked />
                    </TableCell>
                    <TableCell
                      align="left"
                      width="100%"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {types}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {rooms.map((room) => {
                return (
                  <Card
                    sx={{ maxWidth: 340 }}
                    key={room.name}
                    onClick={() => {
                      navigate(`/detail/${room.id}`);
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={room.image}
                        alt={room.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {room.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles,
                          with over 6,000 species, ranging across all continents
                          except Antarctica
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                );
              })}
            </Box>
            <Box
              sx={{
                marginY: "2rem",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Stack spacing={2}>
                <Pagination
                  count={numPage}
                  variant="outlined"
                  shape="rounded"
                  onChange={(event, page) => {
                    setPage(page);
                  }}
                />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Room;
