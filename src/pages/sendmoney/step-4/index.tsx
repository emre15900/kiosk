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

import Select, { SelectChangeEvent } from "@mui/material/Select";
import PyButton from "@/components/py-button";

import Link from "next/link";

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

  const [purpose, setPurpose] = useState("");

  const handleChangePurpose = (event: SelectChangeEvent) => {
    setPurpose(event.target.value as string);
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
                  <MenuItem key={item.id} value={item.id}>
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
                  <MenuItem key={item.id} value={item.id}>
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
                  <MenuItem key={item.id} value={item.id}>
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

        <Grid sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 3,
              }}
            >
              <Typography sx={{ color: "#8F7DE4" }}>From Sending</Typography>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  cursor: "pointer",
                }}
              >
                <Grid sx={{ width: "20px" }}>
                  <img src="/images/edit.png" width="100%" alt="edit" />
                </Grid>
                <Typography sx={{ color: "#444094" }}>Edit</Typography>
              </Grid>
            </Grid>
            <Typography sx={{ color: "#444094", fontSize: 28, mt: 1 }}>
              160 USD
            </Typography>
            <Grid
              sx={{
                border: "1px solid #8F7DE4",
                background: "#ffffff",
                padding: "20px",
                borderRadius: "30px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: 1,
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ color: "#8F7DE4", fontWeight: 200 }}>
                    Name
                  </Typography>
                  <Typography sx={{ color: "#444094", fontWeight: 200 }}>
                    Shakeel Hussain
                  </Typography>
                </Grid>
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ color: "#8F7DE4", fontWeight: 200 }}>
                    Sending amount
                  </Typography>
                  <Typography sx={{ color: "#444094", fontWeight: 200 }}>
                    150.00 USD
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ color: "#8F7DE4", fontWeight: 200 }}>
                    Phone number
                  </Typography>
                  <Typography sx={{ color: "#444094", fontWeight: 200 }}>
                    +983745657583482388
                  </Typography>
                </Grid>
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ color: "#8F7DE4", fontWeight: 200 }}>
                    Total due amount
                  </Typography>
                  <Typography sx={{ color: "#444094", fontWeight: 200 }}>
                    150.00 USD
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ color: "#8F7DE4", fontWeight: 200 }}>
                    Address
                  </Typography>
                  <Typography sx={{ color: "#444094", fontWeight: 200 }}>
                    12 Helmet Row, London, United Kingdom, <br /> EC1V 3QJ.
                  </Typography>
                </Grid>
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ color: "#8F7DE4", fontWeight: 200 }}>
                    Recipients amount gets
                  </Typography>
                  <Typography sx={{ color: "#444094", fontWeight: 200 }}>
                    2384857858.23 PKR
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 3,
              }}
            >
              <Typography sx={{ color: "#8F7DE4" }}>To receiver</Typography>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  cursor: "pointer",
                }}
              >
                <Grid sx={{ width: "20px" }}>
                  <img src="/images/edit.png" width="100%" alt="edit" />
                </Grid>
                <Typography sx={{ color: "#444094" }}>Edit</Typography>
              </Grid>
            </Grid>
            <Typography sx={{ color: "#444094", fontSize: 28, mt: 1 }}>
              23456.55 USD
            </Typography>
            <Grid
              sx={{
                border: "1px solid #8F7DE4",
                background: "#ffffff",
                padding: "20px",
                borderRadius: "30px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: 1,
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ color: "#8F7DE4", fontWeight: 200 }}>
                    Name
                  </Typography>
                  <Typography sx={{ color: "#444094", fontWeight: 200 }}>
                    Shakeel Hussain
                  </Typography>
                </Grid>
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ color: "#8F7DE4", fontWeight: 200 }}>
                    Sending amount
                  </Typography>
                  <Typography sx={{ color: "#444094", fontWeight: 200 }}>
                    150.00 USD
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ color: "#8F7DE4", fontWeight: 200 }}>
                    Phone number
                  </Typography>
                  <Typography sx={{ color: "#444094", fontWeight: 200 }}>
                    +983745657583482388
                  </Typography>
                </Grid>
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ color: "#8F7DE4", fontWeight: 200 }}>
                    Total due amount
                  </Typography>
                  <Typography sx={{ color: "#444094", fontWeight: 200 }}>
                    150.00 USD
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ color: "#8F7DE4", fontWeight: 200 }}>
                    Address
                  </Typography>
                  <Typography sx={{ color: "#444094", fontWeight: 200 }}>
                    12 Helmet Row, London, United Kingdom, <br /> EC1V 3QJ.
                  </Typography>
                </Grid>
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ color: "#8F7DE4", fontWeight: 200 }}>
                    Recipients amount gets
                  </Typography>
                  <Typography sx={{ color: "#444094", fontWeight: 200 }}>
                    2384857858.23 PKR
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{ display: "flex", alignItems: "center", gap: "10px", mt: 5 }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Choose purpose
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={purpose}
              label="Choose purpose"
              onChange={handleChangePurpose}
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
              <MenuItem value={10}>Choose purpose 1</MenuItem>
              <MenuItem value={20}>Choose purpose 2</MenuItem>
              <MenuItem value={30}>Choose purpose 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Choose purpose
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={purpose}
              label="Choose purpose"
              onChange={handleChangePurpose}
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
              <MenuItem value={10}>Choose purpose 1</MenuItem>
              <MenuItem value={20}>Choose purpose 2</MenuItem>
              <MenuItem value={30}>Choose purpose 2</MenuItem>
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
            <PyButton title="Confirm and proceed" padding="10px 12rem" />
          </Grid>
        </Link>
      </Card>
    </Grid>
  );
}

export default SendMoneyStepFour;
