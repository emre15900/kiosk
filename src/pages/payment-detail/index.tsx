import React, { useState } from "react";
import {
  Card,
  Grid,
  Typography,
  FormControl,
  TextField,
  InputLabel,
  MenuItem,
} from "@mui/material";

import Select, { SelectChangeEvent } from "@mui/material/Select";

import TelInput from "@/components/tel-input";

import PyButton from "@/components/py-button";

import Link from "next/link";
import PyTransparentButton from "@/components/py-transparent-button";
import PyDatePicker from "@/components/py-date-picker";

const currency = [
  {
    id: 1,
    name: "Card payment",
  },
  {
    id: 2,
    name: "Crypto",
  },
  {
    id: 3,
    name: "Bank Wire Payment Sepa",
  },
  {
    id: 4,
    name: "Bank Wire Payment Swift",
  },
];

function PaymentDetail() {
  const [option, setOption] = useState("");

  const handleChangeOption = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  };

  const [gender, setGender] = useState("");

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
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
        Payment Details
      </Typography>

      <Card
        sx={{
          background: "#F4F4F4",
          padding: "50px",
          mt: 5,
          borderRadius: "30px",
          boxShadow: "none",
          minWidth: 1000,
          maxWidth: 1500,
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
            <Typography variant="h4" sx={{ color: "#66FF84", fontWeight: 400 }}>
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
            <Typography variant="h4" sx={{ color: "#66FF84", fontWeight: 400 }}>
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

        <Grid container spacing={6}>
          <Grid item sm={6} md={6}>
            <Grid>
              <Grid>
                <Typography
                  sx={{ color: "#444094", fontWeight: 100, fontSize: 18 }}
                >
                  Choose Card Type:
                </Typography>
                <Typography
                  sx={{ color: "#444094", fontWeight: 100, fontSize: 18 }}
                >
                  VISA - Virtual Card
                </Typography>
              </Grid>
              <Grid
                sx={{ display: "flex", alignItems: "flex-end", gap: 2, mt: 3 }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "#444094", fontWeight: 100, mb: "-5px" }}
                >
                  5€
                </Typography>
                <Typography
                  sx={{ color: "#9FAAB2", fontWeight: 100, fontSize: 16 }}
                >
                  One time fee
                </Typography>
              </Grid>
              <Grid>
                <Grid
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 1,
                    mt: 3,
                  }}
                >
                  <Typography
                    sx={{ color: "#444094", fontWeight: 100, fontSize: 18 }}
                  >
                    Shipment to:
                  </Typography>
                  <Typography
                    sx={{ color: "#00B047", fontWeight: 100, fontSize: 18 }}
                  >
                    Online
                  </Typography>
                </Grid>
                <Typography
                  sx={{ color: "#444094", fontWeight: 100, fontSize: 18 }}
                >
                  Pay to Card Fee:
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6} md={6}>
            <Grid sx={{ width: "100%" }}>
              <img src="/images/payment-img.png" alt="payment" width="100%" />
            </Grid>
          </Grid>
          <Grid item sm={12} md={12}>
            <Grid>
              <Typography
                variant="h4"
                sx={{ color: "#444094", fontWeight: 100 }}
              >
                Card Type
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  mt: 4,
                }}
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
                            activeCurrency === button.id
                              ? "#444094"
                              : "#ffffff",
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
                          <Typography
                            variant="h6"
                            sx={{
                              color:
                                activeCurrency === button.id
                                  ? "#ffffff"
                                  : "#000000",
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
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default PaymentDetail;
