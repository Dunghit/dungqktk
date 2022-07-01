import React from "react";
import { Box, Container, fontSize } from "@mui/system";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PersonIcon from "@mui/icons-material/Person";
import ListItemText from "@mui/material/ListItemText";
import HistoryIcon from "@mui/icons-material/History";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
const Person = () => {
  return (
    <Box>
      <Container sx={{ marginY: "1rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TableContainer sx={{ border: 1, borderColor: "grey.500" }}>
              <Table sx={{ width: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Danh mục</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      align="left"
                      sx={{ display: "flex", gap: 1, alignItems: "center" }}
                    >
                      <PersonIcon />
                      <Link to="/person">
                        <ListItemText
                          primary=" Thông tin cá nhân"
                          sx={{
                            textAlign: "left",
                            cursor: "pointer",
                            color: "black",
                          }}
                        />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      align="left"
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <HistoryIcon />
                      <Link to="list">
                        <ListItemText
                          primary="Lịch sử"
                          sx={{
                            textAlign: "left",
                            cursor: "pointer",
                            color: "black",
                          }}
                        />
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={8}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Person;
