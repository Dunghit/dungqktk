import { Box, Container } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useParams } from "react-router";
import { useEffect } from "react";
import { fetchRoomDetail } from "./fetchRooms";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import OrderRoom from "./OrderRoom";
const RoomDetail = () => {
  const { roomId } = useParams();
  console.log(roomId, "xxxxxxxiushdhhjhh");
  const [roomDetail, setRoomDetail] = useState({});
  const loginStatus = useSelector((state) => state.LoginSlice.loginStatus);
  let navigate = useNavigate();
  useEffect(() => {
    fetchRoomDetail(roomId).then((response) => {
      if (response.status === 200) {
        setRoomDetail(response.data);
      }
    });
  }, [roomId]);

  /// open digalog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ marginY: "2rem" }}>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Nhập thông tin để thuê phòng"}
          </DialogTitle>
          <DialogContent sx={{ width: "400px" }}>
            <OrderRoom room={roomDetail} />
          </DialogContent>
        </Dialog>
      </div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={roomDetail.image}
              sx={{ width: "100%", height: "25rem" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TableContainer>
              <Table
                sx={{ width: "80%", border: 1, borderColor: "grey.500" }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h5" color="text.secondary">
                        Số phòng:{roomDetail.name}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        Giá tiền:{roomDetail.price} đồng
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        Loại phòng: {roomDetail.type}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        Description
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica Lizards are a widespread group of
                        squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      {loginStatus ? (
                        <Button variant="contained" onClick={handleClickOpen}>
                          Đặt phòng
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          onClick={() => {
                            navigate("/login");
                          }}
                        >
                          Đặt phòng
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RoomDetail;
