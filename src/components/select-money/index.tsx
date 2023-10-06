import * as React from "react";
import { useState } from "react";
import { Box, Grid, InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Typography } from "@mui/material";

export default function SelectMoney() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{
            borderRadius: "30px",
            borderColor: "#444094",
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
              color: "#444094",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#444094",
            },
          }}
        >
          <MenuItem value={"usd"}>
            <Grid sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                src="/images/us-flag.png"
                alt="usd"
                width={22}
                style={{ borderRadius: "30px" }}
              />
              <Typography>USD</Typography>
            </Grid>
          </MenuItem>
          <MenuItem value={"euro"}>
            <Grid sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                src="/images/eu-flag.png"
                alt="usd"
                width={22}
                style={{ borderRadius: "30px" }}
              />
              <Typography>EURO</Typography>
            </Grid>
          </MenuItem>
          <MenuItem value={"rubble"}>
            <Grid sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                src="/images/russian-flag.png"
                alt="usd"
                width={22}
                style={{ borderRadius: "30px" }}
              />
              <Typography>EURO</Typography>
            </Grid>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
