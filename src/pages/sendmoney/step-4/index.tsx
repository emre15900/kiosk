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

const buttons = [
  {
    id: 1,
    currency: "Debit card",
    active: "/images/active-card.png",
    disable: "/images/disable-card.png",
  },
  {
    id: 2,
    currency: "Credit card",
    active: "/images/active-card.png",
    disable: "/images/disable-card.png",
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

const secondItems = [
  {
    id: "recipients1",
    type: "USD, Brother",
    country: "To Zahid Hussain",
    amount: "Recipients Info",
  },
  {
    id: "recipients2",
    type: "USD, Brother",
    country: "To Zahid Hussain",
    amount: "Recipients Info",
  },
  {
    id: "recipients3",
    type: "USD, Brother",
    country: "To Zahid Hussain",
    amount: "Recipients Info",
  },
];

const payments = [
  {
    id: "payment1",
    type: "Visa Card",
    country: "Debit Card",
    amount: "Payment Method",
  },
  {
    id: "payment2",
    type: "Visa Card",
    country: "Credit Card",
    amount: "Payment Method",
  },
  {
    id: "payment3",
    type: "Visa Card",
    country: "Debit Card",
    amount: "Payment Method",
  },
];

function SendMoneyStepFour() {
  const [person, setPerson] = useState("person1");

  const handleChangePerson = (event: SelectChangeEvent) => {
    setPerson(event.target.value as string);
  };

  const [recipients, setRecipients] = useState("recipients1");

  const handleChangeRecipients = (event: SelectChangeEvent) => {
    setRecipients(event.target.value as string);
  };

  const [payment, setPayment] = useState("payment1");

  const handleChangePayment = (event: SelectChangeEvent) => {
    setPayment(event.target.value as string);
  };

  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Card
        sx={{
          background: "#F4F4F4",
          padding: "50px 120px",
          mt: 2,
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
          sx={{ mt: 4, display: "flex", alignItems: "center", gap: "10px" }}
        >
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={person}
              onChange={handleChangePerson}
              sx={{
                borderRadius: "40px",
                border: "none",
                background: "#ffffff",
                outline: "none",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  color: "#444094",
                },
              }}
            >
              {items.map((item: any) => {
                return (
                  <MenuItem value={item.id}>
                    <Grid
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Grid
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {person === item.id ? (
                          <Grid sx={{ width: "30px" }}>
                            <img
                              src="/images/green-check.png"
                              alt="gren-check"
                              width="100%"
                            />
                          </Grid>
                        ) : (
                          ""
                        )}
                        <Grid
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <Typography
                            sx={{ color: "#444094", fontWeight: 500 }}
                          >
                            {item.country},
                          </Typography>
                          <Typography
                            sx={{ color: "#444094", fontWeight: 300 }}
                          >
                            {item.type}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography sx={{ color: "#8F7DE4", fontWeight: 300 }}>
                        {item.amount}
                      </Typography>
                    </Grid>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid
          sx={{ mt: 2, display: "flex", alignItems: "center", gap: "10px" }}
        >
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={recipients}
              onChange={handleChangeRecipients}
              sx={{
                borderRadius: "40px",
                border: "none",
                background: "#ffffff",
                outline: "none",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  color: "#444094",
                },
              }}
            >
              {secondItems.map((item: any) => {
                return (
                  <MenuItem value={item.id}>
                    <Grid
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Grid
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {recipients === item.id ? (
                          <Grid sx={{ width: "30px" }}>
                            <img
                              src="/images/green-check.png"
                              alt="gren-check"
                              width="100%"
                            />
                          </Grid>
                        ) : (
                          ""
                        )}
                        <Grid
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <Typography
                            sx={{ color: "#444094", fontWeight: 500 }}
                          >
                            {item.country},
                          </Typography>
                          <Typography
                            sx={{ color: "#444094", fontWeight: 300 }}
                          >
                            {item.type}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography sx={{ color: "#8F7DE4", fontWeight: 300 }}>
                        {item.amount}
                      </Typography>
                    </Grid>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>

        <Grid
          sx={{ mt: 2, display: "flex", alignItems: "center", gap: "10px" }}
        >
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={payment}
              onChange={handleChangePayment}
              sx={{
                borderRadius: "40px",
                border: "none",
                background: "#ffffff",
                outline: "none",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  color: "#444094",
                },
              }}
            >
              {payments.map((item: any) => {
                return (
                  <MenuItem value={item.id}>
                    <Grid
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Grid
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        {payment === item.id ? (
                          <Grid sx={{ width: "30px" }}>
                            <img
                              src="/images/green-check.png"
                              alt="gren-check"
                              width="100%"
                            />
                          </Grid>
                        ) : (
                          ""
                        )}
                        <Grid
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <Typography
                            sx={{ color: "#444094", fontWeight: 500 }}
                          >
                            {item.country},
                          </Typography>
                          <Typography
                            sx={{ color: "#444094", fontWeight: 300 }}
                          >
                            {item.type}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography sx={{ color: "#8F7DE4", fontWeight: 300 }}>
                        {item.amount}
                      </Typography>
                    </Grid>
                  </MenuItem>
                );
              })}
            </Select>
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
            <PyButton title="Confirm and proceed" padding="10px 10rem" />
          </Grid>
        </Link>
      </Card>
    </Grid>
  );
}

export default SendMoneyStepFour;
