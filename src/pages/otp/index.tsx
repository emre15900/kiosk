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

const buttons = [
  {
    id: 1,
    name: "I want to buy crypto",
    activeImg: "/images/iwantactive.png",
    disableImg: "/images/iwantdisable.png",
  },
  {
    id: 2,
    name: "I want to sell crypto",
    activeImg: "/images/iselldisable.png",
    disableImg: "/images/isellactive.png",
  },
];

const crypto = [
  {
    id: 1,
    name: "btc",
  },
  {
    id: 2,
    name: "eth",
  },
  {
    id: 3,
    name: "ltc",
  },
  {
    id: 4,
    name: "xlm",
  },
  {
    id: 5,
    name: "usdt",
  },
  {
    id: 6,
    name: "usdc",
  },
  {
    id: 7,
    name: "busd",
  },
  {
    id: 9,
    name: "xrp",
  },
  {
    id: 10,
    name: "sol",
  },
  {
    id: 11,
    name: "dash",
  },
  {
    id: 12,
    name: "dot",
  },
  {
    id: 13,
    name: "matic",
  },
  {
    id: 14,
    name: "shib",
  },
  {
    id: 15,
    name: "trx",
  },
  {
    id: 16,
    name: "uni",
  },
  {
    id: 17,
    name: "avax",
  },
  {
    id: 18,
    name: "link",
  },
  {
    id: 19,
    name: "chz",
  },
  {
    id: 20,
    name: "ada",
  },
  {
    id: 21,
    name: "dai",
  },
  {
    id: 22,
    name: "usdc",
  },
  {
    id: 23,
    name: "busd",
  },
  {
    id: 24,
    name: "xrp",
  },
  {
    id: 25,
    name: "sol",
  },
];

const pays = [
  {
    id: 1,
    name: "Credit Card",
    type: "Bank Card",
    description: "Transaction fees 3,6%",
  },
  {
    id: 2,
    name: "Bank Wire",
    type: "SEPA",
    description: "Transaction fees 8,5%",
  },
  {
    id: 3,
    name: "Bank Wire",
    type: "SWIFT",
    description: "Transaction fees 6,5%",
  },
  {
    id: 4,
    name: "Bank Wire",
    type: "ACH",
    description: "Transaction fees 8,5%",
  },
  {
    id: 5,
    name: "Bank Wire",
    type: "UK Faster Transfer ( GBP )",
    description: "Transaction fees 8,5%",
  },
];

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
              <PyButton title="Back " padding="10px 6rem" />
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
