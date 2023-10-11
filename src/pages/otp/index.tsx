import React, { useState } from "react";
import {
  Card,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputAdornment,
} from "@mui/material";

import TelInput from "@/components/tel-input";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import PyButton from "@/components/py-button";

import Link from "next/link";
import SelectMoney from "@/components/select-money";
import PyOtp from "@/components/py-otp";
import PyTransparentButton from "@/components/py-transparent-button";

function Otp() {
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
          SMS & Email code
        </Typography>

        <Typography sx={{ fontWeight: 100, textAlign: "center", mt: 2, mb: 4 }}>
          We’ve sent a verification code via SMS and Email <br /> to{" "}
          <span style={{ color: "#444094", fontWeight: 400 }}>
            +94 88 465 2334
          </span>{" "}
          and{" "}
          <span style={{ color: "#444094", fontWeight: 400 }}>
            hasan**45@gmail.com
          </span>{" "}
        </Typography>
        <Grid sx={{ mt: 6 }}>
          <Typography
            sx={{ color: "#444094", fontWeight: 300, textAlign: "center" }}
          >
            SMS verification code
          </Typography>
          <Grid sx={{ mt: 2, mb: 2 }}>
            <PyOtp />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "space-between",
              m: 1,
            }}
          >
            <Typography
              sx={{
                color: "rgba(202, 201, 201, 1)",
                cursor: "pointer",
                fontWeight: 300,
              }}
            >
              Didn’t recive?
            </Typography>
            <Typography
              sx={{ color: "#444094", cursor: "pointer", fontWeight: 300 }}
            >
              Resend code
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{ mt: 7 }}>
          <Typography
            sx={{ color: "#444094", fontWeight: 300, textAlign: "center" }}
          >
            E-mail verification code
          </Typography>
          <Grid sx={{ mt: 2, mb: 2 }}>
            <PyOtp />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "space-between",
              m: 1,
            }}
          >
            <Typography
              sx={{
                color: "rgba(202, 201, 201, 1)",
                cursor: "pointer",
                fontWeight: 300,
              }}
            >
              Didn’t recive?
            </Typography>
            <Typography
              sx={{ color: "#444094", cursor: "pointer", fontWeight: 300 }}
            >
              Resend code
            </Typography>
          </Grid>
        </Grid>
        <Grid
          sx={{ display: "flex", alignItems: "center", gap: "20px", mt: 8 }}
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
              <PyButton title="Continue " padding="10px 5rem" />
            </Grid>
          </Link>
        </Grid>
      </Card>
    </Grid>
  );
}

export default Otp;
