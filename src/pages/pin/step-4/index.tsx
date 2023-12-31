import PyButton from "@/components/py-button";
import {
  Grid,
  Card,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

import Link from "next/link";
import { useState } from "react";

interface ButtonProps {
  id: number;
  title: string;
  icon: string;
  link: string;
  width: number;
}

const buttons: readonly ButtonProps[] = [
  {
    id: 1,
    title: "Money Withdrawal",
    icon: "/images/pin-icon-1.png",
    link: "/pin",
    width: 120,
  },
  {
    id: 2,
    title: "Money Deposit",
    icon: "/images/pin-icon-2.png",
    link: "/pin",
    width: 120,
  },
  {
    id: 3,
    title: "Pin Change",
    icon: "/images/pin-icon-3.png",
    link: "/pin",
    width: 100,
  },
  {
    id: 4,
    title: "Balance Enquiry",
    icon: "/images/pin-icon-4.png",
    link: "/pin",
    width: 120,
  },
  {
    id: 5,
    title: "Buy/Sell Crypto",
    icon: "/images/home-screen-icon-3.png",
    link: "/pin",
    width: 150,
  },
  {
    id: 6,
    title: "Cross Border Money Transfer",
    icon: "/images/home-screen-icon-4.png",
    link: "/pin",
    width: 130,
  },
  {
    id: 7,
    title: "Get Virtual/Plastic Cards",
    icon: "/images/home-screen-icon-5.png",
    link: "/pin",
    width: 150,
  },
  {
    id: 8,
    title: "FX Exchange",
    icon: "/images/home-screen-icon-7.png",
    link: "/pin",
    width: 150,
  },
];

interface amountButton {
  id: number;
  amount: number;
}

const amounts: readonly amountButton[] = [
  {
    id: 1,
    amount: 500,
  },
  {
    id: 2,
    amount: 1000,
  },
  {
    id: 3,
    amount: 1500,
  },
  {
    id: 4,
    amount: 2000,
  },
  {
    id: 5,
    amount: 5000,
  },
  {
    id: 6,
    amount: 7000,
  },
];

export default function PinStepFour() {
  const [active, setActive] = useState(1);

  const handleAmount = (id: any) => {
    setActive(id);
  };

  return (
    <Grid sx={{ padding: "40px" }}>
      <Grid container spacing={6}>
        {buttons.map((button: any) => {
          return (
            <Grid item sm={3} md={3} key={button.id}>
              <Link href={button.link}>
                <Card
                  sx={{
                    background: "#F4F4F4",
                    borderRadius: "30px",
                    padding: "30px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "none",
                    gap: "20px",
                    minHeight: "250px",
                    minWidth: "250px",
                    maxHeight: "250px",
                    cursor: "pointer",
                    transition: "all 0.1s ease",
                    "&:hover": {
                      border: "1px solid #444094",
                    },
                  }}
                >
                  <Grid sx={{ width: button.width }}>
                    <img src={button.icon} alt="icon" width="100%" />
                  </Grid>
                  <Typography
                    dangerouslySetInnerHTML={{
                      __html: button.title.replace("\n", "<br />"),
                    }}
                    sx={{
                      textAlign: "center",
                      color: "#444094",
                      fontSize: "22px",
                      fontWeight: 100,
                    }}
                  ></Typography>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: 12,
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6}>
            <Card
              sx={{
                background: "#F4F4F4",
                borderRadius: "30px",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "none",
                gap: "20px",
                minWidth: "360px",
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#444094", fontWeight: 100 }}
              >
                Hello <strong>Hasan</strong>
              </Typography>
              <Grid sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Grid sx={{ display: "flex", gap: "10px" }}>
                  <Grid sx={{ width: "25px" }}>
                    <img
                      src="/images/us-flag.png"
                      alt="img"
                      width="100%"
                      style={{ borderRadius: "30px" }}
                    />
                  </Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      gap: "5px",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ color: "#8F7DE4" }}>
                      Total Balance
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ color: "#444094", fontWeight: 400 }}
                    >
                      $ 20, 345. 56
                    </Typography>
                  </Grid>
                </Grid>
                <Grid sx={{ display: "flex", gap: "10px" }}>
                  <Grid sx={{ width: "25px" }}>
                    <img
                      src="/images/eu-flag.png"
                      alt="img"
                      width="100%"
                      style={{ borderRadius: "30px" }}
                    />
                  </Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      gap: "5px",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ color: "#8F7DE4" }}>
                      Total Balance
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ color: "#444094", fontWeight: 400 }}
                    >
                      € 20, 345. 56
                    </Typography>
                  </Grid>
                </Grid>
                <Grid sx={{ display: "flex", gap: "10px" }}>
                  <Grid sx={{ width: "25px" }}>
                    <img
                      src="/images/russian-flag.png"
                      alt="img"
                      width="100%"
                      style={{ borderRadius: "30px" }}
                    />
                  </Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      gap: "5px",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ color: "#8F7DE4" }}>
                      Total Balance
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ color: "#444094", fontWeight: 400 }}
                    >
                      ₽ 1, 345. 56
                    </Typography>
                  </Grid>
                </Grid>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#8F7DE4", cursor: "pointerƒ" }}
                >
                  Show all
                </Typography>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="h4" sx={{ color: "#444094", fontWeight: 100 }}>
              Get Cash
            </Typography>
            <Grid>
              <FormControl sx={{ ml: "-5px" }}>
                <OutlinedInput
                  sx={{
                    m: 1,
                    width: "50ch",
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
                  endAdornment={
                    <InputAdornment position="end">
                      <Typography sx={{ color: "#444094", cursor: "pointer" }}>
                        Max
                      </Typography>
                    </InputAdornment>
                  }
                  type="number"
                  id="outlined-basic"
                  placeholder="Choose Currency"
                />
              </FormControl>
              <FormControl sx={{ ml: "-5px" }}>
                <OutlinedInput
                  sx={{
                    m: 1,
                    width: "50ch",
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
                  endAdornment={
                    <InputAdornment position="end">
                      <Typography sx={{ color: "#444094", cursor: "pointer" }}>
                        Max
                      </Typography>
                    </InputAdornment>
                  }
                  type="number"
                  id="outlined-basic"
                  placeholder="Enter amount"
                />
              </FormControl>
              <Grid sx={{ maxWidth: 450 }}>
                <Grid container spacing={2}>
                  {amounts.map((amount: any) => {
                    return (
                      <Grid key={amount.id} item xs={6} sm={4} md={4}>
                        <Grid
                          onClick={() => handleAmount(amount.id)}
                          sx={{
                            border: "1px solid #444094",
                            background:
                              active === amount.id ? "#444094" : "#ffffff",
                            borderRadius: "30px",
                            padding: "1rem 2rem",
                            textAlign: "center",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                        >
                          <Typography
                            sx={{
                              color:
                                active === amount.id ? "#ffffff" : "#CAC9C9",
                            }}
                          >
                            {amount.amount}
                          </Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid
                sx={{
                  mt: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PyButton title="Submit" padding="10px 6rem" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
