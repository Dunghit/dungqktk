import React from "react";
import { Box } from "@mui/system";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
