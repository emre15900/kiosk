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

const pays = [
  {
    id: 1,
    name: "Credit Card",
    type: "Bank Card",
    description: "Transaction fees 3,6%",
  },
  {
    id: 2,
    name: "Bank Wire",
    type: "SEPA",
    description: "Transaction fees 8,5%",
  },
  {
    id: 3,
    name: "Bank Wire",
    type: "SWIFT",
    description: "Transaction fees 6,5%",
  },
  {
    id: 4,
    name: "Bank Wire",
    type: "ACH",
    description: "Transaction fees 8,5%",
  },
  {
    id: 5,
    name: "Bank Wire",
    type: "UK Faster Transfer ( GBP )",
    description: "Transaction fees 8,5%",
  },
];

function BuySellCrypto() {
  const [active, setActive] = useState(1);

  const handleClick = (id: number) => {
    setActive(id);
  };

  const [activePay, setActivePay] = useState(1);

  const handleClickPay = (id: number) => {
    setActivePay(id);
  };

  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "0 10px 10px 10px",
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
                  width: "100%",
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
            How you want to Pay?
          </Typography>
          <Grid container spacing={2} justifyContent={"center"} sx={{ mt: 4 }}>
            {pays.map((button) => {
              return (
                <Grid key={button.id} item md={4} lg={4}>
                  <Grid
                    onClick={() => handleClickPay(button.id)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background:
                        activePay === button.id ? "#444094" : "#ffffff",
                      borderRadius: "20px",
                      padding: "20px",
                      border: "1px solid #444094",
                      cursor: "pointer",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <Grid
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color:
                            activePay === button.id ? "#ffffff" : "#000000",
                          mt: 1,
                          fontWeight: 100,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {button.name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color:
                            activePay === button.id ? "#ffffff" : "#444094",
                          mt: 1,
                          fontWeight: 100,
                          whiteSpace: "nowrap",
                        }}
                      >
                        -
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color:
                            activePay === button.id ? "#66FF84" : "#444094",
                          mt: 1,
                          fontWeight: 100,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {button.type}
                      </Typography>
                    </Grid>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: activePay === button.id ? "#ffffff" : "#000000",
                        mt: 1,
                        fontWeight: 100,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {button.description}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#000000",
              textAlign: "center",
              mt: 4,
              fontWeight: 100,
            }}
          >
            Credit card limit €625 / €2000 EUR
          </Typography>
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

        <Grid sx={{ mt: 5 }}>
          <Grid
            sx={{
              height: "1.5px",
              width: "100%",
              background: "#444094",
              mb: 4,
            }}
          ></Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography variant="h6" sx={{ color: "#000000", fontWeight: 500 }}>
              I want to buy
            </Typography>
            <Typography variant="h6" sx={{ color: "#000000", fontWeight: 500 }}>
              0.02 ETH
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "#000000", fontWeight: 100 }}
            >
              Order details
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "#000000", fontWeight: 100 }}
            >
              €
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "#000000", fontWeight: 100 }}
            >
              0.02 ETH @ €144.58
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "#000000", fontWeight: 100 }}
            >
              €2.33
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "#000000", fontWeight: 100 }}
            >
              Fee
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "#000000", fontWeight: 100 }}
            >
              €0.20
            </Typography>
          </Grid>
          <Grid
            sx={{
              height: "1px",
              width: "100%",
              background: "#444094",
              mt: 4,
              mb: 4,
            }}
          ></Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Typography variant="h5" sx={{ color: "#000000", fontWeight: 500 }}>
              Total Cost
            </Typography>
            <Typography variant="h5" sx={{ color: "#000000", fontWeight: 500 }}>
              €2.44
            </Typography>
          </Grid>
        </Grid>

        <Link href="/sendmoney/step-2">
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 8,
            }}
          >
            <PyButton title="Send" padding="10px 14rem" />
          </Grid>
        </Link>
      </Card>
    </Grid>
  );
}

export default BuySellCrypto;
