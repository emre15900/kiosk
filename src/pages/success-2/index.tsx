import React from "react";
import { Grid, Typography } from "@mui/material";
import PyTransparentButton from "@/components/py-transparent-button";

function SuccessTwo() {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "80vh",
      }}
    >
      <Grid sx={{ width: "150px" }}>
        <img src="/images/success-2.png" alt="success" width="100%" />
      </Grid>
      <Typography
        variant="h4"
        sx={{ color: "#8F7DE4", mt: 4, fontWeight: 400 }}
      >
        Thank you!
      </Typography>
      <Typography
        variant="h4"
        sx={{ color: "#444094", mt: 3, fontWeight: 400 }}
      >
        Payment is successful
      </Typography>
      <Typography
        variant="h5"
        sx={{ color: "#444094", mt: 3, fontWeight: 100 }}
      >
        You can take your card
      </Typography>
      <Grid sx={{ mt: 5 }}>
        <PyTransparentButton title="Go back home" padding="10px 5rem" />
      </Grid>
    </Grid>
  );
}

export default SuccessTwo;
