import React from "react";
import { Grid, Typography } from "@mui/material";
import PyTransparentButton from "@/components/py-transparent-button";

function SuccessTransfer() {
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
        <img src="/images/success.png" alt="success" width="100%" />
      </Grid>
      <Typography
        variant="h4"
        sx={{ color: "#444094", mt: 3, fontWeight: 300 }}
      >
        Transfer is successful
      </Typography>

      <Grid sx={{ mt: 5 }}>
        <PyTransparentButton title="Exchange money again" padding="10px 4rem" />
      </Grid>
    </Grid>
  );
}

export default SuccessTransfer;
