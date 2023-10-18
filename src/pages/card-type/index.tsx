import React, { useState } from "react";
import { Card, Grid, Typography } from "@mui/material";

import PyButton from "@/components/py-button";

import Link from "next/link";
import PyTransparentButton from "@/components/py-transparent-button";

const buttons = [
  {
    id: 1,
    name: "Standard",
  },
  {
    id: 2,
    name: "Metal",
  },
];

const cardType = [
  {
    id: 1,
    img: "/images/mastercard.png",
    activeImg: "/images/mastercard.png",
  },
  {
    id: 2,
    img: "/images/visa-black.png",
    activeImg: "/images/visa-white.png",
  },
];

const amounts = [
  {
    id: 1,
    amount: 1000,
  },
  {
    id: 2,
    amount: 5000,
  },
  {
    id: 3,
    amount: 100000,
  },
  {
    id: 4,
    amount: 15000,
  },
];

const currency = [
  {
    id: 1,
    name: "EURO",
    img: "/images/euro.png",
  },
  {
    id: 2,
    name: "USD",
    img: "/images/usd.png",
  },
  {
    id: 3,
    name: "GBP",
    img: "/images/gbp.png",
  },
];

function CardType() {
  const [active, setActive] = useState(1);

  const handleClick = (id: number) => {
    setActive(id);
  };

  const [activeAmounts, setActiveAmounts] = useState(1);

  const handleClickAmounts = (id: number) => {
    setActiveAmounts(id);
  };

  const [activeCardType, setActiveCardType] = useState(1);

  const handleClickCardType = (id: number) => {
    setActiveCardType(id);
  };

  const [activeCurrency, setActiveCurrency] = useState(1);

  const handleClickCurrency = (id: number) => {
    setActiveCurrency(id);
  };

  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "0 20px 20px 20px",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          color: "#444094",
          fontWeight: 300,
          fontSize: "40px",
          textAlign: "center",
          mt: 4,
        }}
      >
        Card Type
      </Typography>

      <Card
        sx={{
          background: "#F4F4F4",
          padding: "50px",
          mt: 5,
          borderRadius: "30px",
          boxShadow: "none",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            mb: 8,
          }}
        >
          <Grid>
            <Typography variant="h4" sx={{ color: "#66FF84", fontWeight: 400 }}>
              step1
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "#444094", fontWeight: 300 }}
            >
              Card Select
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h4" sx={{ color: "#66FF84", fontWeight: 400 }}>
              step2
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "#444094", fontWeight: 300 }}
            >
              Card Type
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h4" sx={{ color: "#9FAAB2", fontWeight: 400 }}>
              step3
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "#444094", fontWeight: 300 }}
            >
              Passport Detail
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h4" sx={{ color: "#9FAAB2", fontWeight: 400 }}>
              step4
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "#444094", fontWeight: 300 }}
            >
              Payment Detail
            </Typography>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "100px",
          }}
        >
          <Grid>
            <Typography variant="h5" sx={{ color: "#444094", fontWeight: 100 }}>
              Card Type
            </Typography>
            <Grid
              sx={{ display: "flex", alignItems: "center", gap: "20px", mt: 4 }}
            >
              {buttons.map((button) => {
                return (
                  <Grid key={button.id}>
                    <Grid
                      onClick={() => handleClick(button.id)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "40px",
                        background:
                          active === button.id ? "#444094" : "#ffffff",
                        padding: "10px",
                        border: "1px solid #444094",
                        cursor: "pointer",
                        flexDirection: "column",
                        width: "100%",
                        minWidth: "200px",
                      }}
                    >
                      <Grid
                        sx={{
                          display: "flex",
                          gap: 2,
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: active === button.id ? "#ffffff" : "#000000",
                            fontWeight: 100,
                          }}
                        >
                          {button.name}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <Grid
              sx={{ display: "flex", alignItems: "center", gap: "20px", mt: 4 }}
            >
              {cardType.map((button) => {
                return (
                  <Grid key={button.id}>
                    <Grid
                      onClick={() => handleClickCardType(button.id)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "40px",
                        background:
                          activeCardType === button.id ? "#444094" : "#ffffff",
                        padding: "10px",
                        border: "1px solid #444094",
                        cursor: "pointer",
                        flexDirection: "column",
                        width: "100%",
                        minWidth: "200px",
                        minHeight: "50px",
                        justifyContent: "center",
                      }}
                    >
                      <Grid
                        sx={{
                          display: "flex",
                          gap: 2,
                          flexDirection: "column",
                        }}
                      >
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Grid sx={{ width: "40px" }}>
                            <img
                              src={
                                activeCardType === button.id
                                  ? button.activeImg
                                  : button.img
                              }
                              alt="img"
                              width="100%"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid>
            <Typography
              variant="h5"
              sx={{ color: "#444094", fontWeight: 100, mb: 4 }}
            >
              Card Limit
            </Typography>
            <Grid sx={{ maxWidth: "500px" }}>
              <Grid container spacing={2}>
                {amounts.map((button) => {
                  return (
                    <Grid item sm={6} md={6} key={button.id}>
                      <Grid
                        onClick={() => handleClickAmounts(button.id)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "40px",
                          background:
                            activeAmounts === button.id ? "#444094" : "#ffffff",
                          padding: "10px",
                          border: "1px solid #444094",
                          cursor: "pointer",
                          flexDirection: "column",
                          width: "100%",
                          minWidth: "200px",
                          maxWidth: "230px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color:
                              activeAmounts === button.id
                                ? "#ffffff"
                                : "#000000",
                            fontWeight: 100,
                          }}
                        >
                          {button.amount}
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          sx={{ color: "#444094", fontWeight: 100, mt: 8 }}
        >
          How you want to Pay?
        </Typography>
        <Grid
          sx={{ display: "flex", alignItems: "center", gap: "20px", mt: 4 }}
        >
          {currency.map((button) => {
            return (
              <Grid key={button.id}>
                <Grid
                  onClick={() => handleClickCurrency(button.id)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "40px",
                    background:
                      activeCurrency === button.id ? "#444094" : "#ffffff",
                    padding: "10px",
                    border: "1px solid #444094",
                    cursor: "pointer",
                    flexDirection: "column",
                    width: "100%",
                    minWidth: "300px",
                  }}
                >
                  <Grid
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <Grid sx={{ width: "30px" }}>
                      <img src={button.img} alt="img" width="100%" />
                    </Grid>
                    <Typography
                      variant="h6"
                      sx={{
                        color:
                          activeCurrency === button.id ? "#ffffff" : "#000000",
                        fontWeight: 100,
                      }}
                    >
                      {button.name}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>

        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Link href="/sendmoney/step-2">
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 8,
              }}
            >
              <PyTransparentButton title="Back" padding="10px 7rem" />
            </Grid>
          </Link>
          <Link href="/sendmoney/step-2">
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 8,
              }}
            >
              <PyButton title="Continue" padding="10px 6rem" />
            </Grid>
          </Link>
        </Grid>
      </Card>
    </Grid>
  );
}

export default CardType;
