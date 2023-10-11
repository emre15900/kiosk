import React from "react";
import { Grid, Card, Typography } from "@mui/material";
import PyFileUploader from "@/components/py-file-uploader";

function IdentityVerification() {
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
          Identity verification
        </Typography>
        <Typography
          sx={{
            color: "#444094",
            fontWeight: 300,
            fontSize: "40px",
            textAlign: "center",
            mt: 4,
          }}
        >
          Take a selfie
        </Typography>
        <Grid sx={{ mt: 4 }}>
          <PyFileUploader
            nationalIdentityCardName={""}
            error={false}
            onChange={undefined}
          />
        </Grid>
      </Card>
    </Grid>
  );
}

export default IdentityVerification;
