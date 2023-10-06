import React from "react";
import { Card, Grid, Typography, TextField, FormControl } from "@mui/material";
import SelectMoney from "@/components/select-money";

function SendMoney() {
  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Card
        sx={{
          background: "#F4F4F4",
          padding: "50px 120px",
          mt: 5,
          borderRadius: "30px",
          boxShadow: "none",
        }}
      >
        <Typography
          sx={{
            color: "#444094",
            fontWeight: 300,
            fontSize: "40px",
            textAlign: "center",
          }}
        >
          Enter your account
        </Typography>
        <Grid
          sx={{ display: "flex", alignItems: "center", gap: "10px", mt: 4 }}
        >
          <FormControl>
            <TextField
              sx={{
                width: "35ch",
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
              id="outlined-basic"
              label="Transfer money from"
              variant="outlined"
            />
          </FormControl>
          <Grid>
            <SelectMoney />
          </Grid>
        </Grid>
        <Grid
          sx={{ display: "flex", alignItems: "center", gap: "10px", mt: 2 }}
        >
          <FormControl>
            <TextField
              sx={{
                width: "35ch",
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
              id="outlined-basic"
              label="Transfer money to"
              variant="outlined"
            />
          </FormControl>
          <Grid>
            <SelectMoney />
          </Grid>
        </Grid>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: 300,
            fontSize: "20px",
            textAlign: "center",
            mt: 4,
          }}
        >
          Choose a payment method
        </Typography>
      </Card>
    </Grid>
  );
}

export default SendMoney;
