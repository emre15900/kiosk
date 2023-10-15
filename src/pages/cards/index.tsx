import React, { useState } from "react";
import { Card, Grid, Typography } from "@mui/material";

import PyButton from "@/components/py-button";

import Link from "next/link";
import ChooseCard from "@/components/choose-card";

const buttons = [
  {
    id: 1,
    name: "Plastic Card",
    desc: "Use the funds in your Paye-accounts for trouble-free international payments. We will mail the card to you for free.",
    img: "/images/card-1.png",
  },
  {
    id: 2,
    name: "Virtual Card",
    desc: "Shop online with your Paye virtual card. Instantly created. Purchases in the card’s currency are free.",
    img: "/images/card-2.png",
  },
  {
    id: 3,
    name: "Credit Card",
    desc: "Use the funds in your Paye-accounts for trouble-free interacnational payments. We will mail the card to you for free.",
    img: "/images/card-3.png",
  },
];

function Cards() {
  const [active, setActive] = useState(1);

  const handleClick = (id: number) => {
    setActive(id);
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
        Order your card in 4 staps
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
            <Typography variant="h4" sx={{ color: "#9FAAB2", fontWeight: 400 }}>
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
                    background: "#ffffff",
                    padding: "20px 30px",
                    border: active === button.id ? "1px solid #66FF84" : "",
                    cursor: "pointer",
                    flexDirection: "column",
                    width: "100%",
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
                      variant="h5"
                      sx={{
                        color: "#000000",
                        mt: 1,
                        fontWeight: 300,
                      }}
                    >
                      {button.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontWeight: 100,
                      }}
                    >
                      {button.desc}
                    </Typography>
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Grid sx={{ width: "300px" }}>
                        <img src={button.img} alt="img" width="100%" />
                      </Grid>
                    </Grid>
                    <Grid
                      sx={{
                        mt: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <Grid
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          Cash Withdrawals Daily
                        </Typography>
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          —
                        </Typography>
                      </Grid>
                      <Grid
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          Cash Withdrawals Monthly
                        </Typography>
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          —
                        </Typography>
                      </Grid>
                      <Grid
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          Сard monthly fee
                        </Typography>
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          €2.99
                        </Typography>
                      </Grid>
                      <Grid
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          Daily load
                        </Typography>
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          €500
                        </Typography>
                      </Grid>
                      <Grid
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          Delivery
                        </Typography>
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          —
                        </Typography>
                      </Grid>
                      <Grid
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          Top up fee
                        </Typography>
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          %2
                        </Typography>
                      </Grid>
                      <Grid
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          Monthly Offline Limits
                        </Typography>
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          €5000
                        </Typography>
                      </Grid>
                      <Grid
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          Monthly Online Limits
                        </Typography>
                        <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                          €5000
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 4,
                  }}
                >
                  <Grid
                    onClick={() => handleClick(button.id)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                    }}
                  >
                    <Grid sx={{ width: "22px" }}>
                      <img
                        src={
                          active === button.id
                            ? "/images/active-check.png"
                            : "/images/empty-check.png"
                        }
                        alt="check-mark"
                        width="100%"
                      />
                    </Grid>
                    <Typography
                      sx={{ color: "#444094", fontWeight: 100, fontSize: 18 }}
                    >
                      {button.name}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
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
            <PyButton title="Order now" padding="10px 6rem" />
          </Grid>
        </Link>
      </Card>

      <Typography
        sx={{
          color: "#444094",
          fontWeight: 300,
          fontSize: "40px",
          textAlign: "center",
          mt: 10,
          mb: 4,
        }}
      >
        You can choose your own design
      </Typography>

      <Card
        sx={{
          background: "#F9F9F9",
          padding: "50px",
          mt: 5,
          borderRadius: "50px",
          boxShadow: "none",
        }}
      >
        <Grid>
          <ChooseCard />
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
            <PyButton title="Complete" padding="10px 6rem" />
          </Grid>
        </Link>
      </Card>
    </Grid>
  );
}

export default Cards;
