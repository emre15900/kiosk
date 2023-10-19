import React, { useState } from "react";
import {
  Card,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputAdornment,
  Divider,
} from "@mui/material";

import TelInput from "@/components/tel-input";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import PyButton from "@/components/py-button";

import Link from "next/link";
import PyTransparentButton from "@/components/py-transparent-button";
import SelectMoney from "@/components/select-money";

function Exchange() {
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
        mb: 4,
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
          Currency converter
        </Typography>

        <Grid sx={{ mt: 4 }}>
          <FormControl fullWidth>
            <TextField
              sx={{
                mb: 2,
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
              label="Amount"
              variant="outlined"
              type="number"
            />
          </FormControl>
          <Grid>
            <SelectMoney />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
              mb: 3,
            }}
          >
            <Grid sx={{ width: "62px", cursor: "pointer" }}>
              <img src="/images/converter.png" alt="convert" width="100%" />
            </Grid>
          </Grid>
          <Grid>
            <SelectMoney />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
              mb: 3,
            }}
          >
            <Typography variant="h5" sx={{ color: "#444094", fontWeight: 300 }}>
              USD = 5 EURO
            </Typography>
          </Grid>
          <FormControl fullWidth>
            <TextField
              sx={{
                mb: 2,
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
              label="E-mail"
              variant="outlined"
            />
          </FormControl>
          <Grid>
            <TelInput />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
              mt: 2,
            }}
          >
            <FormControl fullWidth>
              <TextField
                sx={{
                  mb: 2,
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
                label="Debit"
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                sx={{
                  mb: 2,
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
                label="Rate"
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                sx={{
                  mb: 2,
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
                label="Credit"
                variant="outlined"
              />
            </FormControl>
          </Grid>
          <Grid>
            <Typography sx={{ color: "#000000", fontWeight: 300 }}>
              Today, 27/9/2022 - 10:40:30
            </Typography>
          </Grid>
        </Grid>

        <Grid
          sx={{ display: "flex", alignItems: "center", gap: "20px", mt: 4 }}
        >
          <Link href="/sendmoney/step-2">
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PyButton title="Exchange" padding="10px 17rem" />
            </Grid>
          </Link>
        </Grid>
      </Card>
    </Grid>
  );
}

export default Exchange;
