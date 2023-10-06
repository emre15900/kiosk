import React, { useState, useEffect } from "react";
import { Grid, Card, Typography } from "@mui/material";
import Link from "next/link";
import LanguageSelector from "@/components/select-language";

function Header() {
  // ** Local Time
  const d = new Date();

  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    const time = new Date().toLocaleTimeString();
    console.log("updateTime", time);

    setCurrentTime(time);
  };

  setInterval(() => {
    updateTime();
  }, 1000);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = d.getDay();
  const month = d.getMonth();
  const year = d.getFullYear();

  const dayName = daysOfWeek[day];
  const monthName = monthsOfYear[month];
  const lastTwoDigitsOfYear = year.toString().slice(-2);

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
          {currentTime}
        </Typography>
        <Typography
          sx={{ color: "#444094", fontSize: "18px", fontWeight: 100 }}
        >
          {dayName}, {monthName} {lastTwoDigitsOfYear}
        </Typography>
      </Grid>
      <Grid>
        <LanguageSelector />
      </Grid>
    </Grid>
  );
}

export default Header;
