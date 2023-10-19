import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function PyDatePicker({title}: {title: string}) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Grid className="py-date-picker" sx={{ width: "100%" }}>
      <Typography
        variant="subtitle2"
        sx={{ color: "#444094", fontSize: "13px", ml: 1 }}
      >
        {title}
      </Typography>
      <DatePicker
        placeholderText="Select a date"
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
      />
    </Grid>
  );
}

export default PyDatePicker;
