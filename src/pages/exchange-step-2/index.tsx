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
import SelectMoney from "@/components/select-money";
import PyOtp from "@/components/py-otp";
import PyTransparentButton from "@/components/py-transparent-button";

function ExchangeStepTwo() {
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
          Exchange money
        </Typography>

        <Typography
          sx={{
            fontWeight: 100,
            textAlign: "center",
            mt: 2,
            mb: 4,
            color: "#444094",
          }}
        >
          Exchanging USD of 10.00 equivalent to 0 <br /> Exchange rate 1 USD =
        </Typography>

        <Grid
          sx={{ background: "#ffffff", borderRadius: "30px", padding: "20px" }}
        >
          <Typography variant="h6" sx={{ color: "#000000" }}>
            Details
          </Typography>
          <Grid
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "rgba(0,0,0,0.5)" }}>
              Exchange amount
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "rgba(0,0,0,0.5)" }}>
              $10.00
            </Typography>
          </Grid>
          <Grid
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "rgba(0,0,0,0.5)" }}>
              Fee
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "rgba(0,0,0,0.5)" }}>
              $0.00
            </Typography>
          </Grid>
          <Divider flexItem sx={{ mt: 1 }} />
          <Grid
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "#000000" }}>
              Total
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#000000" }}>
              $10.00
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
              <PyTransparentButton title="Back " padding="10px 6rem" />
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
              <PyButton title="Confirm " padding="10px 5rem" />
            </Grid>
          </Link>
        </Grid>
      </Card>
    </Grid>
  );
}

export default ExchangeStepTwo;
