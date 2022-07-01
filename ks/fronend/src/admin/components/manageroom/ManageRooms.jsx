import { Box } from "@mui/system";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { fetchRooms } from "../../../components/room/fetchRooms";
import { useEffect } from "react";
import { fetchDeleteRooms } from "./fetchRooms";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import RoomUpdateForm from "../updateform/RoomUpdateForm";
const ManageRooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetchRooms().then((response) => {
      if (response) {
        setRooms(response.data);
      }
    });
  }, []);
  const handleDeleteRooms = (id) => {
    fetchDeleteRooms(id).then((response) => {
      if (response) {
        fetchRooms().then((response) => {
          if (response) {
            setRooms(response.data);
          }
        });
      }
    });
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleEdit = () => {
    handleClickOpen();
  };
  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ width: "600px" }}>
          <RoomUpdateForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <TableContainer sx={{ border: 1, borderColor: "gray" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Id Room</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Origin_price</TableCell>
              <TableCell align="center">Quanity</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room) => {
              return (
                <TableRow key={room.id}>
                  <TableCell align="center">{room.id}</TableCell>
                  <TableCell align="center">{room.name}</TableCell>
                  <TableCell align="center">{room.price}</TableCell>
                  <TableCell align="center">{room.origin_price}</TableCell>
                  <TableCell align="center">{room.quality}</TableCell>
                  <TableCell align="center">{room.type}</TableCell>
                  <TableCell align="center">{room.status}</TableCell>
                  <TableCell
                    align="center"
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleDeleteRooms(room.id)}
                  >
                    <DeleteForeverIcon />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ cursor: "pointer" }}
                    onClick={handleEdit}
                  >
                    <EditIcon />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageRooms;
