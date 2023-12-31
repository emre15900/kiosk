import React, { useState } from "react";
import {
  Card,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import SelectMoney from "@/components/select-money";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import PyButton from "@/components/py-button";

import Link from "next/link";

const buttons = [
  {
    id: 1,
    name: "Cash Pick Up",
    img: "/images/cash-pick-up.png",
  },
  {
    id: 2,
    name: "Bank Transfer",
    img: "/images/bank-transfer.png",
  },
];

function SendMoney() {
  const [active, setActive] = useState(1);

  const handleClick = (id: number) => {
    setActive(id);
  };

  const [option, setOption] = useState("");

  const handleChangeOption = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  };

  const [branch, setBranch] = useState("");

  const handleChangeBranch = (event: SelectChangeEvent) => {
    setBranch(event.target.value as string);
  };

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
        <Grid
          sx={{ display: "flex", alignItems: "center", gap: "20px", mt: 4 }}
        >
          {buttons.map((button) => {
            return (
              <Grid
                key={button.id}
                onClick={() => handleClick(button.id)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#ffffff",
                  borderRadius: "40px",
                  padding: "15px 20px",
                  border: active === button.id ? "1px solid #66FF84" : "",
                  cursor: "pointer",
                }}
              >
                <Grid sx={{ width: "80px" }}>
                  <img src={button.img} alt="img" width="100%" />
                </Grid>
                <Typography variant="h6" sx={{ color: "#444094", mt: 1 }}>
                  {button.name}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
        <Grid
          sx={{ mt: 4, display: "flex", alignItems: "center", gap: "10px" }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Choose payout option
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={option}
              label="Choose payout option"
              onChange={handleChangeOption}
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Choose payout branch
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={branch}
              label="Choose payout branch"
              onChange={handleChangeBranch}
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          sx={{
            background: "#444094",
            borderRadius: "30px",
            padding: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Typography sx={{ color: "#ffffff" }}>0 USD = TRY</Typography>
        </Grid>
        <Grid sx={{ mt: 4 }}>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Typography sx={{ color: "#000000", fontWeight: 200 }}>
              Payable amount:
            </Typography>
            <Typography sx={{ color: "#000000", fontWeight: 200 }}>
              500 USD
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              mt: 3,
            }}
          >
            <Typography sx={{ color: "#000000", fontWeight: 200 }}>
              Transfer fee:
            </Typography>
            <Typography sx={{ color: "#000000", fontWeight: 200 }}>
              5 USD
            </Typography>
          </Grid>
        </Grid>
        <Link href="/sendmoney/step-2">
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 4,
            }}
          >
            <PyButton title="Continues" padding="10px 5rem" />
          </Grid>
        </Link>
      </Card>
    </Grid>
  );
}

export default SendMoney;
