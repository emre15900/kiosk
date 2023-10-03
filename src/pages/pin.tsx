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
        <Grid sx={{ mt: 3}}>Send</Grid>
        <Grid
          sx={{ display: "flex", flexDirection: "column", gap: "20px", mt: 4 }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <Grid
              sx={{
                border: "1px solid #444094",
                padding: "5px 30px",
                borderRadius: "28px",
                display: "flex",
                textAlign: "center",
                width: "60px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "28px", color: "#444094" }}>
                1
              </Typography>
            </Grid>
            <Grid
              sx={{
                border: "1px solid #444094",
                padding: "5px 30px",
                borderRadius: "28px",
                display: "flex",
                textAlign: "center",
                width: "60px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "28px", color: "#444094" }}>
                2
              </Typography>
            </Grid>
            <Grid
              sx={{
                border: "1px solid #444094",
                padding: "5px 30px",
                borderRadius: "28px",
                display: "flex",
                textAlign: "center",
                width: "60px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "28px", color: "#444094" }}>
                3
              </Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <Grid
              sx={{
                border: "1px solid #444094",
                padding: "5px 30px",
                borderRadius: "28px",
                display: "flex",
                textAlign: "center",
                width: "60px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "28px", color: "#444094" }}>
                4
              </Typography>
            </Grid>
            <Grid
              sx={{
                border: "1px solid #444094",
                padding: "5px 30px",
                borderRadius: "28px",
                display: "flex",
                textAlign: "center",
                width: "60px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "28px", color: "#444094" }}>
                5
              </Typography>
            </Grid>
            <Grid
              sx={{
                border: "1px solid #444094",
                padding: "5px 30px",
                borderRadius: "28px",
                display: "flex",
                textAlign: "center",
                width: "60px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "28px", color: "#444094" }}>
                6
              </Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <Grid
              sx={{
                border: "1px solid #444094",
                padding: "5px 30px",
                borderRadius: "28px",
                display: "flex",
                textAlign: "center",
                width: "60px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "28px", color: "#444094" }}>
                7
              </Typography>
            </Grid>
            <Grid
              sx={{
                border: "1px solid #444094",
                padding: "5px 30px",
                borderRadius: "28px",
                display: "flex",
                textAlign: "center",
                width: "60px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "28px", color: "#444094" }}>
                8
              </Typography>
            </Grid>
            <Grid
              sx={{
                border: "1px solid #444094",
                padding: "5px 30px",
                borderRadius: "28px",
                display: "flex",
                textAlign: "center",
                width: "60px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "28px", color: "#444094" }}>
                9
              </Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <Grid
              sx={{
                border: "1px solid #444094",
                padding: "14px 19px",
                borderRadius: "28px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                background: "#44319A"
              }}
            >
              <Grid sx={{ width: "25px" }}>
                <img src="/images/mic.png" alt="mic" width="100%" />
              </Grid>
            </Grid>
            <Grid
              sx={{
                border: "1px solid #444094",
                padding: "5px 30px",
                borderRadius: "28px",
                display: "flex",
                textAlign: "center",
                width: "60px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "28px", color: "#444094" }}>
                0
              </Typography>
            </Grid>
            <Grid
              sx={{
                border: "1px solid #444094",
                padding: "19px 15px",
                borderRadius: "28px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                background: "#44319A"
              }}
            >
              <Grid sx={{ width: "30px" }}>
                <img src="/images/left-arrow.png" alt="mic" width="100%" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default Pin;
