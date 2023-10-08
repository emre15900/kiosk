import React, { useState } from "react";
import {
  Card,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Input,
  InputAdornment,
} from "@mui/material";

import TelInput from "@/components/tel-input";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import PyButton from "@/components/py-button";

import Link from "next/link";
import SelectMoney from "@/components/select-money";

const buttons = [
  {
    id: 1,
    currency: "USD",
    name: "Zahid Hussain",
    location: "USA Florida",
    img: "/images/us-flag.png",
  },
  {
    id: 2,
    currency: "USD",
    name: "Zahid Hussain",
    location: "USA Florida",
    img: "/images/us-flag.png",
  },
  {
    id: 3,
    currency: "USD",
    name: "Zahid Hussain",
    location: "USA Florida",
    img: "/images/us-flag.png",
  },
  {
    id: 4,
    currency: "USD",
    name: "Zahid Hussain",
    location: "USA Florida",
    img: "/images/us-flag.png",
  },
];

const items = [
  {
    id: "person1",
    type: "Bank Transfer",
    country: "Pakistan",
    amount: "500 USD/1000 EURO",
  },
  {
    id: "person2",
    type: "Crypto Transfer",
    country: "England",
    amount: "500 USD/1000 EURO",
  },
  {
    id: "person3",
    type: "Card Deposit",
    country: "Canada",
    amount: "500 USD/1000 EURO",
  },
];

function BuySellCrypto() {
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

  const [person, setPerson] = useState("person1");

  const handleChangePerson = (event: SelectChangeEvent) => {
    setPerson(event.target.value as string);
  };

  const [gender, setGender] = useState("");

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
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
          Buy/Sell Crypto
        </Typography>

        <Grid
          sx={{ display: "flex", alignItems: "center", gap: "20px", mt: 4 }}
        >
          {buttons.map((button) => {
            return (
              <Grid
                onClick={() => handleClick(button.id)}
                key={button.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background: "#ffffff",
                  borderRadius: "40px",
                  padding: "15px 20px",
                  border: active === button.id ? "1px solid #66FF84" : "",
                  cursor: "pointer",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h6" sx={{ color: "#444094", mt: 1 }}>
                  {button.currency}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#9FAAB2", fontWeight: 100 }}
                >
                  {button.name}
                </Typography>
                <Grid sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Grid sx={{ width: "20px" }}>
                    <img src={button.img} alt="img" width="100%" />
                  </Grid>
                  <Typography variant="subtitle1" sx={{ color: "#9FAAB2" }}>
                    {button.location}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>

        <Typography
          sx={{
            color: "#444094",
            fontWeight: 300,
            fontSize: "40px",
            textAlign: "center",
            mt: 4,
          }}
        >
          Amount & Currency
        </Typography>
        <Grid
          sx={{ display: "flex", alignItems: "center", gap: "10px", mt: 4 }}
        >
          <FormControl fullWidth>
            <TextField
              sx={{
                pb: 1,
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
              label="Enter amount and select currency"
              variant="outlined"
            />
          </FormControl>
          <Grid sx={{ width: "100%", pb: 1 }}>
            <SelectMoney />
          </Grid>
        </Grid>

        <Grid
          sx={{ mt: 1, display: "flex", alignItems: "center", gap: "10px" }}
        >
          <FormControl fullWidth>
            <TextField
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
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </FormControl>
        </Grid>

        <Grid
          sx={{ display: "flex", alignItems: "center", gap: "10px", mt: 2 }}
        >
          <Grid sx={{ width: "100%" }}>
            <TelInput />
          </Grid>
        </Grid>

        <Grid
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FormControl fullWidth>
            <TextField
              sx={{
                borderRadius: "30px",
                borderColor: "#444094",
                // background: "#444094",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  color: "#ffffff",
                },
                "& .MuiOutlinedInput": {
                    borderRadius: "30px",
                    color: "#ffffff",
                  },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#444094",
                },
              }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Grid sx={{ width: "20px" }}>
                      <img
                        src="/images/edit.png"
                        alt="edit"
                        width="100%"
                      />
                    </Grid>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
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
            <PyButton title="Send" padding="10px 10rem" />
          </Grid>
        </Link>
      </Card>
    </Grid>
  );
}

export default BuySellCrypto;
