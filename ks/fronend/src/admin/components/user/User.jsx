import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { fetchCustomer } from "./fetchCustomer";
import { useState } from "react";
import { deleteCustomer } from "./fetchCustomer";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import UserUpdateForm from "../updateform/UserUpdateForm";
import { useDispatch, useSelector } from "react-redux";
import { isUpdateForm } from "../../../components/feature/customer/customerSlice";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const User = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const updated = useSelector((state) => state.customerSlice.updateChage);
  useEffect(() => {
    fetchCustomer().then((response) => {
      if (response) {
        setUsers(response.data);
      }
    });
  }, [updated]);
  const handleDeleteCustomer = (id) => {
    deleteCustomer(id).then((response) => {
      if (response) {
        fetchCustomer().then((response) => {
          if (response) {
            setUsers(response.data);
          }
        });
      }
    });
  };
  // digalog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //handle update customer
  const handleUpdateCustomer = (user) => {
    handleClickOpen();
    dispatch(isUpdateForm(user));
  };
  return (
    <Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent sx={{ width: "600px" }}>
          <UserUpdateForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <TableContainer sx={{ border: 1, borderColor: "gray" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Fullname</TableCell>
              <TableCell align="center">Birthday</TableCell>
              <TableCell align="center">CCCD</TableCell>
              <TableCell align="center">Account</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.birthday}</TableCell>
                <TableCell align="center">{user.cccd}</TableCell>
                <TableCell align="center">{user.username}</TableCell>
                <TableCell align="center">{user.role}</TableCell>
                <TableCell align="center">{user.phone}</TableCell>
                <TableCell
                  align="center"
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleDeleteCustomer(user.id)}
                >
                  <DeleteForeverIcon />
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleUpdateCustomer(user)}
                >
                  <EditIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default User;
