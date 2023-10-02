import React from "react";
import { Grid, Card, Typography } from "@mui/material";
import Link from "next/link";
import LanguageSelector from "@/components/select-language";

function Header() {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
        padding: "20px 40px 10px 40px",
      }}
    >
      <Grid sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <Link href="#">
          <Grid
            sx={{
              width: "20px",
              height: "20px",
              background: "#fff",
              border: "1px solid #000",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          ></Grid>
        </Link>
        <Link href="#">
          <Grid
            sx={{
              width: "20px",
              height: "20px",
              background: "#000",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          ></Grid>
        </Link>
      </Grid>
      <Grid
        sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
      >
        <Typography
          sx={{ color: "#444094", fontSize: "40px", fontWeight: 100 }}
        >
          13:30
        </Typography>
        <Typography
          sx={{ color: "#444094", fontSize: "18px", fontWeight: 100 }}
        >
          Wednesday, December 21
        </Typography>
      </Grid>
      <Grid>
        <LanguageSelector />
      </Grid>
    </Grid>
  );
}

export default Header;
