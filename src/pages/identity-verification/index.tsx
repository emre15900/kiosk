import React, { useState } from "react";
import { Grid, Card, Typography, Tooltip, IconButton } from "@mui/material";
import PyFileUploader from "@/components/py-file-uploader";

// ** Media Query
import useMediaQuery from "@mui/material/useMediaQuery";
import PyTransparentButton from "@/components/py-transparent-button";
import PyButton from "@/components/py-button";

import Link from "next/link";

function IdentityVerification() {
  const miniMobile = useMediaQuery("(max-width:565px)");

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
          mt: 5,
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
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid sx={{ mt: 4, maxWidth: 550 }}>
            <PyFileUploader
              nationalIdentityCardName={""}
              error={false}
              onChange={undefined}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={6}>
            <Card
              sx={{
                background: "#F4F4F4",
                padding: "30px",
                mt: 5,
                borderRadius: "30px",
                boxShadow: "none",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexDirection: miniMobile ? "column" : "row",
                }}
              >
                <Grid sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography sx={{ mb: 5, fontWeight: 300, color: "#000000" }}>
                    Example
                  </Typography>
                  <Grid sx={{ width: "120px" }}>
                    <img src="/images/selfie.png" width="100%" alt="selfie" />
                  </Grid>
                </Grid>
                <Grid
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Grid
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Grid sx={{ width: "27px", minWidth: "27px" }}>
                      <img src="/images/accept.png" alt="selfie" />
                    </Grid>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#000000", fontWeight: "400" }}
                    >
                      Take a selfie of yourself with a neutral expression
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Grid sx={{ width: "27px", minWidth: "27px" }}>
                      <img src="/images/accept.png" alt="selfie" />
                    </Grid>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#000000", fontWeight: "400" }}
                    >
                      Make sure your whole face is visible, centred and your
                      eyes are open
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Grid sx={{ width: "22px", minWidth: "22px" }}>
                      <img src="/images/reject.png" alt="selfie" />
                    </Grid>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#000000", fontWeight: "400", ml: 0.7 }}
                    >
                      Do not crop your ID or use screenshots of your ID
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Grid sx={{ width: "22px", minWidth: "22px" }}>
                      <img src="/images/reject.png" alt="selfie" />
                    </Grid>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#000000", fontWeight: "400", ml: 0.7 }}
                    >
                      Do not hide or alter parts of your face
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Card>

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "20px 10px",
              }}
            >
              <Grid sx={{ width: "25px", minWidth: "25px" }}>
                <img src="/images/unlem.png" alt="unlem" />
              </Grid>
              <Typography sx={{ color: "#444094", fontSize: "15px" }}>
                File size must me between 10KB and 5120KB in pdf, jpg, png
                format
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <Grid
              sx={{
                background: "#F4F4F4",
                padding: "30px",
                mt: 5,
                borderRadius: "30px",
                boxShadow: "none",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "50px",
                  flexDirection: miniMobile ? "column" : "row",
                }}
              >
                <Grid
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Grid
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Grid sx={{ width: "90px" }}>
                      <img
                        src="/images/identity-1.webp"
                        width="100%"
                        alt="selfie"
                      />
                    </Grid>
                    <Typography sx={{ fontWeight: 300, color: "#000000" }}>
                      Good
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Grid sx={{ width: "100px" }}>
                      <img
                        src="/images/identity-2.webp"
                        width="100%"
                        alt="selfie"
                      />
                    </Grid>
                    <Typography sx={{ fontWeight: 300, color: "#000000" }}>
                      Not cut
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Grid sx={{ width: "90px" }}>
                      <img
                        src="/images/identity-3.webp"
                        width="100%"
                        alt="selfie"
                      />
                    </Grid>
                    <Typography
                      sx={{
                        fontWeight: 300,
                        color: "#000000",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Not blurry
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Grid
                      sx={{
                        width: "105px",
                        marginLeft: "-15px",
                        marginTop: "-15px",
                      }}
                    >
                      <img
                        src="/images/identity-4.webp"
                        width="100%"
                        alt="selfie"
                      />
                    </Grid>
                    <Typography
                      sx={{
                        fontWeight: 300,
                        color: "#000000",
                        whiteSpace: "nowrap",
                        marginLeft: "15px",
                        marginTop: "-25px",
                      }}
                    >
                      Not reflective
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <Grid
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Grid sx={{ width: "27px", minWidth: "27px" }}>
                      <img src="/images/accept.png" alt="selfie" />
                    </Grid>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#000000", fontWeight: "400" }}
                    >
                      Goverment-issued
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Grid sx={{ width: "27px", minWidth: "27px" }}>
                      <img src="/images/accept.png" alt="selfie" />
                    </Grid>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#000000", fontWeight: "400" }}
                    >
                      Original full-size, unedited documents{" "}
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Grid sx={{ width: "27px", minWidth: "27px" }}>
                      <img src="/images/accept.png" alt="selfie" />
                    </Grid>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#000000", fontWeight: "400" }}
                    >
                      Place documents against a single-coloured background{" "}
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Grid sx={{ width: "27px", minWidth: "27px" }}>
                      <img src="/images/accept.png" alt="selfie" />
                    </Grid>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#000000", fontWeight: "400" }}
                    >
                      Readable, well-lit, coloured image{" "}
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Grid sx={{ width: "22px", minWidth: "22px" }}>
                      <img src="/images/reject.png" alt="selfie" />
                    </Grid>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#000000", fontWeight: "400" }}
                    >
                      No black and white images
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Grid sx={{ width: "22px", minWidth: "22px" }}>
                      <img src="/images/reject.png" alt="selfie" />
                    </Grid>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#000000", fontWeight: "400" }}
                    >
                      No edited or expire documents{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "20px 10px",
              }}
            >
              <Grid sx={{ width: "25px", minWidth: "25px" }}>
                <img src="/images/unlem.png" alt="unlem" />
              </Grid>
              <Typography sx={{ color: "#444094", fontSize: "14px" }}>
                This information is used for personal verification only, and is
                kept private and confidential by Payecards.{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            mt: 8,
            justifyContent: "center",
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

export default IdentityVerification;
