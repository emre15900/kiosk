import React, { useState } from "react";
import {
  Card,
  Grid,
  Typography,
  TextField,
  FormControl,
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
    name: "I want to buy crypto",
    activeImg: "/images/iwantactive.png",
    disableImg: "/images/iwantdisable.png",
  },
  {
    id: 2,
    name: "I want to sell crypto",
    activeImg: "/images/iselldisable.png",
    disableImg: "/images/isellactive.png",
  },
];

const crypto = [
  {
    id: 1,
    name: "btc",
  },
  {
    id: 2,
    name: "eth",
  },
  {
    id: 3,
    name: "ltc",
  },
  {
    id: 4,
    name: "xlm",
  },
  {
    id: 5,
    name: "usdt",
  },
  {
    id: 6,
    name: "usdc",
  },
  {
    id: 7,
    name: "busd",
  },
  {
    id: 9,
    name: "xrp",
  },
  {
    id: 10,
    name: "sol",
  },
  {
    id: 11,
    name: "dash",
  },
  {
    id: 12,
    name: "dot",
  },
  {
    id: 13,
    name: "matic",
  },
  {
    id: 14,
    name: "shib",
  },
  {
    id: 15,
    name: "trx",
  },
  {
    id: 16,
    name: "uni",
  },
  {
    id: 17,
    name: "avax",
  },
  {
    id: 18,
    name: "link",
  },
  {
    id: 19,
    name: "chz",
  },
  {
    id: 20,
    name: "ada",
  },
  {
    id: 21,
    name: "dai",
  },
  {
    id: 22,
    name: "usdc",
  },
  {
    id: 23,
    name: "busd",
  },
  {
    id: 24,
    name: "xrp",
  },
  {
    id: 25,
    name: "sol",
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
                  background: active === button.id ? "#444094" : "#ffffff",
                  borderRadius: "40px",
                  padding: "20px 30px",
                  border: active === button.id ? "1px solid #66FF84" : "",
                  cursor: "pointer",
                  flexDirection: "column",
                }}
              >
                <Grid sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Grid sx={{ width: "30px" }}>
                    <img
                      src={
                        active === button.id
                          ? button.activeImg
                          : button.disableImg
                      }
                      alt="img"
                      width="100%"
                    />
                  </Grid>
                  <Typography
                    variant="h6"
                    sx={{
                      color: active === button.id ? "#ffffff" : "#444094",
                      mt: 1,
                      fontWeight: 100,
                    }}
                  >
                    {button.name}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>

        <Grid>
          <Typography
            sx={{
              color: "#444094",
              fontWeight: 300,
              fontSize: "40px",
              textAlign: "center",
              mt: 4,
            }}
          >
            Select your Crypto
          </Typography>
          <Grid container spacing={2} sx={{ mt: 3 }}>
            {crypto.map((coin: any, index: number) => (
              <Grid item md={1} lg={1} key={coin.id}>
                <Grid>
                  <Grid sx={{ width: "60px", cursor: "pointer" }}>
                    <img
                      src={`/images/crypto-icons/${coin.name}.svg`}
                      width="100%"
                      alt={coin.name}
                    />
                  </Grid>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      textAlign: "center",
                      color: "#444094",
                      mt: 1,
                      ml: 0.5,
                    }}
                  >
                    {coin.name.toUpperCase()}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 4,
            }}
          >
            <PyButton title="View more" padding="10px 10rem" />
          </Grid>
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
                      <img src="/images/edit.png" alt="edit" width="100%" />
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
