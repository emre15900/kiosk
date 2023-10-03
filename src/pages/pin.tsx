import React from "react";
import {
  Grid,
  Typography,
  Card,
  OutlinedInput,
  IconButton,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Pin() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <Card
        sx={{
          background: "#F4F4F4",
          boxShadow: "none",
          padding: "70px 150px",
          borderRadius: "30px",
          maxWidth: "800px",
        }}
      >
        <Typography variant="h4" sx={{ color: "#444094", fontWeight: 100 }}>
          Enter your pin here
        </Typography>
        <Grid
          sx={{ display: "flex", alignItems: "center", gap: "10px", mt: 2 }}
        >
          <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              sx={{
                borderRadius: "30px",
                borderColor: "#444094",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#444094",
                },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ color: "#444094" }} />
                    ) : (
                      <Visibility sx={{ color: "#444094" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #444094",
              padding: "10px",
              borderRadius: "30px",
              width: "50px",
              cursor: "pointer",
            }}
          >
            <Grid sx={{ width: "30px" }}>
              <img src="/images/mini-card-icon.png" alt="card" width="100%" />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default Pin;
