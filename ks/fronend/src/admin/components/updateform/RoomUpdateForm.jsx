import React, { useState } from "react";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { FormControl } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
const RoomUpdateForm = () => {
  const [description, setDescription] = useState("");
  const [originprice, setOriginprice] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [quality, setQuality] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const validateForm = () => {
    let error = [];
    if (!description) {
      error.push("errorDescription");
    }
    if (!originprice) {
      error.push("errorOriginprice");
    }
    if (!price) {
      error.push("errorPrice");
    }
    if (price <= 0) {
      error.push("price is larger than 0");
    }
    if (originprice <= 0) {
      error.push("originprice is larger than 0");
    }
    if (!image) {
      error.push("errorImage");
    }
    if (!quality) {
      error.push("errorQuanity");
    }
    if (!type) {
      error.push("errorType");
    }
    if (!status) {
      error.push("errorStatus");
    }
    setError(error);
  };
  console.log(error);
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          marginY: "2rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField
          error={error.includes("errorDescription")}
          sx={{ helperText: "color:red" }}
          label="Description"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          helperText={
            error.includes("errorDescription")
              ? "Please fill field discription"
              : null
          }
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth error={error.includes("errorStatus")}>
              <InputLabel id="demo-multiple-checkbox-label">status</InputLabel>
              <Select
                fullWidth
                label="status"
                labelId="demo-customized-select-label"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="empty">Rent</MenuItem>
                <MenuItem value="rent">Empty</MenuItem>
              </Select>
              {error.includes("errorStatus") && (
                <FormHelperText>Please fill field status</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth error={error.includes("errorQuanity")}>
              <InputLabel id="demo-multiple-checkbox-label">quality</InputLabel>
              <Select
                fullWidth
                label="quality"
                labelId="demo-customized-select-label"
                value={status}
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
              >
                <MenuItem value="Luxury<">Luxury</MenuItem>
                <MenuItem value="Normal">Normal</MenuItem>
                <MenuItem value="Middle">Middle</MenuItem>
              </Select>
              {error.includes("errorQuanity") && (
                <FormHelperText>Please fill field status</FormHelperText>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <FormControl fullWidth error={error.includes("errorType")}>
          <InputLabel id="demo-multiple-checkbox-label">Type</InputLabel>
          <Select
            fullWidth
            label="status"
            labelId="demo-customized-select-label"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="single">Single</MenuItem>
            <MenuItem value="double">Double</MenuItem>
            <MenuItem value="tripple">Tripple</MenuItem>
            <MenuItem value="quad">Quad</MenuItem>
            <MenuItem value="queen">Queen</MenuItem>
            <MenuItem value="quad">King</MenuItem>
          </Select>
          {error.includes("errorType") && (
            <FormHelperText>Please fill field type</FormHelperText>
          )}
        </FormControl>
        <TextField
          error={
            error.includes("originprice") ||
            error.includes("originprice is larger than 0")
          }
          sx={{ helperText: "color:red" }}
          label="originprice"
          type="number"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          helperText={
            error.includes("originprice") && "Please fill field price "
          }
          value={originprice}
          onChange={(e) => setOriginprice(e.target.value)}
        />
        <TextField
          sx={{ helperText: "color:red" }}
          label="price"
          helperText={
            (error.includes("errorPrice") && "Please fill field price") ||
            (error.includes("Price is larger than 0") &&
              "Price is larger than 0")
          }
          type="number"
          value={price}
          fullWidth
          onChange={(e) => setPrice(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-password-input"
          label="image"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button variant="contained" onClick={validateForm}>
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default RoomUpdateForm;
