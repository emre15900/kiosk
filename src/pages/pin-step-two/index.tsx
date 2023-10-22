import { Grid, Card, Typography } from "@mui/material";
import Link from "next/link";

interface ButtonProps {
  id: number;
  title: string;
  icon: string;
  link: string;
}

const buttons: readonly ButtonProps[] = [
  {
    id: 1,
    title: "Log-in with PayeCards \n Wallet",
    icon: "/images/wallet.png",
    link: "/pin",
  },
  {
    id: 2,
    title: "Access by biometric \n verification",
    icon: "/images/pin-screen-icon-2.png",
    link: "/pin",
  },
  {
    id: 3,
    title: "Continue Without Register \n ( Quick Process )",
    icon: "/images/pin-screen-icon-1.png",
    link: "/pin",
  },
];

export default function PinStepTwos() {
  return (
    <Grid sx={{ padding: "40px" }}>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          gap: "10px",
          mb: 7,
          mt: 2,
        }}
      >
        <Typography variant="h3" sx={{ color: "#444094", fontWeight: 100 }}>
          Wellcome to Payecards
        </Typography>
        <Typography variant="h5" sx={{ color: "#444094", fontWeight: 100 }}>
          Follow to your account process access to
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {buttons.map((button) => {
          return (
            <Grid key={button.id}>
              <Link href={button.link}>
                <Card
                  sx={{
                    background: "#F4F4F4",
                    borderRadius: "30px",
                    padding: "90px 30px 50px 30px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "none",
                    gap: "20px",
                    cursor: "pointer",
                    transition: "all 0.1s ease",
                    minWidth: "340px",
                    width: "380px",
                    maxWidth: "380px",
                    maxHeight: "500px",
                    minHeight: "500px",
                    "&:hover": {
                      border: "1px solid #444094",
                    },
                  }}
                >
                  <Typography
                    dangerouslySetInnerHTML={{
                      __html: button.title.replace("\n", "<br />"),
                    }}
                    sx={{
                      textAlign: "center",
                      color: "#444094",
                      fontSize: "22px",
                      fontWeight: 100,
                    }}
                  ></Typography>
                  <Grid sx={{ width: "120px" }}>
                    <img src={button.icon} alt="icon" width="100%" />
                  </Grid>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      width: "100%",
                      mt: 2,
                    }}
                  ></Grid>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
