import React, { useState } from "react";
import { Grid, Card, Typography, Tooltip, IconButton } from "@mui/material";
import PyFileUploader from "@/components/py-file-uploader";

// ** Media Query
import useMediaQuery from "@mui/material/useMediaQuery";
import PyTransparentButton from "@/components/py-transparent-button";
import PyButton from "@/components/py-button";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

import Link from "next/link";

function Transaction() {
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
          padding: "0 50px 50px 50px",
          width: "100%",
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
          Transaction
        </Typography>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "20px 10px",
            justifyContent: "center",
          }}
        >
          <Grid sx={{ width: "25px", minWidth: "25px" }}>
            <img src="/images/unlem.png" alt="unlem" />
          </Grid>
          <Typography
            sx={{ color: "#444094", fontSize: "15px", fontWeight: 100 }}
          >
            <strong>Waiting for payment</strong> <br /> Please make sure you
            paid the amount to recipient's bank account.
          </Typography>
        </Grid>

        <Grid container spacing={10}>
          <Grid item sm={6} md={6}>
            <Grid sx={{ mt: 5 }}>
              <Grid
                sx={{
                  height: "1px",
                  width: "100%",
                  background: "#444094",
                  mb: 4,
                }}
              ></Grid>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#000000", fontWeight: 300 }}
                >
                  Purchase amond
                </Typography>
                <Grid
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textAlign: "end",
                  }}
                >
                  <Grid sx={{ width: "30px" }}>
                    <img
                      src="/images/crypto-icons/eth.svg"
                      alt="eth"
                      width="100%"
                    />
                  </Grid>
                  <Typography
                    variant="h6"
                    sx={{ color: "#000000", fontWeight: 300 }}
                  >
                    0.41 ETH
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  height: "1px",
                  width: "100%",
                  background: "#444094",
                  mb: 4,
                  mt: 4,
                }}
              ></Grid>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#000000", fontWeight: 300 }}
                >
                  Amond to be paid
                </Typography>
                <Grid sx={{ textAlign: "end" }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#000000", fontWeight: 300 }}
                  >
                    € 32.41
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#CAC9C9", fontWeight: 300 }}
                  >
                    €30.73 + FEE $1.78
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  height: "1px",
                  width: "100%",
                  background: "#444094",
                  mt: 4,
                  mb: 4,
                }}
              ></Grid>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#000000", fontWeight: 300 }}
                >
                  <span style={{ color: "#444094", fontWeight: 500 }}>
                    RATE:
                  </span>{" "}
                  €0.79 per 1 DAI
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#444094", fontWeight: 300 }}
                >
                  Your money will be secured for 6h 38m 40s
                </Typography>
              </Grid>
              <Link href="/sendmoney/step-2">
                <Grid
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 4,
                  }}
                >
                  <button
                    className="hoverButtonTransparent"
                    style={{
                      padding: "10px 2rem",
                      background: "#ffffff",
                      border: "1px solid #444094",
                      color: "#444094",
                      borderRadius: "30px",
                      textAlign: "center",
                      transition: "all 0.5s ease",
                      width: "100%",
                    }}
                  >
                    <Grid
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>Check on escrow</Typography>
                      <Grid sx={{ width: "60px" }}>
                        <img
                          src="/images/check-right.png"
                          alt="right-icon"
                          width="100%"
                        />
                      </Grid>
                    </Grid>
                  </button>
                </Grid>
              </Link>
            </Grid>
          </Grid>
          <Grid item sm={6} md={6}>
            <Grid sx={{ mt: 5 }}>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "#000000", fontWeight: 300 }}
                >
                  Tracking history
                </Typography>
              </Grid>
              <Grid
                sx={{
                  height: "1px",
                  width: "100%",
                  background: "#444094",
                  mb: 4,
                  mt: 4,
                }}
              ></Grid>
              <Grid>
                <Timeline
                  sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    },
                  }}
                >
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ background: "#444094" }} />
                      <TimelineConnector sx={{ background: "#444094" }} />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                        Crypto released
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ background: "#444094" }} />
                      <TimelineConnector sx={{ background: "#444094" }} />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                        Bank transfer received
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ background: "#444094" }} />
                      <TimelineConnector sx={{ background: "#444094" }} />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                        Bank transfer sent
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ background: "#444094" }} />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography sx={{ fontWeight: 100, color: "#000000" }}>
                        Transaction created
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default Transaction;
