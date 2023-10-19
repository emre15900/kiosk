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

function PassportDetails() {
  const [option, setOption] = useState("");

  const handleChangeOption = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
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
        Passport Details
      </Typography>

      <Card
        sx={{
          background: "#F4F4F4",
          padding: "50px",
          mt: 5,
          borderRadius: "30px",
          boxShadow: "none",
          minWidth: 1000,
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

        <Typography
          variant="h5"
          sx={{ color: "#444094", fontWeight: 100, mt: 8, textAlign: "center" }}
        >
          Create new recipients, & continue your process
        </Typography>

        <Grid sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
          <Grid
            sx={{ display: "flex", alignItems: "center", gap: "10px", mb: 1 }}
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
            <Grid sx={{ width: "100%" }}>
              <TelInput />
            </Grid>
          </Grid>
          <Grid sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                label="Passport"
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
                label="Zip code"
                variant="outlined"
              />
            </FormControl>
          </Grid>
          <Grid
            sx={{ mt: 1, display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Grid sx={{ width: "100%" }}>
              <PyDatePicker title={"Passport date of experation"} />
            </Grid>
            <Grid sx={{ width: "100%" }}>
              <PyDatePicker title={"Birth date"} />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            justifyContent: "center",
            mt: 5,
          }}
        >
          <Link href="/sendmoney/step-2">
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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

export default PassportDetails;
