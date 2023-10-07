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

function SendMoneyStepTwo() {
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
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "30px",
            background: "#ffffff",
            padding: "20px 25px",
            mt: 3,
          }}
        >
          <Typography sx={{ color: "#444094" }}>
            Who are you sending money to?
          </Typography>
          <Typography sx={{ color: "#8F7DE4", fontWeight: 100 }}>
            You can select your beneficiary from below list or add new
          </Typography>
          <Grid>
            <FormControl fullWidth>
              <TextField
                fullWidth
                id="outlined-start-adornment"
                size="small"
                sx={{
                  mt: 1,
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
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Grid sx={{ width: "20px" }}>
                        <img
                          src="/images/search.png"
                          alt="search"
                          width="100%"
                        />
                      </Grid>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
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
          variant="subtitle1"
          sx={{ color: "#444094", textAlign: "end", mt: 2, cursor: "pointer" }}
        >
          Clear and add new
        </Typography>
        <Typography variant="h6" sx={{ color: "#444094", mt: 2 }}>
          Create new recipients, & continue your process
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
              label="First name"
              variant="outlined"
            />
          </FormControl>
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
              label="Last name"
              variant="outlined"
            />
          </FormControl>
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={handleChangeGender}
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
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
            </Select>
          </FormControl>
          <Grid sx={{ width: "100%" }}>
            <TelInput />
          </Grid>
        </Grid>
        <Grid
          sx={{ mt: 1, display: "flex", alignItems: "center", gap: "10px" }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Relatioship</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={option}
              label="Relatioship"
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
              <MenuItem value={10}>Relatioship 1</MenuItem>
              <MenuItem value={20}>Relatioship 2</MenuItem>
            </Select>
          </FormControl>
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
              label="Bank account number / IBAN"
              variant="outlined"
            />
          </FormControl>
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
              label="Bank name"
              variant="outlined"
            />
          </FormControl>
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
              label="SWIFT code"
              variant="outlined"
            />
          </FormControl>
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
              label="Bank address"
              variant="outlined"
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
            <PyButton title="Continues proceed" padding="10px 10rem" />
          </Grid>
        </Link>
      </Card>
    </Grid>
  );
}

export default SendMoneyStepTwo;
